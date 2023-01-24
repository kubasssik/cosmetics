import {productCard } from '../product/productCard.js';
const $Main = document.querySelector('.main__promo');
const $Product = $Main.children[0];
const $Card = $Product.children[0];
const $Table = $Card.children[0]

const GRID__NUM = 10;

function creatTable() {
    const fragment = document.createDocumentFragment();
    //productCard.map((e)=> console.log(e))
    for (let i = 0; i < productCard.length; i++) {
        let newThead = document.createElement('thead')
        newThead.classList.add('new__thead')
        let newTr = document.createElement('tr');
        for (let cell = 0; cell < GRID__NUM ; cell++) {
            let newTd = document.createElement('td');
            newTd.classList.add('new__td')
            newTr.appendChild(newTd)
        }
        newThead.appendChild(newTr)
        fragment.appendChild(newThead);
    }
    $Table.appendChild(fragment)
}
creatTable()

function settingAddButton(typeInput,params, classList, valuesInput) {
 
    let settings = document.createElement('input');
    settings.type = typeInput;
    settings.value = valuesInput;
    settings.classList.add(classList);
  
params.append(settings)
}

let pn = 0;
let pnJs = -1;
let grid = document.querySelectorAll('.new__td');
for (let i = 0; i < grid.length; i++) {
    if(i % GRID__NUM  == 0) {
        pn++
        pnJs++
        grid[i].textContent = pn;  //Порядковый номер
    }
    if(i % GRID__NUM  == 1) {
        grid[i].textContent = productCard[pnJs].category.en;//Категория товара
    }
    if(i % GRID__NUM  == 2) {
        grid[i].textContent = `${productCard[pnJs].name} ${productCard[pnJs].brand} `;//Бренд
    }
    if(i % GRID__NUM  == 3) {
        grid[i].textContent = productCard[pnJs].id;//ID
    }
    if(i % GRID__NUM  == 4) {
        grid[i].textContent = productCard[pnJs].number;//Остаток
    }
    if(i % GRID__NUM  == 5) {
        grid[i].textContent = `${productCard[pnJs]['Selling price']},00`;//Остаток
    }
    if(i % GRID__NUM  == 6) {
        settingAddButton( 'checkbox', grid[i],'settings__promo_btn', productCard[pnJs].promotion.discount );
           
    }
    if(i % GRID__NUM  == 7) {
       // settingAddButton(grid[i],'settings__gift_btn')   
    }
    if(i % GRID__NUM  == 8) {
        //settingAddButton(grid[i])   
    }
    if(i % GRID__NUM  == 9) {
     
    }
    
    
}


