import { useState } from 'react'
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [openCart, setOpenCart] = useState(false);

  function showCartHandler() {
    setOpenCart(true)
  }

  function hideCartHandler() {
    setOpenCart(false)
  }

  return (
    <CartProvider>
      {cartOpen && <div>Cart...</div>}
      <Header />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
