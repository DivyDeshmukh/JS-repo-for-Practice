let clock = document.querySelector('#clock');

setInterval ( () => {
  let date = new Date();
  date = date.toLocaleTimeString();
  clock.innerHTML = `<span>${date}</span>`;
}, 1000);