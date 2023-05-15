import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./Page/MainPage";
import ProductList from "./Page/ProductList";
import BookMarkList from "./Page/BookMarkList";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App (props) {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Header />
          <Footer />
          <section>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/products/list" element={<ProductList />} />
              <Route path="/bookmark" element={<BookMarkList />} />
            </Routes>
          </section>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;
