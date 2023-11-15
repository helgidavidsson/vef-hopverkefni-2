import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import FrontPage from './components/Frontpage';
import Products from './components/Products';
import Categories from './components/Categories';
import Header from './components/Header';
import IndividualProduct from './components/IndividualProduct';
import CategorySearch from './components/CategorySearch';


function App() {
  return (
    <div className="App">
      <Router>
      <Header/>

      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/new-products" element={<Products/>} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/product" element={<IndividualProduct />} />
        <Route path="/search" element={<CategorySearch />} />

      </Routes>
    </Router>
      
    </div>
    
  );

}

export default App;
