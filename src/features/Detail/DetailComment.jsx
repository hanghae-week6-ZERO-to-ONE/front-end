import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import DetailCommentContent from "../../features/Detail/DetailCommentContent";
import { __addComment, __getComment } from "../../redux/modules/comment";

const DetailComment = ({ category }) => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const comment = useSelector(state => state.comment.comment);
	const [newCategory, setNewCategory] = useState(category);
	console.log(setNewCategory);
	console.log("받아와지냐", newCategory);
	useEffect(() => {
		dispatch(__getComment());
	}, [dispatch]);

	const [inputForm, setInputForm] = useState();

	const handleSubmit = e => {
		e.preventDefault();
		if (inputForm) {
			const newContents = { content: inputForm };
			dispatch(__addComment(newContents));
			setInputForm("");
			navigate(`/detail/${id}`, {
				category: newCategory,
			});
		} else {
			alert("내용을 입력해주세요");
		}
	};

	return (
		<DetailCommentWrap>
			<h2>댓글</h2>
			<CommentWriteWrap>
				<div>
					<input
						type="text"
						name="content"
						placeholder="댓글을 입력해주세요"
						value={inputForm || ""}
						onChange={e => setInputForm(e.target.value)}
					/>
					<button onClick={handleSubmit}>작성</button>
				</div>
			</CommentWriteWrap>
			{comment &&
				comment?.map((com, idx) => {
					return <DetailCommentContent comment={com} key={idx} />;
				})}
		</DetailCommentWrap>
	);
};

export default DetailComment;

const DetailCommentWrap = styled.section`
	h2 {
		font-size: 30px;
		margin-bottom: 60px;
	}
`;

const CommentWriteWrap = styled.article`
	width: 1280px;
	display: flex;
	justify-content: center;
	input {
		width: 930px;
		height: 40px;
		margin-right: 20px;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		border: none;
	}
	button {
		width: 100px;
		height: 42px;
		background-color: #cde230;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		border: none;
		cursor: pointer;
	}
`;
