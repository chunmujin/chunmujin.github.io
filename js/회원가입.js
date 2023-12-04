const id = document.querySelector("#id");
const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#password-confirm");
const userName = document.querySelector("#userName");

// input + p.msg.msg-required 의 구조가 동일하므로 반복문을 통해 동일한 핸들러를 각각 바인딩한다.
[id, password, passwordConfirmation].forEach((input) => {
  input.addEventListener('blur', (e) => {
    // e.target.nextElementSibling -> p.msg.msg-required
    if (e.target.value)
      e.target.nextElementSibling.style.display = 'none';
    else
      e.target.nextElementSibling.style.display = 'block';
  });
});

// 비밀번호 안내문구 노출
password.addEventListener('focus', (e) => {
  // 필수항목 안내메세지는 우선 숨김처리한다.
  e.target.nextElementSibling.style.display = 'none';
  document.querySelector(".msg.msg-password").style.display = 'block';
});

// 비밀번호 안내문구 숨김
password.addEventListener('blur', (e) => {
  document.querySelector(".msg.msg-password").style.display = 'none';
});

document.querySelector("#subtton").addEventListener('click', () => {
  
  const regexps = [/^.{8,12}$/, /[a-z]/i, /[0-9]/, /[!@#$%&*()]/];
  const value = password.value.trim();
  const idValue = id.value.trim();
  const userNameValue = userName.value.trim();

  if (idValue === '' || userNameValue === '') {
    alert('아이디와 이름을 입력하세요.');
    return;
  }

  // 문자 8~12자리
  if (!regexps[0].test(value)) {
    alert('비밀번호는 8~12자리여야 합니다.');
    return;
  }
  // 영문자포함
  if (!regexps[1].test(value)) {
    alert('비밀번호는 영문자를 하나 이상 포함해야 합니다.');
    return;
  }
  // 숫자포함
  if (!regexps[2].test(value)) {
    alert('비밀번호는 숫자를 하나 이상 포함해야 합니다.');
    return;
  }
  // 특수문자(!@#$%^&*())포함
  if (!regexps[3].test(value)) {
    alert('비밀번호는 특수문자(!@#$%^&*())를 하나 이상 포함해야 합니다.');
    return;
  }

  alert('회원가입 완료!!!!!!.');
   // localStorage 값 들어가기
   
   const users = JSON.parse(localStorage.getItem('users')) || [];
   const userObj = { userName: userNameValue, id: idValue, createdAt: new Date() };
   users.push(userObj);
   
   localStorage.setItem('users', JSON.stringify(users));
   
   // 초기화
   frm.reset();

  

});




class userInformation {
  constructor(userName, id, createdAt = Date.now()) {
    this.userName = userName;
    this.id = id;
    this.createdAt = createdAt;
  }
}



const f = (n) => n < 10 ? '0' + n : n;
const convertToDateTime = (millis) => {
  const d = new Date(millis);
  const yy = f(d.getFullYear());
  const mm = f(d.getMonth() + 1);
  const dd = f(d.getDate());
  const hh = f(d.getHours());
  const mi = f(d.getMinutes());
  return `${yy}/${mm}/${dd} ${hh}:${mi}`;
};


