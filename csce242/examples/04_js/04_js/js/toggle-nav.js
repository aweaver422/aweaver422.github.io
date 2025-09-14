console.log("Attached my script");

document.getElementById("toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");  // opens toggle on mobile view when clicked
};