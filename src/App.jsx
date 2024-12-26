import React from 'react';
import { Routes, Route } from 'react-router-dom';
import QuizApp from './components/QuizApp';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  return (
    <>
      {/* Navbar component */}
      <Navbar/>

      {/* Routing setup */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/testselection' element={<QuizApp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
