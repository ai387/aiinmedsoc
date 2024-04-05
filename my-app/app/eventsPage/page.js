import React from 'react'
import NavBar from '@/components/navbar'
import PageFooter from "@/components/footer";

// put in a calendar on this page to show upcoming events
// to look at past events, go to the blog page - add extra link to blog page

export default function Events() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      
      <NavBar/>

      <div className="items-center">
        <p>Events</p>
        <p> put in a calendar - connect to gmail calendar?</p>
        <p>put in a dynamic blog page</p>
      </div>

      <PageFooter/>
      
    </main>
  )
}
