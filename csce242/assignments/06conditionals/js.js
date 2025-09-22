const arrow = document.getElementById("nav-arrow");
const nav = document.getElementById("toggle-nav");

arrow.onclick = () => {
    const isOpen = nav.classList.toggle("show-nav");
    if ( isOpen ) {
        arrow.textContent = "&#129169;";
    } else {
       arrow.textContent = "&#129171;";
    }
};

document.getElementById("btn-exercise-one").onclick = () => {
    document.getElementById("exercise-one").classList.remove("hide");
    document.getElementById("exercise-two").classList.add("hide");
}

document.getElementById("btn-exercise-two").onclick = () => {
    document.getElementById("exercise-one").classList.add("hide");
    document.getElementById("exercise-two").classList.remove("hide");
}

/* 
    &#129169 down arrow 
    &#129171 up arrow
*/

/* SLIDER */
const slider = document.getElementById("slider");
const days = document.getElementById("p-days-since");
const condition = document.getElementById("p-plant-conditon");
const plantImg = document.getElementById("plant-img");

const outputDays = {
    1: "It's been 1 day since watering your plant",
    2: "It's been 2 days since watering your plant",
    3: "It's been 3 days since watering your plant",
    4: "It's been 4 days since watering your plant",
    5: "It's been 5 days since watering your plant",
    6: "It's been 6 days since watering your plant",
    7: "It's been 7 days since watering your plant",
    8: "It's been 8 days since watering your plant",
    9: "It's been 9 days since watering your plant",
    10: "It's been 10 days since watering your plant",
    11: "It's been 11 days since watering your plant",
    12:"It's been 12 days since watering your plant",}

const outputCondition = {
    1: "Your plant is healthy and happy",
    2: "Your plant is healthy and happy",
    3: "Your plant needs watering",
    4: "Your plant needs watering",
    5: "Your plant needs watering",
    6: "Leaves are dropping, the color is changing, water soon",
    7: "Leaves are dropping, the color is changing, water soon",
    8: "Leaves are dropping, the color is changing, water soon",
    9: "Leaves are dropping, the color is changing, water soon",
    10: "Sorry, your plant is no longer with us",
    11: "Sorry, your plant is no longer with us",
    12: "Sorry, your plant is no longer with us",    
}


const outputImg = {
    1: "images/plant.png",
    2: "images/plant.png",
    3: "images/plant2.png",
    4: "images/plant2.png",
    5: "images/plant2.png",
    6: "images/plant3.png",
    7: "images/plant3.png",
    8: "images/plant3.png",
    9: "images/plant3.png",
    10: "images/plant4.png",
    11: "images/plant4.png",
    12: "images/plant4.png",
}

function updatePlant() {
    condition.innerHTML = outputCondition[slider.value];
    days.innerHTML = outputDays[slider.value];
    plantImg.src = outputImg[slider.value];
}

slider.addEventListener("input", () => {
  updatePlant();
});

/* TIME CLOCK */
function time() {
    const timeClock = new Date();
    let hh = timeClock.getHours();
    let mm = timeClock.getMinutes();
    let midday = "";
    
    if ( hh < 12 ) { midday = "am" }
    else { midday = "pm" }

    if ( hh > 12 ) { hh = hh - 12 }

    mm = checkTime(mm);    
    document.getElementById("clock-time").innerHTML = hh + ":" + mm + " " + midday;

    setTimeout(time, 1000);
}

function checkTime(i) {
    return ( i < 10 ) ?"0" + i : i;
}

/* 
    Using W3 Schools and PlayCode.IO as a resource for the slider, time, and object stuff:
    https://playcode.io/javascript/object-literal
    https://www.w3schools.com/howto/howto_js_rangeslider.asp
*/

