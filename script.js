const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const message = document.getElementById("message");
const question = document.querySelector("h1");
const buttonsContainer = document.querySelector(".buttons");
const gifImage = document.querySelector(".kitty");
const audio = new Audio("Forever.mp3");

let clickCount = 0;
const noTexts = [
  "What?",
  "Are you sure?",
  "Really really really sure?",
  "You are breaking my heart!",
  "Really?",
  "Say YES!",
  "Why not?",
  "Please, just say yes! 😭",
  "You'll regret it!",
  "Think again!",
  "Last chance!",
  "Seriously?",
  "No",
];

noBtn.addEventListener("click", function () {
  setTimeout(() => {
    audio.play();
  }, 1000);
  if (clickCount < noTexts.length) {
    yesBtn.style.transform = `scale(${1 + clickCount * 1})`;
    noBtn.innerText = noTexts[clickCount];
    noBtn.style.transform = `scale(${1 - clickCount * 0.05})`;
    buttonsContainer.style.marginTop = `${10 + clickCount * 10}px`;
    clickCount++;
  } else {
    yesBtn.style.transform = "scale(5)";
    question.innerText = "OK, YAY!";
    noBtn.style.display = "none";
  }
  gifImage.src =
    "https://media.giphy.com/media/hwvL2uKsTd1cNpZd9c/giphy.gif?cid=ecf05e47aizeleq89rc7x3w0j1jke78elww3wg7mvhgq0xlu&ep=v1_gifs_search&rid=giphy.gif&ct=g";
});

yesBtn.addEventListener("click", function () {
  audio.pause();
  audio.currentTime = 0;
  
    gifImage.src =
      "https://media.giphy.com/media/qFmdpUKAFZ6rMobzzu/giphy.gif?cid=ecf05e47mg5e73jkxu6ob2painy03ul3klhpub469af3gv41&ep=v1_gifs_search&rid=giphy.gif&ct=g";
      question.innerText = "Yay! Can't wait!";

      document.body.style.backgroundColor = "white";

      noBtn.style.display ="none";
      yesBtn.style.display = "none";
});
