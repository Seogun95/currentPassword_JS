# Current-Password_JS

`input` 안에 지정된 정확한 단어를 입력하게 되면 <U>삼항연산자에 의해</U> 텍스트가 등장하는 스크립트 입니다.

**단순 `Enter` 키를 눌러 `input`에 텍스트를 전달할 수 있습니다.**

```html
<input id="password" value="enter password here" onkeyup="valFunction()" onfocus="this.value='';" />
<p id="current-password"></p>
```

```javascript
function valFunction() {
    password = document.getElementById('password').value;
    validation = password == '다운로드' ? `비밀번호 "3322" 2차 배포는 금지입니다!` : '정확한 단어를 입력해주세요';

    if (window.event.keyCode == 13) {
        //enter 이벤트
        document.getElementById('current-password').innerHTML = validation;
    }
}
```

**`button`을 eles if 를 통해 클릭시에도 `input`에 텍스트를 전달할 수 있게 합니다.**

```html
<button onclick="valFunction() ">입력</button>
<p id="current-password"></p>
```

```java
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

```
