import React, { useState, useEffect } from 'react';
import './Front.css';
import { Link } from 'react-router-dom';

function Front() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">E-Shop</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Products</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Cart</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Create Blog</a>
                </li>
            </ul>
        </div>
    </nav>
      <header className="bg-primary text-white py-5">
        <div className="container d-flex align-items-center">
          <img
            src="./logo.png"
            alt="E-Shop Logo"
            style={{ width: '200px', height: '200px', marginRight: '30px' }}
          />
          <div className="text-center flex-grow-1">
            <h1>WELCOME TO MISS ELEGANT!</h1>
          </div>
        </div>
      </header>

      <section id="products" className="container my-5">
        <h2 className="text-center mb-4">Featured Products</h2>
        <div className="row">
          {products.map(product => ( 
            <div className="col-md-4" key={product.id}>
              <div className="card mb-4 shadow-sm product-card">
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.details}</h5>
                  <Link to={`/blog/${product._id}`} className="btn btn-primary">View More</Link>
                  {/* <Link to="/create-blog" className="btn btn-secondary">Create Blog Post</Link> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Front;
