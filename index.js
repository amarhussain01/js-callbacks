// callback = a function passed as an argument
//            to another function.

//  Ensure that a function is not going
//  to run before a task is completed.
//  Helps us develop asynchronous code.
//  (When one function has to wait for another function)
//  that helps us avoid errors and potential problems
//  Ex. Wait for a file to load


sum(2, 3, displayDom);

function sum(x, y, doSomething){
    let result = x + y;
    doSomething(result);
}

function displayConsole(output){
    console.log(output);
}

function displayDom(output){
    document.getElementById("myLabel").innerHTML = output;

}