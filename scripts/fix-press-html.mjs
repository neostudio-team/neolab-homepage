/**
 * fix-press-html.mjs
 * press 컬렉션의 모든 게시글을 HTML 포함해서 재추출/업데이트
 *
 * contentKo   → 일반 텍스트 (목록 요약용)
 * contentHtmlKo → 원본 HTML (상세 페이지 렌더링용)
 * createdAt   → article:published_time 메타태그 기준
 */

import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, Timestamp } from 'firebase-admin/firestore';

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

function decodeEntities(t = '') {
  return t
    .replace(/&#8217;/g, "'").replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"').replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, '–').replace(/&#8212;/g, '—')
    .replace(/&#8230;/g, '…').replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#\d+;/g, '');
}

function stripTags(html = '') {
  return decodeEntities(
    html
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<\/(?:p|div|li|tr|h\d)>/gi, '\n')
      .replace(/<[^>]+>/g, '')
  ).replace(/\r\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();
}

/**
 * HTML 정리: 불필요한 클래스/속성 제거, 외부 링크 target=_blank 추가
 */
function cleanHtml(html = '') {
  return html
    // 빈 <p> 태그 제거
    .replace(/<p[^>]*>\s*<\/p>/gi, '')
    // class, style, id, srcset, sizes, fetchpriority, decoding, loading 속성 제거 (src, href, alt, target, rel은 유지)
    .replace(/\s(?:class|style|id|srcset|sizes|fetchpriority|decoding|loading|width|height|data-[a-z-]+)="[^"]*"/gi, '')
    // <figure>를 <div>로 단순화
    .replace(/<figure[^>]*>/gi, '<div class="press-img">').replace(/<\/figure>/gi, '</div>')
    // 외부 링크에 target="_blank" rel="noopener noreferrer" 추가 (이미 있는 경우 제외)
    .replace(/<a\s+href="(https?:\/\/(?!www\.neolab\.kr)[^"]+)"([^>]*)>/gi, (_, href, rest) => {
      const hasTarget = /target=/i.test(rest);
      return `<a href="${href}"${rest}${hasTarget ? '' : ' target="_blank" rel="noopener noreferrer"'}>`;
    })
    // 공백 정리
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/**
 * WordPress 포스트에서 HTML 본문 추출
 * 우선순위: et_pb_text_inner → entry-content > p tags
 */
function extractContentHtml(html) {
  // 1. Divi builder: et_pb_text_inner (탐욕적 매칭으로 전체 내부 캡처)
  const diviMatch = html.match(/class="et_pb_text_inner">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/i);
  if (diviMatch && diviMatch[1].trim()) return cleanHtml(diviMatch[1]);

  // 2. et_pb_text_inner (닫는 태그가 바로 오는 경우)
  const diviSimple = html.match(/class="et_pb_text_inner">([\s\S]*?)<\/div>/i);
  if (diviSimple && diviSimple[1].trim().length > 20) return cleanHtml(diviSimple[1]);

  // 3. entry-content 내부 <p> 태그 전체 수집
  const entryMatch = html.match(/class="[^"]*entry-content[^"]*"[^>]*>([\s\S]*?)(?:<footer|<div class="[^"]*post-navigation|<\/article)/i);
  if (entryMatch) {
    // entry-content 내의 모든 p/h/ul/ol 태그 수집
    const inner = entryMatch[1];
    const blocks = [...inner.matchAll(/<(?:p|h[1-6]|ul|ol|blockquote|figure)[^>]*>[\s\S]*?<\/(?:p|h[1-6]|ul|ol|blockquote|figure)>/gi)];
    if (blocks.length) return cleanHtml(blocks.map(m => m[0]).join('\n'));
  }

  return '';
}

/**
 * 날짜: article:published_time 메타태그
 */
function extractDate(html) {
  const m = html.match(/<meta[^>]+property="article:published_time"[^>]+content="([^"]+)"/i);
  return m ? m[1] : '';
}

/**
 * 제목
 */
function extractTitle(html) {
  const h1 = html.match(/<h1[^>]*class="[^"]*entry-title[^"]*"[^>]*>([\s\S]*?)<\/h1>/i);
  if (h1) return decodeEntities(stripTags(h1[1])).trim();
  const og = html.match(/<meta[^>]+property="og:title"[^>]+content="([^"]+)"/i);
  if (og) return decodeEntities(og[1]).replace(/\s*[-|–]\s*NeoLAB.*/i, '').trim();
  return '';
}

// ── 목록 URL 수집 ─────────────────────────────────────────────────────────
async function getPressUrls() {
  const urls = [];
  for (let page = 1; page <= 5; page++) {
    const listUrl = page === 1 ? 'https://www.neolab.kr/press/' : `https://www.neolab.kr/press/page/${page}/`;
    const html = await fetchHtml(listUrl);

    for (const articleMatch of html.matchAll(/<article[^>]*>([\s\S]*?)<\/article>/gi)) {
      const article = articleMatch[1];
      const linkMatch = article.match(/href="(https:\/\/www\.neolab\.kr\/[^"?#]+?)"/i);
      if (linkMatch) {
        const u = linkMatch[1];
        if (!u.includes('/press/page/') && !u.includes('/author/') && !u.includes('/category/')
            && !u.includes('/tag/') && u !== 'https://www.neolab.kr/' && !urls.includes(u)) {
          urls.push(u);
        }
      }
    }

    if (!html.includes(`/press/page/${page + 1}/`)) break;
    await sleep(400);
  }
  return [...new Set(urls)];
}

// ── 메인 ─────────────────────────────────────────────────────────────────
(async () => {
  console.log('🔧 press HTML 콘텐츠 업데이트 시작\n');

  // 현재 Firestore 문서 로드 (제목 → docId 매핑)
  const snapshot = await db.collection('press').get();
  const titleToDoc = {};
  for (const doc of snapshot.docs) {
    titleToDoc[(doc.data().titleKo || '').trim()] = doc;
  }
  console.log(`Firestore press 문서 ${snapshot.size}개 로드`);

  const urls = await getPressUrls();
  console.log(`수집된 URL ${urls.length}개\n`);

  let updated = 0;
  for (const postUrl of urls) {
    try {
      const html = await fetchHtml(postUrl);
      const title = extractTitle(html);
      const contentHtml = extractContentHtml(html);
      const plainText = stripTags(contentHtml);
      const dateStr = extractDate(html);

      console.log(`📄 "${title.slice(0, 45)}"`);
      console.log(`   HTML: ${contentHtml.length}자, 텍스트: ${plainText.length}자, 날짜: ${dateStr}`);

      if (!title) { console.warn('   ⚠ 제목 없음, 건너뜀\n'); continue; }

      // Firestore 매칭
      let doc = titleToDoc[title];
      if (!doc) {
        // 부분 매칭
        const key = Object.keys(titleToDoc).find(k => k.includes(title.slice(0, 15)) || title.includes(k.slice(0, 15)));
        if (key) doc = titleToDoc[key];
      }
      if (!doc) { console.warn(`   ⚠ 매칭 문서 없음: "${title}"\n`); continue; }

      const updates = {
        contentKo: plainText,
        contentHtmlKo: contentHtml,
      };
      if (dateStr) {
        updates.createdAt = Timestamp.fromDate(new Date(dateStr));
        updates.updatedAt = Timestamp.fromDate(new Date(dateStr));
      }

      await doc.ref.update(updates);
      console.log(`   ✅ 업데이트 완료\n`);
      updated++;
    } catch (e) {
      console.error(`   ❌ 실패 ${postUrl}:`, e.message, '\n');
    }
    await sleep(300);
  }

  console.log(`\n✅ 완료: ${updated}/${urls.length} 업데이트`);
  process.exit(0);
})();
