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
      {openCart && <div>Cart...</div>}
      <Header openCart={openCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
