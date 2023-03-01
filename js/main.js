'use strict';

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
console.log(marketList);



/* do{
    const listItem= document.createElement('li');
    listItem.append(marketList[i]);
    products.append(listItem);
    i++
} while(i < x);

console.log(marketList);
