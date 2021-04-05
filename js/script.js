// script.js

console.log("Hello from JavaScript!");

let theme = localStorage.getItem('theme');

theme ? setTheme(theme) : setTheme(light);

let themeDotsArr = document.getElementsByClassName('theme-dot')

for (let i=0; themeDotsArr.length > i; i++) {
    themeDotsArr[i].addEventListener('click', () => {
        let mode = themeDotsArr[i].dataset.mode;
        console.log(`ThemeTheme option clicked . . . ${mode}`);
        setTheme(mode);
    });
}

function setTheme(mode) {

    let cssSheetName = '';

    switch (mode) {
        case 'light':
            cssSheetName = 'default.css';
            break;

        case 'blue':
            cssSheetName = 'blue.css';
            break;

        case 'green':
            cssSheetName = 'green.css';
            break;

        case 'purple':
            cssSheetName = 'purple.css';
            break;

        default:
            cssSheetName = 'default.css';
    }

    let cssLocation = `css/${cssSheetName}`;
    document.getElementById('theme-style').href = cssLocation;
    localStorage.setItem('theme', mode);
}
