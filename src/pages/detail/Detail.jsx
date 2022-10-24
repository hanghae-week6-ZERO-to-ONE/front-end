import Layout from "../../components/Layout";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DetailImg from "../../features/Detail/DetailImg";
import DetailExplanation from "../../features/Detail/DetailExplanation";
import DetailComment from "../../features/Detail/DetailComment";
import DetailCommentContent from "../../features/Detail/DetailCommentContent";
import { __getBoard, __getBoardDelete, __updateBoard } from "../../redux/modules/board";

import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Detail = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [edit, setEdit] = useState();
	const [isEdit, setIsEdit] = useState(true);
	const { state } = useLocation();
	const { category, id, image, title, content, heartNum } = state;
	// console.log("category", category);
	// console.log("id", id);
	// console.log("image", image);
	// console.log("title", title);
	// console.log("content", content);
	// console.log("heartNum", heartNum);

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
				id,
				title,
				content: content,
			})
		);
		navigate(`/`);
	};

	const contentHandler = e => {
		setEdit(e.target.value);
		console.log(e.target.value);
		// dispatch(__getComment(comment.id))
	};

	return (
		<>
			<Layout>
				<DetailWrap>
					<ImgWrap>
						<img src={image} alt="" />
					</ImgWrap>

					<DetailExplanationWrap>
						<ContentTitleWrap>
							{isEdit ? (
								<>
									<h2>{title}</h2>
									<Content>내용</Content>
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
									<input type="text" value={content} onChange={contentHandler} />
									<input placeholder="내용" />
									<EditDelete>
										<span>
											<button onClick={() => editHandler()}>수정</button>
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
								<span>좋아요 30개</span>
							</button>
						</LikeWrap>
					</DetailExplanationWrap>
				</DetailWrap>
				<DetailComment />
				<DetailCommentContent />
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
