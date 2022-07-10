// @codekit-prepend "/vendor/hammer-2.0.8.js";

$('#slide > div:gt(0)').hide();

setInterval(function(){
  $('#slide > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#slide');
},3000);


$( document ).ready(function() {

  $('.side-nav li').attr('style','color:black');
  // DOMMouseScroll included for firefox support
  var canScroll = true,
      scrollController = null;
  $(this).on('mousewheel DOMMouseScroll', function(e){

    if (!($('.outer-nav').hasClass('is-vis'))) {

      e.preventDefault();

      var delta = (e.originalEvent.wheelDelta) ? -e.originalEvent.wheelDelta : e.originalEvent.detail * 20;

      if (delta > 50 && canScroll ) {
        canScroll = false;
        clearTimeout(scrollController);
        scrollController = setTimeout(function(){
          canScroll = true;
        }, 800);
        updateHelper(1);
      }
       if (delta < -50 && canScroll) {
        canScroll = false;
        clearTimeout(scrollController);
        scrollController = setTimeout(function(){
          canScroll = true;
        }, 800);
        updateHelper(-1);
      }

    }


  });

  $('.side-nav li, .outer-nav li').click(function(){

    if (!($(this).hasClass('is-active'))) {

      var $this = $(this),
          curActive = $this.parent().find('.is-active'),
          curPos = $this.parent().children().index(curActive),
          nextPos = $this.parent().children().index($this),
          lastItem = $(this).parent().children().length;

      updateNavs(nextPos);
      updateContent(curPos, nextPos, lastItem);

    }

  });


  $('.side-nav').children().eq(1).click(function(){

    $('.side-nav2').addClass('section--is-active');

  });



  $('.cta').click(function(){

    $('#plus').text('+');
    $('.side-nav').removeClass('section');
    $('.side-nav3').addClass('section');
    $('.years').addClass('section');
    updateNavs(0);
    updateContent(0, 0, 0);

  });

  // swipe support for touch devices
  // var targetElement = document.getElementById('viewport'),
  //     mc = new Hammer(targetElement);
  // mc.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
  // mc.on('swipeup swipedown', function(e) {
  //
  //   updateHelper(e);
  //
  // });

  // $(document).keyup(function(e){
  //
  //   if (!($('.outer-nav').hasClass('is-vis'))) {
  //     e.preventDefault();
  //     updateHelper(e);
  //   }
  //
  // });

  // determine scroll, swipe, and arrow key direction
  function updateHelper(param) {

    var curActive = $('.side-nav').find('.is-active'),
        curPos = $('.side-nav').children().index(curActive),
        lastItem = $('.side-nav').children().length-1,
        nextPos = 0;

    if ((param.type === "swipeup" || param.keyCode === 40 || param > 0) && curPos !== 1) {
      if (curPos !== lastItem && curPos !== 0) {
        nextPos = curPos + 1;
        updateNavs(nextPos);
        updateContent(curPos, nextPos, lastItem);
      } else if (curPos === 0) {
        nextPos = curPos + 2;
        updateNavs(nextPos);
        updateContent(curPos, nextPos, lastItem);
      } else {
        updateNavs(nextPos);
        updateContent(curPos, nextPos, lastItem);
      }
    }else if ((param.type === "swipedown" || param.keyCode === 38 || param < 0) && curPos !== 1){
      if (curPos !== 0 && curPos !== 2){
        nextPos = curPos - 1;
        updateNavs(nextPos);
        updateContent(curPos, nextPos, lastItem);
      }else if ( curPos === 2){
        nextPos = curPos - 2;
        updateNavs(nextPos);
        updateContent(curPos, nextPos, lastItem);
      }
      else {
        nextPos = lastItem;
        updateNavs(nextPos);
        updateContent(curPos, nextPos, lastItem);
      }

     }else if(curPos === 1){

    }

  }

  $('#plus').click(function(){

    if($(this).text() === '+'){
      $('#plus').text('-');
      $('.side-nav').addClass('section');
      // $('.side-nav3').removeClass('section');
      $('.years').removeClass('section');

    }else{
      $('#plus').text('+');
      $('.side-nav').removeClass('section');
      $('.side-nav3').addClass('section');
      $('.years').addClass('section');
      setTimeout($('.side-nav3').attr('style','position: absolute'),10000);
    }

  });

  $('#2022').click(function(){

    var years_val = $('#2022').val();
    console.log($('#2022').val());

    if(years_val === 0){
      $('.side-nav3').removeClass('section');
      // $('.side-nav2').attr('style','position: absolute');
      $('.side-nav3').attr('style','position: relative');
      $('#2022').val(1);
    }else{
      $('.side-nav3').addClass('section');
      // $('.side-nav2').attr('style','position: relative');
      setTimeout($('.side-nav3').attr('style','position: absolute'),10000);

      $('#2022').val(0);
    }

  });



  //
  // $('#Works').click(function(){
  //

  //
  // });

  // sync side and outer navigations
  function updateNavs(nextPos) {

    if(nextPos === 1){
      $('.side-nav2').addClass('section--is-active');
      $('.side-nav').children().eq(1).text('　');
    }else{
      $('.side-nav2').removeClass('section--is-active');
      $('.side-nav').children().eq(1).text('Works');
    }

    $('.side-nav, .outer-nav').children().removeClass('is-active');
    $('.side-nav').children().eq(nextPos).addClass('is-active');
    $('.outer-nav').children().eq(nextPos).addClass('is-active');

  }



  // update main content area
  function updateContent(curPos, nextPos, lastItem) {

    $('.main-content').children().removeClass('section--is-active');
    $('.main-content').children().eq(nextPos).addClass('section--is-active');
    $('.main-content .section').children().removeClass('section--next section--prev');

    if (curPos === lastItem && nextPos === 0 || curPos === 0 && nextPos === lastItem) {
      $('.main-content .section').children().removeClass('section--next section--prev');
    }
    else if (curPos < nextPos) {
      $('.main-content').children().eq(curPos).children().addClass('section--next');
    }
    else {
      $('.main-content').children().eq(curPos).children().addClass('section--prev');
    }

    if (nextPos !== 0 && nextPos !== lastItem+1) {
      $('.header--cta').addClass('is-active');
    }
    else {
      $('.header--cta').removeClass('is-active');
    }

    if (nextPos === 0){
      $('.header--cta--b').addClass('is-active');
      $('.side-nav li').attr('style','color:black');
    }
    else {
      $('.header--cta--b').removeClass('is-active');
      $('.side-nav li').removeAttr('style','color:black');
    }

  }

});

