import express from 'express'
import Product from '../models/productModel.js'
import expressAsyncHandler from 'express-async-handler';
const seedRouter=express.Router()


seedRouter.get('/', async (req, res) => {
    try {
      const products = await Product.find({});
      res.send(products);
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: 'Error retrieving products' });
    }
  });
  ///////////////////////////
 seedRouter.post('/', async (req, res) => {
    try {
      const newProductData = req.body; 
      // Create a new product using the Product model
      const newProduct = new Product(newProductData);
  
      // Save the new product to the database
      const savedProduct = await newProduct.save();
  
      res.status(201).send(savedProduct); // Return the newly created product
    } catch (error) {
      console.error('Error adding product:', error.message);
      res.status(500).send({ message: 'Internal server error' });
    }
  });
  ///////////////////////////////////


  seedRouter.get('/slug/:slug', async (req, res) => {
    const product = await Product.findOne({ slug: req.params.slug });
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  });
  
  
 seedRouter.get('/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  });

  seedRouter.delete(
    '/:id',
    expressAsyncHandler(async (req, res) => {
      try {
        const product = await Product.findById(req.params.id);
        if (product) {
          await Product.deleteOne({ _id: req.params.id });
          res.send({ message: 'Product Deleted' });
        } else {
          res.status(404).send({ message: 'Product Not Found' });
        }
      } catch (error) {
        console.error('Error deleting product:', error.message);
        res.status(500).send({ message: 'Internal server error' });
      }
    })
  );


export default seedRouter
