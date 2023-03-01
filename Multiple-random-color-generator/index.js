const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
}

 const colorContainerEls = document.querySelectorAll(".color-container");

 colorGenerator();
 function colorGenerator(){
    colorContainerEls.forEach((colorContainerEl)=>{
        const color = randomColor();
       
        colorContainerEl.style.backgroundColor = color;
        colorContainerEl.innerText = color;
        // console.log(color);
    })
 }
// randomColor();
function randomColor(){
    const chars = "0123456789abcdef";
    const colorCodeLen = 6;
    let colorCode = "#";
    for (let index = 0; index < colorCodeLen; index++) {
        const randomIndex = Math.floor(Math.random()*chars.length);
        colorCode += chars[randomIndex];
        
    }
    console.log(colorCode);
    return colorCode;
}