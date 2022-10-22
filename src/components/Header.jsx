import React from "react";
import { Outlet } from "react-router-dom";
import logo from "../images/logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Header = () => {
	return (
		<>
			<HeaderWrap>
				<Link to={"/"}>
					<img src={logo} alt="logo" />
				</Link>

				<div>
					너 최신 버젼해라
					<StLink to={"my_page"}>마이 페이지</StLink>
					<StLink to={"login"}>로그인</StLink>
				</div>
			</HeaderWrap>

			<Outlet></Outlet>
		</>
	);
};
export default Header;

const HeaderWrap = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 1280px;
	margin: 0 auto;
`;

const StLink = styled(Link)`
	margin-right: 40px;
	text-decoration: none;
	color: #333;
	position: relative;
	::after {
		content: "";
		display: block;
		width: 0%;
		height: 2px;
		bottom: -5px;
		background-color: #cde230;
		transition: all 0.5s;
		position: absolute;
		left: 0%;
	}
	:hover::after {
		width: 50%;
	}
	:last-child {
		margin-right: 0;
	}
`;
