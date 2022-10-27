import Layout from "../../components/Layout";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DetailComment from "../../features/Detail/DetailComment";
import { __getBoardDelete, __updateBoard, __getBoardDetail } from "../../redux/modules/board";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Detail = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(__getBoardDetail(id));
	}, [dispatch, id]);
	const boardsDetail = useSelector(state => state.boards.boards);
	console.log(boardsDetail);

	// const [editTitle, setEditTitle] = useState("");
	// const [editContent, setEditContent] = useState("");
	// const [heart, setHeart] = useState("");
	const [isEdit, setIsEdit] = useState(true);
	const onDeleteHandler = () => {
		dispatch(__getBoardDelete(id));
		navigate(`/`);
	};

	// const editHandler = () => {
	// 	dispatch(
	// 		__updateBoard({
	// 			id: id,
	// 			title: boardsDetail.title,
	// 			content: boardsDetail.content,
	// 		})
	// 	);
	// 	setIsEdit(!isEdit);
	// 	navigate(`/detail/${id}`, {
	// 		state: {
	// 			id: id,
	// 			title: boardsDetail.title,
	// 			content: boardsDetail.content,
	// 			image: boardsDetail.image,
	// 		},
	// 	});
	// };

	// const titleHandler = e => {
	// 	setEditTitle(e.target.value);
	// };

	// const contentHandler = e => {
	// 	setEditContent(e.target.value);
	// };

	// const heartToggle = () => {
	// 	setHeart(heart => heart + 1);
	// };
	// useEffect(heartToggle, []);
	return (
		<>
			<Layout>
				<>
					<DetailWrap>
						<ImgWrap>
							<img src={boardsDetail.image} alt={boardsDetail.title} />
						</ImgWrap>

						<DetailExplanationWrap>
							<ContentTitleWrap>
								{isEdit ? (
									<>
										<div>
											<h2>{boardsDetail.title}</h2>
											<Content>{boardsDetail.content}</Content>
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
												<input
													type="text"
													// onChange={titleHandler}
													value={boardsDetail.title || ""}
												/>
												<input
													type="text"
													// onChange={contentHandler}
													value={boardsDetail.content || ""}
												/>
												<button
												// onClick={editHandler}
												>
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
								<button
								// onClick={() => heartToggle()}
								>
									<span>♥</span>
									<span>좋아요 {boardsDetail.heartNum}개</span>
								</button>
							</LikeWrap>
						</DetailExplanationWrap>
					</DetailWrap>
					<DetailComment />
				</>
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
	width: 600px;
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
