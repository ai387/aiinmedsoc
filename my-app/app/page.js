//unique UI which we see when we visit localhost:3000

import Image from "next/image";
import NavBar from '../components/navbar'
import PageFooter from "@/components/footer";
import Logo1 from "@/components/logo1";
import backgroundimage from '../public/background1.png'


export default function Home() {
  return (

    //<main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="bg-gradient-to-r from-[#04214E] via-[#06347E] to-[#04214E] flex flex-col min-h-screen items-center justify-center p-24">

    <Logo1/>

    <NavBar/>

    <div className="text-5xl text-gray-300 font-bold items-center p-3">
      CU AIM
    </div>

    <div className="text-1xl text-gray-300 font-semibold items-center p-3">
      Cambridge University Medicine in AI Society
    </div>

    <div className="text-sm p-5 text-gray-300">
      <a href="https://lists.cam.ac.uk/sympa/subscribe/soc-aim"
        className="group rounded-full border border-gray-600 px-5 py-3 transition-colors border-gray-300 hover:bg-[#04214E]  dark:border-gray-300 dark:hover:bg-gray-900">
        Join the Society
      </a>
      
    </div>


    

    <PageFooter/>

    </main>
  );
}
