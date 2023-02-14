let n = parseInt(prompt("Avec combien de palets voulez-vous jouer ?"));

while(!(n > 0)) {
    n = parseInt(prompt("Avec combien de palets voulez-vous jouer ? (Entrez un nombre positif)"));
}

let coups=0;

function hanoi(n, a, b, c) {  
    if(n>0) {
        hanoi(n-1, a, c, b);
        coups++;
        console.log( `Tour ${coups} : Palet ${n} de la ` + a + " vers " + c);
        hanoi(n-1, b, a, c);
    }
}

hanoi(n, "Tour A", "Tour B", "Tour C");
