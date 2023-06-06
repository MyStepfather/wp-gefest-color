document.addEventListener("DOMContentLoaded", function() {


    function smoothScroll() {
        // выберите все ссылки на якоря на странице
        let links = document.querySelectorAll('a[href^="#"]');
    
        // обрабатываем каждую ссылку на якорь
        links.forEach(link => {
            link.addEventListener('click', event => {
                // отменяем стандартное поведение ссылки
                event.preventDefault();
    
                // получаем id якоря из атрибута href ссылки
                const id = link.getAttribute('href').slice(1);
    
                // находим элемент с нужным якорем на странице
                const target = document.getElementById(id);
     
                // проверяем, существует ли такой элемент
                if (target) {
                // вычисляем координаты элемента на странице
                    const top = target.getBoundingClientRect().top + window.pageYOffset;
    
                    // плавно перемещаемся к элементу
                    window.scrollTo({
                        top,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    
    
    
    
    
    // Моб меню
    
    function mobNav () {
        try {
            let burger = document.querySelector(".nav-burger");
            let burgerCross = document.querySelector(".burger-cross");
            let myNavbar = document.querySelector(".nav");
            let body = document.querySelector('body');
            let html = document.querySelector('html');
            let links = document.querySelectorAll('a[href^="#"]');
            console.log(burger);

    
            burger.addEventListener ('click', function() {
                myNavbar.classList.add("nav--active"); /* открытие меню */
                burgerCross.classList.remove('none');
                burger.classList.add('none');
                links.forEach(function (link) {
                    link.addEventListener('click' , function() {
                        myNavbar.classList.remove("nav--active");
                        body.classList.remove('overflow-y-hidden');
                        html.classList.remove('overflow-y-hidden');
                        burger.classList.remove('none');
                    })
                })
                if (myNavbar.classList.contains("nav--active")) {
                    body.classList.add('overflow-y-hidden');
                    html.classList.add('overflow-y-hidden');
                } else {
                    body.classList.remove('overflow-y-hidden');
                    html.classList.remove('overflow-y-hidden');
                }
            })
            burgerCross.addEventListener('click', function() {
                myNavbar.classList.remove('nav--active');
                burger.classList.remove('none');
                burgerCross.classList.add('none');
                if (!myNavbar.classList.contains("nav--active")) {
                    body.classList.remove('overflow-y-hidden');
                    html.classList.remove('overflow-y-hidden');
                }
            })
        } catch (error) {
            console.log(error)
        }
        
    };
    
    function secondSlider() {
        let slides = document.querySelectorAll('.second-slider__slide');
      
        slides.forEach(function (item) {
            item.onclick = function() {
                if (!item.classList.contains('second-slider__slide--active')) {
                    slides.forEach(function (slide) {
                        slide.classList.remove('second-slider__slide--active');
                    });
                item.classList.add('second-slider__slide--active');
                }
            };
        });
    }
    
    function topics () {
    // выбираем все элементы с классом "topic"
        let topics = document.querySelectorAll('.topic');
        // выбираем все кнопки с классом "button"
        let buttons = document.querySelectorAll('.topic__btn');
    
        // перебираем все элементы "topic" и добавляем на каждый обработчик события "click"
        topics.forEach(function(topic) {
            topic.addEventListener('click', function() {
                // добавляем класс "topic--active" только на текущий элемент
                topic.classList.add('topic--active');
    
                // перебираем все кнопки и устанавливаем для каждой атрибут "style", чтобы она не отображалась
                buttons.forEach(function(button) {
                    button.setAttribute('style', 'display: none;');
                });
    
                // находим кнопку, которая соответствует текущему топику
                let button = topic.querySelector('.topic__btn');
                if (button) {
                // устанавливаем для найденной кнопки атрибут "style", чтобы она отображалась
                    button.setAttribute('style', 'display: flex;');
                }
    
                // перебираем все элементы "topic" и удаляем класс "topic--active" у всех, кроме текущего
                topics.forEach(function(slide) {
                    if (slide !== topic) {
                        slide.classList.remove('topic--active');
                    }
                });
            });
        });
    }
    
    
    function circleReasons () {
        // Получаем все элементы prilol__pic и prilol__item
        const pics = document.querySelectorAll('.prikol__pic');
        const items = document.querySelectorAll('.prikol__item');
    
        // Первый элемент prilol__pic всегда отображается
        items[0].classList.add('prikol__item--active');
    
        // Функция для отображения соответствующего элемента prilol__item и скрытия остальных
        function showItem(index) {
            for (let i = 0; i < items.length; i++) { 
                if (i === index) {
                    items[i].classList.add('prikol__item--active');
                } else {
                    items[i].classList.remove('prikol__item--active');
                }
            }
        }
    
    // Обработчик события для наведения/клика на prilol__pic
        for (let i = 0; i < pics.length; i++) {
            if (window.innerWidth >= 767) { // для ширины экрана больше или равной 767px используем наведение
                pics[i].addEventListener('mouseover', () => {
                    showItem(i);
                    for (let j = 0; j < pics.length; j++) {
                        if (j !== i) {
                            pics[j].classList.remove('prikol__item--active');
                        }
                    }
                    pics[i].classList.add('prikol__item--active');
                });
            } else { // для ширины экрана меньше 767px используем клик
                pics[i].addEventListener('click', () => {
                    if (pics[i].classList.contains('prikol__item--active')) {
                        pics[i].classList.remove('prikol__item--active');
                        items[i].classList.remove('prikol__item--active');
                    } else {
                        showItem(i);
                        for (let j = 0; j < pics.length; j++) {
                            if (j !== i) {
                                pics[j].classList.remove('active');
                                items[j].classList.remove('active');
                            }
                        }
                        pics[i].classList.add('active');
                    }
                });
            }
        }
    }
    
    function services() {
        let items = document.querySelectorAll('.accordeon__item');
    
        items.forEach(item => {
            item.addEventListener('click', function() {
            // Удаляем классы активных элементов
                items.forEach(i => {
                    if (i !== item) {
                        if (i.querySelector('.accordeon__img')) {
                            i.classList.remove('accordeon__item--active');
                            i.querySelector('.accordeon__img').classList.remove('accordeon__img--active');
                            i.querySelector('.accordeon__descr').classList.remove('accordeon__descr--active');
                            i.style.color = "rgba(51, 51, 51, 0.4)";
                            // i.style.pointerEvents = "none";
                            i.querySelector('.accordeon__right-part').classList.remove('rotate');
                        }
                        else {
                            return;
                        }
                    }
                });
                
                // Добавляем классы активному элементу
                setTimeout(() => {
                    if(item.querySelector('.accordeon__img')) {
                        item.classList.add('accordeon__item--active');    
                        if (item.classList.contains('accordeon__item--active')) {
                            item.querySelector('.accordeon__img').classList.add('accordeon__img--active');
                            item.querySelector('.accordeon__descr').classList.add('accordeon__descr--active');
                            item.style.color = "#000";
                            // item.style.pointerEvents = "auto";
                            item.querySelector('.accordeon__right-part').classList.add('rotate');
                        }
                    }
                }, 300);
            });
        });
    }
    
    function navSticky() {
        // document.addEventListener("DOMContentLoaded", function() {
            let header = document.querySelector("header");
            let prevScrollpos = window.pageYOffset;
            let navbar = document.querySelector(".nav");
          
            function setHeaderPosition() {
                if (window.pageYOffset >= 0) {
        
                header.classList.add("sticky");
                } else if (navbar.classList.contains('nav--active')) {
                    header.classList.remove("sticky");
                } else {
                    header.classList.remove("sticky");
                }
            }
        
            setHeaderPosition();
          
            window.onscroll = function() {
                
                let currentScrollPos = window.pageYOffset;
                if (prevScrollpos > currentScrollPos || currentScrollPos === 0) {
                    header.classList.add("sticky");
                } else if (navbar.classList.contains('nav--active')) {
                    console.log('123')
                    header.classList.remove("sticky");
                } else {
                    header.classList.remove("sticky");
                }
                prevScrollpos = currentScrollPos;
            };
        // });
    }
    
    
    
    function upBtn() {
        const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                // scrollToTopBtn.style.display = "block";
                scrollToTopBtn.style.opacity = "1";
                // scrollToTopBtn.style.transition = "1s";
            } else {
                // scrollToTopBtn.style.display = "none";
                scrollToTopBtn.style.opacity = "0";
            }
        });
        
        scrollToTopBtn.addEventListener("click", () => {
            const scrollDuration = 300; // Продолжительность анимации скролла в миллисекундах
            const scrollHeight = window.scrollY;
            const scrollStep = Math.PI / (scrollDuration / 15);
            const cosParameter = scrollHeight / 2;
        
            let scrollCount = 0;
            let scrollMargin;
            let scrollInterval = setInterval(() => {
                if (window.scrollY != 0) {
                    scrollCount = scrollCount + 1;
                    scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
                    window.scrollTo(0, (scrollHeight - scrollMargin));
                } else {
                    clearInterval(scrollInterval);
                }
            }, 15);
        });    
    }
    
    function galleryThumbs() {
        let pics = document.querySelectorAll('.gallery-thumbs__pic');
        pics.forEach(pic => {
            pic.addEventListener('click', function() {
                pics.forEach(p => {
                    p.classList.remove('gallery-thumbs__pic--active');
                })
                pic.classList.add('gallery-thumbs__pic--active');
            });
        });
    }
    
    smoothScroll();
    navSticky();
    services();
    mobNav();
    secondSlider();
    circleReasons();
    upBtn();
    // topics();
    // galleryThumbs();
});