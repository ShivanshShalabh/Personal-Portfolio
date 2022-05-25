const achievemntDropdown = document.getElementById("drop-down-achievement");
const achievementContainer = document.getElementById("achievement-container");
const achievementButton = document.getElementById("drop-down-achievement-icon");
const achievementButtonTxt = document.getElementById(
  "drop-down-achievement-icon-txt"
);

achievemntDropdown.addEventListener("click", () => {
  achievementContainer.classList.toggle("inactive");
  achievementButton.classList.toggle("rotate");
  achievementButtonTxt.innerText =
    achievementButtonTxt.innerText.trim().toLowerCase().replace(" ", "") ===
    "viewmore"
      ? "View Less"
      : "View More";
});
