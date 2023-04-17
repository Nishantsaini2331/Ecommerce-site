const bar =document.querySelector(".bar");
const nav = document.querySelector(".left");
const cls = document.querySelector(".close");
const mainImg = document.querySelector(".main-img");
var smallImg1 = document.querySelector(".sml-img-1");
var smallImg2 = document.querySelector(".sml-img-2");
var smallImg3 = document.querySelector(".sml-img-3");
var smallImg4 = document.querySelector(".sml-img-4");

if(bar){
    bar.addEventListener('click' , () =>{
        nav.classList.add("active");
        cls.classList.add("active");
    })
}


if(cls){
    cls.addEventListener('click' , () => {
        nav.classList.remove("active");
        cls.classList.remove("active");
    })
}


smallImg1.addEventListener('click' , () => {
    mainImg.src=smallImg1.src;
})
smallImg2.addEventListener('click' , () => {
    mainImg.src=smallImg2.src;
})
smallImg3.addEventListener('click' , () => {
    mainImg.src=smallImg3.src;
})
smallImg4.addEventListener('click' , () => {
    mainImg.src=smallImg4.src;
})
    