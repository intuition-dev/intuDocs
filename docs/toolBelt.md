
# FW/AA - Require Depps
## MetaBake FrameWork(FW)/Application Architecture(AA)

The way I did AA review it so look at the imports: how modules talked to each other. 
For Web and Native(Hybrid Mobile) apps that is done view a require - when you load a module it defines what dependencies it needs.

So to repeat: AA/FW is how modules/things are organized. 


## Require Depps

```sh
mbake -f .
```
Above will download a Pug file for every MetaBake app to include in your Pug's layout head section. The include refers to a .js file from a CDN called: 'setup-deffs' js. The major purpose of that file is to define the dependencies: that you can then require.

We don't use ES6 modules due to poor support of IE11 and poor support of CDN.
The AA/FW is built on top of: https://github.com/muicss/johnnydepp

The listed dependencies are just the popular/approved ones, in your apps 'load.js' you can define what you want to use. And then simply require it.
And/or: you don't have to use most of them, or even any of them. But it does demonstrate a base line of how to setup a 

#### Additional setup-deffs features.

So the main purpose of setup-deffs is to setup the FW/AA. 
But it also does the popular polyfills (eg: Promise, Fetch, CustomEvent) and some commonly needed functions - over time you may find them useful.


## Project Layout

You have noticed that each page/screen is a folder. Assets for that one page are stored in that folder. For example images - if they 
are needed for just that page go here. Because we are static and work 100% on a CDN :-).

### CSS and SASS/Scss for images
If there are image references - such as backgorund image: that part of CSS should be inlined in the said page.
This allows you to move or copy the the screen folder and everything still works.
You can use dat.yaml's basedir = ../.. 
to set any relative imports - such as layout.
