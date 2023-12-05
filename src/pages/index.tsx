
import Navbar from '@/components/navbar'
import Contact from './contact'
import Education from './education'


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
