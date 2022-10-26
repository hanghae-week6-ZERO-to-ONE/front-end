import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fileUploadApi } from "../../axios";
import { __addTodos } from "../../redux/modules/_todoSlice";

function UploadContent() {
	const [image, setImage] = useState(null);
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
		const image = URL.createObjectURL(e.target.files[0]);
		// dispatch(__addTodos(data));
		setImage(image);
	};

	// const onClickHandler = e => {
	// e.preventDefault();
	// dispatch(__addTodos(data));
	// setData({});
	// };

	const onClickHandler = e => {
		e.preventDefault();

		const formData = new FormData();

		// formData.getAll();

		// for (let value of formData.values()) {
		// console.log(value);
		//

		// Object.entries(data).forEach(([key, value]) => {
		// formData.append(key, value);
		// });

		// 이걸 합친게 바로 위 코드임
		formData.append("image", image);
		formData.append("title", data.title);
		formData.append("category", data.category);
		formData.append("content", data.content);

		//formData는 콘솔에 찍히지 않아 이 방법으로 찍어야함q
		let entries = formData.entries();
		for (const pair of entries) {
			console.log(pair[0] + ", " + pair[1]);
		}

		// for (const value of formData.values()) {
		// console.log("폼데이터:", value);
		// }

		// fileUploadApi(formData);
	};

	return (
		<>
			<Wrap onSubmit={onClickHandler}>
				<ImageLayout>
					<ImageLabel htmlFor="file" />
					<ImageInput
						placeholder="업로드"
						id="file"
						type={"file"}
						accept={"image/*"}
						onChange={fileUpload}
					/>
					<ImagePreview src={image} />
				</ImageLayout>

				<ContentWrap>게시글 업로드</ContentWrap>
				<ContentWrap2>
					<input type="text" name="title" onChange={onChangeHandler} placeholder="제목" />
				</ContentWrap2>
				<ContentWrap2>
					<select name="category" id="category" onChange={onChangeHandler}>
						<option value="카테고리" disabled>
							카테고리
						</option>
						<option value="프로틴음료">프로틴음료</option>
						<option value="제로슈가">제로슈가</option>
						<option value="건강음료">건강음료</option>
						<option value="이온음료">이온음료</option>
					</select>
				</ContentWrap2>
				<ContentWrap2>
					<input type="text" name="content" onChange={onChangeHandler} placeholder="설명" />
				</ContentWrap2>
				<button type={"submit"}>업로드</button>
			</Wrap>
		</>
	);
}

export default UploadContent;

const Wrap = styled.form`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 1280px;
	margin: 0 auto;
`;

const ContentWrap = styled.div`
	width: 1280px;
	height: 83px;
	left: 320px;
	top: 270px;

	background: #ffffff;
	border: 3px solid #cde230;
`;

const ContentWrap2 = styled.div`
	width: 353px;
	height: 57px;
	left: 320px;
	top: 387px;

	background: #ffffff;
	border: 3px solid #cde230;
`;

const ImageLayout = styled.div`
	position: relative;
	height: 100px;
	width: 100px;
	border-radius: 50px;
	/* overflow: hidden; */
`;

const ImagePreview = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;

	background-color: gray;
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

// const frm = new FormData();
// frm.append("title", payload.title);
// frm.append("content", payload.content);
// frm.append("file", payload.file);
// axios
// .post("http://15.164.234.179/api/post", frm, {
// headers: {
// Authorization: accessToken,
// "Refresh-Token": refreshToken,
// "Content-Type": "multipart/form-data",
// },
// })
// .then(function a(response) {
// alert("게시되었습니다.");
// window.location.replace("/");
// })
// .catch(function (error) {
// console.log(error.response);
// });
// };
