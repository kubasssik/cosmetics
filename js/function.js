//кнопка скролл вверх
function ScrollTopFunc() {
    function trackScroll() {
        var scrolled = window.pageYOffset;
        var coords = document.documentElement.clientHeight;
//скрывает блок 
        if (scrolled > coords) {
            goTopBtn.style.display = 'block';
        }
        //показывает блок
        if (scrolled < coords) {
            goTopBtn.style.display = 'none';
        }
    }

    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -80);
            setTimeout(backToTop,  10 );
        }
    }

    var goTopBtn = document.querySelector('.back_to_top');

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
}

//SLIDER
function addFrame(params) {
    const fragment = document.createDocumentFragment()

for( let i = 0; i< 4; i++){
    let newFrame = document.createElement('div');
    newFrame.classList.add(`frame__${i}`, 'frame')
    let textBlock = document.createElement('div');
    textBlock.classList.add(`slider__text_${i}`, 'slider__text');
    let h2_text = document.createElement('h2');
    
    const p_text = document.createDocumentFragment()
    for (let i = 0; i < 2; i++) {
         let p = document.createElement('p'); 
         p.classList.add(`p__text_${i}`,'p__text')
         p_text.appendChild(p)  
    }
    textBlock.appendChild(h2_text)
    textBlock.appendChild(p_text)
    newFrame.appendChild(textBlock)
   fragment.appendChild(newFrame);
}


params.appendChild(fragment)
}
//Кнопки слайдер opacity
function opacityButtonAccept() {
    for (let i = 0; i < this.children.length; i++) {
        this.children[i].classList.add('slider__btn_style__opacity')
    }
}
function opacityButtonReject() {
    for (let i = 0; i < this.children.length; i++) {
        this.children[i].classList.remove('slider__btn_style__opacity')
    }
}

 export {ScrollTopFunc, opacityButtonAccept,opacityButtonReject, addFrame}