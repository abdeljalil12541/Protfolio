

                // scroll revel

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
}); 

ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact-form', { origin:'botoom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin:'right' });





                    /**************  typed js  **************/

const typed = new Typed('.multiple-text', {
    strings: ['Full Stack Developer', 'Web Designer', 'Speaker Of 3 Languages'],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 1000,
    loop: true 
});                    


                     /********** nav bar scrolling *********/


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header div a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header div a[href*='+ id +']').classList.add('active');
            });
        };
    });
};


                    /************* toggle icon navbar ************/

let menuIcon = document.querySelector('#menu-icon');                    
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('alo');
    
}