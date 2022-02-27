class Aeronaut {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    move() {
        return `${this.name} moves by automobile.`;
    }
    eat() {
        return `${this.name} eats rice.`;
    }
}
const occupation = new Aeronaut(102, "puvadon", 19);
console.log(occupation.id);
console.log(occupation.name);
console.log(occupation.age);
console.log(occupation.move());
console.log(occupation.eat());
