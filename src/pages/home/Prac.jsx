import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { getPost } from "../redux/modules/postsSlice";
import { timeForToday } from "./Time";
import { useNavigate } from "react-router-dom";

const Main = () => {
	const [category, setCategory] = useState("");
	const { posts } = useSelector(state => state.posts);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getPost());
	}, [getPost()]);

	return (
		<Layout>
			<NavBox>
				<Logo>Hell🚫 world...</Logo>
				<NavBtnBox>
					<Login></Login>
				</NavBtnBox>
			</NavBox>
			<BtnGroup>
				<Btn
					onClick={() => {
						setCategory("JavaScript");
					}}
				>
					<span>JAVASCRIPT</span>
				</Btn>
				<Btn
					onClick={() => {
						setCategory("C");
					}}
				>
					<span>C</span>
				</Btn>
				<Btn
					onClick={() => {
						setCategory("Python");
					}}
				>
					<span>PYTHON</span>
				</Btn>
				<Btn
					onClick={() => {
						setCategory("C++");
					}}
				>
					<span>C++</span>
				</Btn>
				<Btn
					onClick={() => {
						setCategory("Java");
					}}
				>
					<span>JAVA</span>
				</Btn>
				<Btn
					onClick={() => {
						setCategory("Ruby");
					}}
				>
					<span>RUBY</span>
				</Btn>
			</BtnGroup>
			<Board>
				{posts
					.filter(val => {
						if (category == "") {
							return val;
						} else if (val.category == category) {
							return val;
						}
					})
					.map(post => (
						<Box
							key={post.id}
							onClick={() => {
								navigate(`/detail/${post.id}`, {
									state: {
										id: post.id,
										user: post.nickname,
										category: post.category,
										title: post.title,
										content: post.content,
										imgURL: post.imgUrl,
										time: post.createdAt,
									},
								});
							}}
						>
							<div>
								<p
									style={{
										color: "red",

										width: "80px",
										textAlign: "center",
									}}
								>
									{post.category}
								</p>
							</div>
							<p
								style={{
									fontWeight: "bold",

									position: "absolute",
									left: "110px",
									width: "150px",
									height: "20px",
								}}
							>
								{post.title}
							</p>
							<p
								style={{
									position: "absolute",
									left: "275px",
									width: "330px",
									height: "20px",
									color: "gray",
								}}
							>
								{post.content}
							</p>
							<div>
								<p>{timeForToday(post.createdAt)}</p>
							</div>
						</Box>
					))}
			</Board>
			<Add
				onClick={() => {
					navigate(`/post`);
				}}
			>
				+
			</Add>
		</Layout>
	);
};

export default Main;

const Layout = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	height: 800px;
	width: 1200px;
	padding: 40px;
	transform: translate(-50%, -50%);
	background: rgba(0, 0, 0, 0.5);
	box-sizing: border-box;
	box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
	border-radius: 10px;
`;
const NavBox = styled.nav`
	margin-top: 50px;
	width: 100%;
	height: 80px;
	margin: auto;
	display: flex;
	justify-content: space-between;
	padding: 5px 0;
	align-items: center;
	border: solid white 1px;
	border-radius: 15px;
	box-shadow: inset 3px 3px 3px 0px rgba(255, 255, 255, 0.819),
		5px 5px 5px 0px rgba(232, 232, 232, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.nav`
	width: 20%;
	max-width: 1000px;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: 35px;
	margin-bottom: 5px;
	font-family: "Jua", sans-serif;
	font-family: "Silkscreen", cursive;
	font-size: 40px;
	color: white;
	line-height: 35px;
`;

const NavBtnBox = styled.div`
	max-width: 1000px;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin-right: 30px;
`;
const Login = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 20px;
	background-color: red;
	box-shadow: 0 0 5px #b3e5fc, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 100px #b3e5fc,
		inset 1px 1px 1px 0px rgba(255, 255, 255, 0.819);
	:hover {
		background: transparent;
	}
`;
const Add = styled.div`
	position: absolute;
	bottom: 47px;
	right: 190px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 40px;
	height: 40px;
	border-radius: 20px;
	background-color: #03e9f4;
	color: white;
	font-weight: bold;
	font-size: 30px;
	padding: 0;
	margin: 0;
	box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.819),
		5px 5px 5px 0px rgba(232, 232, 232, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
	outline: none;
	:hover {
		color: white;
		box-shadow: 0 0 5px #b3e5fc, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 100px #b3e5fc,
			inset 1px 1px 1px 0px rgba(255, 255, 255, 0.819);
	}
`;

const BtnGroup = styled.div`
	width: 100%;
	height: 100px;
	margin-top: 20px;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;
const Btn = styled.div`
	text-align: center;
	width: 150px;
	height: 40px;
	color: #ffffff;
	font-weight: bold;
	border-radius: 30px;
	padding: 10px 25px;
	font-family: "Lato", sans-serif;
	font-weight: 500;
	background: transparent;
	cursor: pointer;
	transition: all 0.3s ease;
	position: relative;
	display: inline-block;
	box-shadow: inset 4px 4px 4px 0px rgba(255, 255, 255, 0.819),
		5px 5px 5px 0px rgba(232, 232, 232, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
	outline: none;
	line-height: 42px;
	padding: 0;
	border: none;
	background: #6ccdd2;
	font-family: "Jua", sans-serif;
	font-family: "Silkscreen", cursive;
	:hover {
		color: #03e9f4;
		background: transparent;
		box-shadow: none;
		box-shadow: 0 0 5px #b3e5fc, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 100px #b3e5fc;
	}
`;

const Board = styled.div`
	border: solid white 1px;
	border-radius: 15px;
	width: 700px;
	height: 480px;
	margin: 20px auto;
	overflow-y: scroll;
	overflow-x: hidden;
	::-webkit-scrollbar {
		display: none;
	}
`;

const Box = styled.div`
	position: relative;
	box-sizing: border-box;
	border-radius: 15px;
	color: white;
	border: solid white 1px;
	width: 98%;
	height: 10%;
	margin: 10px auto;
	display: flex;
	justify-content: space-between;
	padding: 0 15px;
	box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.819);
	:hover {
		color: #03e9f4;
		background: transparent;
		box-shadow: none;
		box-shadow: 0 0 5px #b3e5fc, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 100px #b3e5fc;
	}
	p {
		overflow: hidden;
	}
`;
