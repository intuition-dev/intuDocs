
# CRUD

CRUD and the ViewModel is client-side. Here is an example app and a readme:
[examples/CRUD](https://github.com/intuition-dev/INTUITION/tree/master/examples/CRUD/www)

The main point is that the ViewModel's data structures must match the View. And that binding is easy from View to the ViewModel

## RPC 

Service calls, when done by server side developers must include the client side API call to that
service. You can't have a server side developer write a service that a different developer then calls client side.
The person that wrote the service must also write the client side API that calls that service.

[HTTP-RPC example](https://github.com/intuition-dev/toolBelt/tree/master/http-rpc)

### SQLite Full Text Search

Here is example of using SQL for FTS:
[SQLite FTS](https://github.com/intuition-dev/INTUITION/blob/master/examples/CRUD/node-srv/lib/CDB.ts)
Optionally FTS DB could be stored in RAM


[Edit this file](https://github.com/intuition-dev/IntuitionDocs/tree/master/docs)