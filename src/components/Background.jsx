import styled from "styled-components";
import bg from "../images/bg.png";

const Background = () => {
	return (
		<>
			<ImgWrap>
				<TextWrap>
					<p>
						ZERO
						<br />
						to
						<br />
						ONE
					</p>
				</TextWrap>
			</ImgWrap>
		</>
	);
};

export default Background;

const ImgWrap = styled.section`
	background-image: url(${bg});
	background-repeat: no-repeat;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 993px;
`;

const TextWrap = styled.article`
	width: 560px;
	height: 560px;
	background: rgba(255, 255, 255, 0.1);
	opacity: 1;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	backdrop-filter: blur(7.5px);
	/* Note: backdrop-filter has minimal browser support */
	border-radius: 16px;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.5s;
	:hover {
		background: rgba(19, 18, 18, 0.8);
		backdrop-filter: blur(0);
		p {
			color: #cde230;
			text-shadow: red 2px 5px;
			line-height: 160px;
			transition: all 0.5s;
		}
	}
	p {
		font-family: "Inter";
		font-style: italic;
		font-weight: 653;
		font-size: 100px;
		line-height: 120px;
		/* or 150% */
		display: flex;
		align-items: flex-end;
		color: #ffffff;
		font-variation-settings: "slnt" -10;
		transition: all 0.5s;
	}
`;
