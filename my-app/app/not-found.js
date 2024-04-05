import React from 'react'
import NavBar from '../components/navbar'
import PageFooter from "@/components/footer";

// must extract product id and perform an action e.g., perform an api call to fetch
// details about the blog
export default function Blog({params}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <NavBar/>

        <p className='place-items-center'> Page Not Found </p>

    <PageFooter/>
    </main>  
  )
}
