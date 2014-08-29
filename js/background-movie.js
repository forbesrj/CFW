
$(function() {
    var isTouch = Modernizr.touch;
    var BV = new $.BigVideo({forceAutoplay:isTouch});
    BV.init();
    var vids = ['media/vid/Colorado Fashion Week-HD.mp4'];
    BV.showPlaylist(vids, {ambient:true});
    BV.getPlayer().volume(0);
});