import mask from "../../images/mask.png";
import { useState, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
// import Upload from "../pages/upload/Upload";

function UserInfoImg() {
	const selectFile = useRef("");
	const [image, setImage] = useState(null);
	const [data, setData] = useState({});
	const fileUpload = e => {
		//1. 이미지 없을 때 처리
		//2. 이미지 용량 제한
		//3. 이미지만 업로드 가능하게 처리하는 법
		console.log(e.target.files[0]);
		const image = URL.createObjectURL(e.target.files[0]);

		setImage(image);
	};

	const onChangeHandler = e => {
		const { name, value } = e.target;

		setData({ ...data, [name]: value });
		console.log(data);
	};

	const submitHandler = e => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("image", image);
		formData.append("title", data.username);
		

		for (const value of formData.values()) {
			console.log(value);
		}
	};

	return (
		<>
			<ImgWrap onSubmit={submitHandler}>
				{/* <img src={mask} alt="mask" /> */}
				<ImageLayout>
					<ImageLabel htmlFor="file" style={{ display: "none" }} ref={selectFile} />

					<ImageInput
						placeholder="업로드"
						id="file"
						type={"file"}
						accept={"image/*"}
						onChange={fileUpload}
					/>

					<ImagePreview src={image} />
				</ImageLayout>

				<UserName>
					<input
						type="text"
						name="username"
						placeholder="유저 이름"
						onChange={onChangeHandler}
					></input>
				</UserName>
				<button type="submit">업로드</button>
			</ImgWrap>
		</>
	);
}

export default UserInfoImg;

const ImgWrap = styled.form``;

const UserName = styled.p`
	width: 50%;
	height: 50%;
	border: 1px solid #000000;
	font-size: 20px;
`;

const ImageLayout = styled.div`
	position: relative;
	height: 100px;
	width: 100px;
	border-radius: 50px;
	/* overflow: hidden; */
`;

const ImageLabel = styled.label`
	posistion: absolute;
	left: 0;
	top: 0;
	height: 100%;
	width: 100%;
	z-index: 1;

	background-color: transparent;
`;

const ImageInput = styled.input``;

const ImagePreview = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
