// //element which needs to be scrolled to
const down = document.getElementById("navDown");
const main_header = document.querySelector(".main-header");
// const contactSection = document.getElementsByClassName(".contact-section");
const contactSection = document.querySelector(".footer-container");
console.log(contactSection.offsetTop);


// console.log(contactSection);


down.addEventListener("click", goDown);

function goDown() {
    
    // let distance = main_header.offsetTop + contactSection.offsetTop;
    let distance = 10000;
    scrollBy({top: distance, behavior: "smooth"});
    // console.log(distance);
}





















// const navLinks = document.querySelectorAll("a");

// console.log(navLinks);

// navLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));

// function navbarLinkClick() {
    
// }
// // for (const link of links) {
// //     link.addEventListener("click", clickHandler);
// //   }
   
// //   function clickHandler(e) {
// //     e.preventDefault();
// //     const href = this.getAttribute("href");
// //     // console.log(href);
// //     const offsetTop = document.querySelector(href).offsetTop;
// //     console.log(offsetTop)
   
// //     // scroll({
// //     //   top: offsetTop,
// //     //   behavior: "smooth"
// //     // });
// //   }


