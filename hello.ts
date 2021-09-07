// type alias declaration
type person = { 
  name: {
    first: string, 
    last?: string  
  },
  parent?: person,
  // ? means optional properties
  age?: number
}

// function parameters type declaration
function sayMyName (human: person) {
  console.log(`Hi ${human.name.first} ${human.name.last ?? ''}`)
}

sayMyName({name: {first: 'elon', last: 'musk'}})
sayMyName({name: {first: 'linus'}});

// type assignment
let man: person = {
  name: {
    first: 'Robert',
    last: 'Pat'
  }, 
  age: 19
}

// Best way to access a optional property 
console.log(man.parent?.name.last ?? 'no parent responsible')

function analyse (human: person | string) {
  if (typeof(human) === 'object') {
    console.log(`Hi ${human.age} years old human, called ${human.name.first} `)
  } else {
    console.log(`Hi human, called ${human} `)
  }
}

analyse({ name: {first: 'julian'}, age: 24})
analyse('julian')

// difference between interface and type
interface User {
  name: string
}

interface Admin extends User {
  ID: number,
  key: number
}

// ----++----++----

type Userr = {
  name: string
}

type Adminn = Userr & {
  ID: number,
  key: number
}

// This is a type assertion when the types are much specific 
const div = document.querySelector('div') as HTMLDivElement;
// Also can be like this
const title = <HTMLHeadElement>document.getElementById('title');