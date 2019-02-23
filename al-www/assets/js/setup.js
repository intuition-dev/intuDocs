
$(document).ready(function () {
    // are we running in native app or in a browser?
    window.isphone = false
    if (document.URL.indexOf("http://") === -1
        && document.URL.indexOf("https://") === -1) {
        window.isphone = true
    }

    console.info('phonegap?', window.isphone)
    if (window.isphone) { // //file is a browser
        document.addEventListener("deviceready", onDeviceReady, false)
    } else {
        onDeviceReady()
    }
})

depp.define({
'pre': [

   , 'https://cdn.jsdelivr.net/npm/zenscroll@4.0.2/zenscroll-min.js'
   , 'https://cdn.jsdelivr.net/npm/is_js@0.9.0/is.min.js'
   , 'https://cdn.emailjs.com/sdk/2.2.4/email.min.js'
   , 'https://cdn.rawgit.com/terrylinooo/jquery.disableAutoFill/92cb6f86/src/jquery.disableAutoFill.js' // I wonder if that is a good CDN
   , 'https://cdn.jsdelivr.net/npm/validator@10.9.0/validator.min.js'
   , 'https://cdn.jsdelivr.net/npm/sweetalert2@7.29.2/dist/sweetalert2.min.js'
   , ROOT + 'assets/js/ui.js'
   ]
})//define

depp.define({ 'css': [
   , ROOT + 'assets/css/style.css'
   , 'css!https://fonts.googleapis.com/css?family=Open+Sans'
   , 'https://cdn.jsdelivr.net/npm/sweetalert2@7.29.2/dist/sweetalert2.css'
   ]
})//define

depp.require(['css'])

depp.require(['pre'], setup) //d2


function onDeviceReady() { // nothing will work before this
    console.info('deviceready!')
}

let _scSz = true
function setupUserSzSc() {
    $(window).scroll(function () {
        _scSz = true
    })
    $(window).resize(function () {
        _scSz = true
    })
}//()

// usage: ////////////////////////////////////////////////////////////////////
function setup() {// 'show' page, ex: unhide
    setupUserSzSc()

    if (!is.desktop()) { // mobile browser bar resize
        const viewportHeight = $('.section').outerHeight()
        console.info(viewportHeight)
        $('.section').css({ 'min-height': viewportHeight })
    }

    console.info('setup zen')
    zenscroll.setup(null, 0)

    $('.delayShowing').removeClass('delayShowing') // show

    setInterval(function () {
        if (_scSz) {
            _scSz = false
            userSzSc()
        }
    }, 150)
    console.info('style done', Date.now() - _start)
}//ready

function inView(el) { // is element in viewport
    //special bonus for jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect()

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    )
}

function disE(evtName, msg) {
   dispatchEvent(new CustomEvent(evtName, { detail: msg }))
}
// eg
addEventListener('bla', function(evt) {
   console.info(evt.detail)
})
