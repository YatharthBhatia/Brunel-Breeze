<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/homePage";
import Registration from "./pages/registrationPage";
import Congrats from "./pages/congratulations";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/success" element={<Congrats />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
=======
import React from 'react'
import {Footer, Hero, AccordionDemo, Congratulations, Registration} from './components/';

const Hello = () => {
  return (
    <>
    <Hero />
    <AccordionDemo />
    <Footer />
    <Congratulations />
    <Registration />
    </>
  )
}

export default Hello;
>>>>>>> origin/main
