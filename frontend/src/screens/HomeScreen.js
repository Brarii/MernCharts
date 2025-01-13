import { useEffect, useReducer, useState } from "react";
import axios from 'axios'
import { Helmet } from "react-helmet-async";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useNavigate } from "react-router-dom";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Product from "../components/Product";

const reducer=(state,action)=>{
  switch(action.type){
    case 'FETCH_REQUEST':
      return{...state, loading:true};
    case 'FETCH_SUCCESS':
      return{...state,products:action.payload,loading:false};
    case 'FETCH_FAIL':
      return{...state,loading:false,error:action.payload};
    default:
      return state;

  }
}

function HomeScreen(){
  const navigate = useNavigate();
  const[{loading,error,products},dispatch]=useReducer(reducer,{
    products:[],
    loading:true,
    error:'',
  })

  // Function to fetch products
  const fetchData = async () => {
    try {
      //const result = await axios.get(`${process.env.REACT_APP_API_URL}/api/products`);
      const result = await axios.get('/api/products');

      console.log('Fetched data:', result.data); 
      dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      
    } catch (err) {
      dispatch({ type: 'FETCH_FAIL', payload: err.message });
    }
  }; 

  // Function to delete a product
  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`/api/products/${productId}`);
      //await axios.delete(`${process.env.REACT_APP_API_URL}/api/products/${productId}`);
      fetchData();
    } catch (err) {
      console.error('Error deleting product:', err);
    }
  };

  const addProduct = async()=>{
     navigate('/add-product');
   };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div> 
      <Helmet>
        <title>esm el site</title>
      </Helmet>
      <h1>Featured Products</h1>  
      <div className="products">
        { loading? (
          <LoadingBox/>):
        error?(
          <MessageBox variant="danger">{error}</MessageBox>
        ):(
          <Row>
            {products.map(
              (product) => (
                <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                  <Product product={product} onDelete={() => deleteProduct(product._id)}></Product>
                </Col>
              ))}
          </Row>
        )}   
      </div>
      { <button onClick={addProduct}>Add Product</button> }
    </div>
  );
}

export default HomeScreen;