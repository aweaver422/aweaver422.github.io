const getMenu = async() => {
    const url = "https://aweaver422.github.io/csce242/projects/part6/json/menu.json";
    try {
        const response = await fetch(url);
        return response.json();
    }
    catch (error) {
        console.log("Issue");
    }
};

const displayItems = async() => {
    const items = await getMenu();
    const itemsSection = document.getElementById("menu-list");
    itemsSection.classList.add("menu-options");

    items.forEach((item)=> {
        const section = document.createElement("section");
        itemsSection.append(section);
        section.classList.add("order-item");

        //image
        const image = document.createElement("img");
        section.append(image);
        image.src = item.img;

        // INFO //
        const div = document.createElement("div");
        section.append(div);
        div.classList.add("columns");
        div.classList.add("order-item-header");

        const h4Name = document.createElement("h4");
        div.append(h4Name);
        h4Name.innerHTML = item.name;

        const h4Price = document.createElement("h4");
        div.append(h4Price);
        h4Price.innerHTML = `$${item.price}`;

        const pDesc = document.createElement("p");
        section.append(pDesc);
        pDesc.innerHTML = item.description;

        //add button
        const button = document.createElement("button");
        section.append(button);
        button.innerHTML = "+";
    });
};

displayItems();
// load appetizers

// load pizzas

// load desserts