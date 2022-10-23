import { useState } from "react";
import styled from "styled-components";
import { fileUploadApi } from "../../axios";

function UploadContent() {
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

		Object.entries(data).forEach(([key, value]) => {
			formData.append(key, value);
		});

		//formData.append("image", data.image);
		//formData.append("title", data.title);
		//formData.append("category", data.category);
		//formData.append("desc", data.desc);

		fileUploadApi(formData);
	};

	return (
		<>
			<Wrap onSubmit={submitHandler}>
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
					<input type="text" name="category" onChange={onChangeHandler} placeholder="카테고리" />
				</ContentWrap2>
				<ContentWrap2>
					<input type="text" name="desc" onChange={onChangeHandler} placeholder="설명" />
				</ContentWrap2>
				<button>업로드</button>
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
	posistion: absolute;
	left: 0;
	top: 0;
	height: 100%;
	width: 100%;
	z-index: 1;

	background-color: transparent;
`;

const ImageInput = styled.input``;
