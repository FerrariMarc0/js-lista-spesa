'use strict';

const marketList= [
    'vino',
    'prosecco',
    'lambrusco',
    'salatini',
    'mascarpone',
    'salsiccia',
    'pane',
    'pannolini per Rinaldo',
    'scottex'
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



/*do{
    const listItem= document.createElement('li');
    listItem.append(marketList[i]);
    products.append(listItem);
    i++
} while(i < x);

console.log(marketList);*/
