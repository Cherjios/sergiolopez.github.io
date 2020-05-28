$('body').click(function(){
    $('body').css('background', '#' + bgColor());
    $('header').css('background-color', '#' + bgColor());
    $('footer').css('background', '#' + bgColor());
    $('h1').css('color', '#' + bgColor());
    $('p').css('color', '#' + bgColor());
    $('li').css('color', '#' + bgColor());
    var ncolor = '#' + bgColor();
    document.getElementById("mypic2").style.borderColor = ncolor;
});
function bgColor()
{
return Math.floor(Math.random()* 16777216).toString(16);
}