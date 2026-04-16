## 🧭 뉴스 정보 나침반 - Frontend 설정 및 구조

### 🛠 1. 기술 스택 (Tech Stack)
* **프레임워크:** React (Vite 기반)
* **언어:** TypeScript (타입 지정으로 안정성 확보)
* **스타일링:** Tailwind CSS v4 (직관적인 유틸리티 클래스 기반 디자인)
* **API 통신:** Axios
* **라우팅:** React Router v6

---

### 📂 2. 주요 디렉토리 구조
작업이 완료된 `frontend/src`의 핵심 구조입니다.

* `src/components/`: 화면을 구성하는 공통 부품 (예: `Header.tsx`)
* `src/pages/`: 라우터에 연결되는 전체 화면 (예: `MainPage.tsx`, `DetailPage.tsx`)
* `src/App.tsx`: 페이지 조립 및 전역 라우터 설정
* `src/index.css`: Tailwind 최상위 스타일 적용 (`@import "tailwindcss";`)

---

### 🚀 3. 초기 세팅 가이드 (Setup Commands)
프로젝트 생성부터 Tailwind CSS v4 설정까지의 통합 명령어입니다.

```bash
# 1. Vite를 사용해 React+TypeScript 프로젝트 생성 및 이동
npm create vite@latest frontend -- --template react-ts
cd frontend

# 2. 필수 라이브러리 설치 (통신, 라우터)
npm install
npm install axios react-router-dom

# 3. Tailwind CSS v4 설치 및 Vite 플러그인 추가
npm install -D tailwindcss @tailwindcss/vite
```

### 주요 구현 화면 (Phase 1 - UI 뼈대)
* **Header (Header.tsx):** 서비스 로고와 뉴스 검색창을 포함한 고정 상단바

* **MainPage (MainPage.tsx):** 뉴스 목록을 보여주는 카드 형태의 UI와 '크롤링 실행' 트리거 버튼 구현

* **DetailPage (DetailPage.tsx):** 기사 본문 원본과 AI 분석 결과(허위뉴스 위험도, 어려운 용어 풀이, 핵심 인물 정보)를 나란히 보여주는 2단 그리드 레이아웃 적용
