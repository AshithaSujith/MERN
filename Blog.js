import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Blog() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img 
        src={product.image} 
        alt={product.title} 
        style={{ width: '50px' }} 
      />
      <p>{product.details}</p>
      <p>Price:{product.price}</p>
    </div>
  );
}

export default Blog;
