const containerElmnt = document.querySelector(".container");
const careers = [
  "Software Engineer",
  "Photographer",
  "FrontEnd Developer",
  "Instructor",
];
const colors = ["#FF69B4", "#33CC33", "#6666CC", "#CC3333"];

let careerIndex = 0;
let charIndex = 0;

updateText();

function updateText() {
  charIndex++;

  containerElmnt.innerHTML = `<h1>I am ${
    careers[careerIndex].startsWith("I") ? "an" : "a"
  } ${careers[careerIndex].slice(0, charIndex)}</h1>`;

  if (charIndex === careers[careerIndex].length) {
    careerIndex = (careerIndex + 1) % careers.length;
    charIndex = 0;
  }

  setTimeout(updateText, 400);
}
