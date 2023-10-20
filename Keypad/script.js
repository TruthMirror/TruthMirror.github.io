
/* This is code to create random colors and apply it to the background */
/* it's a stand-in for a correct code entry. I plan to create a better version when I implement it into my portfolio */

/* I use this to identify the button */
const btn = document.querySelector("button");


/* This is used to generate a random number */
function random(number) {
  /* Math.floor makes sure it is a whole number */
  return Math.floor(Math.random() * (number + 1));
} btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol; console.log("colour change");
  console.log("test");
});



let enteredNumbers = "";
let correctCode = 1234;
let maxInput = 4;
let Counter = 0;


/* This was an attempt to limit the amount of numbers that could be typed into the keypad */

/* function updateEntry(value) {
  const currentEntry = document.getElementById("Entry").innerHTML;
  if (
    currentEntry.length < maxInput
  ) 
  {document.getElementById("Entry").innerHTML = currentEntry + value}
} */


/* Keeps the paragraph up to date with the entered numbers value */
function updateEntry() {
  document.getElementById("Entry").textContent = enteredNumbers;
}


/* This listens to the enter button and then activate the check code function if clicked */
document.querySelector('.Enter').addEventListener('click', checkCode);

/* This function clears the entered numbers, updates the displayed entry to be empty, and resets the counter to zero */
function clearInput() {
  enteredNumbers = "";
  updateEntry()
  Counter = 0;
}
/* Listens to the clear button and then runs the clear function of pressed */
document.querySelector('.Clear').addEventListener('click', clearInput);


function Limmit(value) {

  if (Counter < maxInput) {
    enteredNumbers = enteredNumbers + value;
    updateEntry();
    Counter = Counter + 1;
  }
  
}

/* Creating a way to limits the amount of numbers was quite difficult and I had trouble with .innerHTML */
/* function Limmit(value) {

  if (Counter === 4) {
    return;
  }
  
  const currentEntry = document.getElementById("Entry").innerHTML;

  if (currentEntry.length < maxInput) {

  document.getElementById("Entry").innerHTML = currentEntry + value;
  Counter + 1;
  console.log("counter" + Counter)


  }
}
 */

function checkCode() {
/*   if (enteredNumbers === correctCode) */
if (parseInt(enteredNumbers) === correctCode) {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
    console.log("Correct");
    console.log(enteredNumbers)
    
  }

  else {
    console.log("wrong")
    console.log(enteredNumbers)
  }
  clearInput();
}

document.querySelectorAll('.NumberButton').forEach(button => {
  button.addEventListener('click', (event) => {
    const number = event.target.textContent;
    Limmit(number);
  });
});


/* I don't think I'm going to be able to comment on every piece of this code I was working on this for so long and got so stuck so I'm just going to talk about it in this snippet

 the way of dealing with buttons by allocating them to a unique class Was not very efficient and it was hard to work with. I really had a lot of trouble wrapping my head around this and I feel like it took me a lot longer to work out how to fix things than other people. I was stuck for so long as no matter how many times I entered the correct code for the keypad it wouldn't accept it. 
 */

/* const btn1 = document.querySelector('.One');

btn1.addEventListener("click", () => {
  document.getElementById("Entry").innerHTML = document.getElementById("Entry").innerHTML + "1";
  Counter = Counter + 1;
  console.log(Counter)
  Limmit("1")
});


const btn2 = document.querySelector('.Two');

btn2.addEventListener("click", () => {
  document.getElementById("Entry").innerHTML = document.getElementById("Entry").innerHTML + "2";
});


const btn3 = document.querySelector('.Three');

btn3.addEventListener("click", () => {
  document.getElementById("Entry").innerHTML = document.getElementById("Entry").innerHTML + "3";
});


const btn4 = document.querySelector('.Four');

btn4.addEventListener("click", () => {
  document.getElementById("Entry").innerHTML = document.getElementById("Entry").innerHTML + "4";
});


const btn5 = document.querySelector('.Five');

btn5.addEventListener("click", () => {
  document.getElementById("Entry").innerHTML = document.getElementById("Entry").innerHTML + "5";
});


const btn6 = document.querySelector('.Six');

btn6.addEventListener("click", () => {
  document.getElementById("Entry").innerHTML = document.getElementById("Entry").innerHTML + "6";
});


const btn7 = document.querySelector('.Seven');

btn7.addEventListener("click", () => {
  document.getElementById("Entry").innerHTML = document.getElementById("Entry").innerHTML + "7";
});

const btn8 = document.querySelector('.Eight');

btn8.addEventListener("click", () => {
  document.getElementById("Entry").innerHTML = document.getElementById("Entry").innerHTML + "8";
});


const btn9 = document.querySelector('.Nine');

btn9.addEventListener("click", () => {
  document.getElementById("Entry").innerHTML = document.getElementById("Entry").innerHTML + "9";
});


const btn0 = document.querySelector('.Zero');

btn0.addEventListener("click", () => {
  document.getElementById("Entry").innerHTML = document.getElementById("Entry").innerHTML + "0";
}); */


/* const btnC = document.querySelector('.Clear');

btnC.addEventListener("click", () => {
  document.getElementById("Entry").innerHTML = "";
}); */

/* function random(number) {
  return Math.floor(Math.random() * (number + 1));
} btn1.addEventListener("click", () => {
  const rndCol = `rgb(${255}, ${255}, ${255})`;
  document.body.style.backgroundColor = rndCol; console.log("colour change");
  console.log("test");
}); */

/* const btn2 = document.querySelector('.Two');
function random(number) {
  return Math.floor(Math.random() * (number + 1));
} btn2.addEventListener("click", () => {
  const rndCol = `rgb(${255}, ${255}, ${255})`;
  document.body.style.backgroundColor = rndCol;

}); */

