import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { About } from './components/About/About';
import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import { ProductItem } from './components/ProductItem/ProductItem';
import { Products } from './components/Products/Products';
import ShoppingCartPage from './components/shopping Cart Page/ShoppingCartPage';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:productId' element={<ProductItem />} />
          <Route path='/products/yourCart' element={<ShoppingCartPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
