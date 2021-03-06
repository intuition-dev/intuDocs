# Tech:
- Tabulator, 
- GridForms, 
- CRUD, 
- standard components
- viewModel approach,
- TypeScript(rename a .js to a .ts), 
- Pug, 
- sass
- typescript
- Bootstrap, 
- Node.js (express) for static server using [Srv.ts](https://github.com/metabake/mbCLI/blob/master/src/lib/Serv.ts) 
- ToolBelt



# Tasks:

1. Install mbake-CLI:

    https://www.npmjs.com/package/mbake

    install:


```sh
    npm i -g mbake
```

    You can download some starter examples, eg: 
    ```sh
    $ mbake -w .
    ```

    more about **tool-belt.js** you can read here: 

    https://github.com/metabake/metaCake


## Write a FB CRUD app using mbake CLI

1. Create public repo in git, to commit your app's code to it, optionally: you can deploy locally.

1. Do 2 pages, one with table and form, using **Tabulator.js** for table and **GridForms** for forms. The example app:

  https://github.com/metabake/mbCLI/tree/master/CRUD0

  CRUD code as example, on the basis of this example you can write your app.


1. Use Firebase to do crud, using ViewModel approach:

    https://github.com/metabake/mbCLI/blob/master/CRUD0/README.md

  there are `*Bind.js` file for all UI stuff and then `*Model.js` where operations with the data are made.

1. Also use component in your app, how to write a component, example: 

    https://github.com/metabake/metaCake/tree/master/custel/old



## Useful links:

* [mbake CLI docs](https://metabake.github.io/mbCLI/#/)
* [install mbake](https://www.npmjs.com/package/mbake)
* [CRUD app](https://github.com/metabake/mbCLI/tree/master/CRUD0)