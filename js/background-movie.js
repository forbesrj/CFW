
$(function() {
    var isTouch = Modernizr.touch;
    var BV = new $.BigVideo({forceAutoplay:isTouch});
    BV.init();
    BV.show('media/vid/Colorado Fashion Week-HD.mp4', {ambient:true});

});