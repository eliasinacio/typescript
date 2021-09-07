var _a, _b;
// function parameters type declaration
function sayMyName(human) {
    var _a;
    console.log("Hi " + human.name.first + " " + ((_a = human.name.last) !== null && _a !== void 0 ? _a : ''));
}
sayMyName({ name: { first: 'elon', last: 'musk' } });
sayMyName({ name: { first: 'linus' } });
// type assignment
var man = {
    name: {
        first: 'Robert',
        last: 'Pat'
    },
    age: 19
};
// Best way to access a optional property 
console.log((_b = (_a = man.parent) === null || _a === void 0 ? void 0 : _a.name.last) !== null && _b !== void 0 ? _b : 'no parent responsible');
function analyse(human) {
    if (typeof (human) === 'object') {
        console.log("Hi " + human.age + " years old human, called " + human.name.first + " ");
    }
    else {
        console.log("Hi human, called " + human + " ");
    }
}
analyse({ name: { first: 'julian' }, age: 24 });
analyse('julian');
