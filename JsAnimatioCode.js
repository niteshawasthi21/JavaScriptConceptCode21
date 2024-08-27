//Js code

const bodyElmnt = document.querySelector("body");
bodyElmnt.addEventListener("mousemove", (event) => {
  const xPosition = event.offsetX; // getting position of mouse in x direction
  const yPosition = event.offsetY; // getting position of mouse in y direction
  const spanElmnt = document.createElement("span");
  spanElmnt.style.left = xPosition + 'px';
  spanElmnt.style.top = yPosition + 'px';
  const size = Math.random() * 100;
  spanElmnt.style.width = size + 'px';
  spanElmnt.style.height = size + 'px';
  // Apply a color tint to the image using CSS filters
  spanElmnt.style.filter = `sepia(100%) saturate(100%) hue-rotate(${Math.random() * 360}deg) brightness(100%) contrast(100%)`;

 

  bodyElmnt.appendChild(spanElmnt);
  setTimeout(() => {
    spanElmnt.remove();
  }, 3000)
})

// cs code
body{
  margin:0;
  height:100vh;
  background-color:black;
  overflow:hidden;
}

span{
  background:url('https://cdn4.iconfinder.com/data/icons/general-office/91/General_Office_54-64.png');
  width:100px;
  height:100px;
  position:absolute;
  background-size:cover;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
  pointer-events:none;
  animation:animate 6s linear;
  content:fill-box
}

@keyframes animate{
  0%{
    transform: translate(-50%,-50%);
    opacity: 1;
    /* filter: hue-rotate(0); */
  }
  100%{
    transform: translate(-50%, -5000%);
    opacity: 0;
     /* filter: hue-rotate( 700deg ); */
  }
}



//js code

const containerElmnt = document.querySelector(".container");
const careers = ["Software Engineer", "Photographer", "FrontEnd Developer", "Instructor"];
const colors = ["#FF69B4", "#33CC33", "#6666CC", "#CC3333"];

let careerIndex = 0;
let charIndex = 0;

updateText();

function updateText() {
  charIndex++;

  containerElmnt.innerHTML = `<h1 style="color: ${colors[careerIndex]}">I am ${careers[careerIndex].startsWith('I') ? "an" : "a"} ${careers[careerIndex].slice(0, charIndex)}</h1>`;

  if (charIndex === careers[careerIndex].length) {
    careerIndex = (careerIndex + 1) % careers.length;
    charIndex = 0;
  }

  setTimeout(updateText, 400);
}

// css d=code
@import url('https://fonts.googleapis.com/css2?family=Nerko+One&display=swap');

body{
   margin:0;
   display:flex;
   justify-content:center;
   height:100vh;
   align-items:center;
   background:orange;
   font-family: "Nerko One", cursive;
   font-weight: 400;
   font-style: normal
 }

//html
<body>
  <div class='container'>
    
  </div>
</body>
