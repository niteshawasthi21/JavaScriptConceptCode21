const imgContainer = document.querySelector(".imageContainer");
const btn = document.querySelector(".btn");
let imgCount = 0;

//Intially we are loading 10 image when Html Page will load succesfully.
window.addEventListener("load", (event) => {     
    addImages(imgCount=10);   
});

//Loading 5 Images on button click.
btn.addEventListener("click", () => {
    addImages(imgCount=5)
})



function addImages() {
    for (let i = 1; i <= imgCount; i++) {
        const newImgElmnt = document.createElement("img");
        newImgElmnt.src = `https://picsum.photos/200?random=${Math.floor(Math.random() * 2000)}`;
        imgContainer.appendChild(newImgElmnt) //appending imges under imges
    }
}