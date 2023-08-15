import { getSession } from "next-auth/react";

export default function ServerRoute(props) {
  const { user } = props;
  const name = user.user.name;
  return <h1>Welcome {name}! You are in a server protected route!</h1>;
}

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  if (!session) {
    return {
      redirect: {
        destination: "/signup",
        permenant: false,
      },
    };
  } else {
    return {
      props: { user: session },
    };
  }
};
