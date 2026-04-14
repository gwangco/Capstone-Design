import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-5xl mx-auto p-4 flex justify-between items-center">
        {/* 로고 영역 */}
        <Link
          to="/"
          className="text-xl font-black text-indigo-600 tracking-tight"
        >
          🧭 뉴스 정보 나침반
        </Link>

        {/* 검색창 영역 */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="뉴스 검색..."
            className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
          <button className="bg-indigo-600 text-white px-4 py-1.5 rounded-md text-sm font-semibold hover:bg-indigo-700 transition">
            검색
          </button>
        </div>
      </div>
    </header>
  );
}
