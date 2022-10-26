// const upload = () => {
// 	const formData = new FormData();
// 	formData.append("file", files);
// 	axios({
// 		method: "post",
// 		url: "/api/posts/images",
// 		data: formData,
// 		headers: {
// 			"Content-Type": "multipart/form-data",
// 			Authorization: getToken(),
// 		},
// 	})
// 		.then(response => {
// 			if (response.data.success) {
// 				window.alert("사진이 업로드 되었습니다.");
// 				setImgFile(response.data.url); // 서버에서 받아온 이미지 url
// 				setPreview(`http://3.37.36.119${response.data.url}`); // 이미지 url 변수에 저장
// 			} else {
// 				window.alert("파일을 업로드 하지 못했습니다.");
// 				setImgFile("");
// 				setPreview("");
// 			}
// 		})
// 		.catch(err => {
// 			window.alert("사진 업로드 실패");
// 		});
// };
