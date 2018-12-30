
depp.define({
'pre': [

   , 'https://cdn.jsdelivr.net/npm/is_js@0.9.0/is.min.js'
   , 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.0/slick/slick.min.js'
   , 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.0/slick/slick.css'

   ]
})//define

depp.define({
   '2nd': [
   , 'https://cdn.emailjs.com/sdk/2.2.4/email.min.js'
   , '/assets/3rd/jquery.disableAutoFill.js' 
   , 'https://cdn.jsdelivr.net/npm/zenscroll@4.0.2/zenscroll-min.js'
   , 'https://cdn.jsdelivr.net/npm/validator@10.9.0/validator.min.js'
   , 'https://cdn.jsdelivr.net/npm/sweetalert2@7.29.2/dist/sweetalert2.css'
   , 'https://cdn.jsdelivr.net/npm/sweetalert2@7.29.2/dist/sweetalert2.min.js'

   ]
})//define

depp.define({ 'css': [

   //,  '/assets/css/style.css'

   , 'css!https://fonts.googleapis.com/css?family=Open+Sans'
   ]
})//define

depp.require(['css'])

depp.require(['pre'], setup) //d2


function onDeviceReady() { // nothing will work before this
    console.log('deviceready!')
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
        console.log(viewportHeight)
        $('.section').css({ 'min-height': viewportHeight })
    }

    console.log('setup zen')
    zenscroll.setup(null, 0)

    $('.delayShowing').removeClass('delayShowing') // show

    setInterval(function () {
        if (_scSz) {
            _scSz = false
            userSzSc()
        }
    }, 150)
    console.log('style done', Date.now() - _start)
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
   console.log(evt.detail)
})
