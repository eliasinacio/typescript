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
```ts
function sayName ( name: string) {
  return console.log(`hi ${name}`);
}
```
To specific function return types, we do this
```ts
function sayName ( name: string): void {
  console.log(`hi ${name}`);
}
```


### object types and optional properties `?`
```ts
function analyze ( obj: { x: number, y?: string }): void {
  console.log(obj);
}
```
A way to access optional properties in objects
`console.log(obj.last?.toUpperCase())`


### Using more than one types at the same time
```ts
type User = { id: number, name: string }

function sayMyName (user: string | User): void {
  // but you must treat them separately
  if (typeof user === 'string') {
    console.log(`Hi ${user}`)
  } else {
    console.log(`Hi ${user.name}`)
  }
}
```


### Type aliases
```ts
type Point = {
  x: number,
  y: number
}
// We may to use with any types
type ID = number | string;
```


### type vs interface
Are similar and can be used both in any possibilities.
But interface is extendable. 
#### extending a interface: 
```ts
interface User = { 
  ID: string 
}

interface Admin extends User = {
  Key: number
}


```

#### extending a type with intersection: 
```ts
type User = { 
  ID: string 
}

type Admin = User & {
  Key: number
}
```