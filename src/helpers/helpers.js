export function showNotification(setter) {
    setter(true);
    setTimeout(() => {
        setter(false);
    }, 2000);
}

export function checkWin(correct, wrong, word) {
    let status = 'win';

    // check for win
    word.split('').forEach((letter) => {
        if (!correct.includes(letter)) {
            status = '';
        }
    });
    // check for lose
    // === 6 cause we have 6 chances
    if (wrong.length === 6) status = 'lose';
    return status;
}

export function getWordList() {
    const words = require('../components/wordlist.json');
    return words;
}
