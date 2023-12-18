import Navbar from '@/components/navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './About'
import Education from './Education'
import Contact from './Contact'
import Experience from './Experience'
import Activity from './Activity';


export default function Home() {
  return (
    <div>
      <Router>
        <header className="fixed w-full"><Navbar /></header>
        <main>
          <Routes>
            <Route path="/About" element={<About />} />
            <Route path="/Education" element={<Education />} />
            <Route path="/Experience" element={<Experience />} />
            <Route path="/Activity" element={<Activity />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </main>
        <footer></footer>
      </Router>
    </div>
  )
}