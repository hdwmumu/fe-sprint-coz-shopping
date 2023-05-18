import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import logo from "../assets/로고.png";
import coz from "../assets/쇼핑몰 이름.png";
import hamburger from "../assets/아이콘.png";
import { DropDownProfile } from "./DropDownProfile";
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
	height: 75px;
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

function Header() {
	const [openDropDown, setOpenDropDown] = useState(false);

	return (
		<>
			<HeaderWrapp>
				<Link to="/">
					<CodeStatesLogo src={logo}></CodeStatesLogo>
					<Cozshopping src={coz}></Cozshopping>
				</Link>

				<Hamburgerbar
					src={hamburger}
					onClick={() => setOpenDropDown((prev) => !prev)}
				></Hamburgerbar>
			</HeaderWrapp>

			{openDropDown && <DropDownProfile />}
		</>
	);
}

export default Header;
