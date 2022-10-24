import Layout from "../../components/Layout";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DetailComment from "../../features/Detail/DetailComment";
import { __getBoard, __getBoardDelete, __updateBoard } from "../../redux/modules/board";

import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Detail = () => {
	const comment = useSelector(state => state.comment.data);
	console.log(comment);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { state } = useLocation();
	const [isEdit, setIsEdit] = useState(true);
	const { category, id, image, title, content, heartNum } = state;
	const [editTitle, setEditTitle] = useState();
	const [editContent, setEditContent] = useState();
	const [heart] = useState(heartNum);
	// console.log("category", category);
	// console.log("id", id);
	// console.log("image", image);
	console.log("title", title);
	console.log("content", content);
	// console.log("heartNum", heart);
	useEffect(() => {}, [title, content]);

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
				category: category,
				image: image,
				heartNum: heart,
			})
		);
		navigate(`/detail/${id}`);
		console.log("state", state);
	};

	const titleHandler = e => {
		setEditTitle(e.target.value);
	};

	const contentHandler = e => {
		setEditContent(e.target.value);
	};
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
									<h2>{title}</h2>
									<Content>{content}</Content>
									<EditDelete>
										<span>{<button onClick={() => setIsEdit(!isEdit)}>편집</button>}</span>
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
							) : (
								<>
									<EditDelete>
										<div>
											<input type="text" onChange={titleHandler} value={title} />
											<input type="text" onChange={contentHandler} value={content} />
											<button onClick={editHandler}>수정</button>
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
							<button>
								<span>♥</span>
								<span>좋아요 {heartNum}개</span>
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
	border: 1px solid #232323;
	width: 950px;
	height: 380px;
	padding: 20px;
	box-sizing: border-box;
`;
const ContentTitleWrap = styled.div`
	display: flex;
	width: 900px;
	justify-content: space-between;
	margin-bottom: 20px;
	h2 {
		font-size: 30px;
	}
`;
const EditDelete = styled.div`
	span {
		margin-right: 20px;
		button {
			border: none;
			background-color: #cde230;
			width: 50px;
			height: 30px;
			line-height: 20px;
			cursor: pointer;
		}
	}
	span:last-child {
		margin-right: 0;
	}
`;
const Content = styled.p`
	width: 900px;
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
	}
`;
