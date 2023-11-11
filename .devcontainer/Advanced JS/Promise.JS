// Below are some different ways to create promises
/*
// 1. By assigning it inside a variable and then applying operations 
 const promiseOne = new Promise (function (resolve, reject) {
    // Do async task
    // DB calls, cryptography, network
    setTimeout (function() {
        console.log('Async task is completed');
        resolve();
    }, 1000);
 });

 promiseOne.then (function() {
    console.log("Promise Consumed");
 });
*/
0
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

promiseThree.then (function (user) {
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
}).catch (function(error) {
    console.log(error);
}).finally ( () => {
    console.log("Finally executed");
})
*/

// 5. Async/Await and more

const promiseFive = new Promise (function (resolve, reject) {
    setTimeout(() => {
        let error = false;
            if (!error) {
                resolve ({username: 'Divy', age: 21});
            }else {
                reject ('ERROR: Something went wrong');
            }
    }, 1000);
});

async function consumePromiseFive () {
    const response = await promiseFive;
    console.log(response);
}

consumePromiseFive();
