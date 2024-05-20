function odstranit() {
    var tlacidloVymazat = document.getElementById('tlacidloOdstranit');
    var obrazok = document.getElementById('mojObrazok');
    var nadpis = document.getElementsByTagName('h2')[0];
    var text = document.getElementsByTagName('p')[0];



    tlacidloVymazat.style.display = 'none';
    obrazok.style.display = 'none';

    nadpis.innerHTML = 'A je po plesni 🧹';
    text.innerHTML = 'Takto to vyzerá po odstánení plesne.';
}
