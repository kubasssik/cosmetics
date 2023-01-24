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
ScrollTopFunc()
