const form = document.querySelector("#form");
const URL = document.querySelector("#URL");
const topText = document.querySelector("#top-text");
const bottomText = document.querySelector("#bottom-text");
const submitBtn = document.querySelector("#submitbtn")
const parent = document.querySelector("#parent")

form.addEventListener('submit', function(e){
    e.preventDefault();
    makeMeme(URL.value, topText.value, bottomText.value);
    URL.value = ''
    topText.value = ''
    bottomText.value = ''
})

function makeMeme (a,b,c){
    const newMeme = document.createElement("div")
    newMeme.classList.add("container")
    newMeme.id = "picture"
    newMeme.innerHTML = 
    `<img onmouseenter="hoverIn(this)" onmouseout="hoverOut(this)" src="${a}" alt="" width = "300" height = "300">
    <div class="top-text">${b}</div>
    <div class="bottom-text">${c}</div>`
    parent.appendChild(newMeme)
}

function hoverIn(x){
    x.parentElement.style.opacity = 0.5;
}

function hoverOut(x){
    x.parentElement.style.opacity = 1;

}

parent.addEventListener("click", function (e){
    if(e.target.parentElement.id == "picture"){
        e.target.parentElement.remove()
    }
})
