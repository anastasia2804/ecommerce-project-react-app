import './App.css';

import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ProductListPage from './pages/ProductListPage';
import SingleProductPage from './pages/SingleProductPage';

import IsPrivate from './components/isPrivate';
import IsAnon from './components/IsAnon';
import CartPage from './pages/CartPage';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>

      <Route path="/" element={<h1>homepage</h1>} />

      <Route path="/signup" element={
        <IsAnon>
          <SignupPage />
        </IsAnon>
      } />
      <Route path="/login" element={
        <IsAnon>
          <LoginPage />
        </IsAnon>
      } />

    <Route path="/product-list" element={
        <IsPrivate>
            <ProductListPage />
        </IsPrivate>
    } />

    <Route path="/product-list/:productId" element={
        <IsPrivate>
            <SingleProductPage />
        </IsPrivate>
    } />

    <Route path="/my-cart" element={
        <IsPrivate>
            <CartPage />
        </IsPrivate>
    } />

    </Routes>
      
    </div>
  );
}

export default App;
