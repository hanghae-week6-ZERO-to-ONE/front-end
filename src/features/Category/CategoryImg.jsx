import styled from "styled-components";
import { Link } from "react-router-dom";

const CategoryImg = () => {
	return (
		<CategoryImgWrap>
			<ul>
				<Link to={"/detail/:id"}>
					<li>
						<img
							src="https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/3842779007/B.jpg?500000000"
							alt=""
						/>
						<p>펩시 제로</p>
					</li>
				</Link>
				<Link to={"/detail/:id"}>
					<li>
						<img
							src="https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/3842779007/B.jpg?500000000"
							alt=""
						/>
						<p>펩시 제로</p>
					</li>
				</Link>
				<Link to={"/detail/:id"}>
					<li>
						<img
							src="https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/3842779007/B.jpg?500000000"
							alt=""
						/>
						<p>펩시 제로</p>
					</li>
				</Link>
			</ul>
		</CategoryImgWrap>
	);
};

export default CategoryImg;

const CategoryImgWrap = styled.section`
	margin-bottom: 200px;
	ul {
		display: flex;
		justify-content: space-between;
		li {
			img {
				width: 255px;
				height: 250px;
				object-fit: cover;
			}
			p {
				text-align: center;
			}
		}
	}
`;
