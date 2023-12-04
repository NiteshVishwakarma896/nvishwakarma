import About from "./components/About/About";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";
import SiteNav from "./components/Navbar/SiteNav";
import Projects from "./components/Projects/Projects";

export default function Home() {
  return (
    <main>
      <SiteNav/>
      <Header/>
      <About/>
      <Projects/>
      <Blogs/>
    </main>
  )
}
