
depp.define({
   'custom-style': ['/assets/css/custom.css']
})
depp.require(['FontsLoaded'], function () {
   console.log('ready:', Date.now() - _start)
   depp.require([  'DOM', 'bsDefaultStyle', 'custom-style' ], function () {
      depp.done('commentoPre')
   })
})

