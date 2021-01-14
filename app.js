// movement animation to happen

const card = document.querySelector('.card')
const container = document.querySelector('.container')
const img = document.querySelector('img')
const title = document.querySelector('.title')
const description = document.querySelector('.details h3')
const sizes = document.querySelector('.sizes')
const purchase = document.querySelector(".purchase")

// movement animetion when mouse inside container
container.addEventListener('mousemove',(e)=>{
    console.log(e.pageX)
    console.log(e.pageY) 
    let xaxis = ((window.innerWidth /2) - e.pageX )/10;
    let yaxis = ((window.innerHeight/2) - e.pageY)/10;
    
    card.style.transform = " rotateX( "+ yaxis +"deg) rotateY("+xaxis +"deg) ";
})
// animation in
container.addEventListener('mouseenter',(e)=>{
    card.style.transition = "none";
    img.style.transform = "translateZ(150px) rotateZ(-45deg)";
    title.style.transform = "translateZ(125px)";
    description.style.transform = "translateZ(100px)";
    sizes.style.transform = "translateZ(75px)";
    purchase.style.transform = "translateZ(150px)";
})
// animation out
container.addEventListener('mouseleave',(e)=>{
    card.style.transition = "all 0.5s ease";
    card.style.transform = " rotateX( 0deg) rotateY(0deg) ";
    img.style.transform = "translateZ(0px) rotateZ(0deg)";
    title.style.transform = "translateZ(0px)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
})
