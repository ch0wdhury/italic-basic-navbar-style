$('#demo-2 input').focus(function () {
    $('.nav-item-hide').addClass('nav-hide');
    $('.custom-navbar').addClass('red');
    $('.navbar-nav a').addClass('white');
    $('.navbar-brand').addClass('white');
    $('.change-to-btn').addClass('button-style');
}).blur(function () {
    $('.custom-navbar').removeClass('red');
    $('.navbar-nav a').removeClass('white');
    $('.navbar-brand').removeClass('white');
    $('.change-to-btn').removeClass('button-style');
    $('.nav-item-hide').removeClass('nav-hide');
});
$('.dropdown').hover(function () {
    $('.custom-navbar').addClass('red');
    $('.navbar-nav a').addClass('white');
    $('.navbar-brand').addClass('white');
    $('.change-to-btn').addClass('button-style');
    $('header').addClass('red');
}).mouseleave(function () {
    $('.custom-navbar').removeClass('red');
    $('.navbar-nav a').removeClass('white');
    $('.navbar-brand').removeClass('white');
    $('.change-to-btn').removeClass('button-style');
    $('header').removeClass('red');
});

$('.dropdown').hover(function() {
  $(this).next('.dropdown-menu').slideToggle(500);
});










