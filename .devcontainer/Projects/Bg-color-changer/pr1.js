/*
element.forEach ( (val) => {
  val.addEventListener ("click", function () {
    if (this.id === 'grey') {
      body.style.backgroundColor = 'grey';
    }else if (this.id === 'white') {
      body.style.backgroundColor = 'white';
    }else if (this.id === 'blue') {
      body.style.backgroundColor = 'blue';
    }else {
      body.style.backgroundColor = 'yellow';
    }
  });
} );
*/
// here, 'this' represents the element that triggerred the event


element.forEach ( (val) => {
  val.addEventListener ( "click", (e) => {
    console.log(e.target)
    if (e.target.id === 'grey') {
      body.style.backgroundColor = 'grey';
    }else if (e.target.id === 'white') {
      body.style.backgroundColor = 'white';
    }else if (e.target.id === 'blue') {
      body.style.backgroundColor = 'blue';
    }else {
      body.style.backgroundColor = 'yellow';
    }
  })
});

// in above case we have used arrow functions which do not have their own 'this' context and hence we have to use e.target that gives us the DOM element that triggerred the event.
// we can also use switch instead of if-else