import React from 'react';
import './ProductList.css';

const products = [
  {
    id: 1,
    name: 'Nike Air Max 90',
    category: 'Men',
    image: 'https://sneakernews.com/wp-content/uploads/2021/06/nike-dunk-high-university-blue-2.jpg?w=1140',
    colors: ['Red', 'Blue', 'Black'],
    availability: 'In stock',
  },
  {
    id: 2,
    name: 'Nike Air Zoom Pegasus',
    category: 'Women',
    image: 'https://sneakernews.com/wp-content/uploads/2021/06/nike-dunk-high-university-blue-2.jpg?w=1140',
    colors: ['Pink', 'White'],
    availability: 'Out of stock',
  },
  {
    id: 2,
    name: 'Nike Air Zoom Pegasus',
    category: 'Women',
    image: 'https://sneakernews.com/wp-content/uploads/2021/06/nike-dunk-high-university-blue-2.jpg?w=1140',
    colors: ['Pink', 'White'],
    availability: 'Out of stock',
  },
  {
    id: 2,
    name: 'Nike Air Zoom Pegasus',
    category: 'Women',
    image: 'https://sneakernews.com/wp-content/uploads/2021/06/nike-dunk-high-university-blue-2.jpg?w=1140',
    colors: ['Pink', 'White'],
    availability: 'Out of stock',
  },
  {
    id: 2,
    name: 'Nike Air Zoom Pegasus',
    category: 'Women',
    image: 'https://sneakernews.com/wp-content/uploads/2021/06/nike-dunk-high-university-blue-2.jpg?w=1140',
    colors: ['Pink', 'White'],
    availability: 'Out of stock',
  },
  
  // Add more products as needed
];

const ProductList = () => {
  return (
    <div className="product-list-container">
      {products.map(product => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p className="category">{product.category}</p>
          <p className="availability">{product.availability}</p>
          <p className="colors">Available colors: {product.colors.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
