
// TOGGLE CLICK NO BOTÃO DE CONTATO

var btnContact = document.querySelector('.jl-btn-contact');

btnContact.addEventListener('click', function() {
    var boxContact = document.querySelector('.jl-contact-info');
    boxContact.classList.toggle('jl-is-open');
    this.classList.toggle('jl-change-icon'); /* this se refere ao btnContact */
});