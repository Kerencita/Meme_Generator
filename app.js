const form = document.querySelector("#form");
const URL = document.querySelector("#URL");
const topText = document.querySelector("#top-text");
const bottomText = document.querySelector("#bottom-text");
const submitBtn = document.querySelector("#submitbtn")
const parent = document.querySelector("#parent")

//preventing default for submitting form, calling function to make meme, and clearing text values//
form.addEventListener('submit', function(e){
    e.preventDefault();
    makeMeme(URL.value, topText.value, bottomText.value);
    URL.value = ''
    topText.value = ''
    bottomText.value = ''
})

//function to add Meme to page by creating a <div> element//
function makeMeme (a,b,c){
    const newMeme = document.createElement("div")
    //adding css class of "container" that will format pictures//
    newMeme.classList.add("container")
    //adding unique id to the divs so I can add event listeners later//
    newMeme.id = "picture"
    //using template string literal to add the image tags, plus <div> classes for the top and bottom text//
    //adding the div classes as children of the image <div> class will allow me to superimpose the text on the image//
    //I added the mouseenter/mouseout event here because I could not get it to work as a separate event listener//
    newMeme.innerHTML = 
    `<img onmouseenter="hoverIn(this)" onmouseout="hoverOut(this)" src="${a}" alt="" width = "300" height = "300">
    <div class="top-text">${b}</div>
    <div class="bottom-text">${c}</div>`
    //appending the new meme <div> element to the parent <div> element in the HTML document//
    parent.appendChild(newMeme)
}

//function to lower opacity of picture + text when mouse on picture//
function hoverIn(x){
    x.parentElement.style.opacity = 0.5;
}
//restoring opacity when mouse is out of the picture//
function hoverOut(x){
    x.parentElement.style.opacity = 1;

}

//using event delegation to add event listeners to all pictures so that when picture is clicked, it will be deleted//
parent.addEventListener("click", function (e){
    if(e.target.parentElement.id == "picture"){
        e.target.parentElement.remove()
    }
})
