
class Mammal{
    constructor ( name, type){
    this.name = name;
    this.type = "warm-blooded";
    }
    eat() {
        console.log(`Hi, Am hungry... Let's eatttt!`);
    };
};

class Cat extends Mammal{
    constructor(name){
        super(name);
    }
    
    meow(){
        console.log("Meowwww...!");
    }
};

class Dog extends Mammal{
    constructor(name){
        super(name);
    }

    bark(){
        console.log("Woffff...!");
    }
};

