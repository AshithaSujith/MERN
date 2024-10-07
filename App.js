import React from 'react';
import './App.css';
import Front from './components/Front';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetail from './components/ProductDetail'; 
// import BlogForm from './components/BlogForm';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Front />} />
          <Route path="/blog/:id" element={<ProductDetail />} />
          {/* <Route path="/create-blog" element={<BlogForm />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
