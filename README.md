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

```text
src/
├── api.ts              # 백엔드(FastAPI) 통신용 Axios 기본 설정 인스턴스
├── components/         # 화면을 구성하는 공통 부품 (예: Header.tsx)
├── pages/              # 라우터에 연결되는 전체 화면 (예: MainPage.tsx, DetailPage.tsx)
├── App.tsx             # 페이지 조립, 전역 레이아웃 및 라우터 설정
└── index.css           # Tailwind 최상위 스타일 적용 (@import "tailwindcss";)
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

# 4. 개발 서버 실행
npm run dev 실행
```

### 주요 구현 화면 (Phase 1 - UI 뼈대)
* **공통 설정 (api.ts):** 백엔드 서버(localhost:8000)와의 원활한 통신을 위한 Axios 기본 주소 및 헤더 설정 완료.

* **Header (Header.tsx):** 서비스 로고 타이포그래피 강화 및 검색창 일체형 UI 적용. 상단 스크롤 고정 및 블러(Backdrop-blur) 효과 추가.

* **MainPage (MainPage.tsx):**

최신 뉴스 리스트 카드에 마우스 호버(Hover) 시 부드럽게 떠오르는 리프팅 애니메이션 적용.

크롤링 실행 트리거 버튼에 직관적인 아이콘 및 상태 컬러 적용.

* **DetailPage (DetailPage.tsx):**

본문 영역: 뉴스 기사를 읽기 편하도록 넉넉한 줄 간격과 차분한 텍스트 컬러(Slate) 배치.

* **AI 분석 패널:** 허위뉴스 위험도(Red), 어려운 용어(Sky), 핵심 인물(Emerald) 등 정보의 성격에 맞춘 컬러 칩 배열 및 그라데이션 카드 UI 적용.

인터랙션: 'AI 분석 실행하기' 버튼 클릭 시 로딩 애니메이션과 함께 상태(대기 -> 분석 중 -> 완료)가 변하도록 UI 로직 구현.
