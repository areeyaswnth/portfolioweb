
import Navbar from '@/components/navbar'
import Contact from './contact'
import Education from './education'
import About from './about'
import Activity from './activity'


export default function Home() {
  return (
    <div >
      <header className="fixed w-full"> <Navbar></Navbar></header>
      <main >
        <Activity></Activity>
      </main>
      <footer></footer>
    </div>

  )
}
