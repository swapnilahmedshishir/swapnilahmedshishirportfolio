/* ============== toggle icon navbar ========================*/
let menuIcon = document.querySelector('#menu_icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
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
    //    navbar.classList.remove('active');


};

/* ============== scroll reveal ===========*/

ScrollReveal({
    //  reset: true ,
    distance: '80px',
    duration: 2000,
    deley: 200

});

ScrollReveal().reveal('.home_content, .heading ', { origin: 'top' });
ScrollReveal().reveal('.home_img, .services_container, .portfolio_box, .contact form ', { origin: 'bottom' });
ScrollReveal().reveal('.home_content h1, .about_img ', { origin: 'left' });
ScrollReveal().reveal('.home_content p, .about_content ', { origin: 'right' });



/* ============== typed js ===========*/

const typed = new Typed('.multiple_text', {
    strings: ['Front-end Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


/* ============== downlode cv file ===========*/

function downloadFile() {
    // Create a new element to represent the download link
    let downloadLink = document.createElement('a');

    // Set the download link's properties
    downloadLink.setAttribute('href', './image/web_photo.png');
    downloadLink.setAttribute('download', './image/web_photo.png');

    // Append the download link to the document
    document.body.appendChild(downloadLink);

    // Simulate a click on the download link
    downloadLink.click();

    // Remove the download link from the document
    document.body.removeChild(downloadLink);
}

/* ============== Read more button ===========*/

function showMore() {
    const hiddenParagraph = document.querySelector('#more');
    const button = document.querySelector('#about_content_btn');
    const dot = document.querySelector('#dot');
    if (hiddenParagraph && button) {
        if (hiddenParagraph.style.display === 'none') {
            hiddenParagraph.style.display = 'block';
            dot.style.display = 'none';
            button.textContent = 'Read Less';
        } else {
            hiddenParagraph.style.display = 'none';
            dot.style.display = 'inline';
            button.textContent = 'Read more';
        }
    } else {
        console.error('Unable to find hidden text or button element');
    }
}