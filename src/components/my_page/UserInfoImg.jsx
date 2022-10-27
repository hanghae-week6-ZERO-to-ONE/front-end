import mask from "../../images/mask.png";
import { useState, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch } from "react-redux";
import { __updateMypageImg } from "../../redux/modules/mypage";
// import Upload from "../pages/upload/Upload";

function UserInfoImg() {
	const selectFile = useRef("");
	const [imageToEdit, setImageToEdit] = useState(null);
	const [editpreview, setEditpreview] = useState(null);
	const [data, setData] = useState({});

	const dispatch = useDispatch();

	const fileUpload = e => {
		//1. 이미지 없을 때 처리
		//2. 이미지 용량 제한
		//3. 이미지만 업로드 가능하게 처리하는 법

		setImageToEdit(e.target.files[0]);
		setEditpreview(URL.createObjectURL(e.target.files[0]));
	};

	const onChangeHandler = e => {
		const { name, value } = e.target;

		setData({ ...data, [name]: value });
		console.log(data);
	};

	const submitHandler = e => {
		e.preventDefault();

		const accessToken = localStorage.getItem("authorization");
		// const refreshToken = localStorage.getItem("refreshToken");

		const formData = new FormData();
		formData.append("image", imageToEdit);
		// formData.append("title", data.username); //📌

		axios
			.put("http://3.38.153.4:8080/mypage/images", formData, {
				headers: {
					Authorization: accessToken,
					// "Refresh-Token": refreshToken,
					"Content-Type": "multipart/form-data",
				},
			})
			.then(function a(response) {
				alert("게시되었습니다.");
				window.location.replace("/");
			})
			.catch(function (error) {
				console.log(error.response);
			});

		let entries = formData.entries();
		for (const pairs of entries) {
			console.log(pairs[0]);
		}

		// dispatch(__updateMypageImg({ formData: formData, id: 1 }));
	};

	return (
		<>
			<ImgWrap onSubmit={submitHandler}>
				{/* <img src={mask} alt="mask" /> */}
				<PhotoWrap>
					<ImageLabel htmlFor="file" style={{ display: "none" }} ref={selectFile} />
					<ImageInput
						placeholder="업로드"
						id="file"
						type={"file"}
						accept={"image/*"}
						onChange={fileUpload}
					/>
					<ImagePreview src={editpreview} />
				</PhotoWrap>
				<button type="submit">프로필 사진 수정</button>
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

const PhotoWrap = styled.div`
	position: relative;
	height: 100px;
	width: 100px;
	border-radius: 50px;
	/* overflow: hidden; */
`;

const ImageLabel = styled.label`
	position: absolute;
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
