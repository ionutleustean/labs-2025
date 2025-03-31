interface Runnable {
    run(): void;
}

class Animal implements Runnable{
    run(): void {
        console.log(`Run as an animal`);
    }
}
class Person implements Runnable{
    run(): void {
        console.log(`Runs as a person`);
    }
}
class Application implements Runnable{
    run(): void {
        console.log(`Runs the application`);
    }
}


function executeRun(runnable: Runnable){
    runnable.run();
}


const literal = {
 run : ()  => {console.log(`Run as a literal`);},
 moreProps : 5
}
executeRun(new Animal());
executeRun(new Person());
executeRun(new Application());
executeRun( literal);
executeRun({run : () => {console.log(`Run as inline`)}});