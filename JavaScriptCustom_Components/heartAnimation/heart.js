const bodyElmnt = document.querySelector("body");
bodyElmnt.addEventListener("mousemove", (event) => {
  const xPosition = event.offsetX; // getting position of mouse in x direction
  const yPosition = event.offsetY; // getting position of mouse in y direction
  const spanElmnt = document.createElement("span");
  spanElmnt.style.left = xPosition + "px";
  spanElmnt.style.top = yPosition + "px";
  const size = Math.random() * 100;
  spanElmnt.style.width = size + "px";
  spanElmnt.style.height = size + "px";
  // Apply a color tint to the image using CSS filters
  spanElmnt.style.filter = `sepia(100%) saturate(100%) hue-rotate(${
    Math.random() * 360
  }deg) brightness(100%) contrast(100%)`;

  bodyElmnt.appendChild(spanElmnt);
  setTimeout(() => {
    spanElmnt.remove();
  }, 3000);
});
