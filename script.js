// var a = document.querySelector("img")
// var btn = document.querySelector("button")

// btn.addEventListener(function(){
//     var k = set
// })


var screen = document.querySelectorAll(".box")
var btn = document.querySelector(".box button")
var allElems = document.querySelectorAll(".card1")
var playground = document.querySelector(".playground")
var selected =""

btn.addEventListener("click",function(){
    screen[1].style.transform = "translateY(-100%)"
})

allElems.forEach(function(elem){
    elem.addEventListener("click",function(){
        selected = elem.childNodes[3].getAttribute("src")
        var newimg = document.createElement("img")// 
        newimg.setAttribute("src",selected)
        var x = Math.random()*100
        var y = Math.random()*100
        var rot = Math.random()*360
        playground.appendChild(newimg)
        screen[2].style.transform = "translateY(-200%)"
        newimg.style.left = x+"%"
        newimg.style.top = y+"%"
        newimg.style.rotate = rot+"deg"
    })
})
// console.log(elem.childNodes[3].getAttribute("src"));