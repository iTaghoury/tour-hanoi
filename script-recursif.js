let n = parseInt(prompt("Avec combien de palets voulez-vous jouer ?"));

while(!(n > 0)) {
    n = parseInt(prompt("Avec combien de palets voulez-vous jouer ? (Entrez un nombre positif)"));
}

let nA = n;
let nB = 0;
let nC = 0;
let coups=0;

console.log(`Début du jeu : il y a ${nA} palet(s) sur la tour A, ${nB} palet(s) sur la tour B et ${nC} palet(s) sur la tour C`);

function hanoi(n, a, b, c) {  
    if(n>0) {
        hanoi(n-1, a, c, b);
        coups++;
        console.log( `Tour ${coups} : Palet ${n} de la ` + a + " vers " + c);
        move(a, c);
        hanoi(n-1, b, a, c);
    }
}

function move(p1, p2) {
  if(p1 === "Tour A") {
    nA--;
    if(p2 === "Tour B") {
      nB++;
    } else {
      nC++;
    }
  } else if(p1 === "Tour B") {
    nB--;
    if(p2 === "Tour A") {
      nA++;
    } else {
      nC++;
    }
  } else if(p1 === "Tour C") {
    nC--;
    if(p2 === "Tour B") {
      nB++;
    } else {
      nA++;
    }
  }
  console.log(`Il y a ${nA} palet(s) sur la tour A, ${nB} palet(s) sur la tour B et ${nC} palet(s) sur la tour C`);
}

hanoi(n, "Tour A", "Tour B", "Tour C");
