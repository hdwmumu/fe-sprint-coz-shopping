import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import styled from "styled-components"

import HomeMain from "./Page/HomeMain";
import ProductList from "./Page/ProductList";
import BookMark from "./components/BookMark/BookMark";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
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
