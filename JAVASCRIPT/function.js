// function 

// basically function keyword is presend inside javascript when you run a function it goes line by line 
function a(){
    let axy = 10;
}

/**
 * here a is the local variable for the function, now when the browser reads line by line it just allocate memory and it register the variable x 
   in the memory space. X is the function and a is the axy is the local variable for the function. Now when the browser is read this line by line
   it just allocates memory and it registers the variable in the memory space and what happens is it continuous line by line it reads and go away
 */
var xyz = 30;
/**
 * now this variable gets hoisted.
 * the data structure used for storing memory is call stack. Call stack is basically different than memory heap. These all just moves and stored 
 * in memory and now what happen is suppose run the execute line a()...
 */
a()
/**
 * This will went and function execution contest is created, but there can we anonymous functions. An anonymous function is a function expression
 * and you can assign into a variable also.
 */
const b= function(){
  console.log(`hai, I'm a anonymous function...`);
}
/**
 * Its a function expression, what is an expression? an expression is something that  evaluates to something.Suppose var a = 30; here 30 is an exp
 * ression.
 */

/**
 * How to create an arrow function?
 * Arrow function is not in javascript for long time, later javascript came up with arrow function in es6
 */
const arrow = ()=>{}
/**
 * We don't want function keyword and the arrow is also known as fat arrow, you can do any thing like regular function the only difference is that
 * about the lthis' variable.That is the main difference between an arrow function and a normal function.It takes the 'this' of its lexical parent.
 */
console.log(window);
// we can get window object has as an result
// const obj = {
//   fn: function(){
//     console.log(this);
//   }
// }
/**
 * we can see obj as the result because inner this is refers to obj in this code. 
 */
const obj = {
  fn1: function(){
    console.log(this);
  },
  fn2: ()=>{
    console.log(this)
  }

}
/**
 * we can see window as the result of fn2. Whenever you see the this it depends on how calling the function.In case of arrow function its this
 * depends on parents this
 */
