//unique UI which we see when we visit localhost:3000

import Image from "next/image";
import NavBar from '../components/navbar'
import PageFooter from "@/components/footer";

export default function Home() {
  return (

    //<main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="flex flex-col min-h-screen items-center justify-center p-24">
      
    <NavBar/>
    <div className="text-5xl font-bold items-center p-3">
      CU AIM
    </div>

    <div className="text-1xl font-semibold items-center p-3">
      Cambridge University Medicine in AI Society
    </div>

    <div className="text-sm p-5 ">
      <a href="https://lists.cam.ac.uk/sympa/subscribe/soc-aim"
        className="group rounded-full border border-transparent px-5 py-4 transition-colors border-gray-300 hover:bg-gray-100  dark:border-gray-300 dark:hover:bg-gray-900">
        Join the Society
      </a>
    </div>


    

    <PageFooter/>

    </main>
  );
}
