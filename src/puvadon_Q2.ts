// Q2 การบ้าน implement 1 อาชีพ จาก Human
// แสดงการ implement move(), eat()
// แสดงการสร้าง object
interface Human{
    id: Number,
    name: String,
    age: Number,
    tel?: String,
    move() : String,
    eat() : String,
}
class Aeronaut implements Human{
    id: number;
    name: string;
    age: number;

    constructor(id: number, name: string, age: number){
        this.id = id;
        this.name = name;
        this.age = age;
    }

    move(){
        return `${this.name} moves by automobile.`;
    }
    eat(){
        return `${this.name} eats rice.`;
    }

}
const occupation = new Aeronaut(102,"puvadon",19);
console.log(occupation.id)
console.log(occupation.name)
console.log(occupation.age)
console.log(occupation.move())
console.log(occupation.eat())