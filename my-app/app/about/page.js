import React from 'react'
import NavBar from '@/components/navbar'
import PageFooter from "@/components/footer";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      
      <NavBar/>

    <div className="items-center">
        <p>About Us</p>
    </div>

      <PageFooter/>
    </main>  
  )
}
