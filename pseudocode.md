# INIT: Variables needed for the program

1. arr pages
    * Contains how each page should be formatted 

2. currentPage
    * Shows what the current page being DISPLAYED is

3. arr symbols
    * Contains each symbol used

4. nextBtn
    * CHANGES STATE of the page

5. goRef button
    * CHANGES STATE of the page
    * sends user back to START of page

6. instruct
    * Contains text that CHANGES based on which page user is viewing

7. example
    * Contains text that CHANGES based on which page user is viewing

8. webPage
    * holds instruct, example, nextBtn, goRef VARS

9. scrollMenu
    * numbers 0-99
    * symbols for numbers
# Functionality:
**DO FOR ALL HTML ELEMENTS**
```
document.getElementById('webPage');
```
**USE .textContent inside of each page number for text change**

```
currentPage = pages[#]

CONST pages = [
    {
        page 1 text,
        goRef button
    },
    {
        page 2 text
        goRef button
        nextBtn
    },
    {
        page 3 text
        goRef button
        nextBtn
    },
    {
        page 4 text
        goRef button
        nextBtn
    },
    {
        scroll menu
        page 5 text
        goRef button
        nextBtn
    },
    {
        page 6 text
        goRef button
    }
];

symbols [
    '@',
    '#',
    '$',
    '%',
    '&'
]

next button.addEventListner (click, => {
    //increment VAR currentPage 
    //change displayed STATE to next page   
});

refresh button.addEventListener (click, -> {
    //change displayed STATE to START page
});

function RENDER() {
    //get currentPage object pages[currentPage]
}

function randomNumber() {
    //gives any number 0-99 a random a symbol from the array
}

function mutliNine() {
    //finds multiples of nine
    //set multiples of nine to '&' symbol
}
```
# PROGRAM START

```
RENDER pages[0]
WHEN go button clicked DISPLAY page1
IF next button clicked DISPLAY page2, page3, page4, page5
IF refresh button clicked DISPLAY page0
```

# END