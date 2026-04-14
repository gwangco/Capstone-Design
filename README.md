## 🧭 뉴스 정보 나침반 (Frontend)

### 🛠 1. 기술 스택
**React (Vite) | TypeScript | Tailwind CSS v4 | Axios | React Router v6**

---

### 📂 2. 주요 폴더 구조
```text
src/
├── components/  # 공통 컴포넌트 (Header 등)
├── pages/       # 전체 화면 (MainPage, DetailPage)
├── App.tsx      # 전역 라우터 설정
└── index.css    # Tailwind 진입점 (@import "tailwindcss";)

🚀 3. 초기 세팅 명령어

# 1. Vite React+TS 프로젝트 생성
npm create vite@latest frontend -- --template react-ts
cd frontend

# 2. 필수 패키지 및 Tailwind v4 설치
npm install
npm install axios react-router-dom
npm install -D tailwindcss @tailwindcss/vite


💡 4. 구현 화면 (Phase 1)
Header: 로고 및 전역 뉴스 검색창

MainPage: 최신 뉴스 리스트 카드, 크롤링 트리거 버튼

DetailPage: 기사 원본 + Gemini AI 분석(위험도, 용어, 핵심 인물) 2단 레이아웃
