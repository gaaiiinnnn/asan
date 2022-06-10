
/*
//// 중간 내용부분 브라우저 높이에 맞게 알아서 조절

var footerTop = $('footer').offset().top; //위에서 부터 푸터까지의 거리
var conWrapTop = $('#conWrap').offset().top; //위에서 부터 #conWrap까지의 거리

var conWrapH = footerTop - conWrapTop; //#conWrap의 높이(세로길이)

$('#conWrap').css({height:conWrapH}); //#conWrap의 높이 적용

$(window).resize(function(){
    var footerTop = $('footer').offset().top;
    var conWrapTop = $('#conWrap').offset().top;
    var conWrapH = footerTop - conWrapTop;
    $('#conWrap').css({height:conWrapH});
});
*/


var elFooter = document.querySelector('footer');
//// 중간 내용부분 브라우저 높이에 맞게 알아서 조절
var winH = $(window).height(); //현재 열려있는 윈도우 높이
var headerH = $('header').height(); //헤더의 높이
var footerH = elFooter.offsetHeight;
//box-sizing:border-box  적용시 padding, border 제외한 값을 찾아냄

console.log(`현재 브라우저의 높이 ? ${winH} / 헤더의 높이 ? ${headerH} / 푸터의 높이 ? ${footerH}`);

var conWrapH = winH - (headerH + footerH); //conWrap의 height값 = 화면전체 높이 - (헤더높이+푸터높이)
$('#conWrap').css({height:conWrapH});
$(window).resize(function(){
    var winH = $(window).height();
    var conWrapH = winH - (headerH + footerH);
    $('#conWrap').css({height:conWrapH});
});


//// 왼쪽 슬라이더 메뉴
var du = 400;
var open = 0;   //메뉴가 닫혀있을때 (처음)

$('.lnb_btn').click(function(){

    if(open == 0){
        $('#lnb').animate({left:0},400,'swing');
        $('#wrap').animate({left:274},400,'swing');
        $('.cover').fadeIn(du);
        $(this).find('img').attr({'src':'img/bg_header_lnb_active.png', 'atl':'메뉴닫기'});
        open = '열림';
    } else {
        $('#lnb').animate({left:-274},400,'swing');
        $('#wrap').animate({left:0},400,'swing');
        $('.cover').fadeOut(du);
        $(this).find('img').attr({'src':'img/bg_header_lnb.png', 'atl':'메뉴열기'});
        open = 0;
    }
        
    
});
