import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsList from './components/ProductsList/ProductsList'
import MainLayout from './layouts/MainLayout';
import ProductPage from './components/ProductPage/ProductPage';

import './App.css'

function App() { 
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path='/' element={<ProductsList />} />
          <Route path='/product/:id' element={<ProductPage />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
