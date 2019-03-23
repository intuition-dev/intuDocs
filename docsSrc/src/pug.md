
## Pug Markup

In Pug we write:
```pug
body
   h1 Pug - node template engine
   #container.col
      p You are amazing
```
instead of:
```html
<body>
  <h1>Jade - node template engine</h1>
  <div class="col" id="container">
    <p>You are amazing</p>
  </div>
</body>
```
So if you know html, you know Pug!

In addition you can include html parts as needed:
```pug
   include includes/head
```

Also you extend a layout, you can see that in the example apps.

And there are online converters where you type in html and it gives you pug equivalent. (eg: http://pug.mbake.org)

And that is all there is about Pug.

### dat.yaml
In order to 'make' index.html from an index.pug, it needs a dat.yaml in the same folder, eg:

```yaml
key1: World
title: My page about puppies
#special words:
basedir: ../../
pretty: false
```

You can use any name/vale, and then use in Pug like 
```pug
 p Hello #{key1}
```
for example with page Title that may need to be a h1 as well. This is often used for SEO tags, for example Twitter and Linkedin in tags often have same keyword text.

There are some special words like: pretty. If pretty: true, it will make a nice looking htlm, it won't be compressed.

basedir keywords sets the base directory to look for includes, so in pug you can say /
/ is the base dir. If you move the page folder, you can then just change your basedir in dat.yaml.


## Markdown

```
  include:metaMD comment.md
```

This lets you include markdown in Pug. Markdown is great for people that are not technical to generate content.  


## Folder Structure

In examples you can see typically application page structure:

```
/pages/page1
/pages/page2
/pages/page3
/layouts
/includes
/assets
```

Each page should have all its own assets in its folder. This avoids 'digital rot' where a page stops working as its assets are misplaced.
The other support folders like /layouts, /includes, and /assets are used only if something is needed in more than one page.

Also, the fact that we are generating this static content allows us to have the entire webapp served by a CDN. (For origin we mostly use Caddy http server)


## Re: Build Tools Gulp/Grunt




