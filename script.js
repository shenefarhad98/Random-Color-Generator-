const boxPaletteSize = 40;
const container = document.querySelector(".container");
const updateBtn = document.querySelector(".update-btn");

function createPalette() {
  container.innerHTML = "";
  for (let i = 0; i < boxPaletteSize; i++) {
    let randomHex = getRandomHexColor();

    const color = document.createElement("div");
    color.classList.add("color");
    color.innerHTML = `
      <div class="rect-box" style="background: ${randomHex}"></div>
      <span class="hex-shade">${randomHex}</span>
    `;
    color.addEventListener("click",() => copyColor(color,randomHex));
    container.appendChild(color);
  }
}

function getRandomHexColor() {
  let randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${randomColor.padStart(6, "0")}`;
}


const copyColor = (colorBoxElement, colorCode) => {
    const colorElement = colorBoxElement.querySelector(".hex-shade");
  
    navigator.clipboard.writeText(colorCode).then(() => {
      colorElement.innerText = "Copied";
      setTimeout(() => colorElement.innerText = colorCode, 1000);
    }).catch(() => alert("Oops! Something went wrong while copying the color code.!"));
  }
  
  createPalette();
updateBtn.addEventListener("click", createPalette);