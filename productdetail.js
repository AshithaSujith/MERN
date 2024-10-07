import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
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
    return <div>Loading...</div>; // Loading state
  }

  return (
    <div className="container my-5">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{ width: '300px' }} />
      <p>{product.details}</p>
      <p>Price: 2000{product.price}</p>
    </div>
  );
}

export default ProductDetail;
