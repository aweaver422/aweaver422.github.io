class Painting {
    constructor(name, artist, image, framed) {
        this.name = name;
        this.artist = artist;
        this.image = image;
        this.framed = framed;
    }

    get item() {
        const section = document.createElement("section");
        section.classList.add("painting");

        //header
        const h3 = document.createElement("h3");
        h3.innerHTML = this.name;
        section.append(h3);

        //image
        const img = document.createElement("img");
        img.src = this.image;
        img.classList.add("img-painting");
        section.append(img);

        return section; 
    }
}

const paintings = [];
paintings.push(new Painting("House Winter", "kirillslov", "images/winter.png", "framed"));
paintings.push(new Painting("Animal Painting", "t0ngo", "images/cat.jpg", "n/a"));
paintings.push(new Painting("Oil Painting", "hansbenn", "images/fox.jpg", "framed"));
paintings.push(new Painting("Birds Heron", "FreeFunArt", "images/bird.jpg", "n/a"));
paintings.push(new Painting("Bears Forest", "betidraws", "images/bears.jpg", "framed"));
paintings.push(new Painting("Butterfly Blossom", "anonymous", "images/butterfly.jpg", "n/a"));

const paintingList = document.getElementById("painting-list");
const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");

//POPUP
paintings.forEach((painting) => {
    const section = painting.item;
    
    section.addEventListener("click", () => {
        popup.classList.remove("hide");
        overlay.classList.remove("hide");

        const img = document.getElementById("img-painting-popup");
        img.src = painting.image;

        //framed
        if (painting.framed == "framed") {
            img.classList.add("framed");
        } else {
            img.classList.remove("framed");
        }

        const name = document.getElementById("name");
        name.innerHTML = `${painting.name}`;

        const artist = document.getElementById("artist")
        artist.innerHTML = `by ${painting.artist}`;
    });

    paintingList.append(section);
});

document.getElementById("exit-popup").onclick = () => {
    popup.classList.add("hide");
    overlay.classList.add("hide");
};

