import { ExpressRPC } from 'mbake/lib/Serv'

const logger = require('tracer').console()

// intu /////////////////////////////////////////

const mainIApp = new ExpressRPC()

async function app() {
   //www
   mainIApp.serveStatic('..' + '/www')

   //catch all
   mainIApp.appInst.all('*', function (req, resp) {
      const path = req.path
      logger.trace('no route', path)
      resp.json({'No route': path })
   })

   // start ////////////////////////////////////////////////////////
   mainIApp.listen(8080)
}