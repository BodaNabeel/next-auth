import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function StaticRoute() {
  const { data: session, status } = useSession();
  const name = session?.user.name;
  const router = useRouter();
  if (status === "loading") {
    return <h1> loading</h1>;
  }
  if (!session && status === "unauthenticated") {
    router.replace("/signup");
  }
  return <h1>Welcome {name}! You are in a static protected route!</h1>;
}
