
depp.define({
   'custom-style': ['/assets/css/custom.css']
})

depp.require(['FontsLoaded'], function () {
   console.log('ready:', Date.now() - _start)
   depp.require([  'bsDefaultStyle', 'DOM' ], function () {

      depp.done('commentoPre')

      depp.require('custom-style')
      depp.require('lazysizes')

   })
})

loadFonts(['Open+Sans:300,300i,400,400i', 'PT+Serif:400,400i,700i'])
