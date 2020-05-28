$('body').click(function(){
    $('body').css('background', '#' + bgColor());
    $('header').css('background-color', '#' + bgColor());
    $('footer').css('background', '#' + bgColor());
    $('h1').css('color', '#' + bgColor());
    $('h2').css('color', '#' + bgColor());
    $('p').css('color', '#' + bgColor());
    $('li').css('color', '#' + bgColor());

});
function bgColor()
{
return Math.floor(Math.random()* 16777216).toString(16);
}