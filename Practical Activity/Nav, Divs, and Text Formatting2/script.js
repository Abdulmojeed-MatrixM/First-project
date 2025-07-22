//selecting the section with class "about-section"
const section = document.querySelector(".about-section");

//Adding an eventListener
section.addEventListener("click", function() {
    //Togggling the "about-section" class on the section
    this.classList.toggle("about-section");
   
})

//className is used to select the section with class "service-section"
document.querySelector(".services-section").className;

console.log("Service section class name:", document.querySelector(".services-section").className);

//classList
//document.querySelector("nav").classList.add("header");