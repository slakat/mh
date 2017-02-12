//skrollr stuff 
skrollrCheck = function() {
   var winWidth        = window.innerWidth;
   var winHeight       = window.innerHeight;

   if(winWidth >= 300) {
     if(document.body.id !== 'skrollr-body') {
       document.body.id = 'skrollr-body';
       // Init Skrollr
       skrollr.init({
         forceHeight: false,//disable setting height on body
         mobileDeceleration:0.04,
         smoothScrolling:true,
         render: function(data) {
           //Debugging - Log the current scroll position.
           console.log('data.curTop: ' + data.curTop);
         }
       });
     }
   } else if (winWidth < 300){
     // Destroy skrollr for screens less than 300px
     if(document.body.id === 'skrollr-body') {
       skrollr.init().destroy();
       document.body.id = '';
     }
   }
 };

//Initialize skrollr, but only if it exists.
if(typeof skrollr !== typeof undefined){
  // INITIALIZE
  window.onload = skrollrCheck();
  window.addEventListener('resize', skrollrCheck);//listens for resize, and refreshes skrollr
  window.addEventListener('orientationchange', skrollrCheck);//listens for orientation change, and refreshes skrollr
  console.log('skrollr active!');
} else {
  console.log('skrollr is did not load.');
}

// gsap stuff

$(function() {
  $("#top").bind('click', { id: '#bottom' }, scroller);
  $("#bottom").bind('click', { id: '#verytop' }, scroller);

  function scroller(event){
    var scrollYPos = $(event.data.id).offset().top;
    event.preventDefault();
    TweenLite.to(window, 5, {scrollTo:{y:scrollYPos, x:0}, ease:Power3.easeInOutCirc})
  } 
});