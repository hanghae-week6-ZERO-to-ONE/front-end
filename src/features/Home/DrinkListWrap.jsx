import React from "react";
import styled from "styled-components";
import DrinkList from "./DrinkList";
import RecentlyList from "./RecentList";
const DrinkListWrap = () => {
	return (
		<>
			<DrinkWrap>
				<RecentlyList />
				<DrinkList />
				<DrinkList />
				<DrinkList />
				<DrinkList />
			</DrinkWrap>
		</>
	);
};

export default DrinkListWrap;

const DrinkWrap = styled.section`
	width: 1280px;
	margin: 120px auto;
`;
