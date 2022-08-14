function valFunction() {
    password = document.getElementById('password').value;
    validation = password == '다운로드' ? `비밀번호 "3322" 2차 배포는 금지입니다!` : '정확한 단어를 입력해주세요';

    if (window.event.keyCode == 13) {
        //enter 이벤트
        document.getElementById('current-password').innerHTML = validation;
    } else if (
        // 클릭 이벤트
        (window.onclick = function (event) {
            document.getElementById('current-password').innerHTML = validation;
        })
    );
}
