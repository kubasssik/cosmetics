import { ScrollTopFunc,opacityButtonAccept,opacityButtonReject,addFrame } from './function.js';

const $wrapper = document.querySelector('.wrapper')
console.log($wrapper.children[0].children[1]);  
const $Header = $wrapper.children[0];
const $Nav = $Header.children[0].children[1];
const $Main = $wrapper.children[1];
const $Footer= $wrapper.children[2];
const $Slider = $Main.children[0].children[1];
const $catalog = $Main.children[0].children[1];
const $arrow = document.querySelectorAll('.arrow')


console.log($Header.children[0]);
$arrow.forEach( e => e.addEventListener('mouseover', addDropDownMenu))
$arrow.forEach( e => e.addEventListener('mouseout', removeDropDownMenu))



function addDropDownMenu() {
    let newMenu = document.createElement('div');
    newMenu.classList.add('drop__down_menu');
    this.append(newMenu)

    let menuText = ['Макияж','Для лица','Для волос','Парфюмерия','Для мужчин','Для детей',]  
    
const fragment = document.createDocumentFragment()
for (let i = 0; i < menuText.length; i++) {
    let p = document.createElement('p');
    p.classList.add('drop__menu')
    p.textContent = menuText[i]
    fragment.appendChild(p)
}
document.querySelector('.drop__down_menu').appendChild(fragment) 
}

function removeDropDownMenu() {
    document.querySelector('.drop__down_menu').remove();
   
}
//кнопка скролл вверх
ScrollTopFunc()

//Скролл header
window.addEventListener('scroll', (e)=>{
    //console.log(window.scrollY);
    if(window.scrollY >= 100){ 
        $Nav.classList.add('header__scroll')
        $Nav.children[0].children[0].style.display = 'block'
        $Nav.children[0].style.cssText= `
        grid-template-columns: repeat(7, auto) ;
        background:var(--color_1);  
        color:#fff
        `  
    }
    else{
        $Nav.classList.remove('header__scroll')
        $Nav.children[0].children[0].style.display = 'none'
        $Nav.children[0].style.cssText= `
        grid-template-columns: repeat(6, auto) ;
        background:none;  
        color:#000
        `  
    }
})

//Выпадающее меню



//SLIDER
addFrame($Slider.children[2])
//Текст слайдера
//H1 Заголовок
const $h1 = document.querySelectorAll('h2')
let sliderH1 = ['Макияж','Парфюмерия','Для мужчин','Шампунь',]
$h1.forEach( (e, i) => e.textContent = sliderH1[i]);
//Р Описание 
const $sliderPtext0 = document.querySelectorAll('.p__text_0')
let sliderPtextup0 = [
'Искусство оформления лица с помощью декоративной косметики, красок, теней, кремов, а также само такое оформлени',
'Распродажа на лучшие бренды от Гуси',
'Мужской парфюм имеет не меньшее значение, чем женский',
'Акцияб скидка 40%, только на лучший шампунь "Гуси',];
$sliderPtext0.forEach( (e, i) => e.textContent = sliderPtextup0[i]);
const $sliderPtext1 = document.querySelectorAll('.p__text_1')
let sliderPtextup1 = [
    'Лучшше предложение зимы',
    'Акция проходит в периодс с и до',
    'Большой выбор ароматов для мужчин',
    'Предложение ограничено',
]
$sliderPtext1.forEach( (e, i) => e.textContent = sliderPtextup1[i]);
//Кнопки слайдера
$Slider.addEventListener('mouseover', opacityButtonAccept)
$Slider.addEventListener('mouseout', opacityButtonReject)




const $frame = $Slider.children[2].children;
let shearWidth = $Slider.children[2].clientWidth;
//console.log($frame[0]); 

//Кнопка вправо
$Slider.children[1].addEventListener('click', btnRightSlider)
//кнопка влево
$Slider.children[0].addEventListener('click', btnLeftSlider)
//Постоянный цикл в право
setInterval(() => {
    btnRightSlider()
}, 3000);
//Функция вправо
function btnRightSlider() {
    $frame[3].style.right = `-${shearWidth}px`
    let copy = $frame[3];
    $frame[3].remove();
    $Slider.children[2].prepend(copy)
    $frame[0].style.right = '0'
}
//Функция влево
function btnLeftSlider() {
    $frame[0].style.left =`-${shearWidth}px`
    let copy = $frame[0];
    $frame[0].remove();
    $Slider.children[2].append(copy);
    $frame[3].style.left = '0'   
}

//Боковая панель
const $PAB = $wrapper.children;
let pab = [...$PAB]
console.log(pab);



let aPab = [$PAB[4],$PAB[5]];
let cPab = ['red','yellow',]

    $PAB[4].addEventListener('click', toggleClass);
 




function toggleClass() {
    this.classList.toggle('side_panel__active'); 
    
    
    

}
