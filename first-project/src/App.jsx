import { BrowserRouter, Routers, Router } from 'react-router-dom';
import Contact from './pages/contact/Contact';
import Trainers from './pages/trainers/Trainers';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Gallery from './pages/gallery/gallery';
import Plans from './pages/plans/Plans';
import Notfound from './pages/notfound/Notfound';
import Navbar from './components/Navbar';



 const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Home/>
      <About/>
      <Contact></Contact>
      <Trainers></Trainers>
      <Gallery/>
      <Plans/>
      <Notfound/>
   
    </BrowserRouter>
  )
}

export default App;