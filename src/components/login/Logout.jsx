import React from "react";
import styled from "styled-components";

const Logout = ({}) => {
	const handleLogout = e => {
		e.preventDefault();

		console.log("handleLogout");
	};

	return (
		<>
			<LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
		</>
	);
};
export default Logout;

const LogoutButton = styled.button``;
