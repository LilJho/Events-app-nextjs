import Link from "next/link";
import React from "react";

function MainHeader() {
  return (
    <header className="w-full flex justify-between items-baseline py-4 px-[10%] h-[5rem] bg-[#202020]">
      <div className="text-[1.5rem] font-sans h-full flex justify-center items-center text-[#94fdfd] md:text-[2.5rem]">
        <Link href="/">
          <a className="no-underline text-[#94fdfd]">NextEvents</a>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/events">
              <a className="no-underline text-[#74dacc] text-[1rem] md:text-[1.5rem]">
                Browse All Events
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
