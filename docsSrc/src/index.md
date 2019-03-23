
# About MetaBake&trade;

<img src="https://metabake.github.io/MetaBake-Docs/logo.jpg" width="100">

### MetaBake&trade; is the extensible open source low-code productivity tool for programmers; including dynamic apps and data binding. 'All my friends KNOW a low-coder'

MetaBake&trade; mbake CLI is a modern way to generate websites and dynamic webapps via low-code to help you achieve high developer productivity without additional effort. MetaBake&trade; open source tool helps you deliver web apps 10X faster with less coding by leveraging our documented high-productivity approaches/pillars. MetaBake&trade; is a simple tool, but can build any type of an app or website, and it allows for gradual adoption. You can start by slowly adopting just a few of its approaches. 

Prerequisites: you should know HTML, CSS an .js - that is all we use. If you need to catch up, we recommend this book: 'Design and Build Websites' by Jon Duckett. You should also learn Pug, to get started on Pug, watch [Pug (aka Jade) on Youtube](http://youtube.com/watch?v=wzAWI9h3q18)

Best way to get started with mbake is to read and practice the docs at http://docs.mbake.org. But here is a taste:


## Install

```sh
yarn global add mbake
mbake
```


## First Page

Create a folder called 'one'.
In the folder 'one', create file index.pug
```pug
header
body
    p Hello #{key1}
```
and create file dat.yaml
```yaml
key1: World
```

### Now make with mbake:

```sh
mbake .
```

This will create index.html. 

Of course you can use regular Pug syntax to include other Pug files; or Markdown. (MetaBake&trade; markdown flavor includes CSS support):
```pug
    body
        div
            include:metaMD comment.md
```
So if you write a markdown file comment.md; it will be included in index.html


## SASS

Create a ex.sass file 
```css
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

Create a files assets.yaml 
```
css:
- ex.sass
```

and run
```sh
mbake -s .
```
It will create a css file with auto-prefixes


## TypeScript

If you write a ts file, like foo.ts:
```ts
foo(i:nubmer) {
    console.log('oh hi')
}
```
and run
```sh
mbake -t .
```
It will create a .js and min.js files.
