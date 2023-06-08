let webPage = document.getElementById('webPage');
let instruct = document.getElementById('instruct');
let nextBtn = document.getElementById('next');
let example = document.getElementById('example');
let goRef = document.getElementById("goRef");

let pages = {
    page1: [
        instruct.textContent = 'I can read your mind.',
        nextBtn.style.display = "none",
        example.style.display = "none",
        goRef.textContent= 'GO'
    ],
    page2: [
        instruct.textContent = 'Pick a number from 01-99',
        nextBtn.style.display = "block",
        nextBtn.textContent = 'Next',
        example.style.display = "block",
        example.textContent = 'when you have a number click next',
        goRef.textContent = img/Refresh_icon.svg.png
    ],
    page3: [
        instruct.textContent = 'Add both digits together to get a new number',
        nextBtn.textContent = 'Next',
        example.textContent = 'Ex: 14 is 1 + 4 = 5\nclick next to proceed',
        goRef.textContent = img/Refresh_icon.svg.png
    ],
    page4: [
        instruct.textContent = 'Subtract your new number from the original number',
        nextBtn.textContent = 'Next',
        example.textContent = 'Ex: 14 - 5 = 9\nclick next to proceed',
        goRef.textContent = img/Refresh_icon.svg.png
    ],
    page5: [
        //fix 
        instruct.textContent(),
        nextBtn.textContent = 'Reveal',
        example.textContent = 'Find your new number.\nNote the symbol beside the number',
        goRef.textContent = img/Refresh_icon.svg.png
    ],
    page6: [
        //fix
        instruct.textContent(''),
        nextBtn.style.display = "none",
        example.textContent(''),
        goRef.textContent = img/Refresh_icon.svg.png
    ]
};

let symbols = [
    '@',
    '#',
    '$',
    '%',
    '&'
];

nextBtn.addEventListener('click', function(webPage) {
    webPage = pages[0]++;
    return webPage;
});