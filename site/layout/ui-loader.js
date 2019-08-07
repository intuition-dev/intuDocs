
depp.define({
   'custom-style': ['/../assets/css/custom.css']
})
depp.require(['FontsLoaded', 'bsDefaultStyle', 'DOM', 'font-awesome', 'custom-style', 'bsjs'], function () {
   console.log('ready', Date.now() - _start)
})

