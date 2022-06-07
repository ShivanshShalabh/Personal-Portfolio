const achievemntDropdown = document.getElementById("drop-down-achievement");
const achievementContainer = document.getElementById("achievement-container");
const achievementButton = document.getElementById("drop-down-achievement-icon");
const achievementButtonTxt = document.getElementById(
  "drop-down-achievement-icon-txt"
);

achievemntDropdown.addEventListener("click", () => {
  achievementContainer.scrollIntoView({ behavior: "smooth" });
  achievementContainer.classList.toggle("inactive");
  achievementButton.classList.toggle("rotate");
  achievementButtonTxt.innerText =
    achievementButtonTxt.innerText.trim().toLowerCase().replace(" ", "") ===
      "viewmore"
      ? "View Less"
      : "View More";
});


const projectDropdown = document.getElementById("drop-down-project");
const projectContainer = document.getElementById("project-container");
const projectButton = document.getElementById("drop-down-project-icon");
const projectButtonTxt = document.getElementById(
  "drop-down-project-icon-txt"
);

projectDropdown.addEventListener("click", () => {
  projectContainer.classList.toggle("inactive");
  projectButton.classList.toggle("rotate");
  projectButtonTxt.innerText =
    projectButtonTxt.innerText.trim().toLowerCase().replace(" ", "") ===
      "viewmore"
      ? "View Less"
      : "View More";
  projectContainer.scrollIntoView({ behavior: "smooth" });
});
