
depp.define({
   'custom-style': ['/assets/css/custom.css']
})
depp.require(['FontsLoaded'], function () {
   console.log('ready:', Date.now() - _start)
   depp.require(['bsDefaultStyle', 'font-awesome', 'custom-style', 'DOM' ], function () {
      depp.done('commentoPre')
   })
})

