/**
 * fix-content.mjs
 * 잘못 추출된 본문을 올바른 선택자로 다시 가져와 Firestore 업데이트
 *
 * MangBoard 본문: <td class="content-box text-left">...</td>
 * WordPress 본문: <div class="entry-content">...</div>
 */

import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

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
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      Accept: 'text/html,application/xhtml+xml',
      'Accept-Language': 'ko-KR,ko;q=0.9',
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.text();
}

function decodeEntities(text) {
  return text
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
    html
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<\/p>/gi, '\n')
      .replace(/<\/div>/gi, '\n')
      .replace(/<\/li>/gi, '\n')
      .replace(/<[^>]+>/g, '')
  )
    .replace(/\r\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

// ── MangBoard 본문 추출 ────────────────────────────────────────────────────
// <td class="content-box text-left"> ... </td>
function extractMangboardContent(html) {
  // 정확한 패턴: class="content-box text-left"
  const match = html.match(/class="content-box[^"]*"[^>]*>([\s\S]*?)<\/td>/i);
  if (match) return stripTags(match[1]);

  // fallback: mb_XXX_tr_content 행 전체
  const trMatch = html.match(/id="mb_[^"]+_tr_content"[^>]*>([\s\S]*?)<\/tr>/i);
  if (trMatch) return stripTags(trMatch[1]);

  return '';
}

// MangBoard 제목 추출
function extractMangboardTitle(html) {
  // tr id="mb_XXX_tr_title" 첫 번째 <span>
  const trMatch = html.match(/id="mb_[^"]+_tr_title"[^>]*>[\s\S]*?<td[^>]*>([\s\S]*?)<\/td>/i);
  if (trMatch) {
    const spanMatch = trMatch[1].match(/<span[^>]*>([\s\S]*?)<\/span>/i);
    if (spanMatch) return decodeEntities(stripTags(spanMatch[1])).trim();
  }
  return '';
}

// MangBoard 날짜 추출
function extractMangboardDate(html) {
  const trMatch = html.match(/id="mb_[^"]+_tr_title"[^>]*>[\s\S]*?<td[^>]*>([\s\S]*?)<\/td>/i);
  if (trMatch) {
    const spans = [...trMatch[1].matchAll(/<span[^>]*>([\s\S]*?)<\/span>/gi)];
    if (spans.length >= 2) return stripTags(spans[1][1]).trim();
  }
  // fallback: YYYY-MM-DD HH:MM 패턴
  const dateMatch = html.match(/(\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2})/);
  return dateMatch ? dateMatch[1] : '';
}

// ── WordPress 본문 추출 ───────────────────────────────────────────────────
function extractWpContent(html) {
  // entry-content div 추출 (Divi 테마)
  // 가장 바깥쪽 entry-content div를 찾아야 함
  const startIdx = html.search(/class="[^"]*entry-content[^"]*"/i);
  if (startIdx === -1) return '';

  // 해당 div 시작점 찾기
  const divStart = html.lastIndexOf('<div', startIdx);
  if (divStart === -1) return '';

  // 중첩 div를 고려해 닫는 태그 찾기
  let depth = 0;
  let i = divStart;
  while (i < html.length) {
    if (html.slice(i).match(/^<div/i)) { depth++; i += 4; continue; }
    if (html.slice(i).match(/^<\/div/i)) {
      depth--;
      if (depth === 0) {
        const inner = html.slice(divStart, i + 6);
        return stripTags(inner);
      }
      i += 6; continue;
    }
    i++;
  }
  return '';
}

// WordPress 제목 추출
function extractWpTitle(html) {
  const h1 = html.match(/<h1[^>]*class="[^"]*entry-title[^"]*"[^>]*>([\s\S]*?)<\/h1>/i);
  if (h1) return decodeEntities(stripTags(h1[1])).trim();
  const og = html.match(/<meta[^>]+property="og:title"[^>]+content="([^"]+)"/i);
  if (og) return decodeEntities(og[1]).replace(/\s*[-|–]\s*NeoLAB.*/i, '').trim();
  return '';
}

// ══════════════════════════════════════════════════════════════════════════
// MangBoard 게시판 재스크래핑
// ══════════════════════════════════════════════════════════════════════════
async function getMangboardVids(baseUrl) {
  const vids = [];
  let page = 1;
  while (true) {
    const html = await fetchHtml(`${baseUrl}?mode=list&board_page=${page}`);
    const found = [];
    for (const m of html.matchAll(/[?&]vid=(\d+)/g)) {
      const v = parseInt(m[1]);
      if (!vids.includes(v) && !found.includes(v)) found.push(v);
    }
    if (found.length === 0) break;
    vids.push(...found);
    if (!html.includes(`board_page=${page + 1}`)) break;
    page++;
    await sleep(400);
  }
  return vids;
}

async function fixMangboardCollection(collectionName, baseUrl) {
  console.log(`\n══ ${collectionName} 본문 수정 (${baseUrl}) ══`);

  // 현재 Firestore 문서 로드 (제목 → docId 매핑)
  const snapshot = await db.collection(collectionName).get();
  const titleToDoc = {};
  for (const doc of snapshot.docs) {
    const title = (doc.data().titleKo || '').trim();
    if (title) titleToDoc[title] = doc;
  }
  console.log(`  Firestore 문서 ${snapshot.size}개 로드`);

  // VID 목록 수집
  const vids = await getMangboardVids(baseUrl);
  console.log(`  VID 목록: [${vids.join(', ')}]`);

  let updated = 0;
  for (const vid of vids) {
    const url = `${baseUrl}?vid=${vid}`;
    try {
      const html = await fetchHtml(url);
      const title = extractMangboardTitle(html);
      const content = extractMangboardContent(html);

      if (!content) {
        console.warn(`  ⚠ vid=${vid} 본문 없음 (title: "${title}")`);
        continue;
      }

      // Firestore에서 매칭 문서 찾기
      const doc = titleToDoc[title] || titleToDoc[decodeEntities(title)];
      if (!doc) {
        console.warn(`  ⚠ vid=${vid} 매칭 문서 없음: "${title}"`);
        continue;
      }

      await doc.ref.update({ contentKo: content });
      console.log(`  ✅ vid=${vid} 업데이트: "${title.slice(0, 40)}" (${content.length}자)`);
      updated++;
    } catch (e) {
      console.error(`  ❌ vid=${vid} 실패:`, e.message);
    }
    await sleep(300);
  }
  console.log(`  → ${updated}/${vids.length} 업데이트 완료`);
}

// ══════════════════════════════════════════════════════════════════════════
// WordPress press 재스크래핑
// ══════════════════════════════════════════════════════════════════════════
async function getPressUrls() {
  const urls = [];
  for (let page = 1; page <= 5; page++) {
    const url = page === 1 ? 'https://www.neolab.kr/press/' : `https://www.neolab.kr/press/page/${page}/`;
    const html = await fetchHtml(url);
    const found = [];
    for (const m of html.matchAll(/href="(https:\/\/www\.neolab\.kr\/[^"]+?)"/gi)) {
      const u = m[1];
      if (!u.includes('/press/') && !u.includes('/author/') && !u.includes('/category/') &&
          !u.includes('/tag/') && !u.includes('/?') && !urls.includes(u) && !found.includes(u) &&
          u !== 'https://www.neolab.kr/') {
        found.push(u);
      }
    }
    if (found.length === 0) break;
    urls.push(...found);
    if (!html.includes(`/press/page/${page + 1}/`)) break;
    await sleep(400);
  }
  return [...new Set(urls)];
}

async function fixPressCollection() {
  console.log('\n══ press 본문 수정 ══');

  const snapshot = await db.collection('press').get();
  const titleToDoc = {};
  for (const doc of snapshot.docs) {
    const title = (doc.data().titleKo || '').trim();
    if (title) titleToDoc[title] = doc;
  }
  console.log(`  Firestore 문서 ${snapshot.size}개 로드`);

  const urls = await getPressUrls();
  console.log(`  수집된 URL ${urls.length}개`);

  let updated = 0;
  for (const postUrl of urls) {
    try {
      const html = await fetchHtml(postUrl);
      const title = extractWpTitle(html);
      const content = extractWpContent(html);

      if (!content) {
        console.warn(`  ⚠ 본문 없음: "${title}" (${postUrl})`);
        continue;
      }

      // 제목으로 매칭
      const doc = titleToDoc[title];
      if (!doc) {
        // 부분 매칭 시도
        const partTitle = title.slice(0, 20);
        const matchKey = Object.keys(titleToDoc).find(k => k.includes(partTitle) || partTitle.includes(k.slice(0, 20)));
        if (!matchKey) {
          console.warn(`  ⚠ 매칭 실패: "${title}"`);
          continue;
        }
        await titleToDoc[matchKey].ref.update({ contentKo: content });
        console.log(`  ✅ 업데이트(부분매칭): "${matchKey.slice(0, 40)}" (${content.length}자)`);
        updated++;
        continue;
      }

      await doc.ref.update({ contentKo: content });
      console.log(`  ✅ 업데이트: "${title.slice(0, 40)}" (${content.length}자)`);
      updated++;
    } catch (e) {
      console.error(`  ❌ 실패 ${postUrl}:`, e.message);
    }
    await sleep(300);
  }
  console.log(`  → ${updated}/${urls.length} 업데이트 완료`);
}

// ══════════════════════════════════════════════════════════════════════════
// 실행
// ══════════════════════════════════════════════════════════════════════════
(async () => {
  console.log('🔧 본문 재추출 및 업데이트 시작\n');
  try {
    await fixMangboardCollection('notices', 'https://www.neolab.kr/news/');
    await fixPressCollection();
    await fixMangboardCollection('customer_notices', 'https://www.neolab.kr/customer/');
    console.log('\n✅ 전체 본문 업데이트 완료!');
  } catch (e) {
    console.error('\n❌ 오류:', e);
    process.exit(1);
  }
  process.exit(0);
})();
