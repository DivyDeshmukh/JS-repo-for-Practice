
// function task1 (callback) {
//     setTimeout(() => {
//         console.log('Task1 Completed');
//         callback();
//     }, 3000);
// }

// function task2 (callback) {
//     setTimeout(() => {
//         console.log('Task2 Completed');
//         callback();
//     }, 2000);
// }

// function task3 (callback) {
//     setTimeout(() => {
//         console.log('Task3 Completed');
//         callback();
//     }, 1000);
// }

// function task4 (callback) {
//     setTimeout(() => {
//         console.log('Task4 Completed');
//         callback();
//     }, 1500);
// }

// task1(() => {
//     task2(() => {
//         task3(() => {
//             task4(() => {
//                 console.log('All tasks are completed.');
//             });
//         });
//     });
// });

function callbackHell(ms) {
    return (
        new Promise(function(res, rej) {
            setTimeout (res, ms);
        })
    );
}

// callbackHell(3000)
// .then (() => {
//     console.log('Task1 Completed');
//     return callbackHell(2000);
// })
// .then(() => {
//     console.log('Task 2 Completed');
//     return callbackHell(1000);
// })
// .then(() => {
//     console.log('Task 3 Completed');
//     return callbackHell(1500);
// })
// .then(() => {
//     console.log('Task 4 Completed');
// })
// .catch((error) => console.log(error))
// .finally(() => console.log('All tasks are completed'));

// async function consume () {
//     await callbackHell(3000);
//     console.log('Task 1 Completed');
//     await callbackHell(2000)
//     console.log('Task 2 completed');
//     await callbackHell(1000)
//     console.log('Task 3 Completed');
//     await callbackHell(1500);
//     console.log('Task 4 Completed');
// }

// consume();

/* 
If an error occurs during the execution of the asynchronous function fun(1, 2000), the subsequent await expressions in the async function will not be reached, and the control will jump directly to the catch block (if provided) or cause an unhandled promise rejection.*/