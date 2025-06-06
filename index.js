
const jsConfetti = new JSConfetti();
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const popupYes = document.getElementById("popup-yes");
const popupNo = document.getElementById("popup-no");
const closeButtons = document.querySelectorAll("#close-popup");
const popupNoText = popupNo.querySelector("h2");

const encouragement = [
    "Keep going, you'll get there!",
    "JavaScript takes time—stick with it!",
    "Every expert was once a beginner!",
    "You'll crack it soon—just keep practicing!",
];

yesBtn.addEventListener("click", () => {
   
    jsConfetti.addConfetti({
        emojis: ["💯", "🌟", "🎉", "🔥"],
        emojiSize: 25,
        confettiNumber: 100,
    });

    popupYes.style.display = "block";
});


noBtn.addEventListener("click", () => {
    const randomMessage =
        encouragement[Math.floor(Math.random() * encouragement.length)];
    popupNoText.textContent = randomMessage;
    popupNo.style.display = "block";
});

closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        popupYes.style.display = "none";
        popupNo.style.display = "none";
    });
});
