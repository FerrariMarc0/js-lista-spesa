'use strict';

/* let somma= 0;
for(let i = 1; i < 5; i++){
    console.log(i);
    let newNumber= parseInt(prompt("Inserisci il " + (i) + "° numero"));
    console.log(newNumber);
    somma += newNumber;
}
console.log(somma); */

let somma = 0;
let i = 1;
/* while(i <= 5){
    let newNumber= parseInt(prompt("Inserisci il " + (i) + "° numero"));
    somma += newNumber;
    i++
}
console.log(somma); */

do{
    let newNumber= parseInt(prompt("Inserisci il " + (i) + "° numero"));
    somma += newNumber;
    i++
} while(i <= 5);
console.log(somma);


/************************************************************ */

/* 'use strict';

const marketList= [
    'Vino',
    'Prosecco',
    'Lambrusco',
    'Salatini',
    'Mascarpone',
    'Salsiccia',
    'Pane',
    'Pannolini per Rinaldo',
    'Scottex'
];

marketList.push('pappa lattea', 'omogeneizzati');

const products= document.getElementById('list');
let i= 0;
let x= marketList.length;

while(i < x){
    
    const listItem= document.createElement('li');
    listItem.append(marketList[i]);
    products.append(listItem);
    i++
}
console.log(marketList); */



/* do{
    const listItem= document.createElement('li');
    listItem.append(marketList[i]);
    products.append(listItem);
    i++
} while(i < x);

console.log(marketList); */
