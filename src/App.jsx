import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from './components/Footer';
import Hero from './components/Hero';
import Header from './components/Hero';
import Join from './components/Join';
import Plans from './components/Plans';
import Programs from './components/Programs';
import Reasons from './components/Reasons';
import Testimonials from './components/Testimonials';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Hero/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/program' element={<Programs/>}/>
        <Route path='/plan' element={<Plans/>}/>
        <Route path='/reasons' element={<Reasons/>}/>
        <Route path='/testimonials' element={<Testimonials/>}/>
      </Routes>
      </BrowserRouter>
         <Programs/>
        <Reasons/>
        <Plans/>
        <Testimonials/>
        <Join/>
        <Footer/>
        
    </div>
  );
}

export default App;