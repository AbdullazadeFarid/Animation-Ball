


var ball = document.querySelector(".ball")

var rightbtn =document.querySelector(".rightbtn")
var leftbtn =document.querySelector(".leftbtn")





rightbtn.addEventListener('click' , function(){
    ball.style.left = '79%';


});

leftbtn.addEventListener('click', function () {
    ball.style.left = '0%';
});