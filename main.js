
// Aggiungere il codice js necessario per visualizzare l'hamburger menu su mobile, a partire da html e css già pronti.
//
// $('.fa-bars').click(function() {
//     $('.hamburger-menu').show(200);
// });
//
// $('.fa-times').click(function() {
//     $('.hamburger-menu').hide(200);
// })
//

$('.fa-bars').click(function()
{
    $('.hamburger-menu').addClass('hamburger-menu-visible');
});

$('.fa-times').click(function()
{
    $('.hamburger-menu').removeClass('hamburger-menu-visible');
})
