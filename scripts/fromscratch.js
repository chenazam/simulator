class Contestant {
    constructor(name, stat1, stat2, stat3, stat4, stat5) {
        this.name = name;
        this.stat1 = stat1;
        this.stat2 = stat2;
        this.stat3 = stat3;
        this.stat4 = stat4;
        this.stat5 = stat5;
    }
}

function randomNumber(min, max) {
   let randomContestantNumber = min + Math.floor(Math.random() * max);
   return randomContestantNumber;
}

let currCast = [];

let froyGutierrez = new Contestant("Froy Gutierrez", 10, 10, 10, 10, 10)
let hunterParrish = new Contestant("Hunter Parrish", 10, 10, 10, 10, 10)
let nicoGreetham = new Contestant("Nico Greetham", 10, 10, 10, 10, 10)
let nolanFunk = new Contestant("Nolan Funk", 10, 10, 10, 10, 10)
let zanePhillips = new Contestant("Zane Phillips", 10, 10, 10, 10, 10)

let contestants = [
    froyGutierrez, hunterParrish, nicoGreetham, nolanFunk, zanePhillips
]
let uncasted = contestants.map(uncast);
function uncast(contestant) {
    return contestant;
}

contestantLimit = 4;

function doSomething() {
    if (currCast.length >= contestantLimit) {
        document.getElementById("castfull").innerHTML = "<b>Cast is full!</b>"
        console.log("Cast is full!");
    } else { 
        let randomContestant = uncasted[randomNumber(0, uncasted.length)];
        currCast.push(randomContestant);
        contestantIndex = uncasted.indexOf(randomContestant);
        uncasted.splice(contestantIndex, 1);

        document.getElementById("castlist").innerHTML += `<li>${randomContestant.name}</li>`;
        document.getElementById("uncastedlist").innerHTML = "";
        uncasted.forEach(value => {
            document.getElementById("uncastedlist").innerHTML += `<li>${value.name}</li>`;
        })
//        document.getElementById("uncastedlist").innerHTML += uncasted.forEach(value => { `<li>${value.name}</li>`; });
    }
    
    console.log("Available cast:" + uncasted.map(availableCast));

    function availableCast(contestant) {
        return (" " + contestant.name);
    }
}