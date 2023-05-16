import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "../assets/로고.png";
import coz from "../assets/쇼핑몰 이름.png";
import hamburger from "../assets/아이콘.png";
import { Modal } from "./Modal";
import styled from "styled-components";

const HeaderWrapp = styled.header`
	display: flex;
	position: fixed;
	top: 0;

	box-sizing: border-box;
	border-top: 1px solid rgba(0, 0, 0, 0.1);
	box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
	background-color: white;
	width: 100%;
	height: 80px;
`;
const CodeStatesLogo = styled.img`
	margin: 23px 0px 0px 70px;
	height: 33px;
`;

const Cozshopping = styled.img`
	margin-left: 12px;
`;

const Hamburgerbar = styled.img`
	position: absolute;
	top: 1.5rem;
  right: 5rem;
  width: 40px;
  padding: 5px;
	cursor: pointer;
`;

const Dropdown = styled.div`
	position: absolute;
	top: 4.3rem;
  right: 4.45rem;
  width: 200px;
  height: 150px;
  padding-top: 12px;
  border-radius: 12px;
  background-color: white;
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.1) ;
  ::before {
    content: '';
    position: absolute;
    top: -0.7rem;
    right: 1.1rem;
    width: 20px;
    height: 20px;
    transform: rotate(45deg);
    border-left: 1px solid rgba(0,0,0,0.1);
    border-top: 1px solid rgba(0,0,0,0.1);
    background-color:white;
  }
`;

const Greetion = styled.p`
	text-align: center;

`;
const PageMenu = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
`;
const PageList = styled.li`
	text-align: center;
	height: 50px;
	padding-top: 10px;
	border-top: 1px solid #c1c1c1;
	a {
		text-decoration: none;
		color: #111111;
	}
`;
const Icon = styled.img`
	margin-right: 6px;
	margin-bottom: -3px;
`;

function Header() {
	const [isDoropDown, setIsDropDown] = useState(false);
	const handleDropDownClose = () => {
		setIsDropDown((value) => !value);
	};

	return (
		<>
			<HeaderWrapp>
				<Link to="/">
					<CodeStatesLogo src={logo}></CodeStatesLogo>
					<Cozshopping src={coz}></Cozshopping>
				</Link>

				<Hamburgerbar
					src={hamburger}
					onClick={handleDropDownClose}
				></Hamburgerbar>

				<Dropdown>
					<Greetion>OOO님, 안녕하세요!</Greetion>
					<PageMenu>
						<PageList>
							<Link
								to="/products/list"
								onClick={handleDropDownClose}
							>
								<Icon src="/image/상품 아이콘.png" />
								상품리스트 페이지
							</Link>
						</PageList>
						<PageList>
							<Link
								to="/Bookmark"
								onClick={handleDropDownClose}
							>
								<Icon src="/image/북마크 아이콘.png" />
								북마크 페이지
							</Link>
						</PageList>
					</PageMenu>
				</Dropdown>
			</HeaderWrapp>
		</>
	);
}

export default Header;
