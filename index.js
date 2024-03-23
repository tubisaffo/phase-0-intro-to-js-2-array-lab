// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push('Ralph');
}

function destructivelyPrependCat(name) {
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat() {
    cats.pop(cats.length - 1);
}

function destructivelyRemoveFirstCat() {
    cats.shift('Milo');
}

function appendCat(name) {
    return [...cats, 'Broom'];
}

function prependCat(name) {
    return ['Arnold', ...cats];
}

function removeLastCat() {
    return cats.slice(0, -1);
}

function removeFirstCat() {
    return cats.slice(1);
}