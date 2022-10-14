import './App.css';
import Navbar from './navbar';
import Home from './home';
import Favourites from './favourites';
import State from './state';
import Footer from './footer';
import Signup from './addfav';
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/favourites' element={<Favourites/>}/>
          <Route path='/state' element={<State/>}/>
          <Route path='/addfav' element={<Signup/>}/>
  
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
