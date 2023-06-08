# RENDER:
RENDER UI based on what STATE the VARIABLES are in.

# INIT: Variables needed for the program

1. GO button
   * Begins application

2. Refresh button
    * Brings user back to the very start of the application

3. Next button 
    * Takes user to the next page of application

4. h1 element
    * Displays instructions for step

5. p element
    * Tells user to go next once step is complete
    * Gives example for step if needed

6. Scroll bar
    * Contains numbers 0-99
    * Assigns each number a symbol

# Functionality:
**USE .textContent inside of each page number for text change**
```
document.getElementById('webPage');

let webPage = pages

CONST pages = [
    "page 0" = [
        Go button,
        h1 page 0 text
    ],
    "page 1" = [
        next button,
        refresh button,
        h1 page 1 text,
        p page 1 text
    ],
    "page 2" = [
        next button,
        refresh button,
        h1 page 2 text,
        p page 2 text
    ],
    "page 3" = [
        next button,
        refresh button,
        h1 page 3 text,
        p page 3 text
    ],
    "page 4" = [
        next button (text turns to results),
        refresh button,
        scroll wheel for numbers
        h1 page 4 text,
        p page 4 text
        ],
    "page 5" = [
        refresh button,
        h1 page 5 text,
        p page 5 text
    ]
];

symbols [
    '@',
    '#',
    '$',
    '%',
    '&'
]

next button.addEventListner (click, => {
    for (let i = pages; i <= 5; i++) {
        return pages;
    }
});

refresh button.addEventListener (click, -> {
    return webPage.pages[0];
});

FUNCTION scroll menu() {
    const randomIndex = Math.floor(Math.random() * symbols.length);
    const randoSymbol = symbols[randomIndex];
    for (let i = 0-99; i <= 99; i++) { 
        if (i % 9 === 0) {
            return i + ' = ' symbols[4];
        }
    }
    else {
        return i + ' = ' + randoSymbol;
    }
}
```
# PROGRAM START

```
RENDER page0
WHEN go button clicked DISPLAY page1
IF next button clicked DISPLAY page2, page3, page4, page5
IF refresh button clicked DISPLAY page0
```

# END
