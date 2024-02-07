import Link from "next/link";

function HeaderAuthButtons() {
  return (
    <div className="flex gap-x-4 items-center">
      <Link href="/sign-up" prefetch className="hover:text-gray-400">
        회원가입하기
      </Link>
      <Link href="/log-in " className="hover:text-gray-400">
        로그인하기
      </Link>
    </div>
  );
}

export default HeaderAuthButtons;
