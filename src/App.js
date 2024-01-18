// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Gallery from './components/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import '../src/styles/App.css';

function App() {
  return (
    <Router>
      <div className="App text-orange-500 bg-gray-800">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          {/* Add other components or pages here */}
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
