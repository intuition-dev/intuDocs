depp.define({
    'pre': [
        '#poly'
        ,'#load-image'
        ,'#axios'
    ],
    'cssJs': [ '#pre'
        ,'#jquery'
    ],
    'style': [
        '#SiteFonts'
        , ROOT + 'assets/css/spectreBottom.css'

    ]
})

depp.require('cssJs', function(){ // after pre and jquery
    loadFonts(['Open+Sans:300,300i,400', 'Playfair+Display:400']) // check weights

    DeventBus.addListener('FontsLoaded', function(evt){
        console.log(evt)
        depp.done('SiteFonts')
    })
})

depp.require(['jquery', 'style'], function () {
    
    console.log('style')
    toolBeltDefault()


    // fixed top bg
    $(window).scroll(function() {
        var scrolledY = $(window).scrollTop();
        $('.pageBack').css('background-position', 'center ' + ((scrolledY)) + 'px');
    });

    $('.delayShowing').removeClass('delayShowing')
    $('.blur').removeClass('blur')
})

// plugin to work, or extension - change name of folder
// font weights check in css
// new bus has persist - to remove a race
// check ie 11 of component you made
// something wrong w/ contact us page