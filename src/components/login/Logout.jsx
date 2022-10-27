import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const Logout = ({}) => {
	const logOut = async () => {
		const contest = window.confirm("정말 로그아웃 하실건가요?");
		if (contest === true) {
			window.localStorage.clear();
			window.location.reload();
		} else if (contest === false) {
			return;
		}
	};

	const handleLogout = e => {
		e.preventDefault();
		logOut();
	};

	return (
		<>
			<LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
		</>
	);
};
export default Logout;

const LogoutButton = styled.button`
	border: none;
	border: 1px solid #cde230;
	background-color: #fff;
	width: 80px;
	height: 30px;
	line-height: 30px;
	cursor: pointer;
	transition: all 0.5s;
	:hover {
		background-color: #cde230;
	}
`;
