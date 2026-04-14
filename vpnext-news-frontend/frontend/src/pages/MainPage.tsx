import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="flex flex-col gap-6 mt-8">
      {/* 타이틀 및 크롤링 버튼 영역 */}
      <div className="flex justify-between items-center border-b pb-4">
        <h1 className="text-2xl font-bold text-gray-800">최신 뉴스 목록</h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-green-700 transition shadow-sm">
          🔄 최신 뉴스 수집 (크롤링)
        </button>
      </div>

      {/* 뉴스 리스트 뼈대 (임시 데이터) */}
      <div className="grid gap-4">
        {/* 첫 번째 뉴스 카드 */}
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition">
          <Link to="/news/1">
            <h2 className="text-lg font-bold text-gray-900 hover:text-indigo-600 mb-2 transition">
              [임시 제목] AI 기술의 발전, 어디까지 왔나?
            </h2>
          </Link>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            이곳에 기사 요약 내용이 들어갑니다. 나중에 백엔드 API가 연결되면
            실제 스크래핑된 데이터로 교체될 예정입니다.
          </p>
          <div className="text-xs text-gray-400 font-medium">
            발행일: 2026. 04. 14 | 출처: 임시 언론사
          </div>
        </div>

        {/* 두 번째 뉴스 카드 */}
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition">
          <Link to="/news/2">
            <h2 className="text-lg font-bold text-gray-900 hover:text-indigo-600 mb-2 transition">
              [임시 제목] 자율주행 자동차 시대의 도래
            </h2>
          </Link>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            두 번째 기사의 본문 일부입니다. 뉴스 정보 나침반의 캡스톤 디자인
            프로젝트 프론트엔드 테스트용 텍스트입니다.
          </p>
          <div className="text-xs text-gray-400 font-medium">
            발행일: 2026. 04. 13 | 출처: 임시 언론사
          </div>
        </div>
      </div>
    </div>
  );
}
