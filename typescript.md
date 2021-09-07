# Typescript
## A strict syntatical superset of Javascript

### main types
  `string, number, boolean`


### primitive types don't need to assignment
`const name = 'elon`
`let userAge = 19`


### type assingnment `: type`
`let obj: any = { x: 0 }`


### functions with specific parameters types
```js
function sayName ( name: string) {
  return console.log(`hi ${name}`);
}
```
To specific function return types, we do this
```js
function sayName ( name: string): void {
  console.log(`hi ${name}`);
}
```


### object types and optional properties `?`
```js
function analyze ( obj: { x: number, y?: string }): void {
  console.log(obj);
}
```
A way to access optional properties in objects
`console.log(obj.last?.toUpperCase())`

