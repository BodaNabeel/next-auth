import { getSession, signOut } from "next-auth/react";

export default function UserPage({ token }) {
  function Foo() {
    console.log("foo");
  }
  if (token.status === "loading") {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="ml-5">
      <h1>Hello {token.user.name}</h1>
      <button onClick={signOut}>logout</button> <br />
      <button onClick={Foo}>foo</button>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      props: { token: session },
    };
  } else {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};
