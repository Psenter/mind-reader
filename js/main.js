//calls all html into JS
let webPage = document.getElementById("webPage");
let instruct = document.getElementById("instruct");
let nextBtn = document.getElementById("next");
let example = document.getElementById("example");
let goRef = document.getElementById("goRef");

//array containing each page
let pages = [
  {
    instruct: "I can read your mind",
    nextBtn: false,
    goRef: "Go"
  },
  {
    instruct: "Pick a number from 01-99",
    nextBtn: "Next",
    example: "when you have your number click next",
    goRef: "↻"
  },
  {
    instruct: "Add both digits together to get a new number",
    nextBtn: "Next",
    example: "Ex; 14 is 1 + 4 = 5, click next to proceed",
    goRef: "↻"
  },
  {
    instruct: "Subtract your new number from the original number",
    nextBtn: "Next",
    example: "Ex; 14 - 5 = 9, click next to proceed",
    goRef: "↻"
  },
  {
    instruct: "",
    nextBtn: "Reveal",
    example: "Find your new number. Note the symbol beside the number",
    goRef: "↻"
  },
  {
    instruct: "",
    nextBtn: false,
    example: "",
    goRef: "↻"
  }
];

//array containing symbols for numbers
let symbols = ["@", "#", "$", "%", "&"];

//sets page to show first part of pages array
let currentPage = 0;

//function to change what is shown on page
function nextPage() {
    currentPage++;
    render();
}

//function to make go button work and refresh button to send user to the first page
function goBtn() {
    if (currentPage === 0) {
        nextPage();
    }
    else {
        currentPage = 0;
        render();
    }
}

//event listener on go button so when clicked function is executed
goRef.addEventListener('click', goBtn);

//event listener for next button so page changes on click
nextBtn.addEventListener('click', nextPage);

//renders the array onto the screen
function render() {
    if (pages[currentPage].instruct === true) {
      instruct.textContent = multiNine();
    }
    else {
      instruct.textContent = pages[currentPage].instruct;
    }
    example.textContent = pages[currentPage].example;
    goRef.innerHTML = pages[currentPage].goRef;
    //hides next button when needed to be hidden
    if (pages[currentPage].nextBtn === false) {
        nextBtn.style.visibility = 'hidden';
    }
    else {
        nextBtn.style.visibility = 'visible';
        nextBtn.textContent = pages[currentPage].nextBtn;
    }
}

let chosenSymbol = symbols[Math.floor(Math.random() * symbols.length)];

//create string
//concat nums and symbols into one string
//return string
function multiNine() {
  var str = '';
  chosenSymbol = symbols[Math.floor(Math.random() * symbols.length)];
  for (let i = 0; i < 100; i++) {
    if (i % 9 === 0) {
      str = str + i + ' = ' + chosenSymbol + '</br>';
    }
    else {
      const randomSymbol = Math.floor(Math.random() * symbols.length);
      const item = symbols[randomSymbol];
      str = str + i + ' = ' + item + '</br>';
    }
  }
  pages[5].instruct = chosenSymbol;
  pages[4].instruct = str;
}

//executes the render function
render();