import "./App.css";

import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ProductListPage from "./pages/ProductListPage";
import SingleProductPage from "./pages/SingleProductPage";
import ShippingInfoPage from "./pages/ShippingInfoPage";
import ProfilePage from "./pages/ProfilePage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import IsPrivate from "./components/isPrivate";
import IsAnon from "./components/IsAnon";
import CartPage from "./pages/CartPage";
import NoUserFound from "./pages/NoUserFound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />

        <Route
          path="/user/not-found"
          element={
            <IsAnon>
              <NoUserFound />
            </IsAnon>
          }
        />

        <Route
          path="/product-list"
          element={
            <IsPrivate>
              <ProductListPage />
            </IsPrivate>
          }
        />

        <Route
          path="/product-list/:productId"
          element={
            <IsPrivate>
              <SingleProductPage />
            </IsPrivate>
          }
        />

        <Route
          path="/my-cart"
          element={
            <IsPrivate>
              <CartPage />
            </IsPrivate>
          }
        />

        <Route
          path="/shipping-info"
          element={
            <IsPrivate>
              <ShippingInfoPage />
            </IsPrivate>
          }
        />

        <Route
          path="/profile"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
        />

        <Route
          path="/order/confirm"
          element={
            <IsPrivate>
              <OrderConfirmationPage />
            </IsPrivate>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
