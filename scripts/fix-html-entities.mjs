/**
 * fix-html-entities.mjs
 * 마이그레이션된 데이터에서 HTML 엔티티 및 불필요한 마크업 제거
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

/** HTML 엔티티 + 태그 완전 정리 */
function cleanText(text) {
  if (!text) return '';
  return text
    // HTML 태그 제거
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n')
    .replace(/<\/div>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    // 주요 HTML 엔티티 디코딩
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&#8230;/g, '…')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#8203;/g, '')
    .replace(/&#\d+;/g, '') // 나머지 숫자 엔티티 제거
    .replace(/\r\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

async function cleanCollection(collectionName) {
  console.log(`\n🧹 ${collectionName} 정리 중...`);
  const snapshot = await db.collection(collectionName).get();
  let updated = 0;

  for (const doc of snapshot.docs) {
    const data = doc.data();
    const updates = {};

    const fields = ['titleKo', 'titleEn', 'titleJa', 'contentKo', 'contentEn', 'contentJa'];
    for (const field of fields) {
      if (data[field]) {
        const cleaned = cleanText(data[field]);
        if (cleaned !== data[field]) {
          updates[field] = cleaned;
        }
      }
    }

    if (Object.keys(updates).length > 0) {
      await doc.ref.update(updates);
      console.log(`  ✅ 수정: "${cleanText(data.titleKo).slice(0, 50)}"`);
      updated++;
    }
  }

  console.log(`  → ${updated}개 문서 수정 완료 (전체 ${snapshot.size}개)`);
}

(async () => {
  await cleanCollection('notices');
  await cleanCollection('press');
  await cleanCollection('customer_notices');
  console.log('\n✅ HTML 엔티티 정리 완료!');
  process.exit(0);
})();
