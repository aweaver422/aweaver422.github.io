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
    const userInput = event.currentTarget.value;
    document.getElementById("p-emotion").innerHTML = `You are feeling ${userInput}.`
    document.getElementById("img-emotion").classList.remove("hiden");
};

