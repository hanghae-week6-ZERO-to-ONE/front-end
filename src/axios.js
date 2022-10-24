import axios from "axios";

const instance = axios.create({
	baseURL: "http://localhost:3001",
});

instance.interceptors.request.use(config => {
	config.headers["Content-Type"] = "multipart/form-data";

	return config;
});

export const fileUploadApi = data => {
	console.log(data);
	instance.post("/file", data);
};
