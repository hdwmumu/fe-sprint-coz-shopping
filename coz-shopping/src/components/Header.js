import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "../assets/로고.png"
import coz from "../assets/쇼핑몰 이름.png"
import hamburger from "../assets/아이콘.png"
import styled from "styled-components";

const HeaderWrapp =styled.header`
position: fixed;
top: 0;

box-sizing: border-box;
border-top: 1px solid rgba(0, 0, 0, 0.1);
box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
background-color: white;
width: 100%;
height: 80px;
`;
const CodeStatesLogo =styled.img`

`;

const Cozshopping = styled.img`

`;

const Hamburgerbar = styled.img`
justify-content: flex-end;
`;

function Header() {
  const [ isModalOpen, setIsModalOpen ] =useState(false);

  const handleModal=()=> {
    setIsModalOpen((prev)=> !prev)
  }

  return (
<>
     <HeaderWrapp>
      <Link to="/">
        <CodeStatesLogo src={logo}></CodeStatesLogo>
       <Cozshopping src={coz}></Cozshopping>
      </Link>
      <Hamburgerbar src={hamburger} onClick={handleModal}></Hamburgerbar>
      
    </HeaderWrapp>
   
    </>
  );
}


export default Header;
