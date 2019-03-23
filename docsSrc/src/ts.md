
## TypeScript

Write a ts file, like foo.ts:
```ts
foo(i:nubmer) {
    console.log('oh hi')
}
```
and run
```sh
mbake -t .
```
It will create a .js and min.js files. It will be ES5 to support IE11 (of course you have to load any polyfills like
promises, fetch or what you need)

## More on TypeScript