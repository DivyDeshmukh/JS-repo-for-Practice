// Below are some different ways to create promises
/*
// 1. By assigning it inside a variable and then applying operations 
 const promiseOne = new Promise (function (resolve, reject) {           // promiseOne will contain the response returned from the promise either resolved or rejected  
    // Do async task
    // DB calls, cryptography, network
    setTimeout (function() {
        console.log('Async task is completed');
        resolve();
    }, 1000);
 });

 promiseOne.then (function() {                              // then () will run in case when promise returned a resolved promise, which is of no errors
    console.log("Promise Consumed");
 });
*/

/*
// 2. By directly calling it
new Promise (function (resolve, reject) {
    setTimeout (function() {
        console.log('Async2 created\n');
        resolve();
    } , 1000);
}).then (function () {
    console.log('Async2 is resolved');
});
*/

/*
//3. Passing arguments in then(function(args)), also resolve() and then() relationship
const promiseThree = new Promise (function (resolve, reject) {
    setTimeout (function() {
        console.log('Async3 started\n');
        resolve ({username: 'Divy', age: 21});
    } , 1000)
});

promiseThree.then (function (user) {                            // arguments inside then will contain the value sent from the parameters inside resolve()
    console.log(user.username);
    console.log(user.age);
});
*/

/*
// 4. Using reject () and catch () and finally
const promiseFour = new Promise (function (resolve, reject) {
    setTimeout(() => {
        let error = false;
            if (!error) {
                resolve ({username: 'Divy', age: 21});
            }else {
                reject ('ERROR: Something went wrong');
            }
    }, 1000);
});

promiseFour.then (function (user) {
    console.log(user);
    return user.username;
}).then (function (username) {
    console.log(username);
}).catch (function(error) {                             // arguments inside catch will contain the value sent from the parameters inside rejected()
    console.log(error);
}).finally ( () => {
    console.log("Finally executed");
})
*/

/*
// 5. Async/Await and more

const promiseFive = new Promise (function (resolve, reject) {
    setTimeout(() => {
        let error = true;
            if (!error) {
                resolve ({username: 'Divy', age: 21});
            }else {
                reject ('ERROR: Something went wrong');
            }
    }, 1000);
});

async function consumePromiseFive () {
    try {
        const response = await promiseFive;
        console.log(response);
    }catch (error) {
        console.log(error);
    }
}

consumePromiseFive();
*/

/*
// 6. Handling responses of Promise with then, catch() and try, catch()
const promiseSix = new Promise (function (resolve, reject) {                
    let error = true;
    if (!error) {
        resolve({username: "Divy", password: "123"});
    }else {
        reject ('ERROR: Something is wrong here\n');
    }
});

/*
promiseSix.then (function(e) {
    console.log(e);
    return e.username;
}).then(function (e) {
    console.log(e.username);
}).catch (function (error) {
    console.log(error);
});


async function consumePromiseSix () {
    try {
        const response = await promiseSix;
        console.log(response);
    }catch (err) {
        console.log(err);
    }
}

consumePromiseSix();

// Note:- We can handle promises or responses of that promises with the help of try, catch() i.e. async/await also or with then(), catch(function()), finally() also. 
*/

// 7. Working with fetch()

/*
//with try and catch()
async function getAllUsers () {
    try {
        const response = await fetch ('https://api.github.com/users/DivyDeshmukh');         //  fetch() returns a Promise that allows you to work with the result of an HTTP request in a more structured and asynchronous manner
        const data = await response.json();
        console.log(data);
    }catch (error) {
        console.log(error);
    }
}

getAllUsers ();
*/

/*
// with then(), catch(), and finally ()
fetch ('https://api.github.com/users/DivyDeshmukh').then (function (resolve) {
    return resolve.json();
}).then (function (response) {
    console.log(response.name);
}).catch (function (err) {
    console.log(err);
});
*/

