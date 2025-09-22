/*
const sayHello = () => {
    console.log("Hello World");
}

document.getElementById("btn-click-me").onclick = sayHello;
*/

/*good if it's only being used once*/
document.getElementById("btn-click-me").onclick = (event) => {
    document.getElementById("p-welcome").innerHTML = "Hello World";
    //document.getElementById("btn-click-me").classList.add("clicked");  //add class
    event.currentTarget.classList.add("clicked"); //same as previous, current target is pointing to btn-click-me
};

document.getElementById("btn-happy").onclick = () => {
    const pEmotion = document.getElementById("p-emotion");
    pEmotion.innerHTML = "Yay!";
    pEmotion.classList.add("happy");
    pEmotion.classList.remove("sad");
}

document.getElementById("btn-sad").onclick = () => {
    const pEmotion = document.getElementById("p-emotion");
    pEmotion.innerHTML = "Aw...";
    pEmotion.classList.add("sad");
    pEmotion.classList.remove("happy");
}

document.getElementById("btn-clear").onclick = () => {
    const pEmotion = document.getElementById("p-emotion");
    pEmotion.innerHTML = "";
    pEmotion.classList.remove("sad");
    pEmotion.classList.remove("happy");
}

document.getElementById("txt-emotion").onkeyup = (event) => {
    const userInput = event.currentTarget.value;    // .value is only for inputs
    document.getElementById("p-emotion").innerHTML = `You are feeling ${userInput}.`
    document.getElementById("img-emotion").classList.remove("hidden");
};

document.getElementById("btn-mood-ring").onclick = () => {
    const color = document.getElementById("txt-mood-ring").value.trim().toLowerCase();
    const p = document.getElementById("p-mood-result");
    p.innerHTML = ""; //reset paragraph;
    const error = document.getElementById("error-color");
    error.innerHTML = ""; //reset
    let mood = "";

    if(color == "") {
        error.innerHTML = "* blank";
        return;
    }

    else if(color == "red" ) {
        mood = "angry"
    }

    else if(color == "blue") {
        mood = "sad"
    }

    else if(color == "green") {
        mood = "happy"
    }

    if (mood == "") {
        error.innerHTML = "* Invalid Color";
        return;
    }

    p.innerHTML = `You choose ${color}, so you are feeling ${mood}.`;
}

document.getElementById("btn-bounce").onclick = (event) => {
    const ball = document.getElementById("ball");
    
    if(ball.classList.contains("bounce")) {
        event.currentTarget.innerHTML = "Start";
    }
    else {
        event.currentTarget.innerHTML = "Stop";
    }

    ball.classList.toggle("bounce");
}

/* Counter */
let counter = 0;
let counterInterval;
const countP = document.getElementById("p-count");
const btnStartCount = document.getElementById("btn-count-start");
const btnPauseCount = document.getElementById("btn-count-pause");
//const btnResetCount = document.getElementById("btn-reset-count");
btnPauseCount.disabled = true;

btnStartCount.onclick = () => {
    btnStartCount.disabled = true;
    btnPauseCount.disabled = false;
    counterInterval = setInterval(()=>{
        counter++;
        countP.innerHTML = counter;
    }, 1000);
}

btnPauseCount.onclick = () => {
    clearInterval(counterInterval);
    btnPauseCount.disabled = true;
    btnStartCount.disabled = false;
}
/*
btnResetCount.onclick = () => {
    not talked about
}
*/

/* Donation Stuff */
const goal = 10000;
document.getElementById("goal-span").innerHtml = goal;

document.getElementById("btn-donations").onclick = () => {
    const donation = document.getElementById("txt-donations").value;
    const errorSpan = document.getElementById("donation-error");
    errorSpan.innerHTML = "";
    const donationMessage = document.getElementById("donation-msg");
    donationMessage.innerHTML = "";
    
    if(isNaN(donation) || donation <= 0 ) {       // isNaN == is not a number
        errorSpan.innerHTML = "* Invalid Amount."
        return;
    }
    
    totalDonations += parseInt(donation);
    const donationPercent = totalDonations / goal * 100;    

    if(donationPercent >= 100) {
        donationMessage.innerHTML = "Goal Reached";
    } else if(donationPercent >= 50) {
        donationMessage.innerHTML = "Over Halfway There";
    } else {
        donationMessage.innerHTML = "Let's get going!";
    }
    
    document.querySelector(":root").style.setProperty("--donation-percent", donationPercent + "%");
}