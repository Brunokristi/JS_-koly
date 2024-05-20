function zmenStavZiarovky() {
    var obrazok = document.getElementById('mojObrazok');
    if (obrazok.src.includes('ziarovka_vypnuta.jpg')) {
        obrazok.src = 'ziarovka_zapnuta.jpg';
    } else {
        obrazok.src = 'ziarovka_vypnuta.jpg';
    }
}

function odstranZiarovku() {
    var potvrdenie = confirm('Naozaj chcete odstrániť žiarovku?');
    var tlacidloPrepnut = document.getElementById('tlacidloPrepnut');
    var tlacidloVymazat = document.getElementById('tlacidloOdstranit');
    var tlacidloPridat = document.getElementById('tlacidloPridat');
    var obrazok = document.getElementById('mojObrazok');

    if (potvrdenie === true) {
        obrazok.style.display = 'none';
    }
    tlacidloVymazat.style.display = 'none';
    tlacidloPrepnut.style.display = 'none';
    tlacidloPridat.style.display = 'inline';
}

function pridajZiarovku() {
    var tlacidloVymazat = document.getElementById('tlacidloOdstranit');
    var tlacidloPridat = document.getElementById('tlacidloPridat');
    var tlacidloPrepnut = document.getElementById('tlacidloPrepnut');
    var obrazok = document.getElementById('mojObrazok');
    obrazok.style.display = 'inline';
    tlacidloPrepnut.style.display = 'inline';
    tlacidloVymazat.style.display = 'inline';
    tlacidloPridat.style.display = 'none';
}