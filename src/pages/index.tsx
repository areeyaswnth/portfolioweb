import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import Contact from './Contact'
import ProfilePic from '@/components/profile'


export default function Home() {
  return (
    <div >
      <header className="top-0 z-50 "> <Navbar></Navbar></header>
      <main className='w-screen h-screen' >
        <div className='items-center'>Testtt<Contact></Contact></div>
      </main>
      <footer></footer>
    </div>

  )
}
