import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getBoard } from "../../redux/modules/board";
import UserContentCmt from "../my_page/UserContentCmt";
import UserContentImg from "../my_page/UserContentImg";
// import SettingUserThumbnail from "./OnImgChange";

const UserInfo = () => {
	const dispatch = useDispatch();
	const yes = useSelector(state => state.boards.boards.data);
	console.log("yes", yes);

	useEffect(() => {
		dispatch(__getBoard());
	}, [dispatch]);

	return (
		<>
			<UserContentCmt />
			{/* <SettingUserThumbnail /> */}

			{yes &&
				yes.map((val, index) => {
					return <UserContentImg key={index} boards={val} />;
				})}
		</>
	);
};

export default UserInfo;
