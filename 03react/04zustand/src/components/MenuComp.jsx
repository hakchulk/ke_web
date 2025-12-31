import React from "react";
import { Link } from "react-router-dom";

function MenuComp() {
  return (
    // navbar: daisyUI의 내비게이션 바 컨테이너
    // bg-base-100: 테마에 따른 기본 배경색 (보통 흰색)
    // shadow-md: 하단 그림자
    <nav className="flex justify-between navbar bg-base-100 shadow-md px-4 md:px-8 mb-8">
      {/* 왼쪽 영역: 로고 */}
      <div className="flex-1">
        <Link
          to="/"
          className="btn btn-ghost text-2xl font-black tracking-tighter text-primary"
        >
          com
        </Link>
      </div>

      {/* 오른쪽 영역: 메뉴 링크들 */}
      <div className="flex">
        <ul className="menu menu-horizontal px-1 font-semibold gap-1">
          <li>
            <Link to="/" className="hover:text-primary">
              home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-primary">
              about
            </Link>
          </li>
          <li>board</li>
        </ul>

        {/* 로그인 버튼: btn-primary 클래스로 강조 */}
        <div className="ml-4">
          <Link
            to="/login"
            className="btn btn-primary btn-sm md:btn-md rounded-lg shadow-sm"
          >
            로그인
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default MenuComp;
