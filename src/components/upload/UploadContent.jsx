import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import userBasic from "../../images/userbasic.png";
import { fileUploadApi } from "../../axios";
import { __addTodos } from "../../redux/modules/_todoSlice";

function UploadContent() {
	const [imageToUpload, setImageToUpload] = useState(null);
	const [uploadpreview, setUploadpreview] = useState(null);
	const dispatch = useDispatch();
	const [data, setData] = useState({});
	const onChangeHandler = e => {
		const { name, value } = e.target;
		setData({ ...data, [name]: value });
		console.log("데이터:", data);
	};

	const fileUpload = e => {
		//1. 이미지 없을 때 처리
		//2. 이미지 용량 제한
		//3. 이미지만 업로드 가능하게 처리하는 법
		console.log("파일:", e.target.files[0]);
		setImageToUpload(e.target.files[0]);

		//image URL코드
		setUploadpreview(URL.createObjectURL(e.target.files[0]));

		// dispatch(__addTodos(data));
		// setImage(image);
	};

	// const onClickHandler = e => {
	// e.preventDefault();
	// dispatch(__addTodos(data));
	// setData({});
	// };

	const onClickHandler = e => {
		e.preventDefault();

		const accessToken = localStorage.getItem("authorization");
		// const refreshToken = localStorage.getItem("refreshToken");

		const formData = new FormData();

		// formData.getAll();

		// for (let value of formData.values()) {
		// console.log(value);
		//

		// Object.entries(data).forEach(([key, value]) => {
		// formData.append(key, value);
		// });

		// 이걸 합친게 바로 위 코드임
		formData.append("image", imageToUpload);
		formData.append("title", data.title);
		formData.append("category", data.category);
		formData.append("content", data.content);

		let entries = formData.entries();
		for (const pair of entries) {
			console.log(pair[0] + ", " + pair[1]);
		}

		axios
			.post("http://3.38.153.4:8080/boards", formData, {
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

		//formData는 콘솔에 찍히지 않아 이 방법으로 찍어야함

		// for (const value of formData.values()) {
		// console.log("폼데이터:", value);
		// }

		// fileUploadApi(formData);
	};

	return (
		<>
			<Wrap onSubmit={onClickHandler}>
				<ContentWrap>게시글 업로드</ContentWrap>
				<Content>
					<PhotoWrap>
						<PhotoTitle>사진 업로드</PhotoTitle>
						<ImageLayout>
							<ImageLabel htmlFor="file" />
							<ImageInput
								placeholder="업로드"
								id="file"
								type={"file"}
								accept={"image/*"}
								onChange={fileUpload}
							/>
							<ImagePreview src={userBasic} />
						</ImageLayout>
						<StLink to={"/"}>Home</StLink>
					</PhotoWrap>
					<ContentRight>
						<div>
							<ContentWrap2>
								<p>제목</p>
							</ContentWrap2>
							<input
								type="text"
								name="title"
								onChange={onChangeHandler}
								placeholder="제목을 입력해주세요"
							/>
						</div>
						<div>
							<ContentWrap2>카테고리</ContentWrap2>
							<select name="category" id="category" onChange={onChangeHandler}>
								<option value="카테고리" disabled>
									카테고리
								</option>
								<option value="프로틴음료">프로틴음료</option>
								<option value="제로슈가">제로슈가</option>
								<option value="건강음료">건강음료</option>
								<option value="이온음료">이온음료</option>
							</select>
						</div>
						<div>
							<ContentWrap2>설명</ContentWrap2>
							<input
								type="text"
								name="content"
								onChange={onChangeHandler}
								placeholder="내용을 입력해주세요"
							/>
						</div>
						<SubmitBtn type={"submit"}>등록하기</SubmitBtn>
					</ContentRight>
				</Content>
			</Wrap>
		</>
	);
}

export default UploadContent;

const Wrap = styled.form`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	width: 1280px;
	margin: 0 auto;
	gap: 20px;
`;

const PhotoWrap = styled.div`
	height: 63px;

	p {
		box-sizing: border-box;
		width: 300px;
		border: 3px solid #cde230;
	}
`;
const PhotoTitle = styled.p`
	text-align: center;
	line-height: 63px;
`;

const ContentWrap = styled.div`
	width: 1280px;
	height: 83px;
	background: #ffffff;
	border: 3px solid #cde230;
	text-align: center;
	line-height: 83px;
	font-size: 30px;
	font-weight: 700;
`;

const Content = styled.div`
	display: flex;
	justify-content: space-between;
	width: 1280px;
	height: 83px;
`;
const ContentRight = styled.div`
	display: flex;
	flex-direction: column;
	width: 900px;
	gap: 20px;
	div {
		display: flex;
		align-content: center;
		flex-direction: row;
		gap: 10px;
	}
	input {
		border: 3px solid #cde230;
		display: block;
		width: 600px;
	}
	select {
		border: 3px solid #cde230;
		display: block;
		width: 600px;
		cursor: pointer;
	}
`;

const ContentWrap2 = styled.div`
	width: 353px;
	height: 63px;
	background: #ffffff;
	border: 3px solid #cde230;
	align-items: center;
	justify-content: center;
`;

const ImageLayout = styled.div`
	margin-top: 20px;
	margin-bottom: 20px;
	position: relative;
	height: 200px;
	width: 300px;
	box-sizing: border-box;

	/* overflow: hidden; */
`;

const ImagePreview = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	border: 3px solid #cde230;
	box-sizing: border-box;
	background-color: #fff;
`;

const ImageLabel = styled.label`
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	width: 100%;
	z-index: 1;
	background-color: transparent;
	cursor: pointer;
`;

const ImageInput = styled.input`
	visibility: hidden;
`;

const SubmitBtn = styled.button`
	display: block;
	background: #fff;
	border: 3px solid #cde230;
	cursor: pointer;
	transition: all 0.5s;
	:hover {
		background: #cde230;
		border: 3px solid transparent;
	}
`;

const StLink = styled(Link)`
	text-align: center;
	color: #232323;
	display: block;
	width: 80px;
	border: 3px solid #cde230;
	:hover {
		background: #cde230;
		border: 3px solid transparent;
	}
`;
