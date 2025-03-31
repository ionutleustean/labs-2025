let a = 5;
const b = "b"

let c = b;

class Person {
    name?: string;
    age = 35;
    job = undefined


    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

type Maybe<T> = T | undefined | null

interface iPerson {
    name: string;
    age?: number;
    job: Maybe<string | number>;
}



class MyWorker<T extends Person> {
    doWork(p : Omit<T, 'age'>){

    };
}

let w = new MyWorker<Person>();



const response = '{"name":"vasile", "age": 34}'

const parsed = JSON.parse(response)
new Person((parsed?.name ? parsed.name  :  ''), parsed.age )


let p1 = new Person("a", 34);
let p2: Person = {... p1}

let arr = [p1, p2];
let arr2 = [... arr]