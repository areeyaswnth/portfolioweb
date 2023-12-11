
import Navbar from '@/components/navbar'


import About from './About'
import Education from './Education'


export default function Home() {
  return (
    <div >
      <header className="fixed w-full"> <Navbar></Navbar></header>
      <main >
        <Education></Education>
      </main>
      <footer></footer>
    </div>

  )
}
