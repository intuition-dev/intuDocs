
# Advanced, Mobile & Custom Elements

## Lazy Loading

Lazy loading .js and other assets enables very fast UX. More here:
[Lazy loading](https://github.com/intuition-dev/toolBelt/tree/master/lazyLoading)


## SPA and Mobile apps

A responsive web app can easily become machine compiled into IOS and Android. *As single code base*. 
It needs to be SAP (Single Page App) and if you are in a rush or have limited resources you should convert to Electorn first.

[SPA](https://github.com/intuition-dev/toolBelt/tree/master/spa-ts-router)

- [SPA WebApp](https://github.com/intuition-dev/mbMobile/tree/master/webReaderApp)
Notice that it is a symbolic link - same code base for all 3 apps

To save time do Electron first.
- [Electron](https://github.com/intuition-dev/mbMobile/tree/master/electronReaderApp)


PhoneGap builder online: [build.PG](https://build.phonegap.com)
Notice there is no need to install any SDK locally - it is all done for free for you in the cloud.
The last step is easy:

- [PhoneGap](https://github.com/intuition-dev/mbMobile)

You can of course add any needed native plugins from Cordova; but most apps don't need any.


# Custom Elements

Custom Elements are built into the browser.

[Custom Elements example](https://github.com/intuition-dev/toolBelt/tree/master/custel/custEl1)


## Other

In next version of INTUITION.DEV we will support keyboard commands( Pop up F12)



### RPC 

Service calls, when done by server side developers must include the client side API call to that
service. You can't have a server side developer write a service that a different developer then calls client side.
The person that wrote the service must also write the client side API that calls that service.

[HTTP-RPC example](https://github.com/intuition-dev/toolBelt/tree/master/http-rpc)

### SQLite Full Text Search

Here is example of using SQL for FTS:
[SQLite FTS](https://github.com/intuition-dev/INTUITION/blob/master/examples/CRUD/node-srv/lib/CDB.ts)
Optionally FTS DB could be stored in RAM


---
[Edit this file](https://github.com/intuition-dev/IntuitionDocs/tree/master/docs)