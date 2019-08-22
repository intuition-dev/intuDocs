
# ADVANCED / Mobile & Custom Elements, etc.

## Lazy Loading

Lazy loading .js and other assets enables very fast UX. More here:
[Lazy loading](https://github.com/intuition-dev/toolBelt/tree/master/lazyLoading)


## Mobile apps

A responsive web app can easily become machine compiled into IOS and Android. *As single code base*. 
If you are in a rush or have limited resources but need a mobile or a cross platform app:
 you should convert to Electron first. It seems like Electron step is an extra step to slow you down: but doing Electron
 app first saves you time - even if you never release the Electron app.
 
You can of course add any needed native plugins from Cordova; but most apps don't need any Cordova plugins.

# Custom Elements

Custom Elements are built into the browser.

[Custom Elements example](https://github.com/intuition-dev/toolBelt/tree/master/custel/custel1)


## Other

In next version of INTUITION.DEV we will support keyboard commands( Pop up F12)


### HTTP-RPC 

You can use REST and JSON-RPC. Or our HTTP-RPC:
[HTTP-RPC example](https://github.com/intuition-dev/toolBelt/tree/master/http-rpc)

Service calls, when done by server side developers must include the client side API call to that
service. You can't have a server side developer write a service that a different developer then calls client side.
The person that wrote the service must also write the client side API that calls that service.


### SQLite Full Text Search

Here is example of using SQLite for FTS:
[SQLite FTS](https://github.com/intuition-dev/INTUITION/blob/master/examples/CRUD/node-srv/lib/CDB.ts)
Optionally FTS could be stored in RAM


---
[Edit this file](https://github.com/intuition-dev/IntuitionDocs/tree/master/docs)

