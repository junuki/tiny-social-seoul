# React 전환 작업 내역 및 후속 개발 가이드

## 1. 이번 작업에서 반영한 내용

기존 구조는 `src/content.html` 전체를 문자열로 읽어 `dangerouslySetInnerHTML`로 렌더링하는 방식이었습니다. 이 구조를 아래처럼 하이브리드 방식으로 전환했습니다.

- 정적 섹션은 HTML partial 로 분리
  - `src/content/hero.html`
  - `src/content/about.html`
  - `src/content/how.html`
  - `src/content/footer.html`
- React 는 페이지 조립, 라우팅, 동적 데이터, 상호작용 담당
  - `src/App.jsx`
  - `src/components/Layout.jsx`
  - `src/components/StaticSection.jsx`
  - `src/components/EventsSection.jsx`
  - `src/components/FaqSection.jsx`
- 이벤트 데이터는 별도 데이터 계층으로 분리
  - `src/data/events.js`
  - `src/services/events.js`
- FAQ 는 inline `onclick` 제거 후 React state 기반 아코디언으로 전환
  - `src/data/faqs.js`
- 향후 확장을 위한 라우트 추가
  - `/`
  - `/signup`
  - `/board`
- GitHub Pages 직접 진입 대응 추가
  - `public/404.html`
- 기존 공용 스타일은 유지하고, 라우팅/placeholder 성격의 스타일만 분리
  - `src/styles/app.css`

## 2. 현재 구조 설명

### 정적 퍼블리싱 영역

퍼블리셔가 계속 HTML 위주로 작업할 수 있도록, 거의 고정된 섹션은 `src/content/*.html` 로 유지합니다.

- 수정 대상
  - 히어로 문구/레이아웃
  - About 섹션 문구
  - How 섹션 문구
  - Footer 문구/링크
- 렌더링 방식
  - `StaticSection` 이 Vite `?raw` import 로 HTML partial 을 읽어 화면에 출력

즉, 퍼블리셔는 React 컴포넌트 파일을 건드리지 않고도 주요 랜딩 섹션을 수정할 수 있습니다.

### React 가 관리하는 영역

동적 확장 가능성이 있는 영역은 React 로 분리했습니다.

- `EventsSection`
  - 현재는 `getEvents()` 가 로컬 mock 데이터를 반환
  - 추후 API 연동 시 `src/services/events.js` 만 교체하면 되도록 구성
- `FaqSection`
  - 현재는 단일 열림 상태 아코디언
  - React state 로 열림/닫힘 제어
- `Layout`
  - 공통 nav + footer
  - 추후 회원가입/게시판 등 페이지가 늘어나도 동일 레이아웃 재사용 가능

## 3. 앞으로 개발할 때의 권장 방식

### 이벤트 API 연동

현재 이벤트 목록은 `src/data/events.js` 에 하드코딩되어 있습니다. 이후 API 연동 시에는 아래 순서로 바꾸는 것을 권장합니다.

1. `src/services/events.js` 에서 외부 API 호출 구현
2. API 응답을 현재 화면이 쓰는 이벤트 shape 로 정규화
3. `EventsSection.jsx` 는 그대로 유지

권장 원칙:

- 컴포넌트에서 직접 fetch 하지 말고 service 레이어를 유지
- API 응답 원본 shape 를 바로 UI 에 연결하지 말고 중간 정규화 계층을 둘 것
- 날짜, 상태값, 링크값은 service 단계에서 가공할 것

### 회원가입 페이지 개발

현재 `/signup` 은 placeholder 상태입니다. 실제 개발 시 아래 단위로 확장하면 됩니다.

- 1차
  - 기본 가입 폼
  - 입력값 검증
  - 제출 버튼 및 에러 처리
- 2차
  - 약관 동의
  - 이메일 인증 또는 소셜 로그인
  - 완료 화면

권장 파일 방향:

- `src/pages/SignupPage.jsx`
- 필요 시 `src/components/signup/` 하위 분리

### 게시판 페이지 개발

현재 `/board` 도 placeholder 상태입니다. 실제 게시판 도입 시 아래 구조를 권장합니다.

- `/board`
  - 목록 페이지
- `/board/:postId`
  - 상세 페이지
- `/board/write`
  - 작성 페이지

권장 원칙:

- 목록/상세/작성은 페이지 단위로 분리
- 공통 카드/폼은 `components` 로 분리
- API 연동은 게시판도 service 레이어로 분리

### 정적 섹션 추가/수정

새로운 정적 섹션이 필요하면 아래 방식으로 추가하면 됩니다.

1. `src/content/` 에 HTML 파일 추가
2. `HomePage.jsx` 또는 다른 page 컴포넌트에서 `StaticSection` 으로 삽입
3. 필요한 CSS 는 기존 `src/index.css` 또는 별도 스타일 파일에 추가

정적인 레이아웃과 문구 위주라면 partial 유지가 적합합니다.  
반대로 데이터 반복, 상태 변화, 사용자 입력이 들어가면 React 컴포넌트로 만드는 쪽이 맞습니다.

## 4. 확인 및 실행 방법

### 로컬 개발 서버 실행

```bash
npm install
npm run dev
```

브라우저에서 아래를 확인합니다.

- `/tiny-social-seoul/` 또는 dev 서버 기본 경로에서 메인 랜딩 노출
- nav 클릭 시 섹션 이동 동작 확인
- 이벤트 카드 2개 렌더링 확인
- FAQ 아코디언 열림/닫힘 확인
- `/signup` 진입 확인
- `/board` 진입 확인

### 프로덕션 빌드 확인

```bash
npm run build
```

확인 포인트:

- 빌드 성공 여부
- `dist/index.html` 생성 여부
- `dist/404.html` 생성 여부
- GitHub Pages 직접 진입 대응 파일 포함 여부

### GitHub Pages 배포 확인

배포 후 아래를 확인합니다.

- 메인 페이지 정상 진입
- 새로고침 시 라우트 유지 여부
  - `/signup`
  - `/board`
- footer / nav 링크 정상 동작 여부

## 5. 후속 작업 체크리스트

- `events` 데이터를 실제 API 또는 CMS 와 연결
- `faq` 도 필요 시 데이터 파일 또는 CMS 로 분리
- 회원가입 폼/인증 플로우 구현
- 게시판 목록/상세/작성 페이지 확장
- 필요 시 `react-router-dom` 기준 nested route 구조 고도화
- 정적 partial 이 많아질 경우 `content` 디렉터리 규칙 문서화
- 이벤트/FAQ 데이터에 대한 타입 관리 도입 검토
  - TypeScript 전환 또는 JSDoc 타입 명시

## 6. 주의사항

- `src/content.html` 과 `src/App.js` 는 더 이상 사용하지 않습니다.
- JSX 를 사용하는 파일은 `.jsx` 확장자를 유지해야 합니다.
- 정적 HTML partial 내부에는 React 이벤트 핸들러를 넣지 않습니다.
- React 가 관리하는 화면과 partial HTML 의 역할을 섞지 않는 것이 중요합니다.

현재 권장 경계는 아래와 같습니다.

- 정적 문구/레이아웃: `src/content/*.html`
- 동적 데이터/상태/UI 제어: `src/components/*.jsx`, `src/pages/*.jsx`
- 데이터 소스 교체 지점: `src/services/*.js`
