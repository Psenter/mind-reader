// Gets all HTML elements and brings it into the JS file
let title = document.getElementById("title");
let nextbtn = document.getElementById("nextbtn");
let t1 = document.getElementById("t1");
let goReset = document.getElementById("goReset");
let symbols = ["@", "#", "$", "%", "&", "*"];

//Contains all pages for the single page apps and index counter
let state = {

  //Keeps track of all the pages
  //Sets index to 0
  pageIndex: 0,

  //Holds all the app pages
  pagesArr: [
    { title: "I can read your mind", hideNextbtn: true, t1: "", goReset: "GO" },
    {
      title: "Pick a number from 01-99",
      nextbtn: "NEXT",
      t1: "when you have your number click next",
      goReset: "↻",
    },
    {
      title: "Add both digits together  to get a new number",
      nextbtn: "NEXT",
      t1: "Ex: 14 is 1 + 4 = 5 <br> click next to proceed",
      goReset: "↻",
    },
    {
      title: "Subtract your new number from the original number",
      nextbtn: "NEXT",
      t1: "Ex: 14 - 5 = 9 <br> click next to proceed",
      goReset: "↻",
    },
    {
      title: "",
      nextbtn: "REVEAL",
      t1: "Find your new number <br> Note the symbol beside the number",
      goReset: "↻",
    },
    {
      title: "$",
      hideNextbtn: true,
      t1: "Your symbol is: <br> $",
      goReset: "↻",
    },
  ],
};

//Function that initally loads the page for the user
function init() {

  //Sets all of the HTML to be the first page
  //Calls in the 'pagesArr' that contains all the pages
  //pageIndex is called in so the function knows what to change the innerHTML to
  title.innerHTML = state.pagesArr[state.pageIndex].title;
  nextbtn.innerHTML = state.pagesArr[state.pageIndex].nextbtn;
  t1.innerHTML = state.pagesArr[state.pageIndex].t1;
  goReset.innerHTML = state.pagesArr[state.pageIndex].goReset;

  //checks to see if the page has the next button hidden or not
  //If hideNextBtn is set to true it hides the button
  if (state.pagesArr[state.pageIndex].hideNextbtn) {
    nextbtn.style.display = "none";
  } 
  //If hideNextBtn is set to false or text it shows the button
  else {
    nextbtn.style.display = "block";
  }
}

//Stores the page in local storage
function savePageToStorage() {
  localStorage.setItem("pageIndex", state.pageIndex);
}

//Loads the page from the local storage
function loadPageFromStorage() {
  const pageIndex = localStorage.getItem("pageIndex");
  //checks if there is a value for the page in local storage
  if (pageIndex !== null) {
    state.pageIndex = parseInt(pageIndex);
  }
}

//Function that loads the next page
function nextPage() {
  //Increases the page index by one
  state.pageIndex = state.pageIndex + 1;
  //Saves the page to local storage
  savePageToStorage();
  //Sets all the inner HTML to the correct page number
  title.innerHTML = state.pagesArr[state.pageIndex].title;
  nextbtn.innerHTML = state.pagesArr[state.pageIndex].nextbtn;
  t1.innerHTML = state.pagesArr[state.pageIndex].t1;
  goReset.innerHTML = state.pagesArr[state.pageIndex].goReset;
  if (state.pagesArr[state.pageIndex].hideNextbtn) {
    nextbtn.style.display = "none";
  } 
  else {
    nextbtn.style.display = "block";
  }
}

//Function to reset the page
function resetPage() {
  //If the button says 'GO' calls in next page function and saves it to storage
  if (goReset.innerHTML === "GO") {
    nextPage();
    savePageToStorage();
  } 
  //If the button has '↻' in it then it changes the page back to the first one
  else if (goReset.innerHTML === "↻") {
    //Sets the page index back to 0 (first page)
    state.pageIndex = 0;
    //Saves page to storage
    savePageToStorage();
    title.innerHTML = state.pagesArr[state.pageIndex].title;
    nextbtn.innerHTML = state.pagesArr[state.pageIndex].nextbtn;
    t1.innerHTML = state.pagesArr[state.pageIndex].t1;
    goReset.innerHTML = state.pagesArr[state.pageIndex].goReset;
    if (state.pagesArr[state.pageIndex].hideNextbtn) {
      nextbtn.style.display = "none";
    } 
    else {
      nextbtn.style.display = "block";
    }
  }
}

//Function that generates numbers 1-99
//Adds a symbol to each number
function generateNumbersWithSymbols() {
  //Creates an array to hold all numbers and their symbols
  const numbersWithSymbols = [];
  //Object that stores multiples of 9 and their symbols
  const symbolMapping = {};

  //Generates numbers 1-99 with a for loop
  for (let i = 1; i < 100; i++) {
    //Sets number to the 'i' variable
    const number = i;
    //Makes sure that index wraps around when it reaches the end of the array
    const symbolIndex = (i - 1) % symbols.length;
    //The symbol variable is assigned to the corresponding symbol in the array
    const symbol = symbols[symbolIndex];
    //Pushes the number and symbol into the 'numbersWithSymbols' array as a pair
    numbersWithSymbols.push({ number, symbol });

    //Checks to see if a number is a multiple of 9 and makes each one have the same symbol
    if (i % 9 === 0) {
      symbolMapping[i] = symbol;
    }
  }

  //Allows state to access the mapping
  state.symbolMapping = symbolMapping;

  //Returns the array
  return numbersWithSymbols;
}

//Sets the title of the 5th page to the array of all the numbers and symbols
state.pagesArr[4].title = generateNumbersWithSymbols()
  //Maps out the array and their symbols
  .map((item) => `${item.number} - ${item.symbol}`)
  //Joins a break line element into the array so each item that is mapped out so each is on their own line
  .join("<br>");

//Adds an event listen to both buttons
//The next button calls on the 'nextPage' function
nextbtn.addEventListener("click", nextPage);
//the goReset button calls on the 'resetPage' function
goReset.addEventListener("click", resetPage);

//Adds a event listener to the window to see when the page is loaded
window.addEventListener("load", function () {
  //Loads the page from local storage
  loadPageFromStorage();
  //Calls the init function and displays everything on the screen for the user
  init();
});
