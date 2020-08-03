// La fonction ci-dessous permet de récupérer la "tooltip" qui correspond à notre input
function getTooltip(elements) {

    while (elements = elements.nextSibling) {
        if (elements.className === 'tooltip') {
            return elements;
        }
    }

    return false;

}

var minutes = 0;
var secondes = 0;
var timerID;
var stp = 0;



function test() {
    var text = document.getElementById('chrono');

    text.addEventListener('focus', function(e) {

    });
    text.addEventListener('keypress', function(e) {

    });
    text.addEventListener('keydown', function(e) {

    });

    text.addEventListener('blur', function(e) {
        var name = document.getElementById('chrono');
        var avert = document.getElementById('avert');
        var tooltipStyle = getTooltip(name).style;

        var t = /[a-z]/; //un regex si il contient une lettre alors ça ne vas pas 
        //alert(t.test(name.value));

        if (t.test(name.value) == false) {
            minutes = name.value;
            //name.className = 'correct';
            avert.innerHTML = 'le mots est correcte il contient assez de caractere';
            tooltipStyle.display = 'none'; //permet de gerer l'affichage du texte du span
        } else {
            name.className = 'incorrect';
            avert.innerHTML = 'le temps ne peut contenir des que des chiffre';
            tooltipStyle.display = 'inline-block';

        }

    });

}

function seconde() {


    var text = document.getElementById('seconde');

    text.addEventListener('focus', function(e) {

    });
    text.addEventListener('keypress', function(e) {

    });
    text.addEventListener('keydown', function(e) {

    });

    text.addEventListener('blur', function(e) {
        var name = document.getElementById('seconde');
        var avert = document.getElementById('avert_s');
        var tooltipStyle = getTooltip(name).style;

        var t = /[a-z]/; //un regex si il contient une lettre alors ça ne vas pas 
        //alert(t.test(name.value));

        if (t.test(name.value) == false) {
            secondes = name.value;
            // name.className = 'correct';
            avert.innerHTML = 'le mots est correcte il contient assez de caractere';
            tooltipStyle.display = 'none'; //permet de gerer l'affichage du texte du span
        } else {
            name.className = 'incorrect';
            avert.innerHTML = 'le temps ne peut contenir des que des chiffre';
            tooltipStyle.display = 'inline-block';

        }

    });

}


function decremente() {
    var sec = document.getElementById('seconde');
    var min = document.getElementById('chrono');
    minutes = parseInt(minutes); //ce sont a presant des nombre entier et non des caractere
    secondes = parseInt(secondes);
    if (secondes >= 0) {
        secondes = secondes - 1;
        sec.value = secondes;
    }
    console.log(minutes);
    if (secondes == -1 && minutes > 0) {
        minutes = minutes - 1;
        min.value = minutes;
        sec.value = secondes = 59;
    }

    if (secondes == 0 && minutes == 0) {
        stp = 0;

        var request = navigator.mozAlarms.add(Date(), 'ignoreTimezone');
        request.onsuccess = function() {
            alert("DONE !!");
        };
        return;
    }
    timerID = setTimeout(decremente, 1000);

}



function lancer() { //il gere le bouton de lancer de chrono


    var text = document.getElementById('lancer_s');

    text.addEventListener('keydown', function(e) { //lorsque l'on clique sur le bouton lancer chrono 
        //si je rentre la c'est que l'on vient de cliquer sur le bouton 
        if (e.key == "Enter") {
            //on appelle la fonction qui va decrementer lees secondes et les minutes 
            if (stp == 0) {
                // var date=new Date(  /* year*/  ,/* month*/  [,/* day*/[,/* hours*/[,minutes[,secondes[,/* millisecondes*/]]]]]  );
                timerID = setTimeout(decremente, 1000);
                stp = 1;
            }
        }

    });
    text.addEventListener('keypress', function(e) {

    });
    text.addEventListener('keydown', function(e) {

    });

    text.addEventListener('blur', function(e) {




    });

}

function reset() { //il gere le bouton de lancer de chrono


    var text = document.getElementById('reset');

    text.addEventListener('keydown', function(e) { //lorsque l'on clique sur le bouton lancer chrono 
        //si je rentre la c'est que l'on vient de cliquer sur le bouton 
        if (e.key == "Enter") {
            stp = 0;
            minutes = 0;
            secondes = 0;
            var sec = document.getElementById('seconde');
            var min = document.getElementById('chrono');
            clearTimeout(timerID);
            sec.value = secondes;
            min.value = minutes;

        }
    });
    text.addEventListener('keypress', function(e) {

    });
    text.addEventListener('keydown', function(e) {

    });

    text.addEventListener('blur', function(e) {




    });

}

function stop() { //il gere le bouton de lancer de chrono


    var text = document.getElementById('stop');

    text.addEventListener('keydown', function(e) { //lorsque l'on clique sur le bouton lancer chrono 
        if (e.key == "Enter") {
            stp = 0;
            clearTimeout(timerID);
        }
    });
    text.addEventListener('keypress', function(e) {

    });
    text.addEventListener('keydown', function(e) {

    });

    text.addEventListener('blur', function(e) {




    });

}

function Exi() { //il gere le bouton de lancer de chrono


    var text = document.getElementById('exit');

    text.addEventListener('keydown', function(e) { //lorsque l'on clique sur le bouton lancer chrono 
        if (e.key == "Enter") {
            window.location.assign("index.html");
        }
    });
    text.addEventListener('keypress', function(e) {

    });
    text.addEventListener('keydown', function(e) {

    });

    text.addEventListener('blur', function(e) {

    });

}

function nav(move) {
    const currentIndex = document.activeElement.tabIndex;
    const next = currentIndex + move;
    const items = document.querySelectorAll('.items');
    console.log(items);
    console.log(currentIndex);
    console.log(next);
    console.log(document.activeElement.type);
    const targetElement = items[next];
    targetElement.focus();
}

function handleKeydown(e) {
    switch (e.key) {
        case 'ArrowUp':
            if (document.activeElement.type == "number") {
                var min = document.getElementById('chrono');
                e.preventDefault();
            }
            nav(-1);
            break;
        case 'ArrowDown':
            if (document.activeElement.type == "number") {
                var sec = document.getElementById('seconde');
                e.preventDefault();
            }

            nav(1);
            break;
        case 'ArrowRight':
            if (document.activeElement.type == "submit")
                nav(1);
            break;
        case 'ArrowLeft':
            if (document.activeElement.type == "submit")
                nav(-1);
            break;
    }
}




function main() {
    minutes = 0;
    secondes = 0;
    var sec = document.getElementById('seconde');
    var min = document.getElementById('chrono');
    sec.value = secondes;
    min.value = minutes;
    document.activeElement.addEventListener('keydown', handleKeydown);
    document.getElementById('chrono').focus();
    test();
    seconde();
    lancer(); //lorsqu'on appuie sur le bouton lancer le chrono 
    reset();
    stop();
    Exi();

}
main()