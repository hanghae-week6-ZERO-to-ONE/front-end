// 정규식 표현
// 아이디는 2-10자의 영문과 숫자와 일부 특수문자 (_-)만 입력 가능합니다.
// 영문과 숫자 조합의 8-20자의 비밀번호를 설정해주세요 특수문자 (!@#$%^&*)도 사용 가능합니다
export function is_nickname(asValue) {
	var regExp = /^(?=.*[a-zA-Z])[-a-zA-Z0-9_.]{2,10}$/;
	return regExp.test(asValue);
}

export function is_password(asValue) {
	var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{8,20}$/;
	return regExp.test(asValue);
}
