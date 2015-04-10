/*

Javascript is a object-oriented dynamic language. It has types, operators, objects, and methods. 
A couple of important aspects of the language: 

1. Javascript does not have classes. Class functionality is provided by object prototypes.
2. Functions are objects, giving functions the capacity to hold executable code and be passed
around like any other object.

*****************************************************
TYPES
*****************************************************

1. Number
2. String
3. Boolean
4. Object
  4a. Function
  4b. Array
  4c. Date
  4d. RegExp
5. Symbol
6. undefined
7. null

*/


// *****************************************************
// Numbers
// *****************************************************
function numbers() {

  printSectionTitle("Numbers");

  // All numbers in js are double-precision, 64 bit IEEE values. There are no 
  // integers in javascript. 
  var a = 0.1;
  var b = 0.2;
  out("0.1 + 0.2 = " + (a + b).toString() + " != 0.3");

  // Standard operators are available (+, -, *, /, %)
  // Additional mathematical operators are available on the Math object:
  var radius = 1;
  var diameter = Math.PI * radius * radius;
  out("diameter = " + diameter);

  // You can convert an integer to a string using parseInt
  out(parseInt("123", 10)); // 123

  // Note, the second argument in parseInt is the base for the conversion, 
  // which you should always provide. 
  out(parseInt("11", 2)); // 3

  // parseFloat is also available, which does what you would expect. 
  // Note, parseFloat is always base 10. 
  out(parseFloat("3.14")); // 3.14

  // NaN, Not a Number, is a special value that is returned if a string is not numeric
  out(parseInt("hello", 10)); // NaN
  out(NaN + 5); //NaN
  out(isNaN(NaN)); //true

  // Infinity & -Infinity
  out(1 / 0); // Infinity
  out(-1 / 0); // -Infinity
  out( isFinite(1 / 0) ); //false
}

function strings() {
  printSectionTitle("Strings")

  // strings are sequences of 16-bit unicode characters
  out( "Hello".length ); // 5

  // strings have various methods associated with them: 
  out( "Hello".charAt(1) ); //e
  out( "Hello, world!".replace("Hello", "Goodbye") ); // "Goodbye, world"
  out( "hello".toUpperCase() );  // Hello
}

function otherTypes() {
  printSectionTitle("Other Types");

  // Javascript distinguishes between null and undefined. 
  // null is a deliberate non-value
  // undefined is a value of type 'undefined', which indicates an uninitialized value;
  var x;
  out( x === null ); // false
  out( x === undefined ); // true

  // Boolean
  // Any value converted to a boolean using the following rules: 
  // 1. false, 0, the empty string (""), NaN, null, and undefined all become false
  // 2. everything else becomes true
  var falseValues = [false, 0, "", NaN, null, undefined];
  for (var i = 0; i < falseValues.length; i++) {
    out( Boolean(falseValues[i]) );
  }
  
  out( Boolean(123) );
}

function variables() {
  printSectionTitle("Variables");

  // new variables are declared using the var keyword
  var a; // a is given the value undefined here, b/c it is not initialized. 
  var a = 1;

  // importantly, in javascript blocks do not have scope, only functions have scope. 
  // this means that: 

  if (true) {
    var visibleThroughoutFunction = true;
  }

  // visibleThroughoutFunction is available within the function outside of 
  // the if-block.
}

function operators() {

  //comparisons can be made with <, >, <=, >=. 

  // Equality
  // The double equals operator performs type coercion if you give it
  // different types: 
  out( "dog" == "dog" ); //true
  out( 1 == true ); //true

  // to avoid type coercion, use the tripe equals operator (===); 
  out("dog" === "dog"); //true
  out(1 === true); //false
  out(true === true); //true

  // there are also != and !== operators
  out(1 !== true); //true

}

function controlStructures() {
  printSectionTitle("Control Structures");

  // javascript has the standard conditional statements, 
  // for loops, do-while loops, while loops, 

  // && and || operators execute the second operand first, 
  // which is useful for testing for null or setting default values. 
  var o;
  var name = o && o.getName(); 
  out("name = " + name);

  var otherName = name || "Billy Bob Thorton";
  out("otherName = " + otherName);

  // js also has the ternary operator
  var age = 10
  var underAge = (age >= 18) ? "no" : "yes";
  out("underAge = " + underAge);
}

function objects() {
  printSectionTitle("Objects");

  // js objects are simple collection of name-value pairs. 
  // keys are strings, values can be any javascript value.

  // 2 basic ways to create an empty js object: 

  var obj = new Object(); 
  var obj = {};

  var you = new Person("you", 24);
  out(you.name + ", " + you.age);

  // object properties can be accessed in 1 of 2 ways: 
  you.name;
  you['name'];

  // to set
  you.name = "Bilbo Baggins"; 
  out(you.name);

  you['name'] = "Frodo Baggins";
  out(you['name']);

  // object literal syntax can be used to initialize
  // an object in its entirety. 

}

function arrays() {
  printSectionTitle("Arrays");

  // arrays are special javascript objects which have 
  // a length property. Length is 1 more than the highest index. 
  out( [0, 1, 2].length === 3 ); //true

  // Index out of bounds errors are not raised. If you attempt
  // to access an index >= length, you get undefined. 
  var array = [0, 1, 2]; 
  out( array[200] ); // undefined

  //iterating over an array
  for (var i in array) {
    out(array[i]);
  }

  //to add something to an array
  var elements = [];
  for (var i = 0; i < 3; i++) {
    elements.push(i);
  }

  for (var i in elements) {
    out(elements[i]);
  }
}

function functions() {
  printSectionTitle("Functions");

  // functions return whatever value is specified
  // by the return statement. If no return statement is used, 
  // or if the value returned is not present, js will return 
  // undefined. 

  // functions can take 0 or more arguments. If you pass in less
  // arguments than paramenters, js will set the extra parameters
  // as undefined. 

  // If you pass in more arguments than parameters, js will make those 
  // arguments available through an array like object call arguments. 
  function add() {
    var sum = 0;

    // arguments is a special array like object
    // that contains all of the arguments passed to the function. 
    for (var i in arguments) {
      sum += arguments[i];
    }

    return sum;
  }

  out( add(3, 2, 1) ); // 6

  // functions are objects to. You can call the apply method on a function
  // and pass in an arbitrary array of arguments: 
  var total = add.apply(null, [4, 5, 6]); 
  out(total); // 15;

  // javascript lets you create anonymous functions, too: 
  var avg = function() {
    var sum = 0; 
    for (var i in arguments) {
      sum += arguments[i];
    }

    return sum / arguments.length;
  }

  out ( avg(3, 2, 1) ); // 2


  // you can recursively call functions too. This is done in the standard 
  // way. If you want to recursively call an anonymous function: 
  var fibNum = (function fibSeq(a, b, n) {
    if (n === 0) {
      return a + b; 
    }
    else {
      // note, fibSeq is only available to the scope of this
      // function. 
      return fibSeq(b, (a + b), (n - 1)); 
    }
  })(1, 1, 5);

  out(fibNum); 
}


function customObjects() {
  printSectionTitle("customObjects");

  // js does not have the concept of classes. Rather, 
  // functions serve as classes. 

  function Person(first, last) {
    this.first = first; 
    this.last = last; 
    this.fullName = function() {
      return this.first + " " + this.last;
    }; 
    this.fullNameReversed = function() {
      return this.last + " " + this.first;
    }; 
  }

  // functions called by new are called constructor functions. 
  // it is common for constructor functions to have a capital letter. 
  s = new Person("Bilbo", "Baggins");
  out( s.fullName() );
  out( s.fullNameReversed() ); 


  // prototype is an object shared by all instances of AnotherPerson. It forms
  // part of a lookup chain called the 'prototype chain'. As a result, anything
  // assigned to AnotherPerson.prototype becomes available to all instances of 
  // that constructor via the this object. 
  function AnotherPerson(first, last) {
    this.first = first;
    this.last = last;
  }

  // JavaScript lets you modify something's prototype at any time in your program,
  // which means you can add extra methods to existing objects at runtime.
  t = new AnotherPerson("Frodo", "Baggins");
  
  AnotherPerson.prototype.fullName = function() {
    return this.first + " " + this.last;
  }
  AnotherPerson.prototype.fullNameReversed = function() {
    return this.last + " " + this.first;
  }

  out( t.fullName() ); 
  out( t.fullNameReversed() );

  // this lets you do some cool stuff: 
  String.prototype.reversed = function() {
    var r = "";
    for (var i = this.length - 1; i >= 0; i--) {
      r += this[i];
    }
    return r;
  };

  // we can call reversed on a string literal.
  out("This is a string".reversed());

  // the root of the prototype chain starts at Object.prototype
  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.inspect = function() {
      return this.year + " " + this.make + " " + this.model;
    }
  }

  var ford = new Car("Ford", "Mustang", 1969);
  out( ford.inspect() );

  Car.prototype.drive = function() {
    return "Vrooooom Vrooooom";
  }

  out(ford.drive());
}

function closures() {
  printSectionTitle("Closures");

  function makeAddr(x) {
    return function(y) {
      return x + y;
    }
  }

  a = makeAddr(1);
  out(a(6));

  // everytime you create a new makeAddr function, the value that you pass in (x)
  // is initialized on a scope object. There is a unique scope object for each
  // copy of the makeAddr function. Importantly, the scope object of the a makeAddr function does
  // not allow access to the argument passed in during initialization. You cannot access
  // x after initialization.

  //scope objcts form a chain called a scope chain similar to the prototype chain. 

  // a closure is the combination of a function and a scope object in which it was created.
}

function oop() {
  printSectionTitle("Object Oriented Programming");

// Namespaces
  // In JS, a namespace is just another object containing methods, properties, and objects.
  var MYAPP = MYAPP || {};
  MYAPP.events = {}; // allows you to create sub-namespaces


// Custom Objects

  // the Class
  var Person = function(firstName) {
    // constructor logic here
    this.firstName = firstName;
  };

  // the object
  var person1 = new Person("Alice");
  var person2 = new Person("Bob");

  out(person1.firstName);
  out(person2.firstName);

  // methods
  Person.prototype.sayHello = function() {
    return "Hello, my name is " + this.firstName;
  };
  Person.prototype.walk = function() {
    return "I'm walking";
  };

  out(person1.sayHello());
  
  var sayHello = person2.sayHello;
  out( sayHello() ); // returns undefined because 'this' refers to the global context, not person2.
  out( sayHello.call(person2) ); // returns "Hello, my name is Bob"

  //inheritance
  function Student(firstName, subject) {

    // initialize Person object. You must use call, with this as the first argument.
    Person.call(this, firstName);

    this.subject = subject;
  }
  var student1 = new Student("Charlie", "JavaScript");
  out(student1.firstName + " " + student1.subject);

  //create student prototype
  Student.prototype = Object.create(Person.prototype);
  Student.prototype.constructor = Student;

  // override the sayHello method on Person
  Student.prototype.sayHello = function() {
    return "Hello, my name is " + this.firstName + ". I'm studying " + this.subject;
  }

  var student2 = new Student("Danielle", "Ruby");
  out(student2.sayHello());
}

// numbers();
// strings();
// otherTypes();
// variables();
// operators();
// controlStructures();
// objects();
// arrays();
// functions(); 
// customObjects(); 
// closures();
oop();


// var App = {

//   Person : function(name, age) {
//     this.name = name;
//     this.age = age; 
//     this.inspect = function() {
//       return name + " " + age;
//     }
//   }
// }

// var bill = new App.Person('Bill', 33);
// App.Person.prototype.last = function(last) {
//   this.lastName = last;
// }
// bill.last = "Waterson";

// App.Person.prototype.fullName = function() {
//   return this.name + " " + this.last;
// }
// out(bill.fullName());

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }


function out(content) {
  console.log(content);
}

function printSectionTitle(sectionName) {
  out("***************************************");
  out(sectionName + "");
  out("***************************************");
}
