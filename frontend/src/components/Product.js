import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Rating from './Rating';
import { useContext } from 'react';
import { Store } from '../screens/Store';
import axios from 'axios';

function Product(props){

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;

  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInstock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity: 1 }
    });
    window.alert('Product added to cart');
  }

  const deleteProductHandler = async () => {
    try {
      await axios.delete(`/api/products/${product._id}`);
      window.alert('Product deleted successfully');
    } catch (error) {
      console.error('Error deleting product:', error.response.data.message);
      window.alert('Error deleting product: ' + error.response.data.message);
    }
  }
  

  const { product } = props;
  
  return (
    <Card>
      <Link to={`/products/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} style={{ maxWidth: '70%', height: 'auto' }} />
      </Link>
      <Card.Body>
        <Link to={`/products/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
        <Card.Text>${product.price}</Card.Text>
        {product.countInstock === 0 ? <Button variant='light' disabled>Out of stock</Button> :
          <>
            <Button onClick={addToCartHandler}>Add to cart</Button>
            <Button variant="danger" onClick={deleteProductHandler} className="ms-2">Delete</Button>
          </>
        }
      </Card.Body>
    </Card>
  );
}

export default Product;
