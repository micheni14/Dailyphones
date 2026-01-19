import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import ProductsPage from './pages/products'
import ProductDetailsPage from './pages/productDetail'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path ="/products/:id" element={<ProductDetailsPage />} />
      </Routes>
    </Router>
  )
}

export default App