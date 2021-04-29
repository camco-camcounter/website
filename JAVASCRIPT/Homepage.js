//Animazione scroll al click dei link

$(document).ready(function(){

$("a").on('click', function(event) {

if (this.hash !== "") {

    event.preventDefault();

    var hash = this.hash;

    let navbar = document.querySelector("nav");
    let navbarheight = parseInt(window.getComputedStyle(navbar).height,10);
    //let scrollHeight = document.querySelector(e.target.hash).offsetTop - navbarheight;
    let scrollHeight=$(hash).offset().top-navbarheight;
    $('html, body').animate({scrollTop: scrollHeight}, 1000, function(){

        window.location.hash = scrollHeight;
    });
    }
});
});
//Schermata di caricamento
function onReady(callback) {
var intervalId = window.setInterval(function() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
    window.clearInterval(intervalId);
    callback.call(this);
    }
}, 1000);
}

function setVisible(selector, visible) {
document.querySelector(selector).style.display = visible ? 'block' : 'none';
}
onReady(function() {
setVisible('.page', true);
setVisible('#loading', false);
});

