import Header from "./Header";

export default function layout({children}) {
  return (
   <>
   <Header/>
   <main className="flex flex-col justify-center items-center h-screen font-bold text-xl">{children}</main>
   </>
  )
}
