import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  const session = useSession();
  return (
    <header className="mt-1 mx-2 flex justify-between">
      <Link
        className="border-2 py-2 px-6 cursor-pointer flex items-center"
        href="/"
      >
        Home
      </Link>
      <Link className="border-2 py-2 px-6 cursor-pointer" href="/server-route">
        Protected Route - Server
      </Link>
      <Link className="border-2 py-2 px-6 cursor-pointer" href="/static-route">
        Protected Route - Static
      </Link>
      {session.data ? (
        <button
          className="border-2 py-2 px-6 cursor-pointer"
          onClick={() => signOut({ callbackUrl: "http://localhost:3000/" })}
        >
          Logout
        </button>
      ) : null}
    </header>
  );
}
