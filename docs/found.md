
# FOUNDATION / gen/cross


## Pug

INTUITION.DEV uses Pug as the main programing language:
```pug
body
   h1 Pug source code
   .container.row
      .col
         p You are amazing!

```

INTUITION.DEV leverages MetaBake (mbake) CLI: https://intuition-dev.github.io/mbCLI/#/
but you do not need to know the mbake CLI for INTUITION.DEV.
    ```bash
    npm i -g mbake
    ```


### History
I first stared using Gulp|Grunt to compile Pug. But soon I switched to using javascript 
to write my compile commands as Gulp|Grunt ended up being limited.
So I used node js scripts to 'make'. Soon, I allowed remote services to call the 
'make' script - as you will see in the follow on tutorials. 
We are just leveraging generators, like Hugo/Jekyll.

### Starting a project

One way to get started is to take code from an already running project, and paste it in.

[Convert 'page' source to Pug](http://pug.mbake.org)



### Cross platform preview

And once you are done w/ your Pug app, you can run it cross platform on mobile.
Same code base. Just leverage the online cross platform tool based on Apache's Cordova: http://build.phonegap.com

Here is an example phonegap app for build.phonegap.com:
- https://github.com/intuition-dev/mbMobile/tree/master/phoneGapReaderApp

Notice that the electron app:
- https://github.com/intuition-dev/mbMobile/tree/master/electronReaderApp
and webapp:
- https://github.com/intuition-dev/mbMobile/tree/master/webReaderApp
are a *symbolic link* to the phonegapp app.

They are the same exact code.

We'll review mobile in the advanced section, but this section shows you how we leverage generators and cross platform ideas.

---
[Edit this file](https://github.com/intuition-dev/IntuitionDocs/tree/master/docs)