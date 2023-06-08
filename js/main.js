let webPage = document.getElementById("webPage");
let instruct = document.getElementById("instruct");
let nextBtn = document.getElementById("next");
let example = document.getElementById("example");
let goRef = document.getElementById("goRef");

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
    goRef: "<img src='img/Refresh_icon.svg.png'>",
  },
  {
    instruct: "Add both digits together to get a new number",
    nextBtn: "Next",
    example: "Ex; 14 is 1 + 4 = 5, click next to proceed",
    goRef: "<img src='img/Refresh_icon.svg.png'>",
  },
  {
    instruct: "Subtract your new number from the original number",
    nextBtn: "Next",
    example: "Ex; 14 - 5 = 9, click next to proceed",
    goRef: "<img src='img/Refresh_icon.svg.png'>"
  },
  {
    nextBtn: "Reveal",
    example: "Find your new number. Note the symbol beside the number",
    goRef: "<img src='img/Refresh_icon.svg.png'>"
  },
  {
    instruct: "&",
    example: 'Your symbol is: "&" ',
    goRef: "<img src='img/Refresh_icon.svg.png'>",
  }
];

let symbols = ["@", "#", "$", "%", "&"];

let currentPage = 0;

function nextPage() {
    currentPage++;
    render();
}

function goBtn() {
    if (currentPage === 0) {
        nextPage();
    }
    else {
        currentPage = 0;
        render();
    }
}

goRef.addEventListener('click', goBtn);

nextBtn.addEventListener('click', nextPage);

function render() {
    instruct.textContent = pages[currentPage].instruct;
    example.textContent = pages[currentPage].example;
    goRef.innerHTML = pages[currentPage].goRef;
    if (pages[currentPage].nextBtn === false) {
        nextBtn.style.visibility = 'hidden';
    }
    else {
        nextBtn.style.visibility = 'visible';
        nextBtn.textContent = 'Next'
    }
}

render();