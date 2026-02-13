# Blog (Figma 스타일 구조)

[Figma Blog](https://www.figma.com/blog/)와 비슷한 구조의 블로그입니다.

## 구조

- **헤더**: 카테고리(Maker Stories, Working Well, Inside, Insights), Topics 드롭다운, Subscribe 버튼
- **히어로**: Featured 포스트 (그린 배경 + 이미지)
- **캐러셀 섹션**: "From user behavior to human behavior" — 가로 스크롤 아티클 카드
- **인사이트 그리드**: "Insights on software"
- **뉴스레터**: 이메일 구독 폼
- **The latest**: 최신 포스트 그리드
- **푸터**: Product, Resources, Company 링크

## 실행

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 으로 접속하세요.

## 라우트

- `/` — 메인 (피처 + 캐러셀 + 인사이트 + 뉴스레터 + 최신)
- `/post/[slug]` — 개별 포스트
- `/category/[id]` — 카테고리별 목록 (maker-stories, working-well, inside, insights)
- `/topic/[slug]` — 토픽별 목록

## 콘텐츠

포스트 데이터는 `lib/data.ts`의 `POSTS` 배열에서 수정할 수 있습니다. 실제 블로그에서는 MDX, CMS, 또는 파일 기반 라우트로 교체하면 됩니다.
