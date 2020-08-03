// DOMContentLoaded is fired once the document has been loaded and parsed,
// but without waiting for other external resources to load (css/images/etc)
// That makes the app more responsive and perceived as faster.
// https://developer.mozilla.org/Web/Reference/Events/DOMContentLoaded
function c_a_b() {

    var text = document.getElementById('compte_a_rebourd');


    text.addEventListener('keydown', function(e) { //lorsque l'on clique sur le bouton lancer chrono 
        //si je rentre la c'est que l'on vient de cliquer sur le bouton 
        if (e.key == "Enter") {
            window.location.assign("countdown.html");
        }

    });

}


function chrono() {
    var text = document.getElementById('chrono');

    text.addEventListener('keydown', function(e) { //lorsque l'on clique sur le bouton lancer chrono 
        if (e.key == "Enter") {
            //si je rentre la c'est que l'on vient de cliquer sur le bouton 
            window.location.assign("chrono.html");
        }
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
    document.getElementById('chrono').focus();
    c_a_b();
    chrono();

}
main();