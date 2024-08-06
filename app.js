const img_URL = "https://api.thecatapi.com/v1/images/search?limit=100";
const facts_URL = " https://meowfacts.herokuapp.com/?count=3";

const photo = document.querySelector("#photo");
const box = document.querySelector("#box");
const btn = document.querySelector("button");
const para = document.createElement("p");

let element = false;

// const getimg = async () => {
//     let image = await fetch(img_URL);
//     let finalimg = await image.json(); 
// }

btn.addEventListener("click", () => {
    if(element) {
        para.remove();
        element = false;
    }
    getFacts();
})

const getFacts = async () => {
    let Data = await fetch(facts_URL);
    let facts = await Data.json();
    para.innerText = facts.data[chooseRan()];
    box.append(para);
    element = true;
}

const chooseRan = () => {
    let Ran = Math.floor(Math.random() * 3);
    return Ran;
}