
import Navbar from '@/components/navbar'


import About from './about'


export default function Home() {
  return (
    <div >
      <header className="fixed w-full"> <Navbar></Navbar></header>
      <main >
        <About></About>
      </main>
      <footer></footer>
    </div>

  )
}
