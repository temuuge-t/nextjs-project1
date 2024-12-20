import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useRouter } from "next/router";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const router = useRouter();
  return (
    <div className="bg-slate-950 !scroll-smooth">
      <nav className="w-full h-20 backdrop-blur-xl px-40 flex justify-between items-center sticky top-0">
        <img src="https://nhs.edu.mn/favicon.ico" className="h-16" />
        <div>
          <a href="#about" className="mr-6 transition-all ease-in-out delay-150 duration-300 hover:text-purple-200 text-white ">About us</a>
          <button className="px-4 h-10 bg-white/10 text-blue-100 font-medium rounded-3xl border border-gray-700 transition-all ease-in-out delay-150 duration-300 hover:text-purple-200 hover:animate-pulse">Get Started</button>
        </div>
      </nav>
      <main className="w-full flex flex-col items-center">
        <p className="text-7xl text-center mt-12 font-title text-white">Welcome to our class'<br />student dashboard.</p>
        <p className="text-center mt-8 font-title text-white">Welcome to the student dashboard of class 11B.<br />Expect many more features and pages to be added later on!</p>
        <button onClick={() => router.push('/students')} className="px-4 h-10 mt-12 bg-white/10 text-blue-100 font-medium rounded-3xl border border-gray-700 transition-all ease-in-out delay-150 duration-300 hover:text-purple-200 hover:animate-pulse">Straight to Dashboard</button>
        <div className="w-full h-[44rem] px-40 mt-20">
          <div className="w-full h-5/6 bg-slate-900 outline outline-1 outline-gray-600 border-8 rounded-xl border-slate-800 shadow-[0px_0px_69px_3px_#072c52] ">
            <Image src="/Screenshot.png" width={1300} height={1300} />
          </div>
        </div>
        <div className="w-full h-[36rem] px-40 pb-12 grid grid-cols-3 gap-4 place-content-center" id="about">
          <div className="bg-slate-900 h-96 rounded-xl border-gray-700 flex items-center justify-center">
            <p className="text-gray-300 text-5xl font-title italic">Get to know<br />more about us...</p>
          </div>
          <div className="bg-slate-900 col-span-2 h-96 rounded-xl border-gray-700 flex items-center">
            <p className="text-gray-400 px-12 text-lg hover:scale-110 ease-in-out delay-150 duration-500 hover:text-xl hover:px-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </main>
    </div>

  )
}
