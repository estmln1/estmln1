const yesBtn = document.querySelector('.yes-btn');
const audio = document.getElementById('myAudio');
function yesBtnClickHandler() {
    const question = document.querySelector('.question');
    const secondQuestion = document.querySelectorAll('.question')[1];
    const img = document.querySelector('.img');
    question.innerHTML = "I adore you";
    secondQuestion.innerHTML = "How about you?";
    img.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/AskCrush1.png";
}

yesBtn.addEventListener("click", yesBtnClickHandler);

const playBtn = document.querySelector('.play-btn');

playBtn.addEventListener("click", () => {
    audio.play();
});

const noBtn = document.querySelector('.no-btn');

noBtn.addEventListener("click", () => {
    console.log("No button clicked"); // Check if the click event is triggered

    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});


