/**
 * remigrate-customer.mjs
 * customer_notices 전체 삭제 후 정확한 제목+본문으로 재마이그레이션
 * + press 본문 재추출
 */

import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue, Timestamp } from 'firebase-admin/firestore';

const privateKey = `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDVeDgi2MyyYp7q
7vZJwaDUNhWgdlr3fQByBHPZ0v2uXHZ38aqeCbaB0LGSz/8lRttzcJ8JSKi5Sq1F
1q7NgatvsN9cJMgU3spPSrjijtHVzUJs6nWT0ptKh+iclRmsTJXOrt0c38DAXlZV
kv27ZUePR1SYm6KBmmwO46oI31IIkM+uC8QC7t+5NDuwhg1yFpFcIlNrvLkDn9ow
q+GNAlhVKCg+CP2oU2oQjdtykz2EBOFn6vhnIJjLpWCzUdDyfaX3f1vvopFIzRMF
QB3Du+TS0CZDvKWrqAABpYOxuUCT7VWZtpxiLs1E5KkhB9TIScnpN2GuGLMn5pVM
NATrWIFbAgMBAAECggEAEJ68DCaCBW99PQBe544uRedyFpywZ21xj+790BtHygAD
70G/DW/nKENF2A7eqBnUsy+1CiWAkXCZfgMBeBmc7eTA9y0b8NgJu1OvgmApQTKq
dc1pWxl+IrbjKvHG3m3WChH+QCXBnZiasy3vGFyBzkt48CrJ47pQqHYcQnWUrvrm
6YyFfzL6fXYnR/PnzzhEsHPngeU/Bc4JXleDvq9mCXV+IYIljaD6t9cbc7Zev0ex
5KdgG+JiNUde+sz+OV3SwG9Ce0hUCCkUTPPHIiBmG0nZDfy5VJDk9YGuMFyZosPr
GzkL90eGkLpi6rLFZfAiOjjbykqVxsB45ACoxsjySQKBgQDzvRKgSovMc8vWlzoj
cdbZ3CrlUQ7r5qcGZ8w/pvsWlOfvbrro5Y+4L5gVo8ICArC5Yp7vZwWbYk0HTP2p
7a1fB585uJDjpIXY/KcJJaVILr7dLABJx073dtb5xBAp5f0AITygfThtZAC2RdMK
cFqmCk87ff1t3pplSV257nwYaQKBgQDgNVXN0MvzA4zuw5gi8HdPtYUXXiWW+b+l
7xwvX0Ky639IcCp7OOQ9HRluEScnNArfR5XMlLa3sKjvziKIFSRby6BFAcV6JCjm
ZWlJtCmDy+5ZVNsSs8usiF3RmKFjLDFP+EFuZPmxkexFFUUxDyI7QgQrWRpWzenY
IxHbiNpzIwKBgQDJj227yGnbZVcH2n9lmFqIRx3iDSo9wrwU+/lYGgpCHlm/Et7W
giBbvGAUZRum9fqXFAtDBvsICD6S7wRGZhqdH3x5CzwmRIO7cRPg6JTKIH4OALks
SfnvgwM8APss6thSJyovvd3P+IbuNMfVNhyAer4TAJl3JkKfyBAOFj3hIQKBgC6C
geEnDhfERckF5BpjXay4T/qP+iY+esYWOveMwE5TUd0Z/4X+QEJ5NdxCTKfyQMse
k3GT6+9hAzpzvXATSq6MKBwIiQmUVLOul8/FQtNnS3NWifdwOrD4vNWM3vWupjAb
pJ8c7TsrtSKDjg3mQMigIjNH0ZHuNzMx2zN6SS6XAoGBAMGRLNymUZ8SxlJ8meg2
HsWn1JZr8AWrt+WAT/UO+hubJEI+8rYDa37QfNyIkjlr2rBG35vXy3/L7KJzFK37
YSBFpjo2onTmDOcoQr477z6t2j1ko2Y/weOfqCjib/fP2/Rmg7Di2HUre/W8zjn2
UnM7pSyRlqkkvJGwL6uR1kmt
-----END PRIVATE KEY-----`;

initializeApp({
  credential: cert({
    projectId: 'neolab-homepage',
    clientEmail: 'firebase-adminsdk-fbsvc@neolab-homepage.iam.gserviceaccount.com',
    privateKey,
  }),
});
const db = getFirestore();

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchHtml(url) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      Accept: 'text/html,application/xhtml+xml',
      'Accept-Language': 'ko-KR,ko;q=0.9',
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.text();
}

function decodeEntities(t) {
  return (t || '')
    .replace(/&#8217;/g, "'").replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"').replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, '–').replace(/&#8212;/g, '—')
    .replace(/&#8230;/g, '…').replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#\d+;/g, '');
}

function stripTags(html) {
  return decodeEntities(
    (html || '')
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<\/(?:p|div|li|tr)>/gi, '\n')
      .replace(/<[^>]+>/g, '')
  ).replace(/\r\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();
}

// ── MangBoard 상세 페이지 완전 파싱 ───────────────────────────────────────
function parseMangboardDetail(html) {
  // 제목: mb_XXX_tr_title 행의 첫 번째 <span>
  let title = '';
  const trTitleMatch = html.match(/id="mb_[^"]+_tr_title"[^>]*>[\s\S]*?<td[^>]*>([\s\S]*?)<\/td>/i);
  if (trTitleMatch) {
    const spans = [...trTitleMatch[1].matchAll(/<span[^>]*>([\s\S]*?)<\/span>/gi)];
    if (spans[0]) title = decodeEntities(stripTags(spans[0][1])).trim();
  }

  // 날짜: 같은 행의 두 번째 <span>
  let dateStr = '';
  if (trTitleMatch) {
    const spans = [...trTitleMatch[1].matchAll(/<span[^>]*>([\s\S]*?)<\/span>/gi)];
    if (spans[1]) {
      dateStr = stripTags(spans[1][1]).trim();
    }
  }
  if (!dateStr) {
    const dm = html.match(/(\d{4}-\d{2}-\d{2})/);
    if (dm) dateStr = dm[1];
  }

  // 작성자: btn-user-info > span
  let author = 'NeoLAB';
  const authorMatch = html.match(/class="btn-user-info"[^>]*>[\s\S]*?<span[^>]*>([\s\S]*?)<\/span>/i);
  if (authorMatch) {
    const a = stripTags(authorMatch[1]).trim();
    if (a) author = a;
  }

  // 본문: <td class="content-box...">
  let content = '';
  const contentMatch = html.match(/class="content-box[^"]*"[^>]*>([\s\S]*?)<\/td>/i);
  if (contentMatch) {
    content = stripTags(contentMatch[1]);
  }

  return { title, dateStr, author, content };
}

// ── MangBoard 목록에서 VID + isPinned 수집 ────────────────────────────────
async function getMangboardList(baseUrl) {
  const posts = [];
  let page = 1;
  while (true) {
    const html = await fetchHtml(`${baseUrl}?mode=list&board_page=${page}`);
    const found = [];

    // 각 <tr> 행 파싱
    for (const rowMatch of html.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)) {
      const row = rowMatch[1];
      const vidMatch = row.match(/[?&]vid=(\d+)/);
      if (!vidMatch) continue;
      const vid = parseInt(vidMatch[1]);
      if (posts.find(p => p.vid === vid) || found.find(p => p.vid === vid)) continue;

      const isPinned = /공지/.test(row) || /class="[^"]*notice[^"]*"/.test(row);
      found.push({ vid, isPinned });
    }

    if (found.length === 0) break;
    posts.push(...found);
    if (!html.includes(`board_page=${page + 1}`)) break;
    page++;
    await sleep(400);
  }
  return posts;
}

// ── Firestore 컬렉션 전체 삭제 ────────────────────────────────────────────
async function clearCollection(collectionName) {
  const snapshot = await db.collection(collectionName).get();
  const batchSize = 400;
  let deleted = 0;
  for (let i = 0; i < snapshot.docs.length; i += batchSize) {
    const batch = db.batch();
    snapshot.docs.slice(i, i + batchSize).forEach(doc => batch.delete(doc.ref));
    await batch.commit();
    deleted += Math.min(batchSize, snapshot.docs.length - i);
  }
  console.log(`  🗑 ${deleted}개 문서 삭제`);
}

// ══════════════════════════════════════════════════════════════════════════
// customer_notices 재마이그레이션
// ══════════════════════════════════════════════════════════════════════════
async function remigrateCustomerNotices() {
  console.log('\n══ customer_notices 전체 재마이그레이션 ══');
  await clearCollection('customer_notices');

  const list = await getMangboardList('https://www.neolab.kr/customer/');
  console.log(`  VID 목록(${list.length}개): ${list.map(p => p.vid).join(', ')}`);

  let saved = 0;
  for (const { vid, isPinned } of list) {
    try {
      const html = await fetchHtml(`https://www.neolab.kr/customer/?vid=${vid}`);
      const { title, dateStr, author, content } = parseMangboardDetail(html);

      if (!title) { console.warn(`  ⚠ vid=${vid} 제목 없음`); continue; }

      const createdAt = Timestamp.fromDate(new Date(dateStr || '2020-01-01'));
      await db.collection('customer_notices').add({
        isPinned,
        titleKo: title, titleEn: '', titleJa: '',
        contentKo: content, contentEn: '', contentJa: '',
        author: author || 'NeoLAB_CS',
        externalUrl: '',
        views: 0,
        createdAt,
        updatedAt: createdAt,
      });
      console.log(`  ✅ vid=${vid} [${isPinned ? '공지' : '일반'}] "${title.slice(0, 45)}" (${content.length}자)`);
      saved++;
    } catch (e) {
      console.error(`  ❌ vid=${vid} 실패:`, e.message);
    }
    await sleep(300);
  }
  console.log(`  → ${saved}/${list.length} 저장 완료`);
}

// ══════════════════════════════════════════════════════════════════════════
// notices 재마이그레이션 (본문이 이미 올바르게 저장됐으나 재검증)
// ══════════════════════════════════════════════════════════════════════════
async function remigrateNotices() {
  console.log('\n══ notices 전체 재마이그레이션 ══');
  await clearCollection('notices');

  const list = await getMangboardList('https://www.neolab.kr/news/');
  console.log(`  VID 목록(${list.length}개): ${list.map(p => p.vid).join(', ')}`);

  let saved = 0;
  for (const { vid, isPinned } of list) {
    try {
      const html = await fetchHtml(`https://www.neolab.kr/news/?vid=${vid}`);
      const { title, dateStr, author, content } = parseMangboardDetail(html);

      if (!title) { console.warn(`  ⚠ vid=${vid} 제목 없음`); continue; }

      const createdAt = Timestamp.fromDate(new Date(dateStr || '2020-01-01'));
      await db.collection('notices').add({
        isPinned,
        titleKo: title, titleEn: '', titleJa: '',
        contentKo: content, contentEn: '', contentJa: '',
        author: author || 'NeoLAB',
        externalUrl: '',
        views: 0,
        createdAt,
        updatedAt: createdAt,
      });
      console.log(`  ✅ vid=${vid} [${isPinned ? '공지' : '일반'}] "${title.slice(0, 45)}" (${content.length}자)`);
      saved++;
    } catch (e) {
      console.error(`  ❌ vid=${vid} 실패:`, e.message);
    }
    await sleep(300);
  }
  console.log(`  → ${saved}/${list.length} 저장 완료`);
}

// ══════════════════════════════════════════════════════════════════════════
// press 재마이그레이션
// ══════════════════════════════════════════════════════════════════════════

function extractWpContent(html) {
  // et_pb_post_content (Divi 빌더) 또는 entry-content
  const selectors = [
    /class="et_pb_post_content[^"]*"[^>]*>([\s\S]+?)<\/div>\s*<\/div>\s*<\/div>/i,
    /class="et_pb_text_inner"[^>]*>([\s\S]+?)<\/div>/i,
    /class="[^"]*entry-content[^"]*"[^>]*>([\s\S]+?)<\/div>\s*(?:<div|<footer|<\/article)/i,
  ];

  for (const sel of selectors) {
    const m = html.match(sel);
    if (m && m[1].length > 30) return stripTags(m[1]);
  }

  // fallback: article > 모든 <p> 태그 수집
  const articleMatch = html.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
  if (articleMatch) {
    const ps = [...articleMatch[1].matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)];
    if (ps.length) return ps.map(m => stripTags(m[1])).filter(t => t.length > 5).join('\n\n');
  }

  return '';
}

function extractWpTitle(html) {
  const h1 = html.match(/<h1[^>]*class="[^"]*entry-title[^"]*"[^>]*>([\s\S]*?)<\/h1>/i);
  if (h1) return decodeEntities(stripTags(h1[1])).trim();
  const og = html.match(/<meta[^>]+property="og:title"[^>]+content="([^"]+)"/i);
  if (og) return decodeEntities(og[1]).replace(/\s*[-|–]\s*NeoLAB.*/i, '').trim();
  return '';
}

function extractWpDate(html) {
  const m = html.match(/datetime="(\d{4}-\d{2}-\d{2})/);
  return m ? m[1] : '';
}

async function remigratePressFromUrl(postUrl) {
  const html = await fetchHtml(postUrl);
  const title = extractWpTitle(html);
  const content = extractWpContent(html);
  const dateStr = extractWpDate(html);
  return { title, content, dateStr };
}

async function remigratePress() {
  console.log('\n══ press 전체 재마이그레이션 ══');
  await clearCollection('press');

  // 목록에서 실제 포스트 URL만 수집
  const postUrls = [];
  for (let page = 1; page <= 5; page++) {
    const listUrl = page === 1 ? 'https://www.neolab.kr/press/' : `https://www.neolab.kr/press/page/${page}/`;
    const html = await fetchHtml(listUrl);

    // <article> 내부의 첫 번째 링크만 수집 (포스트 본문 링크)
    for (const articleMatch of html.matchAll(/<article[^>]*>([\s\S]*?)<\/article>/gi)) {
      const article = articleMatch[1];
      // entry-title 링크 우선
      const titleLink = article.match(/<(?:h\d)[^>]*class="[^"]*entry-title[^"]*"[^>]*>[\s\S]*?href="(https:\/\/www\.neolab\.kr\/[^"]+)"/i)
        || article.match(/href="(https:\/\/www\.neolab\.kr\/[^"?#]+)"/i);
      if (titleLink) {
        const u = titleLink[1];
        if (!u.includes('/press/page/') && !u.includes('/author/') && !u.includes('/category/')
            && !u.includes('/tag/') && !u.includes('/?') && u !== 'https://www.neolab.kr/'
            && !postUrls.includes(u)) {
          postUrls.push(u);
        }
      }
    }

    if (!html.includes(`/press/page/${page + 1}/`)) break;
    await sleep(400);
  }

  console.log(`  수집된 포스트 URL ${postUrls.length}개`);
  let saved = 0;

  for (const postUrl of postUrls) {
    try {
      const { title, content, dateStr } = await remigratePressFromUrl(postUrl);
      if (!title) { console.warn(`  ⚠ 제목 없음: ${postUrl}`); continue; }

      const createdAt = Timestamp.fromDate(new Date(dateStr || '2020-01-01'));
      await db.collection('press').add({
        isPinned: false,
        titleKo: title, titleEn: '', titleJa: '',
        contentKo: content, contentEn: '', contentJa: '',
        author: 'NeoLAB',
        externalUrl: '',
        views: 0,
        createdAt,
        updatedAt: createdAt,
      });
      console.log(`  ✅ "${title.slice(0, 45)}" (${content.length}자)`);
      saved++;
    } catch (e) {
      console.error(`  ❌ 실패 ${postUrl}:`, e.message);
    }
    await sleep(300);
  }
  console.log(`  → ${saved}/${postUrls.length} 저장 완료`);
}

// ══════════════════════════════════════════════════════════════════════════
// 실행
// ══════════════════════════════════════════════════════════════════════════
(async () => {
  console.log('🔧 전체 재마이그레이션 시작\n');
  try {
    await remigrateNotices();
    await remigratePress();
    await remigrateCustomerNotices();
    console.log('\n✅ 전체 재마이그레이션 완료!');
  } catch (e) {
    console.error('\n❌ 오류:', e);
    process.exit(1);
  }
  process.exit(0);
})();
