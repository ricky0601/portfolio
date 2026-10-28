# 한동건 — 프론트엔드 포트폴리오

복잡한 업무 흐름을 이해하기 쉽고 안정적인 화면으로 만드는 프론트엔드 개발자의 한국어 포트폴리오입니다.

- 배포 도메인: https://1dg-portfolio.netlify.app/
- 이메일: movegun0601@gmail.com
- GitHub: https://github.com/ricky0601
- Velog: https://velog.io/@ricky0601/posts

## 구성

인터랙티브 작업실 → 프로젝트 커버와 스크롤 장면 → 선택형 역량 패널 → 경력·학습 배경을 탐색하는 프로필 → 연락처로 이어지는 단일 페이지입니다. 잉크색·라임 포인트, 대형 타이포그래피와 격자 캔버스로 구성합니다. Hero에서 화면 구현·오류 대응·검증을 선택하고, 복구 상태와 검증 단계를 직접 전환할 수 있습니다. 데모는 설명용이며 실제 서비스나 테스트를 실행하지 않습니다.

각 프로젝트는 기여·기술·제약·근거를 먼저 요약하고, **배경 → 과제 → 실행과 판단 → 검증 또는 관찰 결과 → 회고와 다음 과제** 순서로 설명합니다. 두 프로젝트 사례는 스크롤에 따라 고정된 기기 목업(Buddy는 폰, Lokki는 브라우저)의 화면이 바뀌는 장면으로 보여주며, 목업은 설명을 위해 재구성한 화면입니다. 역량과 경력·학력·교육은 선택형 패널로 탐색합니다. 헤더의 모션 멈춤 버튼과 운영체제의 모션 축소 설정으로 자동 애니메이션과 전환 효과를 끌 수 있으며, 정보 탐색과 데모 조작은 유지합니다.

- **우리 Buddy**: 사내 그룹웨어 PWA의 프론트엔드 개발·운영 기여. 공개 가능한 업무 범위만 설명하며 내부 소스, 상세 아키텍처, 비공개 지표는 포함하지 않습니다. 단독 개발을 의미하지 않습니다.
- **Lokki**: 로스트아크 조회·비교·시뮬레이션·계획 도구를 제공하는 공개 개인 프로젝트. [서비스](https://lokki.vercel.app/) · [소스](https://github.com/ricky0601/React_LostArk)

- **이 포트폴리오**: 문서형 UI를 인터랙티브 작업실·스크롤 장면·선택형 패널로 재구성한 웹 프로젝트. 프로젝트 목록에서 이전·현재 UI 구조를 비교할 수 있습니다. 성능·접근성 점수 측정과 자동화 테스트는 다음 과제로 남겨둡니다. [소스](https://github.com/ricky0601/portfolio)

## 실행 및 검증

Node.js 22.12 이상 권장(Vite 7 요구사항).

```sh
npm ci
npm run dev
npm run build
npm run lint
npm run preview
```

React 19, TypeScript, Vite와 plain CSS로 구성하며 추가 UI·애니메이션 라이브러리를 사용하지 않습니다.

## 파일 구조

- `src/App.tsx`: 시맨틱 페이지 구조, 고정 내비게이션, 푸터
- `src/components/*Section.tsx`: 히어로, 프로젝트 사례, 역량, 프로필, 연락처
- `src/components/PortfolioCase.tsx`: 이 포트폴리오의 프로젝트 소개와 이전·현재 UI 비교
- `src/components/ScrollScene.tsx`: 스크롤 장면 공용 컴포넌트(단계 텍스트와 기기 목업 상태 전환)
- `src/components/BuddyScene.tsx`, `src/components/LokkiScene.tsx`: 프로젝트별 장면 단계와 목업 화면
- `src/index.css`: 전역 스타일, 접근성 기본값, 글꼴
- `src/App.css`: 인터랙티브 작업실, 페이지 디자인과 반응형 레이아웃
- `src/Scene.css`: 프로젝트 스크롤 장면과 설명용 기기 화면
- `src/assets/`: 실제 프로젝트 화면과 프로필 사진
- `index.html`: 한국어 SEO, Open Graph·Twitter 카드, canonical, Person 구조화 데이터
- `public/favicon.svg`, `public/favicon.ico`: 브라우저 파비콘
- `public/apple-touch-icon.png`, `public/icon-*.png`, `public/site.webmanifest`: 모바일·설치 아이콘
- `public/og-image.png`: 링크 공유용 1200×630 미리보기 이미지
- `public/han-donggeon-resume.pdf`: 웹에서 열람하는 공개 이력서
- `public/sitemap.xml`, `public/robots.txt`: 기존 배포 도메인 유지

기존 섹션별 CSS·styles 폴더 및 사용하지 않는 에셋은 이전 작업 보존을 위해 남아 있을 수 있으나 현재 페이지에서 가져오지 않습니다. Vite는 페이지에서 참조하는 에셋만 번들에 포함합니다.

## 접근성 및 공개 범위

본문 바로가기, 키보드 포커스, 섹션 제목, 이미지 대체 텍스트, 새 탭 링크 안내와 reduced-motion을 지원합니다. 글꼴은 Google Fonts의 Noto Sans KR을 사용하며 로드할 수 없으면 시스템 글꼴로 표시합니다.

수치와 경력 내용은 이번 콘텐츠 작업에 제공된 사실 범위를 사용했습니다. 원본 내부 자료나 외부 서비스 분석 데이터에 대한 독립적인 재검증을 의미하지 않습니다.

- Buddy의 84.66% 감소는 PNG 3개(합계 109,235 bytes)를 WebP(합계 16,758 bytes)로 변환한 파일 용량 사례만 의미합니다. 제품 전체 성능 지표가 아닙니다.
- Lokki 검색 지표는 2026-09-18 내보내기 자료를 기준으로 표시합니다: Naver Search Advisor 최근 30일 노출 1,971회·클릭 49회, Google Search Console 최근 28일 노출 55회·클릭 6회. 검색 엔진별 집계 기준과 기간이 달라 합산하지 않습니다.
- 회고의 관점과 ‘개선 제안’은 사례를 설명하기 위한 편집적 해석 및 향후 방향입니다. 완료된 작업이나 확정된 로드맵을 뜻하지 않으며, 본인이 문구를 검토할 대상입니다.
- 경력은 ㈜와이드 · 우리관리 주식회사 정보화추진팀(2025.09 — 현재), 학력은 한국공학대학교 IT경영학과 졸업·이커머스 부전공, 교육은 프로그래머스 TypeScript 풀 사이클 과정 수료만 공개합니다.

프로필 사진은 소개 영역에서만 사용합니다. 프로젝트 화면은 캡처 시점의 모습이며 현재 서비스와 다를 수 있습니다. 사용자가 공개용으로 지정한 이력서 PDF는 Hero와 Contact 영역에서 새 탭으로 열 수 있습니다.
