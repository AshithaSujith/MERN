import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Backendd() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {products.map(product => (
          <div className="col-md-4" key={product._id}>
            <div className="card mb-4">
              <img src={product.image} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Backendd;
