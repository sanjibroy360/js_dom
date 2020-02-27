//Select the section with an id of container without using querySelector.

let containerId = document.getElementById("container");

//Select the section with an id of container using querySelector.

let containerQuery = document.querySelector("#container");

//Select all of the list items with a class of "second".

let allSecond = document.querySelectorAll(".second");

//Select a list item with a class of third, but only the list item inside of the ol tag.

let olThird = document.querySelectorAll("ol .third");

//Give the section with an id of container the text "Hello!".

// let sec = document.querySelector("#container");
// sec.innerText = "Hello"

let sec = document.querySelector("#container");
let txt = document.createTextNode("Hello");
sec.append(txt);

//Add the class main to the div with a class of footer.

document.querySelector(".footer").classList.add("main");


//Remove the class main on the div with a class of footer.

document.querySelector(".footer").classList.remove("main");

//Create a new li element.

let newLi = document.createElement("li");


//Give the li the text "four".

newLi.innerText = "four";

//Append the li to the ul element.

document.querySelector("ul").appendChild(newLi);

//Loop over all of the list inside the ol tag and give them a background color of "green".

let allOlElements = document.querySelector("ol").children;
Array.from(allOlElements).forEach(el => el.style.backgroundColor = "green"); 

//Remove the div with a class of footer.

document.querySelector(".footer").remove();