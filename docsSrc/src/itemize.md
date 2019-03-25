
# Blog/Itemize example: itemize.md


## Itemize (eg Blog)
So far you created all files in folder called one. Now lets create a file above folder one.
1. So above your folder that has index.pug and dat.yaml, create a a blank file dat_i.yaml, with nothing there.

2. And copy the folder one, as folder two. So you have two folders, one and two - each with dat.yaml; and above them dat_i.yaml!

3. Edit two/dat.yaml to say key1: World2 
instead of key1: World

4. And now, in the folder above one/ and two/ run:
```sh
mbake -i .
```
It will create items.json.
This allows you to fetch that json; and search for content, blog, items, etc.


---