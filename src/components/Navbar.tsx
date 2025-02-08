"use client"
import { useAuth,UserButton } from '@clerk/nextjs'
import Link from 'next/link'
const Navbar = () => {
  const { isLoaded, isSignedIn, userId } = useAuth()

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  return (
    <div className='bg-black text-white font-bold tracking-wider shadow-inner shadow-red-400 flex flex-row w-full p-5 space-x-2 h-[5rem] justify-around items-center'>
      <Link href={"/home"}>Home</Link>
      <Link href={"/home"}>About</Link>
      {
        !isSignedIn ? (
          <>
            <Link href={"/sign-in"}>Login</Link>
            <Link href={"/sign-up"}>SignUp</Link>
          </>     
        ) : (
          <>
            <Link href={'/profile'}>Profile</Link>
            <UserButton />
          </>
        )
      }
    </div>
  )
}

export default Navbar