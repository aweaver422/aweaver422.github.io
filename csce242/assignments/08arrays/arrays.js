const beforeList = [
    "images/lizard-before.jpg",
    "images/meemaw-before.jpg",
    "images/noel-before.jpg",
    "images/tiramisu-before.jpg"
];

const afterList = [
    "images/lizard-after.jpg",
    "images/meemaw-after.jpg",
    "images/noel-after.jpg",
    "images/tiramisu-after.jpg"
];

const catNames = [
    "Lizard",
    "Meemaw",
    "Noel",
    "Tiramisu"
];

const itemImg = document.querySelectorAll(".item");
const popup = document.getElementById("popup");


itemImg.forEach((item, index) => {
    const img = item.querySelector(".item-img img");
    if (img && beforeList[index]) {
        img.src = beforeList[index];
    }
});

itemImg.forEach((item) => {
    item.addEventListener("click", () => {
        popup.classList.remove("hide");
        const value = item.dataset.value;
        const afterImg = document.getElementById("img-after");
        afterImg.src = afterList[value];
        const afterH2 = document.getElementById("h2-after");
        afterH2.innerHTML = `${catNames[value]} after treatment`;
    });
});

document.getElementById("exit-popup").onclick = () => {
    const popup = document.getElementById("popup");
    popup.classList.add("hide");

};