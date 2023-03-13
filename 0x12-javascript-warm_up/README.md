0x12. JavaScript - Warm up
JavaScript
 By: Guillaume

Background Context

JavaScript is used for many things. Here, you will use JavaScript for 2 reasons:

	Scripting (same as we did with Python)
	Web front-end

For the moment, and for learning all basic concepts of this language, we will do some scripting. After, we will make our AirBnB project dynamic by using Javascript and JQuery.

Resources

Read or watch:

	Writing JavaScript Code
	Variables
	Data Types
	Operators
	Operator Precedence
	Controlling Program Flow
	Functions
	Objects and Arrays
	Intrinsic Objects
	Module patterns
	var, let and const
	JavaScript Tutorial
	Modern JS

General

	Why JavaScript programming is amazing
	How to run a JavaScript script
	How to create variables and constants
	What are differences between var, const and let
	What are all the data types available in JavaScript
	How to use the if, if ... else statements
	How to use comments
	How to affect values to variables
	How to use while and for loops
	How to use break and continue statements
	What is a function and how do you use functions
	What does a function that does not use any return statement return
	Scope of variables
	What are the arithmetic operators and how to use them
	How to manipulate dictionary
	How to import a file

More Info

Install Node 14
	$ curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
	$ sudo apt-get install -y nodejs

Install semi-standard

Documentation

	$ sudo npm install semistandard --global

# Javascript - Warm up

 Tasks involved writing various introductory-level JavaScript scripts on Node.js.

## Tests :heavy_check_mark:

* [tests](./tests): Folder of test files. Provided by Holberton School.

## Function Prototypes :floppy_disk:

Prototypes for functions written in this project:

| File        | Prototype                                  |
| ----------- | ------------------------------------------ |
| `13-add.js` | `exports.add = (a, b)`                     |
| `101-call_me_moby.js` | `function (x, theFunction)`      |
| `102-add_me_maybe.js` | `function (number, theFunction)` |

## Tasks :page_with_curl:

TASKS:-

0 Write a script that prints “JavaScript is amazing”:

	You must create a constant variable called myVar with the value “JavaScript is amazing”
	You must use console.log(...) to print all output
	You are not allowed to use var


	guillaume@ubuntu:~/0x12$ ./0-javascript_is_amazing.js 
	JavaScript is amazing
	guillaume@ubuntu:~/0x12$ 
	guillaume@ubuntu:~/0x12$ semistandard ./0-javascript_is_amazing.js 
	guillaume@ubuntu:~/0x12$ 


Repo:

	GitHub repository: alx-higher_level_programming
	Directory: 0x12-javascript-warm_up
	File: 0-javascript_is_amazing.js.

1 Write a script that prints 3 lines:

	The first line: “C is fun”
	The second line: “Python is cool”
	The third line: “JavaScript is amazing”
	You must use console.log(...) to print all output
	You are not allowed to use var


	 guillaume@ubuntu:~/0x12$ ./1-multi_languages.js 
	 C is fun
	 Python is cool
	 JavaScript is amazing
	 guillaume@ubuntu:~/0x12$ 

2 Write a script that prints a message depending of the number of arguments passed:

	If no arguments are passed to the script, print “No argument”
	If only one argument is passed to the script, print “Argument found”
	Otherwise, print “Arguments found”
	You must use console.log(...) to print all output
	You are not allowed to use var
	
	Reference: process.argv


3 Write a script that prints the first argument passed to it:

	If no arguments are passed to the script, print “No argument”
	You must use console.log(...) to print all output
	You are not allowed to use var
	You are not allowed to use length

4 Write a script that prints two arguments passed to it, in the following format: “ is ”

	You must use console.log(...) to print all output
	You are not allowed to use var

5 Write a script that prints My number: <first argument converted in integer> if the first argument can be converted to an integer:

	If the argument can’t be converted to an integer, print “Not a number”
	You must use console.log(...) to print all output
	You are not allowed to use var
	You are not allowed to use try/catch

6 Write a script that prints 3 lines: (like 1-multi_languages.js) but by using an array of string and a loop

	The first line: “C is fun”
	The second line: “Python is cool”
	The third line: “JavaScript is amazing”
	You must use console.log(...) to print all output
	You are not allowed to use var
	You are not allowed to use any if/else statement
	You can use only one console.log
	You must use a loop (while, for, etc.)

7 Write a script that prints x times “C is fun”

	Where x is the first argument of the script
	If the first argument can’t be converted to an integer, print “Missing number of occurrences”
	You must use console.log(...) to print all output
	You are not allowed to use var
	You can use only two console.log
	You must use a loop (while, for, etc.)

8 Write a script that prints a square

	The first argument is the size of the square
	If the first argument can’t be converted to an integer, print “Missing size”
	You must use the character X to print the square
	You must use console.log(...) to print all output
	You are not allowed to use var
	You must use a loop (while, for, etc.)

9 Write a script that prints the addition of 2 integers

	The first argument is the first integer
	The second argument is the second integer
	You have to define a function with this prototype: function add(a, b)
	You must use console.log(...) to print all output
	You are not allowed to use var

10 Write a script that computes and prints a factorial

	The first argument is integer (argument can be cast as integer) used for computing the factorial
	Factorial of NaN is 1
	You must do it recursively
	You must use a function
	You must use console.log(...) to print all output
	You are not allowed to use var


11 Write a script that searches the second biggest integer in the list of arguments.

	You can assume all arguments can be converted to integer
	If no argument passed, print 0
	If the number of arguments is 1, print 0
	You must use console.log(...) to print all output
	You are not allowed to use var



* **12. Object**
  * [12-object.js](./12-object.js): Update of the following script that replaces
  the value `12` with `89`.
```
#!/usr/bin/node
const myObject = {
  type: 'object',
  value: 12
};
console.log(myObject);
/*
YOUR CODE HERE
*/
console.log(myObject);
```

* **13. Add file**
  * [13-add.js](./13-add.js): JavaScript function `add` that returns the addition
  of two numbers.


* **14. Const or not const**
  * [100-let_me_const.js](./100-let_me_const.js): JavaScript script that modifies
  the value of `myVar` in the following file to `333`.
```
#!/usr/bin/node
myVar = 89;
require('./100-let_me_const')
console.log(myVar);
```


* **15. Call me Moby**
  * [101-call_me_moby.js](./101-call_me_moby.js): JavaScript function that executes
  `x` times a given function.


* **16. Add me maybe**
  * [102-add_me_maybe.js](./102-add_me_maybe.js): JavaScript function that
  increments a given number and calls a given function.


* **17. Increment object**
  * [103-object_fct.js](./103-object_fct.js): Update of the following JavaScript
  script adding a new function `incr` that increments the number `value`.
```
#!/usr/bin/node
let myObject = {
  type: 'object',
  value: 12
};
console.log(myObject);
/*
YOUR CODE HERE
*/
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
``
