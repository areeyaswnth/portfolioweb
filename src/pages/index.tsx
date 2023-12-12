
import Navbar from '@/components/navbar'


import About from './About'
import Education from './Education'
import Contact from './Contact'


export default function Home() {
  return (
    <div >
      <header className="fixed w-full"> <Navbar></Navbar></header>
      <main >
        <Contact></Contact>
      </main>
      <footer></footer>
    </div>

  )
}
