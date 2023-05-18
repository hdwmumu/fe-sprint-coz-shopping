import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Modal from "./components/Modal"
import HomeMain from "./Pages/HomeMain/HomeMain";
import ProductList from "./Pages/ProductList/ProductList";
import BookMark from "./Pages/BookMark/BookMark";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  
  return (
    <Router>
      <Header />
      <Modal />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/products/list" element={<ProductList />} />
        <Route path="/bookmark" element={<BookMark />} />
      </Routes>
    
      <Footer />
    </Router>
  );
}

export default App;
