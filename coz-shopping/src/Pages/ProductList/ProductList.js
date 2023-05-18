import React, { useState, useEffect } from "react";

import FilterButton from "./FilterButton";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";


const ProductListMain = styled.main``;
const ListSection = styled.main``;
const ItemBox = styled.main`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	align-content: flex-start;
	margin-left: 13vw;
	margin-right: 10vw;
`;

const Item = styled.div`
	border: 1px solid gray;
	width: 264px;
	height: 264px;
`;

function ProductList() {
	const [Items, setItems] = useState();
	const dispatch = useDispatch;


	useEffect(() => {
		if (ProductList.length === 0) {
			axios
				.get("http://cozshopping.codestates-seb.link/api/v1/products")
				.then((response) => {
					dispatchEvent((response.data));
				})
				.catch((error) => {
					console.log(error);
				});
      }
		
	}, []);

	return (
		<ProductListMain>
			<FilterButton />
			<ListSection>
				<ItemBox>
					<Item>애플워치 스트랩</Item>
					<Item>애플워치 스트랩</Item>
					<Item>애플워치 스트랩</Item>
					<Item>애플워치 스트랩</Item>
					<Item>애플워치 스트랩</Item>
					<Item>애플워치 스트랩</Item>
					<Item>애플워치 스트랩</Item>
					<Item>애플워치 스트랩</Item>
				</ItemBox>
			</ListSection>
		</ProductListMain>
	);
}

export default ProductList;
