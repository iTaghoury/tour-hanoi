let n = parseInt(prompt("Avec combien de palets voulez-vous jouer ?"));

let nA = n;
let nB = 0;
let nC = 0;
let coups=0;
let coupsMin = Math.pow(2, n);

let p1 = Array(n);
let p2 = Array(n);
let p3 = Array(n);

for(let i = 1; i <= n; i++) {
  p1[i-1] = i;
  p2[i-1] = 0;
  p3[i-1] = 0;
}

console.log(`Début du jeu : il y a ${nA} palet(s) sur la tour A, ${nB} palet(s) sur la tour B et ${nC} palet(s) sur la tour C`);

function hanoi(n, a, b, c) {  
  while(coups < coupsMin && (!isEmpty(p1) || !isEmpty(p2))) {
    let sommet = n; 
    if(p1.includes(sommet)) {
      if(n % 2 === 0) {
        move(a, b);
        if(!isEmpty(p1) && p1[nA-1] > (p3[nC-1] || 0)) {
          move(a, c);
        } else if(!isEmpty(p3) && p3[nC-1] > (p1[nA-1] || 0)) {
          move(c, a);
        }
      } else {
        move(a, c);
        if(!isEmpty(p1) && p1[nA-1] > (p2[nB-1] || 0)) {
          move(a, b);
        } else if(!isEmpty(p2) && p2[nB-1] > (p1[nA-1] || 0)) {
          move(b, a);
        }
      }
    } else if(p2.includes(sommet)) {
      if(n % 2 === 0) {
        move(b, c);
        if(!isEmpty(p2) && p2[nB-1] > (p1[nA-1] || 0)) {
          move(b, a);
        } else if(!isEmpty(p1) && p1[nA-1] > (p2[nB-1] || 0)) {
          move(a, b);
        }
      } else {
        move(b, a);
        if(!isEmpty(p2) && p2[nB-1] > (p3[nC-1] || 0)) {
          move(b, c);
        } else if(!isEmpty(p3) && p3[nC-1] > (p2[nB-1] || 0)) {
          move(c, b);
        }
      }
    } else if(p3.includes(sommet)) {
      if(n % 2 === 0) {
        move(c, a);
        if(!isEmpty(p3) && p3[nC-1] > (p2[nB-1] || 0)) {
          move(c, b);
        } else if(!isEmpty(p2) && p2[nB-1] > (p3[nC-1] || 0)) {
          move(b, c);
        }
      } else {
        move(c, b);
        if(!isEmpty(p3) && p3[nC-1] > (p1[nA-1] || 0)) {
          move(c, a);
        } else if(!isEmpty(p1) && p1[nA-1] > (p3[nC-1] || 0)) {
          move(a, c);
        }
      }
    }
  }
}

function move(pDep, pArr) {
  coups++;
  if(pDep === "Tour A") {
    nA--;
    if(pArr === "Tour B") {
      p2[nB] = p1[nA];
      p1[nA] = 0;
      nB++;
    } else {
      p3[nC] = p1[nA];
      p1[nA] = 0;
      nC++;
    }
  } else if(pDep === "Tour B") {
    nB--;
    if(pArr === "Tour A") {
      p1[nA] = p2[nB];
      p2[nB] = 0;
      nA++;
    } else {
      p3[nC] = p2[nB];
      p2[nB] = 0;
      nC++;
    }
  } else if(pDep === "Tour C") {
    nC--;
    if(pArr === "Tour B") {
      p2[nB] = p3[nC];
      p3[nC] = 0;
      nB++;
    } else {
      p1[nA] = p3[nC];
      p3[nC] = 0;
      nA++;
    }
  }
  console.log( `Tour ${coups} : Mouvement de la ` + pDep + " vers la " + pArr);
  console.log(`Il y a ${nA} palet(s) sur la tour A, ${nB} palet(s) sur la tour B et ${nC} palet(s) sur la tour C`);
  console.log(`=============== ${p1} === ${p2} === ${p3} ================`);
}

function isEmpty(p) {
  for(let i = 0; i < p.length; i++) {
    if (p[i] !== 0) {
      return false;
    }
  }
  return true;
}

hanoi(n, "Tour A", "Tour B", "Tour C");
