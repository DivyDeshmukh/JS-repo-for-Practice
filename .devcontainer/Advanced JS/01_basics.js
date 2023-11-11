/*
const reference = setTimeout ( function () {
    document.querySelector ('h1').innerHTML = 'Divy Deshmukh';
}, 2000);

document.querySelector ('button').addEventListener ('click', function () {
    clearTimeout (reference);
});
*/
/*
const func = function ()  {
    let ranColor1 = Math.floor(Math.random () * 256);
    let ranColor2 = Math.floor(Math.random () * 256);
    let ranColor3 = Math.floor(Math.random () * 256);

    let bgColor = "rgb(" + ranColor1 + "," + ranColor2 + "," + ranColor3 + ")";

    document.body.style.backgroundColor =  bgColor;
}

let ref;

document.querySelectorAll ('button')[0].addEventListener ('click', () => {
    ref = setInterval (func, 1000);
});

document.querySelectorAll ('button')[1].addEventListener ('click', () => {
    clearInterval (ref);
});
*/

setTimeout (()=> {console.log("Hello")}, 2000);



