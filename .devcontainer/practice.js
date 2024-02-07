function constructorFunc (name, age) {
    this.name = name;
    this.age = age;
    this.method = () => {
        console.log('Running');
    }
}

const userOne = new constructorFunc('Divy', 21);
constructorFunc.hello = () => {
    return ('Static Method');
}
console.log(constructorFunc.hello());
// console.log(userOne.hello()); 
// console.log(constructorFunc.method());
console.log(typeof null);