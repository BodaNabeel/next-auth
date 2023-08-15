import { getSession, signIn } from "next-auth/react";

export default function signup(props) {
  const { session } = props;
  console.log(session);
  return (
    <button
      className="border-2 bg-cyan-400 px-6 py-4 rounded-2xl"
      onClick={() => signIn("google")}
    >
      clich here to signup{" "}
    </button>
  );
}
export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  if (session) {
    return {
      notFound: true,
    };
  }
  return {
    props: { session: session },
  };
};
