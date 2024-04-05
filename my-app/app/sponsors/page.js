import React from 'react'
import NavBar from '@/components/navbar'
import PageFooter from "@/components/footer";

export default function Sponsors() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      
    <NavBar/>

    <div className="items-center">
        <p>Our Sponsors</p>
    </div>

      <PageFooter/>
    </main>
  )
}
