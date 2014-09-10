
$(function() {
    var isTouch = Modernizr.touch;
    var BV = new $.BigVideo({forceAutoplay:isTouch, useFlashForFirefox:false});
    BV.init();
    BV.show('media/vid/Colorado Fashion Week-HD.mp4', {ambient:false, doLoop:true});
    BV.getPlayer().volume(0);
});