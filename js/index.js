document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetElement = document.querySelector(this.getAttribute('href'));

        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('resgister').addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = './회원가입.html';
});
// document.getElementById('resgister1').addEventListener('click', function(event) {
//     event.preventDefault();
//     openModal('myModal10'); // 모달 창 열기
// });
document.getElementById('resgister2').addEventListener('click', function(event) {
    event.preventDefault();
    openModal('myModal7'); // 모달 창 열기
});


//=========================================================

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}
 

//=========================================================

document.querySelector('#btn1').addEventListener('click', function(){
    document.querySelector('.container').style.transform = 'translate(0)';
});
document.querySelector('#btn2').addEventListener('click', function(){
    document.querySelector('.container').style.transform = 'translate(-100vw)';
});
document.querySelector('#btn3').addEventListener('click', function(){
    document.querySelector('.container').style.transform = 'translate(-200vw)';
});
document.querySelector('#btn4').addEventListener('click', function(){
    document.querySelector('.container').style.transform = 'translate(-300vw)';
});
document.querySelector('#btn5').addEventListener('click', function(){
    document.querySelector('.container').style.transform = 'translate(-400vw)';
});
document.querySelector('#btn6').addEventListener('click', function(){
    document.querySelector('.container').style.transform = 'translate(-500vw)';
});



//=========================================================
const qwert = () => {
    const users =JSON.parse(localStorage.getItem("users"))
    document.querySelector("table#tb-guestbook tbody").innerHTML = 
    users.reduce((html, {userName, id, createdAt}) => {
      // console.log(index, html);
      return `
        ${html}
        <tr>
          <td>${userName}</td>
          <td>${id}</td>
          <td>${convertToDatTime(createdAt)}</td>
        </tr>`;
    }, "");

}

const f = (n) => n < 10 ? '0' + n : n;

const convertToDatTime = (millis) => {
  const d = new Date(millis);
  const mm = f(d.getMonth() + 1);
  const dd = f(d.getDate());
  const hh = f(d.getHours());
  const mi = f(d.getMinutes());
  return `${mm}/${dd} ${hh}:${mi}`;
};

qwert();