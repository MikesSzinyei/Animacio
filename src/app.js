const doboz1 = document.querySelector("#doboz1");
const startButton = document.querySelector("#startButton");

startButton.addEventListener('click',()=>{
    console.log('mukodik');
    doboz1.style.backgroundColor = "blue";
    doboz1.style.animation = "bito1 10s";
});



