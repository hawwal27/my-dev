import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home"
import QuoteForm from './pages/QouteForm';




const App = () => {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/QuoteForm" element={<QuoteForm/>} />
      </Routes>
    </Router>
  )
}

export default App
