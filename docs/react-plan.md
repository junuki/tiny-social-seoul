# React 적용 전환 계획

## Summary
현재 프로젝트는 Vite + React 환경이 이미 들어와 있지만, 실제로는 [`src/App.js`](/Users/manbokha/dev/projects/tiny/tiny-social-seoul/src/App.js)에서 [`src/content.html`](/Users/manbokha/dev/projects/tiny/tiny-social-seoul/src/content.html)을 문자열로 fetch해 통째로 렌더링하는 구조입니다. 이 방식은 초기 퍼블리싱에는 빠르지만, 이벤트 데이터 분리, FAQ 상태 관리, 라우팅 확장, 회원가입/게시판 추가 시 다시 크게 뜯어야 합니다.

추천 방향은 `정적 섹션은 HTML partial로 유지`하고, React는 `페이지 조립`, `동적 데이터 주입`, `상호작용`, `라우팅`을 담당하는 하이브리드 구조입니다. 퍼블리셔는 HTML 중심으로 작업할 수 있고, 개발자는 React 경계만 관리하면 됩니다.

## Key Changes
- `src/content.html` 단일 파일 구조를 해체하고, `hero/about/how/footer` 같은 거의 정적인 블록은 `src/content/*.html` partial로 분리합니다.
- React 앱은 각 partial을 로드해 섹션 단위로 렌더링하는 `StaticSection` 계층을 둡니다.
- `events`와 `faq`는 문자열 HTML에서 분리해 React 컴포넌트로 전환합니다.
  이유: 이벤트는 향후 API 연동 대상이고, FAQ는 현재 inline `onclick`에 의존하므로 React state로 바꾸는 편이 맞습니다.
- 이벤트 데이터는 우선 로컬 데이터 모듈로 분리합니다.
  예: `src/data/events.js` 또는 `src/mocks/events.js`
  이후 API 연동 시 같은 화면 컴포넌트가 `static data -> fetched data`로만 소스가 바뀌도록 맞춥니다.
- 앱 구조는 라우팅 전제를 두고 정리합니다.
  초기 페이지는 `/` 랜딩
  추후 `/signup`, `/community` 또는 `/board`를 추가할 수 있도록 `react-router-dom` 도입을 기준으로 설계합니다.
- 디자인 시스템 수준의 공용 토큰은 현재 [`src/index.css`](/Users/manbokha/dev/projects/tiny/tiny-social-seoul/src/index.css)에 이미 모여 있으므로 유지하되, 섹션별 CSS 책임만 나눕니다.
  추천: 공용 토큰/리셋은 `index.css`, 페이지/컴포넌트별 스타일은 `styles/`로 분리

## Public Interfaces / Types
- `StaticSection` 인터페이스
  입력: `src`, `className` 정도만 받는 단순 wrapper
  역할: 퍼블리셔가 만든 정적 HTML partial을 읽어와 렌더링
- `Event` 타입 초안
  `id`, `status`, `titleKo`, `titleEn`, `date`, `timeText`, `durationText`, `venue`, `city`, `capacityText`, `speakerName`, `speakerBio`, `summary`, `note`, `applyUrl`, `venueUrl`, `theme`
- `FaqItem` 타입 초안
  `id`, `question`, `answer`
- 데이터 공급 계층
  초기: `getEvents(): Promise<Event[]>`가 로컬 mock 반환
  이후: 동일 함수가 API fetch로 교체
- 라우트 구조
  `/` 랜딩 페이지
  `/signup` 회원가입 페이지 placeholder
  `/board` 게시판 페이지 placeholder
  공통 `Layout`에서 nav/footer 재사용

## Test Plan
- 랜딩 페이지가 기존 시안과 동일한 시각 구조를 유지하는지 확인
  hero/about/how/footer는 partial 기반으로 렌더링
- 이벤트 섹션이 데이터 배열만으로 2개 이상 카드 렌더링되는지 확인
- FAQ 아코디언이 React state로 정상 열림/닫힘 되는지 확인
- 정적 partial이 누락되거나 fetch 실패 시 fallback UI 또는 무시 가능한 에러 로그가 나오는지 확인
- 라우터 추가 후 `/`, `/signup`, `/board` 직접 진입이 깨지지 않는지 확인
- 이후 API 전환 시 `EventList` 컴포넌트 수정 없이 데이터 소스만 바꿔도 동작하는지 확인

## Assumptions
- 퍼블리셔 작업 방식은 `섹션 HTML 유지`를 기본으로 둡니다.
- 이벤트/FAQ처럼 구조화된 데이터가 필요한 영역만 React 컴포넌트화합니다.
- 회원가입/게시판은 이번 단계에서 완구현하지 않고, 라우팅 가능한 빈 페이지와 공통 레이아웃만 준비합니다.
- SSR/Next.js 전환까지는 아직 범위에 넣지 않고, 현재 Vite SPA를 기준으로 확장합니다.
- API 연동 전까지는 mock data를 실제 API 계약의 초안으로 사용합니다.
