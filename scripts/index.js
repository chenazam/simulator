function randomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

function addContestant() {
    let button = document.getElementById("randomContestant");
    let randomContestant = contestants[randomNumber(0, contestants.length - 1)];
    while (currentCast.find( (queen) => {
        return queen.getName() == randomContestant.getName()
    })) {
        randomContestant = noCustom[randomNumber(0, noCustom.length - 1)];
    }
    currentCast.push(randomContestant);
    updateCast();
    if (currentCast.length >= 20) {
        searchInput.setAttribute("readonly", true);
        searchInput.removeAttribute("placeholder");
        searchInput.setAttribute("placeholder", "You can't choose more than 20 contestants");
        button.classList.toggle("hide", true);
    }
    let big = document.getElementById("castBig");
    if (currentCast.length != 0) {
        big.classList.toggle("hide", false);
        big.innerHTML = `Number of contestants: ${currentCast.length}`;
    }
}

class Contestant {
    constructor(name, stat1, stat2, stat3, stat4, stat5, image) {
        this.image = `img/queens/${image}.jpg`;
    }
}

// CONTESTANTS
let contestant1 = new Contestant("Contestant 1", 10, 10, 10, 10, 10, "contestant1");
let contestant2 = new Contestant("Contestant 2", 10, 10, 10, 10, 10, "contestant2");
let contestant3 = new Contestant("Contestant 3", 10, 10, 10, 10, 10, "contestant3");
let contestant4 = new Contestant("Contestant 4", 10, 10, 10, 10, 10, "contestant4");
let contestant5 = new Contestant("Contestant 5", 10, 10, 10, 10, 10, "contestant5");
let contestant6 = new Contestant("Contestant 6", 10, 10, 10, 10, 10, "contestant6");
let contestant7 = new Contestant("Contestant 7", 10, 10, 10, 10, 10, "contestant7");
let contestant8 = new Contestant("Contestant 8", 10, 10, 10, 10, 10, "contestant8");
let contestant9 = new Contestant("Contestant 9", 10, 10, 10, 10, 10, "contestant9");
let contestant10 = new Contestant("Contestant 10", 10, 10, 10, 10, 10, "contestant10");

let contestants = [
    contestant1, contestant2, contestant3, contestant4, contestant5, contestant6, contestant7, contestant8, contestant9, contestant10
]