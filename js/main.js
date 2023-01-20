//DECLARANDO VARIAVÉIS
var btnContact = document.querySelector('.jl-btn-contact');

//PAGE PRELOADER
window.addEventListener('load', function() {
    var pagePreloader = document.querySelector('.jl-preloader');
    pagePreloader.classList.add('jl-fade-out');

    setTimeout(function () {
        pagePreloader.getElementsByClassName.display = 'none';
    }, 2000)  
});

// TOGGLE CLICK NO BOTÃO DE CONTATO

var btnContact = document.querySelector('.jl-btn-contact');

btnContact.addEventListener('click', function() {
    var boxContact = document.querySelector('.jl-contact-info');
    boxContact.classList.toggle('jl-is-open');
    this.classList.toggle('jl-change-icon'); /* this se refere ao btnContact */
});