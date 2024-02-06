About ES6

-----> ES6 stands for ECMAScript 6 ✅

ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.

new features like:

Classes
Arrow Functions
Variables (let, const)
Array Methods like .map()
Destructuring
Modules
Ternary Operator
Spread Operator

-----> SCOPE IN JAVASCRIPT ✅

There are three scopes in js or in other languages

1. Function Scope -> Var is funtion scope . Means their vaiables are only accessible only inside the function.
2. Block Scope -> Let and Const scope are the block scope variable which means that these varibale are only accesible inside the block.
3. Lexical Scope -> It is for all the keywords whether it is var,let ,const .it works where we need nested funtion. according to this concept any varible inside the inner funtion has access to the variables that are outside of it.i.e, in the parent funtion.

------> Undefined Vs Null ✅

UNDEFINED
1.) When a variable is declared but not initialized, or when a function does not return a value, the variable or the function’s result is undefined.
2.) Unlike Null ,we do not genrally assign any varible to undefined

NULL
1.)It is a deliberate assignment that represents the absence of any object value. 2) We assign to a varable with null if required

-------> Regular Vs Arrow ✅

Regular
1.) Before ES6 we use this regular funtion .
2.) Regular funtion has its own this and arguments
3.) They are also hoisted
4.) Binding is there in regular funtion with this
Arrow
1.) THis is the feature of ES6
2.) Improve the code readability
3.) Arrow funtion does't have its own this and arguments
4.) Binding to object with this is not available

-------> Temporal Dead Zone ✅

var,Let and Const are all hoisted this mean GEC set their value but these value is different in case of var and in let annd const
Now in case of var GEC assigned to undefined but let and const are assigned to uninitialised and this sate of uninitialisation is called temporal dead zone in case of let and const.The temporal dead zone (TDZ) is a specific period in the execution of JavaScript code where variables declared with let and const exist but cannot be accessed or assigned any value.

--------> Primitive and Reference Type ✅

Primitive Type
1.) Example of this primitive data types are number ,null,string ,boolean etc
2.) Uses stack to the data
3.) For each varibale the seprate stack space is provided.
Reference Type
1.) Example of this is {},[],() .Means object ,array etc
2.) In this stack only stores the pointer or reference to the actual data which is stored in heap
3.) if we assign one object to other object then any change in one of them will reflect in both the object

---------> Include Method in Array ✅

1.) This method is gives true/false on the basis of if the element in the argument of include is present in array.
2.) THis is case sensitive.
3.) Takes two parameter element you want to search and other is optional is start (default is 0)

---------> BigInt And Int ✅

Now bigInt and int takes 8byte and 4 bytes respectively
In javascript bigint can be assignable to any integer number exceppt float and decimal
range of int is - -2^31 to 2^31-1
range of big int is -2^63 to 2^63-1

---------> Array Methods ✅
A ==> For Each

1.) For Each - IT is high order funtion which takes a callback. It return noting i.e in the case of forEacch it return undefined.
2.) Take a callback which accepts two parameter one is the element and one is index of array.

B ==> Map

1.) Unlike the for each it always returns an array and it is also high order function which accepts two argument first one is the element of array and other one is the index of the array.

C ==> Filter

1.) As the name suggest ,it uses to filter some or every element in the array (depending on the condition)
2.) It also take a callback and that callback takes two argument one is for elements in the array and second is index.

--------> Operators

1.) Arithmetic Operators
2.) Assignment Operators
3.) Comparison Operators
4.) String Operators
5.) Logical Operators
6.) Bitwise Operators
7.) Ternary Operators
8.) Type Operators

1.) Arithimetic operator

Operator Description + Addition - Subtraction \* Multiplication
\*\* Exponentiation (ES6)
/ Division
% Modulus (Division Remainder)
++ Increment
-- Decrement

2.) Assignment Operators

Operator Example Same As
= x = y x = y
+= x += y x = x + y
-= x -= y x = x - y
_= x _= y x = x \* y
/= x /= y x = x / y
%= x %= y x = x % y
**= x **= y x = x \*\* y

3.) Comparison Operator

Operator Description
== equal to
=== equal value and equal type
!= not equal
!== not equal value or not equal type

>                    greater than
>
> < less than
> = greater than or equal to
> <= less than or equal to
> ? ternary operator

4.) Logical Operators

Operator Description

    &&	     logical and
    ||	     logical or
    !	     logical not

5.) Ternary Operators

a ? b : c evaluates to b if the value of a is true, and otherwise to c
