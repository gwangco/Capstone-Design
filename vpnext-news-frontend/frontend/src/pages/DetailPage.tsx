import { useParams } from "react-router-dom";

export default function DetailPage() {
  // URL에서 뉴스 ID 번호를 가져옵니다. (예: /news/1 이면 id는 "1")
  const { id } = useParams();

  return (
    <div className="flex flex-col md:flex-row gap-6 mt-8">
      {/* 왼쪽: 기사 원본 영역 */}
      <div className="flex-1 bg-white p-8 rounded-xl shadow-sm border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          [임시 제목] {id}번 뉴스 상세 페이지입니다
        </h1>
        <div className="text-sm text-gray-500 mb-8 border-b pb-4 flex justify-between">
          <span>발행일: 2026. 04. 14</span>
          <a href="#" className="text-indigo-500 hover:underline">
            원문 링크
          </a>
        </div>
        <div className="text-gray-700 leading-loose mb-10 min-h-[300px]">
          여기에 뉴스 기사의 전체 본문이 출력됩니다. 백엔드의 BeautifulSoup
          패키지로 스크래핑한 기사 전문 텍스트가 들어갈 자리입니다.
        </div>
        <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold py-4 rounded-lg hover:opacity-90 transition shadow-md">
          ✨ Gemini AI 전체 분석 실행하기
        </button>
      </div>

      {/* 오른쪽: AI 분석 결과 영역 */}
      <div className="w-full md:w-80 flex flex-col gap-4">
        {/* 허위뉴스 신뢰도 */}
        <div className="bg-red-50 p-5 rounded-xl border border-red-100">
          <h3 className="font-bold text-red-800 mb-2 flex items-center gap-2">
            🚨 허위뉴스 위험도
          </h3>
          <div className="text-3xl font-black text-red-600">85%</div>
          <p className="text-xs text-red-700 mt-2">
            주의: 자극적인 제목이 사용되었습니다.
          </p>
        </div>

        {/* 어려운 용어 (국립국어원 API 연동 예정) */}
        <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
          <h3 className="font-bold text-blue-800 mb-3">📖 어려운 용어 풀이</h3>
          <ul className="text-sm text-blue-900 space-y-3">
            <li>
              <strong className="block text-blue-700">LLM</strong> 대규모 언어
              모델의 약자...
            </li>
            <li>
              <strong className="block text-blue-700">할루시네이션</strong>{" "}
              인공지능이 환각을 일으켜...
            </li>
          </ul>
        </div>

        {/* 핵심 인물 */}
        <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100">
          <h3 className="font-bold text-emerald-800 mb-3">
            👤 핵심 인물 프로필
          </h3>
          <p className="text-sm text-emerald-900">
            <strong>홍길동:</strong> 해당 이슈에 대해 논평한 IT 전문가...
          </p>
        </div>
      </div>
    </div>
  );
}
