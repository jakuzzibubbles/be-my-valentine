const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const message = document.getElementById("message");
const question = document.querySelector("h1");
const buttonsContainer = document.querySelector(".buttons");
const gifImage = document.querySelector(".kitty");

let clickCount = 0;
const noTexts = [
  "Come on, don't be shy!",
  "Really?",
  "You are breaking my heart!",
  "Just say YES!",
  "Why not?",
  "Please, just say yes! 😭",
  "What?",
  "You'll regret it!",
  "Think again!",
  "Last chance!",
  "Seriously?",
  "No",
];

noBtn.addEventListener("click", function () {
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
});

yesBtn.addEventListener("click", function () {
    gifImage.src =
      "https://media.giphy.com/media/qFmdpUKAFZ6rMobzzu/giphy.gif?cid=ecf05e47mg5e73jkxu6ob2painy03ul3klhpub469af3gv41&ep=v1_gifs_search&rid=giphy.gif&ct=g";
      question.innerText = "OK, Yay! 🥰 Can't wait!";

      noBtn.style.display ="none";
      yesBtn.style.margin = "0 auto";
      yesBtn.style.display = "block";
});
