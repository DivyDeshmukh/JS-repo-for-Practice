// if we take values of height and weight here this will give NaN, because the script has just loaded and it do not contain any value
/*
let height = document.querySelector ('#height').value;
let weight = document.querySelector ('#weight').value;
console.log(height);
console.log(weight);
*/

const form = document.querySelector ('form');

// when form gets submitted then the value of height and weight will come in variable rather than going to anywhere else
form.addEventListener ('submit', (e) => {
  e.preventDefault ();  // this will prevent default operations to take place

  let height = parseInt (document.querySelector ('#height').value);

  let weight = parseInt (document.querySelector ('#weight').value);

  let results = document.querySelector ('#results');

  if (height = '' || height < 0 || isNaN (height)) {
    results.innerHTML = 'Please enter a valid height';
  }else if (weight = '' || weight < 0 || isNaN (weight)) {
    results.innerHTML = 'Please enter a valid weight';
  }else {
    const bmi = weight / ((height*height) / 10000).toFixed (2);
    results.innerHTML = `<span>${bmi}</span>`; 
  }
  
})