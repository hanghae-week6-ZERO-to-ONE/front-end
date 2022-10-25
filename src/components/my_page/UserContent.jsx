import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getBoard } from "../../redux/modules/board";
import UserContentCmt from "../my_page/UserContentCmt";
import UserContentImg from "../my_page/UserContentImg";
// import SettingUserThumbnail from "./OnImgChange";

const UserInfo = () => {
	const yes = useSelector(state => state.board.board);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(__getBoard());
	}, [dispatch]);

	return (
		<>
			<UserContentCmt />
			{/* <SettingUserThumbnail /> */}

			{yes.map((val, index) => {
				return <UserContentImg key={index} board={val} />;
			})}
		</>
	);
};

export default UserInfo;
