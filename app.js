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
    `<img src="${a}" alt="">
    <div class="top-text">${b}</div>
    <div class="bottom-text">${c}</div>`
    parent.appendChild(newMeme)
}

// parent.addEventListener('mouseenter', function(e){
//     if (e.target.parentElement.id === "picture"){
//         console.log(e.target)
//         e.target.parentElement.classList.add("hover-in")
//     }
// })

// parent.addEventListener('mouseout', function(e){
//     if(e.target.parentElement.id === "picture"){
//         e.target.parentElement.classList.remove("hover-in")
//     }
// })

parent.addEventListener("click", function (e){
    if(e.target.parentElement.id == "picture"){
        e.target.parentElement.remove()
    }
})
