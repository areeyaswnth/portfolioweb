import Navbar from '@/components/navbar';

import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}