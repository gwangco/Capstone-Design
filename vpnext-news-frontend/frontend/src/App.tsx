import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    // BrowserRouter: 페이지 이동을 가능하게 해주는 껍데기
    <BrowserRouter>
      {/* 전체 화면의 바탕색과 기본 글자색 지정 */}
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans pb-20">
        {/* Header는 모든 페이지에서 고정으로 보여집니다 */}
        <Header />

        {/* 화면 중앙 정렬 및 최대 너비 지정 */}
        <main className="max-w-5xl mx-auto p-4">
          <Routes>
            {/* 기본 주소(/)로 접속하면 MainPage를 보여줌 */}
            <Route path="/" element={<MainPage />} />
            {/* /news/숫자 형태의 주소로 접속하면 DetailPage를 보여줌 */}
            <Route path="/news/:id" element={<DetailPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
