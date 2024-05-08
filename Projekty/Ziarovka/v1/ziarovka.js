function zmenStavZiarovky() {
    var obrazok = document.getElementById('mojObrazok');
    if (obrazok.src.includes('ziarovka_vypnuta.jpg')) {
        obrazok.src = 'ziarovka_zapnuta.jpg';
    } else {
        obrazok.src = 'ziarovka_vypnuta.jpg';
    }
}