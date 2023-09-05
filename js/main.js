let title = document.getElementById("title");
let nextbtn = document.getElementById("nextbtn");
let t1 = document.getElementById("t1");
let goReset = document.getElementById("goReset");
let symbols = ["@", "#", "$", "%", "&", "*"];

let state = {
    pageIndex: 0,
    pagesArr: [
        { title: "I can read your mind", hideNextbtn: true, t1: "", goReset: "GO"},

        { title: "Pick a number from 01-99", nextbtn: "NEXT", t1: "when you have your number click next", goReset: "↻"},

        { title: "Add both digits together  to get a new number", nextbtn: "NEXT", t1: "Ex: 14 is 1 + 4 = 5 <br> click next to proceed", goReset: "↻"},

        { title: "Subtract your new number from the orginial number", nextbtn: "NEXT", t1: "Ex: 14 - 5 = 9 <br> click next to proceed", goReset: "↻"},

        { title: "0 - & <br> 1 - @ <br> 2 - $ <br> 3 - B", nextbtn: "REVEAL", t1: "Find your new number <br> Note the symbol beside the number", goReset: "↻"},

        { title:"&", hideNextbtn: true, t1: "Your symbol is: <br> &", goReset: "↻"}
    ]
};

function init() {
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

init();