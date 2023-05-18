import styled from "styled-components";
import React from "react";
import { useSelector } from "react-redux";

const FiltersWrapper = styled.section`
	height: 15rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const FilterWrapper = styled.button`
	margin: 3px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: none;
	background-color: transparent;
`;
const StyledFilterBtn = styled.button`
	background: url(${(props) => props.imageUrl}) no-repeat;

	height: 6rem;
	border: none;
	background-color: transparent;
	border-radius: 100px;
	cursor: pointer;
`;

const Icon = styled.img`

width: 70px;
`;

function FilterButton() {
	return (
		<FiltersWrapper>
			<FilterWrapper>
				<StyledFilterBtn imageUrl="/image/filter 전체.png">
					<Icon src="/image/filter 전체.png" />
				</StyledFilterBtn>
				<label>전체</label>
			</FilterWrapper>
			<FilterWrapper>
				<StyledFilterBtn>
					<Icon src="/image/filter상품.png" />
				</StyledFilterBtn>
				<label>상품</label>
			</FilterWrapper>

			<FilterWrapper>
				<StyledFilterBtn>
					<Icon src="/image/filter 카테고리.png" />
				</StyledFilterBtn>
				<label>카테고리</label>
			</FilterWrapper>

			<FilterWrapper>
				<StyledFilterBtn>
					{" "}
					<Icon src="/image/filter 기획전.png" />
				</StyledFilterBtn>
				<label>기획전</label>
			</FilterWrapper>
			<FilterWrapper>
				<StyledFilterBtn>
					{" "}
					<Icon src="/image/filter브랜드.png" />
				</StyledFilterBtn>
				<label>브랜드</label>
			</FilterWrapper>
		</FiltersWrapper>
	);
}

export default FilterButton;
