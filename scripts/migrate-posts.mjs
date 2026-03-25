/**
 * migrate-posts.mjs
 * neolab.kr → Firestore 게시글 마이그레이션 스크립트
 *
 * 대상:
 *   /news/     → Firestore notices 컬렉션
 *   /press/    → Firestore press 컬렉션
 *   /customer/ → Firestore customer_notices 컬렉션
 */

import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue, Timestamp } from 'firebase-admin/firestore';

// ── Firebase Admin 초기화 ─────────────────────────────────────────────────
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

const app = initializeApp({
  credential: cert({
    projectId: 'neolab-homepage',
    clientEmail: 'firebase-adminsdk-fbsvc@neolab-homepage.iam.gserviceaccount.com',
    privateKey,
  }),
});
const db = getFirestore(app);

// ── 유틸리티 ──────────────────────────────────────────────────────────────
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchHtml(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'ko-KR,ko;q=0.9,en;q=0.8',
          Referer: 'https://www.neolab.kr/',
        },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.text();
    } catch (e) {
      console.warn(`  재시도 ${i + 1}/${retries}: ${url} → ${e.message}`);
      if (i < retries - 1) await sleep(1500);
    }
  }
  throw new Error(`fetchHtml 실패: ${url}`);
}

/** HTML 태그 제거 + 공백 정리 */
function stripTags(html) {
  return html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n')
    .replace(/<\/div>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#8203;/g, '')
    .replace(/\r\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/** ISO 날짜 파싱 (MangBoard: "2025-03-12 17:18" / WP: "Jul 7, 2025") */
function parseDate(raw) {
  if (!raw) return new Date();
  // MangBoard 형식: YYYY-MM-DD HH:MM
  const mb = raw.match(/(\d{4}-\d{2}-\d{2})/);
  if (mb) return new Date(mb[1]);
  // WordPress 형식: Mon DD, YYYY
  return new Date(raw);
}

// ═══════════════════════════════════════════════════════════════════════════
// MangBoard 스크래퍼 (/news/, /customer/)
// ═══════════════════════════════════════════════════════════════════════════

/** 목록 페이지에서 VID 목록 추출 (isPinned 포함) */
async function getMangboardList(boardBaseUrl) {
  const posts = [];
  let page = 1;

  while (true) {
    const url = `${boardBaseUrl}?mode=list&board_page=${page}`;
    console.log(`  목록 페이지 로딩: ${url}`);
    const html = await fetchHtml(url);

    // <tr> 행에서 VID, isPinned 추출
    // 공지: <td class="...">공지</td>
    // 번호: <td class="...">숫자</td>
    // 링크: href="?vid=N" 또는 href="/news/?vid=N"
    const rowPattern = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
    let rowMatch;
    let foundInPage = 0;

    while ((rowMatch = rowPattern.exec(html)) !== null) {
      const row = rowMatch[1];
      // VID 추출
      const vidMatch = row.match(/[?&]vid=(\d+)/);
      if (!vidMatch) continue;
      const vid = parseInt(vidMatch[1]);
      if (posts.find((p) => p.vid === vid)) continue; // 중복 방지

      // isPinned: "공지" 텍스트 또는 class="notice"
      const isPinned =
        /공지/.test(row) ||
        /class="[^"]*notice[^"]*"/.test(row) ||
        /class="[^"]*is_notice[^"]*"/.test(row);

      posts.push({ vid, isPinned });
      foundInPage++;
    }

    console.log(`    → ${foundInPage}개 VID 발견`);
    if (foundInPage === 0) break; // 더 이상 페이지 없음

    // 다음 페이지 존재 여부 확인
    const hasNext =
      new RegExp(`board_page=${page + 1}`).test(html) ||
      /다음.*?page/.test(html) ||
      /next.*?page/i.test(html);

    // MangBoard 페이지네이션 체크: 현재 페이지 링크가 있는지 확인
    // "board_page=2" 같은 링크가 있으면 계속
    if (!hasNext && page > 1) break;
    // 안전장치: 페이지 2부터는 foundInPage로 판단
    if (page > 1 && foundInPage === 0) break;
    // 1페이지에서 다음 페이지 링크가 없으면 끝
    if (page === 1 && !new RegExp(`board_page=2`).test(html)) break;

    page++;
    await sleep(500);
  }

  return posts;
}

/** MangBoard 상세 페이지에서 제목 + 내용 추출 */
async function getMangboardDetail(boardBaseUrl, vid) {
  const url = `${boardBaseUrl}?vid=${vid}`;
  const html = await fetchHtml(url);

  // 제목 추출: MangBoard는 <td class="td_subject"> 또는 상단 table의 첫 번째 행
  let title = '';

  // 방법 1: td_subject 클래스
  const subjectMatch = html.match(/class="[^"]*td_subject[^"]*"[^>]*>([\s\S]*?)<\/td>/i);
  if (subjectMatch) {
    title = stripTags(subjectMatch[1]).trim();
  }

  // 방법 2: 제목 div/strong 패턴
  if (!title) {
    const titleMatch = html.match(/<strong[^>]*>([\s\S]{5,200}?)<\/strong>/i);
    if (titleMatch) title = stripTags(titleMatch[1]).trim();
  }

  // 방법 3: og:title 메타태그
  if (!title) {
    const ogMatch = html.match(/<meta[^>]+property="og:title"[^>]+content="([^"]+)"/i);
    if (ogMatch) title = ogMatch[1].trim();
  }

  // 방법 4: <title> 태그 (페이지 타이틀에서 사이트명 제거)
  if (!title) {
    const pageTitleMatch = html.match(/<title>([^<]+)<\/title>/i);
    if (pageTitleMatch) {
      title = pageTitleMatch[1].replace(/\s*[-|–]\s*NeoLAB.*/i, '').trim();
    }
  }

  // 날짜 추출
  let dateStr = '';
  const datePatterns = [
    /class="[^"]*td_date[^"]*"[^>]*>([\s\S]*?)<\/td>/i,
    /(\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2})/,
    /(\d{4}\.\d{2}\.\d{2})/,
  ];
  for (const pat of datePatterns) {
    const m = html.match(pat);
    if (m) {
      dateStr = stripTags(m[1]).trim();
      break;
    }
  }

  // 작성자 추출
  let author = 'NeoLAB';
  const authorMatch = html.match(/class="[^"]*td_name[^"]*"[^>]*>([\s\S]*?)<\/td>/i);
  if (authorMatch) author = stripTags(authorMatch[1]).trim() || author;

  // 본문 추출: MangBoard content 영역
  let content = '';

  // 방법 1: class="board_content" 또는 id="board_content"
  const contentPatterns = [
    /class="[^"]*board_content[^"]*"[^>]*>([\s\S]*?)<\/(?:div|td)>/i,
    /id="[^"]*board_content[^"]*"[^>]*>([\s\S]*?)<\/(?:div|td)>/i,
    /class="[^"]*td_content[^"]*"[^>]*>([\s\S]*?)<\/td>/i,
    /class="[^"]*view_content[^"]*"[^>]*>([\s\S]*?)<\/div>/i,
  ];

  for (const pat of contentPatterns) {
    const m = html.match(pat);
    if (m && m[1].length > 20) {
      content = stripTags(m[1]).trim();
      break;
    }
  }

  // 방법 2: article 태그 내부 (neolab.kr WordPress 구조)
  if (!content) {
    const articleMatch = html.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
    if (articleMatch) {
      // 헤더/푸터 제거
      let articleHtml = articleMatch[1];
      // 제목, 날짜 등 메타 제거하고 본문만
      content = stripTags(articleHtml).trim();
    }
  }

  return { vid, title, content, dateStr, author };
}

// ═══════════════════════════════════════════════════════════════════════════
// WordPress 스크래퍼 (/press/)
// ═══════════════════════════════════════════════════════════════════════════

/** /press/ 목록에서 모든 포스트 URL 수집 */
async function getPressPostUrls() {
  const urls = [];
  let page = 1;

  while (true) {
    const url = page === 1 ? 'https://www.neolab.kr/press/' : `https://www.neolab.kr/press/page/${page}/`;
    console.log(`  press 목록 로딩: ${url}`);
    const html = await fetchHtml(url);

    // WordPress 포스트 링크: <h2 ...><a href="...">제목</a></h2>
    // 또는 <a class="...entry..." href="...">
    const found = [];

    // Divi 테마 패턴: <article ...><a href="https://www.neolab.kr/POST-SLUG/">
    const articlePattern = /<article[^>]*>([\s\S]*?)<\/article>/gi;
    let articleMatch;
    while ((articleMatch = articlePattern.exec(html)) !== null) {
      const article = articleMatch[1];
      // 포스트 링크 추출 (neolab.kr 도메인, /press/ 카테고리 또는 한국어 슬러그)
      const linkMatch = article.match(/href="(https:\/\/www\.neolab\.kr\/[^"]+?)"/);
      if (linkMatch && !linkMatch[1].includes('/press/page/') && !linkMatch[1].includes('/author/')) {
        const postUrl = linkMatch[1];
        if (!urls.includes(postUrl) && !found.includes(postUrl)) {
          found.push(postUrl);
        }
      }
    }

    // 제목 링크 패턴 (fallback)
    if (found.length === 0) {
      const entryPattern = /<h2[^>]*class="[^"]*entry-title[^"]*"[^>]*>([\s\S]*?)<\/h2>/gi;
      let m;
      while ((m = entryPattern.exec(html)) !== null) {
        const linkM = m[1].match(/href="(https:\/\/www\.neolab\.kr\/[^"]+?)"/);
        if (linkM && !urls.includes(linkM[1])) {
          found.push(linkM[1]);
        }
      }
    }

    console.log(`    → ${found.length}개 URL 발견`);
    if (found.length === 0) break;

    urls.push(...found);

    // 다음 페이지 확인
    const hasNext = html.includes(`/press/page/${page + 1}/`) ||
                    html.includes('Older Entries') ||
                    html.includes('이전 글');
    if (!hasNext) break;

    page++;
    await sleep(500);
  }

  return [...new Set(urls)]; // 중복 제거
}

/** WordPress 포스트 상세 페이지에서 제목 + 내용 추출 */
async function getPressPostDetail(postUrl) {
  const html = await fetchHtml(postUrl);

  // 제목: <h1 class="entry-title"> 또는 og:title
  let title = '';
  const h1Match = html.match(/<h1[^>]*class="[^"]*entry-title[^"]*"[^>]*>([\s\S]*?)<\/h1>/i);
  if (h1Match) title = stripTags(h1Match[1]).trim();

  if (!title) {
    const ogMatch = html.match(/<meta[^>]+property="og:title"[^>]+content="([^"]+)"/i);
    if (ogMatch) title = ogMatch[1].replace(/\s*[-|–]\s*NeoLAB.*/i, '').trim();
  }

  if (!title) {
    const pageTitleMatch = html.match(/<title>([^<]+)<\/title>/i);
    if (pageTitleMatch) title = pageTitleMatch[1].replace(/\s*[-|–]\s*NeoLAB.*/i, '').trim();
  }

  // 날짜: <span class="published"> 또는 datetime 속성
  let dateStr = '';
  const dateMatch = html.match(/<(?:time|abbr|span)[^>]*class="[^"]*(?:published|entry-date|post-date)[^"]*"[^>]*(?:datetime="([^"]*)")?[^>]*>([\s\S]*?)<\/(?:time|abbr|span)>/i);
  if (dateMatch) {
    dateStr = dateMatch[1] || stripTags(dateMatch[2]).trim();
  }
  if (!dateStr) {
    const dtMatch = html.match(/datetime="(\d{4}-\d{2}-\d{2})/);
    if (dtMatch) dateStr = dtMatch[1];
  }

  // 작성자
  let author = 'NeoLAB';
  const authorMatch = html.match(/class="[^"]*author[^"]*"[^>]*>([\s\S]*?)<\/(?:a|span)>/i);
  if (authorMatch) {
    const a = stripTags(authorMatch[1]).trim();
    if (a && a.length < 50) author = a;
  }

  // 본문: <div class="entry-content"> 영역
  let content = '';
  const contentMatch = html.match(/<div[^>]*class="[^"]*entry-content[^"]*"[^>]*>([\s\S]*?)<\/div>\s*(?:<div|<footer|<\/article)/i);
  if (contentMatch) {
    content = stripTags(contentMatch[1]).trim();
  }

  // fallback: et_pb_post_content
  if (!content) {
    const pbMatch = html.match(/<div[^>]*class="[^"]*et_pb_post_content[^"]*"[^>]*>([\s\S]*?)<\/div>/i);
    if (pbMatch) content = stripTags(pbMatch[1]).trim();
  }

  // fallback: article 전체
  if (!content) {
    const articleMatch = html.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
    if (articleMatch) content = stripTags(articleMatch[1]).trim();
  }

  return { url: postUrl, title, content, dateStr, author };
}

// ═══════════════════════════════════════════════════════════════════════════
// Firestore 저장
// ═══════════════════════════════════════════════════════════════════════════

async function saveToFirestore(collection, doc) {
  try {
    const ref = await db.collection(collection).add(doc);
    return ref.id;
  } catch (e) {
    console.error(`  Firestore 저장 실패 (${collection}):`, e.message);
    return null;
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// 메인 실행
// ═══════════════════════════════════════════════════════════════════════════

async function migrateNotices() {
  console.log('\n══════════════════════════════════════');
  console.log('📢 공지사항 마이그레이션: /news/ → notices');
  console.log('══════════════════════════════════════');

  const baseUrl = 'https://www.neolab.kr/news/';
  const list = await getMangboardList(baseUrl);
  console.log(`총 ${list.length}개 공지사항 발견`);

  let saved = 0;
  for (const { vid, isPinned } of list) {
    console.log(`  처리 중: vid=${vid} (공지=${isPinned})`);
    try {
      const detail = await getMangboardDetail(baseUrl, vid);
      if (!detail.title) {
        console.warn(`    ⚠ 제목 없음, 건너뜀`);
        continue;
      }

      const createdAt = Timestamp.fromDate(parseDate(detail.dateStr));
      const docData = {
        isPinned,
        titleKo: detail.title,
        titleEn: '',
        titleJa: '',
        contentKo: detail.content,
        contentEn: '',
        contentJa: '',
        author: detail.author || 'NeoLAB',
        externalUrl: '',
        views: 0,
        createdAt,
        updatedAt: createdAt,
      };

      const id = await saveToFirestore('notices', docData);
      console.log(`    ✅ 저장: "${detail.title}" → ${id}`);
      saved++;
    } catch (e) {
      console.error(`    ❌ 실패 vid=${vid}:`, e.message);
    }
    await sleep(300);
  }
  console.log(`\n공지사항 완료: ${saved}/${list.length} 저장\n`);
}

async function migratePress() {
  console.log('\n══════════════════════════════════════');
  console.log('📰 기업뉴스 마이그레이션: /press/ → press');
  console.log('══════════════════════════════════════');

  const urls = await getPressPostUrls();
  console.log(`총 ${urls.length}개 기업뉴스 발견`);
  console.log('URL 목록:', urls);

  let saved = 0;
  for (const postUrl of urls) {
    console.log(`  처리 중: ${postUrl}`);
    try {
      const detail = await getPressPostDetail(postUrl);
      if (!detail.title) {
        console.warn(`    ⚠ 제목 없음, 건너뜀`);
        continue;
      }

      const createdAt = Timestamp.fromDate(parseDate(detail.dateStr));
      const docData = {
        isPinned: false,
        titleKo: detail.title,
        titleEn: '',
        titleJa: '',
        contentKo: detail.content,
        contentEn: '',
        contentJa: '',
        author: detail.author || 'NeoLAB',
        externalUrl: '',
        views: 0,
        createdAt,
        updatedAt: createdAt,
      };

      const id = await saveToFirestore('press', docData);
      console.log(`    ✅ 저장: "${detail.title}" → ${id}`);
      saved++;
    } catch (e) {
      console.error(`    ❌ 실패 ${postUrl}:`, e.message);
    }
    await sleep(300);
  }
  console.log(`\n기업뉴스 완료: ${saved}/${urls.length} 저장\n`);
}

async function migrateCustomerNotices() {
  console.log('\n══════════════════════════════════════');
  console.log('🎧 고객지원 마이그레이션: /customer/ → customer_notices');
  console.log('══════════════════════════════════════');

  const baseUrl = 'https://www.neolab.kr/customer/';
  const list = await getMangboardList(baseUrl);
  console.log(`총 ${list.length}개 고객지원 공지 발견`);

  let saved = 0;
  for (const { vid, isPinned } of list) {
    console.log(`  처리 중: vid=${vid} (공지=${isPinned})`);
    try {
      const detail = await getMangboardDetail(baseUrl, vid);
      if (!detail.title) {
        console.warn(`    ⚠ 제목 없음, 건너뜀`);
        continue;
      }

      const createdAt = Timestamp.fromDate(parseDate(detail.dateStr));
      const docData = {
        isPinned,
        titleKo: detail.title,
        titleEn: '',
        titleJa: '',
        contentKo: detail.content,
        contentEn: '',
        contentJa: '',
        author: detail.author || 'NeoLAB_CS',
        externalUrl: '',
        views: 0,
        createdAt,
        updatedAt: createdAt,
      };

      const id = await saveToFirestore('customer_notices', docData);
      console.log(`    ✅ 저장: "${detail.title}" → ${id}`);
      saved++;
    } catch (e) {
      console.error(`    ❌ 실패 vid=${vid}:`, e.message);
    }
    await sleep(300);
  }
  console.log(`\n고객지원 완료: ${saved}/${list.length} 저장\n`);
}

// ── 실행 ──────────────────────────────────────────────────────────────────
(async () => {
  console.log('🚀 neolab.kr → Firestore 마이그레이션 시작');
  console.log(`시작 시각: ${new Date().toISOString()}\n`);

  try {
    await migrateNotices();
    await migratePress();
    await migrateCustomerNotices();
    console.log('\n✅ 전체 마이그레이션 완료!');
  } catch (e) {
    console.error('\n❌ 마이그레이션 오류:', e);
    process.exit(1);
  }

  process.exit(0);
})();
