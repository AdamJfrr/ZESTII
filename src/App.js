import './App.css';
import Navbar from './components/navbar/Navbar';
import {Routes, Route} from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="page">
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
        </Routes>
      </div>
    </div>
  );
}


export default App;
