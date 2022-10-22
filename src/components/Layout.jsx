import styled from "styled-components";

const Layout = ({ children }) => {
	return <LayoutDiv>{children}</LayoutDiv>;
};

export default Layout;
const LayoutDiv = styled.div`
	width: 1280px;
	height: 100vh;
	margin: 20px auto;
`;
