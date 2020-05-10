/* 
var a = '5';
var b = 7;
var sum = (b + a) * '1';
console.log(typeof(sum) + ' ' + sum);
 */


/* 
function foo(a,b,c) {
    a = 3;
    b.push("ans is bangladesh");
    c.first = false;
 }
 
 let x = 4;
 let y = ["who", "will", "win", "next", "2023",  "worldcup ?"];
 var z = {first: true};
 foo(x,y,z);
 console.log(x, y, z.first);

 */

/* var myarray = [];

myarray[0] ='Jabir';
console.log(myarray);

myarray['1'] ='Ava';
console.log(myarray);

myarray['shreya'] ='gultus';
console.log(myarray); */


/* Udacity tutorial */

var umbrella = {
    color: "pink",
    isOpen: false,
    open: function () {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    close: function () {
        if (umbrella.isOpen === true) {
            umbrella.isOpen = false;
            return "Julia closes the umbrella!";
        } else {
            
            return "The umbrella is already closed!";
        }
    }
};


console.log(umbrella.open());
console.log(umbrella.close());


/* var breakfast = {
    name: "The Lumberjack",
    price: "$9.95",
    ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
}

console.log(breakfast.ingredients);
console.log(breakfast.name);
console.log(breakfast.price); */


/* var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    // your code goes here
    printAccountSummary: function(){
        return "Welcome!\nYour balance is currently $"+savingsAccount.balance+" and your interest rate is "
        + savingsAccount.interestRatePercent+"%.";
    }
};

console.log(savingsAccount.printAccountSummary()); */


/* var facebookProfile = {
    name: "Jabir",
    friends: 10,
    messages: [],
    postMessage: function (message) {
        facebookProfile.messages.push(message);
    },
    deleteMessage: function (index) {
        facebookProfile.messages.splice(index, 1);
        console.log(">> ",facebookProfile.messages);
    },
    addFriend: function () {
        facebookProfile.friends++;
    },
    removeFriend: function () {
        facebookProfile.friends--;
    }
}


facebookProfile.postMessage('Covide-19');
facebookProfile.postMessage('Covide');
facebookProfile.postMessage('BJIT');
facebookProfile.postMessage('Hlw..');
facebookProfile.deleteMessage(1);
console.log(facebookProfile.messages); */


/* var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

function showDonutDetails(donut){
    console.log(donut.type + ' donuts cost $'+donut.cost+' each');
}
donuts.forEach(showDonutDetails); */


/* Object Oriented JavaScript */

/* function Book(name, author, price) {
    this.name = name;
    this.author = author;
    this.price = price;
    this.showDetails = function () {
        console.log('Name: ' + this.name + '\nAuthor: ' + this.author + '\nPrice: ' + this.price);
    }
}

var book = new Book('Functional Javascript', 'Micbael Fogus', 30);

//console.log(book.constructor);
book.showDetails(); */


/* var Person = function (firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;

    this.showFullName = function () {
        console.log(this._firstName + ' ' + this._lastName);
    }
}

person1 = new Person('Syedur', 'Rahaman');
person1.showFullName();

function Person(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;

    this.showFullName = function () {
        console.log(this._firstName + ' ' + this._lastName);
    }
}
person1 = new Person('Syedur', 'Rahaman');
person1.showFullName(); */


//   'this' key word example...

var person = {
    _firstName: 'Syedur',
    _lastName: 'Rahaman',
    fullName: function () {
        console.log('THIS: '+this+' '+'Person: '+person);
        console.log('Using Obj Name: '+person._firstName + ' ' + person._lastName);
        console.log('Using this keyword: '+this._firstName + ' ' + this._lastName);
    }
};
person.fullName();
var print = person.fullName;
print();
var person1 = person;
person1.fullName();


/* var person = {
    name: 'Jabir Mahmud',

    print: function() {

        setTimeout(function() {
            
            console.log(this);
            console.log('Hello, ' + person.name);
            console.log('Hello, ' + person.name);

        }.bind(person), 2000);
    }
}

person.print(); */


/* function Product(name, price) {
    this.name = name;
    this.price = price;
    //this.discount = 0; // <- remove this line and refactor with the code below
    var _discount; // private member
    Object.defineProperty(this, "discount", {
        get: function () {
            return _discount;
        },
        set: function (value) {
            _discount = value;
            if (_discount > 80) _discount = 80;
        }
    });
}

// the client code
var sneakers = new Product("Sneakers", 20);
sneakers.discount = 50; // 50, setter is called
sneakers.discount += 20; // 70, setter is called
sneakers.discount += 20; // 80, not 90!
console.log(sneakers.discount); */

function Shape() {
    this.width;
    this.height;
    Object.defineProperty(this, "width", {
        get: function () {
            return width;
        },
        set: function (value) {
            width = value;
            if (width < 0) width = width * (-1);
        }
    });
    Object.defineProperty(this, "height", {
        get: function () {
            return height;
        },
        set: function (value) {
            height = value;
            if (height < 0) height = height * (-1);
        }
    });
    this.area = function () {
        return this.height * this.width;
    }
}

var square = new Shape();
square.width = -20;
square.height = 20;
console.log(square.area());