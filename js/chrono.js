// La fonction ci-dessous permet de récupérer la "tooltip" qui correspond à notre input
var minutes = 0;
var secondes = 0;
var timerID;
var stp = 0;
var tes = 0;




function incremente() {
    var sec = document.getElementById('seconde');
    var min = document.getElementById('chrono');
    minutes = parseInt(minutes); //ce sont a presant des nombre entier et non des caractere
    secondes = parseInt(secondes);
    if (secondes <= 59) { //tant qu'on est inferieure a 60 alors alors o n incremente les secondes 
        secondes = secondes + 1;
        sec.value = secondes;
    }
    console.log(minutes);
    if (secondes == 60) {
        minutes = minutes + 1;
        min.value = minutes;
        sec.value = secondes = 0;
    }

    timerID = setTimeout(incremente, 1000);

}

function lancer() { //il gere le bouton de lancer de chrono


    var text = document.getElementById('lancer_s');

    text.addEventListener('keydown', function(e) { //lorsque l'on clique sur le bouton lancer chrono 
        //si je rentre la c'est que l'on vient de cliquer sur le bouton 
        if (e.key == "Enter") {
            //on appelle la fonction qui va decrementer lees secondes et les minutes 
            if (tes == 0) {
                var sec = document.getElementById('seconde');
                var min = document.getElementById('chrono');
                sec.value = 0;
                min.value = 0;
                tes = 1;
            }
            if (stp == 0) {

                timerID = setTimeout(incremente, 1000);
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
            tes = 0;
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
    console.log(document.activeElement);
    const targetElement = items[next];
    targetElement.focus();
}

function handleKeydown(e) {
    switch (e.key) {
        case 'ArrowUp':
            nav(-1);
            break;
        case 'ArrowDown':
            nav(1);
            break;
        case 'ArrowRight':
            nav(1);
            break;
        case 'ArrowLeft':
            nav(-1);
            break;
    }
}




function main() {
    document.activeElement.addEventListener('keydown', handleKeydown);
    document.getElementById('lancer_s').focus();
    lancer(); //lorsqu'on appuie sur le bouton lancer le chrono 
    reset();
    stop();
    Exi();
}
main();