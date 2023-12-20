import { useEffect } from "react";
import About from "./About";
import Education from "./Education";
import Contact from "./Contact";
import Experience from "./Experience";
import Activity from "./Activity";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {

  }, [router.pathname]);

  return (
    <div>
      {router.pathname === "/" && <About />}
      {router.pathname === "/Education" && <Education />}
      {router.pathname === "/Experience" && <Experience />}
      {router.pathname === "/Acticity" && <Activity />}
      {router.pathname === "/Contact" && <Contact />}
      <footer></footer>
    </div>
  );
}
