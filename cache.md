return (
    <main className="flex justify-center items-center h-[100vh] flex-col text-lg">
      <h1>Welcome 👋</h1>
      <div className="flex gap-1 items-center">
        <button
          className="bg-blue-400 
       py-2 px-4 rounded-lg"
          onClick={() => signIn("google", { callbackUrl: "/user" })}
        >
          Login
        </button>

        <p>to access dashboard</p>
      </div>
    </main>
  );