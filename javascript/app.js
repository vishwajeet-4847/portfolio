let menu=document.querySelector(".menubox");
let closeBtn=document.querySelector(".close-btn");
let menuBtn=document.querySelector(".menu-btn");
const links=document.querySelectorAll(".menubox .menu a");
const array=Array.prototype.slice.call(links);
array.push(closeBtn,menuBtn);

array.forEach(element => {
    element.addEventListener("click",()=>{
        menu.classList.toggle("show-navbar");
        menuBtn.classList.toggle("hide");
        closeBtn.classList.toggle("show");

       
    })
    
});
let cards=document.querySelectorAll(".cards");
for (let index = 0; index < cards.length; index++) {
     cards[index].addEventListener("click",()=>{
        window.location.href="project.html";
     });
    
}
let pcards=document.querySelectorAll(".project-cards");
for (let index = 0; index < pcards.length; index++) {
     pcards[index].addEventListener("click",()=>{
       
        window.location.href="https://project--yourfrnd.repl.co/#";
     });
    
}