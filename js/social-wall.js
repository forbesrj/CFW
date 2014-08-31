/**
 * Created by Ryan on 8/30/2014.
 */
$(document).ready(function($){
    $('#social-stream').dcSocialStream({
        feeds: {
            rss: {
                id: 'http://coloradofashionweek.ning.com/profiles/blog/feed?promoted=1&xn_auth=no'
            },
            facebook: {
                id: '132270606858975'
            }
        },
        rotate: {
            delay: 0
        },
        control: false,
        filter: true,
        wall: true,
        cache: false,
        max: 'limit',
        limit: 10,
        iconPath: 'media/img/dcsns-dark/',
        imagePath: 'media/img/dcsns-dark/'
    });
});