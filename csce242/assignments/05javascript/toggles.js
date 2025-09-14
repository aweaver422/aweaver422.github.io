//click Sunny Times to reveal paragraph
document.getElementById("btn-sunny").onclick = () => {
    document.getElementById("p-sunny-t").classList.remove("hidden");
}

//click Image Change to change from cloudy to sunny
document.getElementById("clouds").onclick = (event) => {
    event.currentTarget.classList.add("hidden");
    document.getElementById("sunny").classList.remove("hidden");
}

//input color Select A Color, p will appear and change color
const colorPicker = document.getElementById("color-select");
colorPicker.addEventListener("input", updateFirst, false);
colorPicker.addEventListener("change", updateAll, false);
colorPicker.Select();

function updateFirst(event) {
  const p = document.getElementById("p-select-color");
  if (p) {
    p.style.color = event.target.value;
    p.classList.remove("hidden");
  }
}

/*
The link below was used to create the colorPicker javascript
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/color
*/