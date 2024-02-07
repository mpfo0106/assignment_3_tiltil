import Link from "next/link";
import HeaderAuthButtons from "./_components/HeaderAuthButtons";

function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      {/* Logo on the left */}
      <div className="logo">
        <Link href="/" className="text-xl font-bold">
          띨띨
        </Link>
      </div>

      <nav className="flex-grow mx-4">
        <ul className="flex justify-center space-x-4">
          <li className="hover:text-gray-400">
            <Link href="/til/trending">트렌딩</Link>
          </li>
          <li className="hover:text-gray-400">
            <Link href="/til/latest">최신</Link>
          </li>
          <li className="hover:text-gray-400">
            <Link href="/til/write">TIL 쓰러가기</Link>
          </li>
        </ul>
      </nav>

      <HeaderAuthButtons />
    </header>
  );
}

export default Header;
