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
It will create a css file with auto-prefixes.


### More on Sass 
In general you should leverage a CSS framework. We default to http://github.com/picturepan2/spectre
since it is 

