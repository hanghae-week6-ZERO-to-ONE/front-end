import React from "react";
import styled from "styled-components";
const DetailExplanation = () => {
	return (
		<DetailExplanationWrap>
			<ContentTitleWrap>
				<h2>작성자</h2>
				<EditDelete>
					<span>
						<button>수정</button>
					</span>
					<span>
						<button>삭제</button>
					</span>
				</EditDelete>
			</ContentTitleWrap>
			<Content>내용</Content>
			<LikeWrap>
				<button>
					<span>♥</span>
					<span>좋아요 30개</span>
				</button>
			</LikeWrap>
		</DetailExplanationWrap>
	);
};

export default DetailExplanation;

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
	span {
		color: red;
	}
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
