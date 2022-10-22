import React from "react";
import styled from "styled-components";
const DetailComment = () => {
	return (
		<DetailCommentWrap>
			<h2>댓글</h2>
			<CommentWriteWrap>
				<form action="">
					<input type="text" />
					<button>작성</button>
				</form>
			</CommentWriteWrap>
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
	form {
		input {
			width: 930px;
			height: 30px;
			margin-right: 20px;
		}
		button {
			width: 100px;
			height: 35px;
			background-color: #cde230;
			border: none;
			cursor: pointer;
		}
	}
`;
