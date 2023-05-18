import React from "react";
import styled from "styled-components";

const Main = styled.main`
	margin-top: 8rem;
`;

const ItemBox = styled.section`
	display: grid;
	grid-template-columns: repeat(2,1fr);
	
	justify-items: center;
	overflow-y: scroll; // 이 공간 안에서만 스크롤

`;
const Item = styled.div`
	height: 12rem;
	width: 265px;
	border: 1px solid gray;
	border-radius: 20px;
	margin-bottom: 4rem;
	
`;

const HomeMain = () => {
	//const [ itemList, setItemList ] = useState();

	return (
		<Main>
			<ItemBox>
				<Item>상품 리스트</Item>
				<Item>상품 리스트</Item>
				<Item>상품 리스트</Item>
				<Item>상품 리스트</Item>
			</ItemBox>
		</Main>
	);
};

export default HomeMain;
