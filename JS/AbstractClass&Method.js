// this is our abstract class
var AbstractClass = function () {
    if (this.constructor === AbstractClass) {
        throw new Error('Cannot instanciate abstract class');
    }
};

// this is our abstract method
AbstractClass.prototype.someMethod = function () {
    throw new Error('Cannot call abstract method')
};

// this is our concrete class
var ConcreteClass = function () {
    AbstractClass.apply(this, arguments);
};

// let's inherit from abstract class
ConcreteClass.prototype = Object.create(AbstractClass.prototype, {
    'constructor': ConcreteClass
});

var obj;

try {
    obj = new AbstractClass(); // throws
} catch (e) {
    console.log(e); // outputs 'Cannot instanciate abstract class'
}

obj = new ConcreteClass();

try {
    obj.someMethod(); // throws
} catch (e) {
    console.log(e); // outputs 'Cannot call abstract method'
}

// let's define our concrete method
ConcreteClass.prototype.someMethod = function () {
    console.log('Concrete Method');
};

// N.B this will provide the method to existing instances as they the same prototype

obj.someMethod(); // outputs 'Concrete Method'
console.log(obj);



/* Practice  */
console.log('*** PRACTICE OUT START ***');


function Animal(isAlive){
    this.isAlive;
    Object.defineProperty(this, "isAlive", {
        get: function () {
            return isAlive;
        },
        set: function (value) {
            if(value == true || value == false){
                isAlive = value;
            }else {
                throw new Error('Can instanciate  only boolean value');
            }
        }
    });
    if (this.constructor === Animal) {
        throw new Error('Cannot instanciate abstract class');
    }
}

Animal.prototype.say = function () {
    throw new Error('Cannot call abstract method')
};

function Cow(sound,isAliveCow){
    Animal.call(this, isAliveCow);
    this.sound = sound;
}

/* Cow.prototype = Object.create(Animal.prototype, {
    'constructor': Cow
}); */

Cow.prototype.say = function () {
    if(this.isAlive){
        console.log(this.sound);
    }else {
        console.log("It's dead. Can't make sound.");
    }
    
};

var cow = new Cow('Humba!!!',true);
cow.say();
var cow1 = new Cow('Humba!!!',false);
cow1.say();
console.log(cow);
console.log(cow instanceof Animal);
console.log("Is Alive: ",cow.isAlive);
