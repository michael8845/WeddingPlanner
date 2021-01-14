$(function(){
    'use strict';
    // Adjust Slider Height
var winH = $(window).height(),
navH   = $('.navbar').innerHeight();

$('.slider, .carousel-item').height(winH- (navH ));


// featured work Shuffle 
$('.featured-work ul li').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
    if($(this).data('class')=== 'all'){
        $('.shuffle-imgs .col-md').css('opacity',1);
    } else{
        $('.shuffle-imgs .col-md').css('opacity','.08');
        $($(this).data('class')).parent().css('opacity',1);
    }
});

});
$('.set-bg').each(function () {
    var bg = $(this).data('setbg');
    $(this).css('background-image', 'url(' + bg + ')');
});

//Search Switch
$('.search-switch').on('click', function () {
    $('.search-model').fadeIn(400);
});

$('.search-close-switch').on('click', function () {
    $('.search-model').fadeOut(400, function () {
        $('#search-input').val('');
    });
});

 // For demo preview start
 var today = new Date();
 var dd = String(today.getDate()).padStart(2, '0');
 var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
 var yyyy = today.getFullYear();

 if(mm == 12) {
     mm = '01';
     yyyy = yyyy + 1;
 } else {
     mm = parseInt(mm) + 1;
     mm = String(mm).padStart(2, '0');
 }
 var timerdate = mm + '/' + dd + '/' + yyyy;
 // For demo preview end


 // Uncomment below and use your date //

 /* var timerdate = "2020/12/30" */

 $("#countdown-time").countdown(timerdate, function(event) {
     $(this).html(event.strftime("<div class='countdown__item'><span>%D</span> <p>Day</p> </div>" + "<div class='countdown__item'><span>%H</span> <p>Hour</p> </div>" + "<div class='countdown__item'><span>%M</span> <p>Min</p> </div>" + "<div class='countdown__item'><span>%S</span> <p>Sec</p> </div>"));
 });
 
 /*-------------------
     Radio Btn
 --------------------- */
 $(".guestbook__form__check label").on('click', function () {
     $(".guestbook__form__check label").removeClass('active');
     $(this).addClass('active');
 });
