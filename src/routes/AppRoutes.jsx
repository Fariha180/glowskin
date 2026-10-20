import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '../components/layout/MainLayout';
import { About } from '../pages/About';
import { Cart } from '../pages/Cart';
import { Checkout } from '../pages/Checkout';
import { Contact } from '../pages/Contact';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { OrderConfirmation } from '../pages/OrderConfirmation';
import { ProductDetails } from '../pages/ProductDetails';
import { Shop } from '../pages/Shop';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="products/:slug" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="order-confirmation" element={<OrderConfirmation />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
