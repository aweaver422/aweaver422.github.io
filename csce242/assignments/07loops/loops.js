//absolute value for og, add NUM to left/right every time like num = num + 40

document.getElementById("btn-draw-scene").onclick = () => {
    const timeClock = new Date();
    let hh = timeClock.getHours();
    const sky = document.getElementById("sky");
    const ground = document.getElementById("ground");

    const moonL = document.createElement("div");
    const moonB = document.createElement("div");
    const sun = document.createElement("div");

    if ( hh <=6 || hh >= 18 ) {
        document.querySelector("#main-content").style.backgroundColor = "black";
        moonB.classList.add("moonBig");
        moonL.classList.add("moonLil");

        sky.appendChild(moonB);
        sky.appendChild(moonL);

    } else {
        sun.classList.add("sun");
        sky.appendChild(sun);
    }
const isMobile = window.innerWidth <= 600;

    if (isMobile) {
        moonB.style.left = 400 + "px";
        moonL.style.left = 395 + "px";
        moonL.style.top = 185 + "px";
        sun.style.left = 400 + "px";

        for (let x = 0; x < 84; x+=14) {
            let cloudL = document.createElement("div");
            cloudL.classList.add("cloudL");
            cloudL.style.left = (10 + x) + "%";
            cloudL.style.top = 290 + "px";
            sky.appendChild(cloudL);

            let cloudR = document.createElement("div");
            cloudR.classList.add("cloudR");
            cloudR.style.left = (16 + x) + "%";
            sky.appendChild(cloudR); 

            let cloudB = document.createElement("div");
            cloudB.classList.add("cloudB");
            cloudB.style.left = (13 + x) + "%";
            cloudB.style.top = 295 + "px";
            sky.appendChild(cloudB);

            let treeT = document.createElement("div");
            treeT.classList.add("treeT");
            treeT.style.left = (13 + x) + "%";
            treeT.style.top = 520 + "px";
            ground.appendChild(treeT);

            let treeB = document.createElement("div");
            treeB.classList.add("treeB");
            treeB.style.left = (15 + x) + "%";
            ground.appendChild(treeB);
        }
    } else {
        for (let x = 0; x <= 900; x += 160) {
            let cloudL = document.createElement("div");
            cloudL.classList.add("cloudL");
            cloudL.style.left = (250 + x) + "px";
            sky.appendChild(cloudL);

            let cloudR = document.createElement("div");
            cloudR.classList.add("cloudR");
            cloudR.style.left = (350 + x) + "px";
            sky.appendChild(cloudR); 

            let cloudB = document.createElement("div");
            cloudB.classList.add("cloudB");
            cloudB.style.left = (290 + x) + "px";
            sky.appendChild(cloudB);

            let treeT = document.createElement("div");
            treeT.classList.add("treeT");
            treeT.style.left = (345 + x) + "px";
            ground.appendChild(treeT);

            let treeB = document.createElement("div");
            treeB.classList.add("treeB");
            treeB.style.left = (362 + x) + "px";
            ground.appendChild(treeB);
        }
    }
}