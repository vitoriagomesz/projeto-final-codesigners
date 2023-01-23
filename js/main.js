//DECLARANDO VARIAVÉIS

var btnContact = document.querySelector('.jl-btn-contact');
var toggleModal = document.querySelectorAll('.jl-toggle-modal')

//PAGE PRELOADER

window.addEventListener('load', function () {
    var pagePreloader = document.querySelector('.jl-preloader');
    pagePreloader.classList.add('jl-fade-out');

    setTimeout(function () {
        pagePreloader.style.display = 'none';
    }, 2000)  
});

// TOGGLE CLICK NO BOTÃO DE CONTATO

var btnContact = document.querySelector('.jl-btn-contact');

btnContact.addEventListener('click', function() {
    var boxContact = document.querySelector('.jl-contact-info');
    boxContact.classList.toggle('jl-is-open');
    this.classList.toggle('jl-change-icon'); /* this se refere ao btnContact */
});

//ABRINDO E FECHANDO O MODAL DE ORÇAMENTO

for (var i = 0; i < toggleModal.length; i++){
    toggleModal[i].addEventListener('click', function() {
        var overlay = document.querySelector('.jl-overlay');
        var modalOrcamento = document.querySelector('#jl-modal-orcamento');

        overlay.classList.toggle('jl-is-open');
        modalOrcamento.classList.toggle('jl-is-open');
        modalOrcamento.classList.toggle('jl-slide-top-in');
    });
}

//ANIMANDO ELEMENTOS ON SCROLL COM WAYPOINTS 

var myScrollDown = document.querySelector('.jl-scroll-down');

var waypoint = new Waypoint({
    element: myScrollDown,
    handler: function() {
      myScrollDown.classList.toggle('jl-fade-out');
    },
    offset: '80%'
  })