import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';
import SiteNav from './components/Navbar/SiteNav';
import Projects from './components/Projects/Projects';

function App () {

  return (
    <>
      <SiteNav/>
      <Header/>
      <About/>
      <Projects/>
      <Blogs/>
    </>
  )
}

export default App;