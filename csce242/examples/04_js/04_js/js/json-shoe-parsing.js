const getShoes = async() => {
    const url = "https://portiaportia.github.io/json/shoes.json";

    try {
        const response = await fetch(url);
        return response.json();
    } 
    catch(error) {
        console.log(":(");
    }
};

const showShoes = async() => {
    const shoes = await getShoes();
    const shoeListDiv = document.getElementById("shoes-list");

    shoes.forEach((shoe)=>{
        //make section for each shoe, put all data in, then append to shoe list
        const section = document.createElement("section");
        section.classList.add("shoe");

        //heading
        const h3 = document.createElement("h3");
        section.append(h3);
        h3.innerHTML = shoe.name;

        //brand 
        const p = document.createElement("p");
        section.append(p);
        p.innerHTML = shoe.brand;

        //loop through reviews
        const ul = document.createElement("ul");
        section.append(ul);

        shoe.reviews.forEach((review)=>{
            const li = document.createElement("li");
            li.innerHTML = review;
            ul.append(li);
        });

        //image
        /*
        const img = document.createElement("img");
        section.append(img);
        img.src = `https://portiaportia.github.io/json/${shoes}`;
        */
        shoeListDiv.append(section);
    });
}

showShoes();