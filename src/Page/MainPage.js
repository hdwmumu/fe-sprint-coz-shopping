import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const MainPage = () =>{
  
  return (
    <section>
      <Header />
      <main className='main'>
        <h2>이것은 헤더</h2>
      </main>
      <Footer />
    </section>
  );
};


export default MainPage;