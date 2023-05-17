import React,{ useState } from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";


const Dropdown = styled.div`
	position: absolute;
	top: 4.3rem;
	right: 4.45rem;
	width: 200px;
	height: 150px;
	padding-top: 12px;
	border-radius: 12px;
	background-color: white;
	box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.1);
	::before {
		content: "";
		position: absolute;
		top: -0.7rem;
		right: 1.1rem;
		width: 20px;
		height: 20px;
		transform: rotate(45deg);
		border-left: 1px solid rgba(0, 0, 0, 0.1);
		border-top: 1px solid rgba(0, 0, 0, 0.1);
		background-color: white;
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


export const DropDownProfile = () => {
	const [openDropDown, setOpenDropDown] = useState(false);
  return (
    <div>
      <Dropdown>
    <Greetion>OOO님, 안녕하세요!</Greetion>
    <PageMenu>
      <PageList>
        <Link
          to="/products/list"
          onClick={() => setOpenDropDown((prev) => !prev)}
        >
          <Icon src="/image/상품 아이콘.png" />
          상품리스트 페이지
        </Link>
      </PageList>
      <PageList>
        <Link
          to="/Bookmark"
          onClick={DropDownProfile}
        >
          <Icon src="/image/북마크 아이콘.png" />
          북마크 페이지
        </Link>
      </PageList>
    </PageMenu>
    </Dropdown>
    </div>
  )
}


