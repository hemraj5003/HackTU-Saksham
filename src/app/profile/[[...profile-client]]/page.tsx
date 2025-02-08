"use client"
import { useUser } from '@clerk/nextjs'
import React from 'react'
const page = () => {
    const{isLoaded,isSignedIn,user}=useUser()
    if(!isLoaded || !isSignedIn){
        return null
    }
    console.log(`USersrsr L: ${JSON.stringify(user)}`);
    
  return (
    <div className='h-full flex flex-col items-center  justify-center text-2xl'>
        Hello, {user.username} welcome to this shit posting app mf
    </div>
  )
}

export default page