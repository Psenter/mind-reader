let title = document.getElementById("title");
let nextbtn = document.getElementById("nextbtn");
let t1 = document.getElementById("t1");
let goReset = document.getElementById("goReset");
let symbols = ["@", "#", "$", "%", "&", "*"];

let state = {
  pageIndex: 0,
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

function init() {
  title.innerHTML = state.pagesArr[state.pageIndex].title;
  nextbtn.innerHTML = state.pagesArr[state.pageIndex].nextbtn;
  t1.innerHTML = state.pagesArr[state.pageIndex].t1;
  goReset.innerHTML = state.pagesArr[state.pageIndex].goReset;

  if (state.pagesArr[state.pageIndex].hideNextbtn) {
    nextbtn.style.display = "none";
  } else {
    nextbtn.style.display = "block";
  }
}

function savePageIndexToLocalStorage() {
  localStorage.setItem("pageIndex", state.pageIndex);
}

function loadPageIndexFromLocalStorage() {
  const pageIndex = localStorage.getItem("pageIndex");
  if (pageIndex !== null) {
    state.pageIndex = parseInt(pageIndex);
  }
}

function nextPage() {
  state.pageIndex = state.pageIndex + 1;
  savePageIndexToLocalStorage();
  title.innerHTML = state.pagesArr[state.pageIndex].title;
  nextbtn.innerHTML = state.pagesArr[state.pageIndex].nextbtn;
  t1.innerHTML = state.pagesArr[state.pageIndex].t1;
  goReset.innerHTML = state.pagesArr[state.pageIndex].goReset;
  if (state.pagesArr[state.pageIndex].hideNextbtn) {
    nextbtn.style.display = "none";
  } else {
    nextbtn.style.display = "block";
  }
}

function resetPage() {
  if (goReset.innerHTML === "GO") {
    nextPage();
    savePageIndexToLocalStorage();
  } else if (goReset.innerHTML === "↻") {
    state.pageIndex = 0;
    savePageIndexToLocalStorage();
    title.innerHTML = state.pagesArr[state.pageIndex].title;
    nextbtn.innerHTML = state.pagesArr[state.pageIndex].nextbtn;
    t1.innerHTML = state.pagesArr[state.pageIndex].t1;
    goReset.innerHTML = state.pagesArr[state.pageIndex].goReset;
    if (state.pagesArr[state.pageIndex].hideNextbtn) {
      nextbtn.style.display = "none";
    } else {
      nextbtn.style.display = "block";
    }
  }
}

function generateNumbersWithSymbols() {
  const numbersWithSymbols = [];
  const symbolMapping = {};

  for (let i = 1; i < 100; i++) {
    const number = i;
    const symbolIndex = (i - 1) % symbols.length;
    const symbol = symbols[symbolIndex];
    numbersWithSymbols.push({ number, symbol });

    if (i % 9 === 0) {
      symbolMapping[i] = symbol;
    }
  }

  state.symbolMapping = symbolMapping;

  return numbersWithSymbols;
}

state.pagesArr[4].title = generateNumbersWithSymbols()
  .map((item) => `${item.number} - ${item.symbol}`)
  .join("<br>");

nextbtn.addEventListener("click", nextPage);
goReset.addEventListener("click", resetPage);

window.addEventListener("load", function () {
  loadPageIndexFromLocalStorage();
  init();
});
