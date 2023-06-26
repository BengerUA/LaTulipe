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



window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrolled > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});