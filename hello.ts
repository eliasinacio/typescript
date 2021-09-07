// type declaration for objects
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