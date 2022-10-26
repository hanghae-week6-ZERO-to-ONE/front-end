import { Outlet } from "react-router-dom";
import logo from "../images/logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { is_password } from "../common/logics";
import Logout from "./login/Logout";
import { useSelector } from "react-redux";
const Header = () => {
	const login = useSelector(state => state.login.isLogin);
	const loginName = useSelector(state => state.login);
	console.log(loginName);
	return (
		<>
			<HeaderWrap>
				<Link to={"/"}>
					<img src={logo} alt="logo" />
				</Link>

				<div>
					<p>
						안녕하세요
						{login ? <span>회원님</span> : <span>GUEST님</span>}
					</p>
					<StLink to={"my_page"}>마이 페이지</StLink>
					{login ? <Logout /> : <StLink to={"login"}>로그인</StLink>}
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
	position: relative;
	overflow: hidden;
	p {
		margin-bottom: 10px;
		span {
			font-size: 20px;
		}
	}
	::after {
		content: "";
		width: 1920px;
		height: 1px;
		position: absolute;
		left: -320px;
		bottom: 0;
		background-color: #bbbbbb;
	}
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
