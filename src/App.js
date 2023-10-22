import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Auth from './components/auth/Auth';
import homepg from '../src/imgs/homepg.jpg';
import ViewExpenses from './components/View-expenses/ViewExpenses';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth backgroundImage={homepg} />} />
          <Route path="/viewexpenses" element={<ViewExpenses />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
