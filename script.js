const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});

function checkTenses() {
    let answer1 = document.getElementById("tense1").value.toLowerCase();
    let answer2 = document.getElementById("tense2").value.toLowerCase();
    let answer3 = document.getElementById("tense3").value.toLowerCase();

    let results = "";
    if (answer1 === "go") {
        results += "السؤال 1: صحيح! ";
    } else {
        results += "السؤال 1: خطأ. الإجابة الصحيحة هي 'go'. ";
    }

    if (answer2 === "watched") {
        results += "السؤال 2: صحيح! ";
    } else {
        results += "السؤال 2: خطأ. الإجابة الصحيحة هي 'watched'. ";
    }

    if (answer3 === "will go") {
        results += "السؤال 3: صحيح! ";
    } else {
        results += "السؤال 3: خطأ. الإجابة الصحيحة هي 'will go'. ";
    }

    document.getElementById("tense-results").textContent = results;
}

function checkAux() {
    let answer1 = document.getElementById("aux1").value.toLowerCase();
    let answer2 = document.getElementById("aux2").value.toLowerCase();
    let answer3 = document.getElementById("aux3").value.toLowerCase();

    let results = "";
    if (answer1 === "am") {
        results += "السؤال 1: صحيح! ";
    } else {
        results += "السؤال 1: خطأ. الإجابة الصحيحة هي 'am'. ";
    }

    if (answer2 === "has") {
        results += "السؤال 2: صحيح! ";
    } else {
        results += "السؤال 2: خطأ. الإجابة الصحيحة هي 'has'. ";
    }

    if (answer3 === "do") {
        results += "السؤال 3: صحيح! ";
    } else {
        results += "السؤال 3: خطأ. الإجابة الصحيحة هي 'do'. ";
    }

    document.getElementById("aux-results").textContent = results;
}