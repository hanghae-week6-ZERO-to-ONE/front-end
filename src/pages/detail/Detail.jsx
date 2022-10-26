import Layout from "../../components/Layout";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import DetailComment from "../../features/Detail/DetailComment";
import { __getBoard, __getBoardDelete, __updateBoard } from "../../redux/modules/board";

import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Detail = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { state } = useLocation();
	const [isEdit, setIsEdit] = useState(true);
	const { category, id, image, title, content, heartNum } = state || "";
	const [editTitle, setEditTitle] = useState(title);
	const [editContent, setEditContent] = useState(content);
	const [editCategory] = useState(category);
	const [editImage] = useState(image);
	const [heart, setHeart] = useState(heartNum);
	useEffect(() => {
		dispatch(__getBoard());
	}, [dispatch]);

	const onDeleteHandler = () => {
		dispatch(__getBoardDelete(id));
		navigate(`/`);
	};

	const editHandler = () => {
		dispatch(
			__updateBoard({
				id: id,
				title: editTitle,
				content: editContent,
				category: editCategory,
				image: editImage,
				heartNum: heart,
			})
		);
		setIsEdit(!isEdit);
		navigate(`/detail/${id}`, {
			state: {
				id: id,
				title: editTitle,
				content: editContent,
				category: editCategory,
				image: editImage,
				heartNum: heart,
			},
		});
	};

	const titleHandler = e => {
		setEditTitle(e.target.value);
	};

	const contentHandler = e => {
		setEditContent(e.target.value);
	};

	const heartToggle = () => {
		setHeart(heart => heart + 1);
	};
	useEffect(heartToggle, []);
	return (
		<>
			<Layout>
				<DetailWrap>
					<ImgWrap>
						<img src={image} alt={title} />
					</ImgWrap>

					<DetailExplanationWrap>
						<ContentTitleWrap>
							{isEdit ? (
								<>
									<div>
										<h2>{title}</h2>
										<Content>{content}</Content>
									</div>
									<EditDelete>
										<span>
											{
												<button onClick={() => setIsEdit(!isEdit)}>
													<strong>편집</strong>
												</button>
											}
										</span>
										<span>
											<button
												onClick={() => {
													const result = window.confirm("이 게시글을 지울까요?");
													if (result) {
														return onDeleteHandler();
													} else {
														return;
													}
												}}
											>
												<strong>삭제</strong>
											</button>
										</span>
									</EditDelete>
								</>
							) : (
								<>
									<EditDelete>
										<div>
											<input type="text" onChange={titleHandler} value={editTitle || ""} />
											<input type="text" onChange={contentHandler} value={editContent || ""} />
											<button onClick={editHandler}>
												<strong>수정</strong>
											</button>
										</div>
										<span>
											<button
												onClick={() => {
													const result = window.confirm("이 게시글을 지울까요?");
													if (result) {
														return onDeleteHandler();
													} else {
														return;
													}
												}}
											>
												삭제
											</button>
										</span>
									</EditDelete>
								</>
							)}
						</ContentTitleWrap>

						<LikeWrap>
							<button onClick={() => heartToggle()}>
								<span>♥</span>
								<span>좋아요 {heart}개</span>
							</button>
						</LikeWrap>
					</DetailExplanationWrap>
				</DetailWrap>
				<DetailComment />
			</Layout>
		</>
	);
};
export default Detail;

const DetailWrap = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 60px;
`;

const DetailExplanationWrap = styled.div`
	width: 950px;
	height: 380px;
	padding: 20px;
	box-sizing: border-box;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const ContentTitleWrap = styled.div`
	display: flex;
	width: 900px;
	justify-content: space-between;
	margin-bottom: 20px;
	h2 {
		font-size: 30px;
		margin-bottom: 20px;
	}
`;
const EditDelete = styled.div`
	display: flex;
	button {
		border: none;
		background-color: #cde230;
		width: 50px;
		height: 30px;
		line-height: 20px;
		cursor: pointer;
	}

	span {
		margin-right: 20px;
	}
	span:last-child {
		margin-right: 0;
	}
`;
const Content = styled.p`
	width: 700px;
	height: 250px;
`;
const LikeWrap = styled.p`
	button {
		border: none;
		background-color: #fff;
		cursor: pointer;
		font-size: 20px;
		span:first-child {
			margin-right: 5px;
			color: red;
		}
	}
`;

const ImgWrap = styled.article`
	img {
		width: 280px;
		height: 380px;
		object-fit: cover;
		box-sizing: border-box;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	}
`;
