const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const message = document.getElementById("message");
const question = document.querySelector("h1");
const buttonsContainer = document.querySelector(".buttons");

let clickCount = 0;
const noTexts = [
  "What?",
  "Really?",
  "Why not?",
  "Think again!",
  "You'll regret it!",
  "Just say YES!",
  "Last chance!",
];

noBtn.addEventListener("click", function () {
  if (clickCount < noTexts.length) {
    yesBtn.style.transform = `scale(${1 + clickCount * 0.2})`;
    noBtn.innerText = noTexts[clickCount];
    buttonsContainer.style.marginTop = `${10 + clickCount * 10}px`;
    clickCount++;
  } else {
    yesBtn.style.transform = "scale(2)";
    question.innerText = "OK, YAY! 🎉";
    noBtn.style.display = "none";
  }
});

yesBtn.addEventListener("click", function () {
  message.innerText = "Yay! 🥰 Can't wait!";
});
