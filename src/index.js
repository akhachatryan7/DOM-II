
import './less/index.less'

// Your code goes here!
const heading = document.querySelector('h1')

window.addEventListener("copy",()=>{
    navigator.clipboard.readText()
    .then(text =>{
        heading.textContent += text
    })
})
window.onload = function(evt){
    console.log(`event ${evt.type}!!!`);
    heading.textContent = "GO"
}
document.body.addEventListener("click", evt =>{
    evt.target.classList.toggle('mirror')
})
document.body.addEventListener('dblclick',evt =>{
    evt.target.outerHTML = ""
})
window.addEventListener('keydown', evt => {
    if(evt.key == 6){
        document.body.innerHTML = "you run order 66"
    }
})
document.body.addEventListener('mousemove',evt =>{
    // console.log(evt)
})

const destinations = document.querySelectorAll(".destination")
for(let destination of destinations){
    destination.addEventListener("mouseenter", ()=>{
        destination.style.fontWeight = 'bold'
    })
    destination.addEventListener("mouseleave", ()=>{
        destination.style.fontWeight = "initial"
    })
}