class Quiz {
    constructor(question, id){
        this.question = question;
        this.id = id;
    }
}

let quiz1 = new Quiz('Is JavaScript a frontend technology or framework?', 1001);
let quiz2 = new Quiz('Is Angular a frontend technology or framework?', 1002);

console.log('Code works:');

console.log(quiz1.question);
console.log(quiz1.id);

console.log(quiz2.question);
console.log(quiz2.id);