import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { About } from './components/About/About';
import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import { ProductItem } from './components/ProductItem/ProductItem';
import { Products } from './components/Products/Products';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:product' element={<ProductItem />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
