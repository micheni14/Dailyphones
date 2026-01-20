import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import ProductsPage from './pages/products'
import ProductDetailsPage from './pages/productDetail'
import CheckoutPage from './pages/Checkout'
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path='/checkout' element ={<CheckoutPage />} />
      </Routes>
            <FloatingWhatsApp />
    </Router>
  )
}

export default App