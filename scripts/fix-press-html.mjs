/**
 * fix-press-html.mjs (v2)
 * press 컬렉션의 모든 게시글을 HTML 포함해서 재추출/업데이트
 *
 * 실제 구조:
 *   <article>
 *     <div class="entry-content">  ← 여기가 실제 본문
 *       ...
 *     </div>
 *     <div class="et_post_meta_wrapper"></div>
 *   </article>
 *
 * contentKo     → 일반 텍스트 (목록 요약용)
 * contentHtmlKo → 원본 HTML (상세 페이지 렌더링용)
 * createdAt     → article:published_time 메타태그 기준
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
 * <article> 안의 <div class="entry-content"> 내부 HTML을 div 깊이를 추적해서 정확하게 추출
 */
function extractEntryContent(html) {
  // 먼저 <article> 범위로 한정
  const articleStart = html.search(/<article\b/i);
  const articleEnd = html.search(/<\/article>/i);
  if (articleStart === -1 || articleEnd === -1) return '';
  const articleHtml = html.slice(articleStart, articleEnd);

  // <div class="entry-content"> 시작점 찾기
  const entryMatch = articleHtml.match(/(<div[^>]+class="[^"]*entry-content[^"]*"[^>]*>)/i);
  if (!entryMatch) return '';

  const startIdx = articleHtml.indexOf(entryMatch[0]) + entryMatch[0].length;

  // div 깊이를 추적해서 정확한 닫는 태그 찾기
  let depth = 1;
  let i = startIdx;
  while (i < articleHtml.length && depth > 0) {
    if (articleHtml.slice(i).match(/^<div\b/i)) { depth++; i += 4; continue; }
    if (articleHtml.slice(i).match(/^<\/div\b/i)) {
      depth--;
      if (depth === 0) break;
      i += 6; continue;
    }
    i++;
  }

  return articleHtml.slice(startIdx, i).trim();
}

/**
 * HTML 정리: 불필요한 속성 제거, 외부 링크 target=_blank 추가
 */
function cleanHtml(html = '') {
  return html
    // 빈 <p> / <li> 태그 제거
    .replace(/<p[^>]*>\s*<\/p>/gi, '')
    .replace(/<li[^>]*>\s*<\/li>/gi, '')
    // 이미지: srcset/sizes/fetchpriority/decoding/loading/width/height 제거 (src, alt 유지)
    .replace(/\s(?:srcset|sizes|fetchpriority|decoding|loading|width|height|class|style|id|data-[a-z-]+)="[^"]*"/gi, '')
    // <figure>를 <div class="press-img">로 단순화
    .replace(/<figure[^>]*>/gi, '<div class="press-img">').replace(/<\/figure>/gi, '</div>')
    // 외부 링크에 target="_blank" rel="noopener noreferrer" 추가
    .replace(/<a\s+href="(https?:\/\/(?!www\.neolab\.kr)[^"]+)"([^>]*)>/gi, (_, href, rest) => {
      if (/target=/i.test(rest)) return `<a href="${href}"${rest}>`;
      return `<a href="${href}"${rest} target="_blank" rel="noopener noreferrer">`;
    })
    // 공백/줄바꿈 정리
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/**
 * 제목
 */
function extractTitle(html) {
  // <article> 안의 <h1 class="entry-title">
  const articleStart = html.search(/<article\b/i);
  const articleEnd = html.search(/<\/article>/i);
  const scope = articleStart !== -1 && articleEnd !== -1
    ? html.slice(articleStart, articleEnd)
    : html;

  const h1 = scope.match(/<h1[^>]*class="[^"]*entry-title[^"]*"[^>]*>([\s\S]*?)<\/h1>/i);
  if (h1) return decodeEntities(stripTags(h1[1])).trim();

  const og = html.match(/<meta[^>]+property="og:title"[^>]+content="([^"]+)"/i);
  if (og) return decodeEntities(og[1]).replace(/\s*[-|–]\s*NeoLAB.*/i, '').trim();
  return '';
}

/**
 * 날짜: article:published_time 메타태그
 */
function extractDate(html) {
  const m = html.match(/<meta[^>]+property="article:published_time"[^>]+content="([^"]+)"/i);
  return m ? m[1] : '';
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
        if (
          !u.includes('/press/page/') && !u.includes('/author/') && !u.includes('/category/') &&
          !u.includes('/tag/') && u !== 'https://www.neolab.kr/' && !urls.includes(u)
        ) {
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
  console.log('🔧 press HTML 콘텐츠 업데이트 시작 (v2)\n');

  // Firestore 문서 로드 (제목 → docId 매핑)
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
      const rawContentHtml = extractEntryContent(html);
      const contentHtml = cleanHtml(rawContentHtml);
      const plainText = stripTags(rawContentHtml);
      const dateStr = extractDate(html);

      console.log(`📄 "${title.slice(0, 50)}"`);
      console.log(`   HTML: ${contentHtml.length}자, 텍스트: ${plainText.length}자, 날짜: ${dateStr.slice(0, 10)}`);

      if (!title) { console.warn('   ⚠ 제목 없음, 건너뜀\n'); continue; }

      // Firestore 매칭 (완전 일치 → 부분 일치)
      let doc = titleToDoc[title];
      if (!doc) {
        const key = Object.keys(titleToDoc).find(
          k => k.includes(title.slice(0, 15)) || title.includes(k.slice(0, 15))
        );
        if (key) doc = titleToDoc[key];
      }
      if (!doc) { console.warn(`   ⚠ 매칭 문서 없음\n`); continue; }

      const updates = {
        contentKo: plainText,
        contentHtmlKo: contentHtml,
      };
      if (dateStr) {
        const d = Timestamp.fromDate(new Date(dateStr));
        updates.createdAt = d;
        updates.updatedAt = d;
      }

      await doc.ref.update(updates);
      console.log(`   ✅ 업데이트 완료\n`);
      updated++;
    } catch (e) {
      console.error(`   ❌ 실패 ${postUrl}:`, e.message, '\n');
    }
    await sleep(300);
  }

  console.log(`✅ 완료: ${updated}/${urls.length} 업데이트`);
  process.exit(0);
})();
