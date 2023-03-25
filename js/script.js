/* ============== toggle icon navbar ========================*/
let menuIcon = document.querySelector('#menu_icon');
let navbar = document.querySelector('.navbar');
  
menuIcon.onclick = () =>{
   menuIcon.classList.toggle('bx-x');
   navbar.classList.toggle('active');    
};





/* ============== secroll section active link ========================*/

let sections = document.querySelectorAll('section');

window.onscroll = () => {
    let navLink = document.querySelectorAll('header nav a');
    let currentSectionId = '';

    sections.forEach(sec => {
        let top = window.scrollY;        
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            currentSectionId = id;
        };
    });

    navLink.forEach(link => {
        link.classList.remove('active');

        if (link.getAttribute('href').includes(currentSectionId)) {
            link.classList.add('active');
        }
    });


/* ============== sticky navbar ========================*/
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100)

/* ============== remove toggle icon navbar when click navbar link ========================*/


    menuIcon.classList.remove('bx-x');
//    navbar.classList.remove('.active');

    
};

/* ============== scroll reveal ===========*/

ScrollReveal({
    //  reset: true ,
     distance:'80px',
     duration : 2000,
     deley: 200
    
});

ScrollReveal().reveal('.home_content, .heading ' , { origin: 'top' });
ScrollReveal().reveal('.home_img, .services_container, .portfolio_box, .contact form ' , { origin: 'bottom' });
ScrollReveal().reveal('.home_content h1, .about_img ' , { origin: 'left' });
ScrollReveal().reveal('.home_content p, .about_content ' , { origin: 'right' });



/* ============== typed js ===========*/

const typed = new Typed ('.multiple_text',{
    strings:['Front-end Developer'],
    typeSpeed:100,
    backSpeed : 100,
    backDelay : 1000,
    loop: true
});






