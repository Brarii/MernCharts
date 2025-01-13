import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext } from 'react';
import { Store } from './screens/Store';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import ProductForm from './screens/ProductForm'; // Assurez-vous que le chemin est correct

function App() {
  const { state } = useContext(Store);
  const { cart } = state;

  return (
    <BrowserRouter>
      <div className='d-flex flex-column site-container'>
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Stock</Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
                <Link to="/cart" className='nav-link'>Cart</Link>
              </Nav>
              {/* <Nav>
                Ajoutez ce LinkContainer pour le formulaire d'ajout de produit
                <Link to="/add-product" className='nav-link'>add</Link>
              </Nav> */}
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className='mt-3'>
            <Routes>
              <Route path='/products/:slug' element={<ProductScreen />} />
              <Route path='/cart' element={<CartScreen />} />
              <Route path='/signin' element={<SigninScreen />} />
              <Route path='/' element={<HomeScreen />} />
              <Route path='/add-product' element={<ProductForm />} />
            </Routes>
          </Container>
        </main>
        <footer className='text-center'>all rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
