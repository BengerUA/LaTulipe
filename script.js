
// slider 
$(document).ready(function(){
    $('.slider').slick({
        fade: true,
        dots: true,
        infinite: true,
        cssEase: 'linear',
        arrows: false,
        autoplay: true,
    });
});



// form submit 
function submitForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    let formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    let xhr = new XMLHttpRequest();

    xhr.open('POST', '/submit_form');
    xhr.onload = function() {
        if (xhr.status === 200) {
        alert('The message has been sent!');

        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
        } else {
        alert('Message not sent!');
        }
    };

    xhr.send(formData);
}


// scroll 
window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrolled > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


// header & footer 
$(document).ready(function() {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
});


// location 
document.addEventListener("DOMContentLoaded", function() {
    let map = L.map('map').setView([50.45, 30.52], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([50.45, 30.52]).addTo(map).bindPopup('Greetings from Ukraine!').openPopup();
});

// burger menu for mobile and tablet 
$(document).ready(function() {
    setInterval(window.onload = function(){
        const burgerMenu = document.querySelector('.burger-menu');
        const sideMenu = document.querySelector('.side-menu');
        
        burgerMenu.addEventListener('click', toggleMenu);
        
        function toggleMenu() {
            sideMenu.classList.toggle('show-menu');
        }
    });
});


// modal form on btn

$(document).ready(function() {
    setInterval(window.onload = function(){
        let modal = document.getElementById("myModal");
        let btn = document.getElementById("reservation-btn");
        let span = document.getElementsByClassName("close")[0];
        
        btn.onclick = function() {
            modal.style.display = "block";
        }
        
        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    }
    );
});
