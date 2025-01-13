import React, { useState } from 'react';
import axios from 'axios';


const ProductForm = () => {
  const [product, setProduct] = useState({
    name: '',
    slug: '',
    category: '',
    image: '',
    price: 0,
    countInStock: 0,
    brand: '',
    rating: 0,
    numReviews: 0,
    description: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Product data:', product);
      const response = await axios.post('/api/products', product);
      console.log('Response:', response);
      alert('Product added successfully!');
    } catch (error) {
      console.error('Error adding product:', error.message);
      alert('Failed to add product: ' + error.message);
    }
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  return (
    <div className="product-form-container">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Product Name:</label>
          <input type="text" name="name" id="name" value={product.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="slug">Slug:</label>
          <input type="text" name="slug" id="slug" value={product.slug} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <input type="text" name="category" id="category" value={product.category} onChange={handleChange} />
        </div>
        {/* Ajoutez d'autres champs du formulaire ici */}
        <div className="form-group">
          <label htmlFor="image">Image URL:</label>
          <input type="text" name="image" id="image" value={product.image} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="brand">Brand:</label>
          <input type="text" name="brand" id="brand" value={product.brand} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea name="description" id="description" value={product.description} onChange={handleChange}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input type="number" name="price" id="price" value={product.price} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="countInstock">Count In Stock:</label>
          <input type="number" name="countInstock" id="countInstock" value={product.countInstock} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <input type="number" name="rating" id="rating" value={product.rating} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="numReviews">Number of Reviews:</label>
          <input type="number" name="numReviews" id="numReviews" value={product.numReviews} onChange={handleChange} />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;