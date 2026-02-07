    
    
    window.addEventListener('scroll', function () {
        const header = document.querySelector('.header_wrap');

        if (window.scrollY > 0) {
            header.classList.add('is-scroll');
        } else {
            header.classList.remove('is-scroll');
        }
    });
    
    //타이핑
    $(function () {
        const $line = $(".line");
        const text = $line.text();
        let i = 0;
    
        $line.text("");
    
        const typing = setInterval(function () {
            $line.text(text.substring(0, i + 1));
            i++;
    
            if (i === text.length) {
                clearInterval(typing);
                $line.addClass("show-line");
            }
        }, 60);
    });
    //메뉴 js
    $(function () {
        $('.menu_btn button').on('click', function () {
            if (window.innerWidth <= 768) {
            $(this).toggleClass('is-open');  
            $('.h_menu').toggleClass('is-open');
            $('body').toggleClass('menu-open');
            }
        });
            
        $('.h_menu a').on('click', function () {
            if (window.innerWidth <= 768) {
            $('.h_menu').removeClass('is-open');
            $('.menu_btn button').removeClass('is-open');
            $('body').removeClass('menu-open');
            }
        });

    });
    //스크롤
    function scrollToAbout(){
        document.getElementById('about').scrollIntoView({
            behavior: 'smooth'
        });
    }
    function scrollToWork(){
        document.getElementById('work').scrollIntoView({
            behavior: 'smooth'
        });
    }
    function scrollToProject(){
        document.getElementById('project').scrollIntoView({
            behavior: 'smooth'
        });
    }
    function scrollToContact(){
        document.getElementById('contact').scrollIntoView({
            behavior: 'smooth'
        });
    }
    function scrollToSkill(){
        document.getElementById('skill').scrollIntoView({
            behavior:'smooth'
        });
    }
    (function () {
    const box = document.querySelector('.skill_content');
    const items = box.querySelectorAll('ul li');

    window.addEventListener('scroll', () => {
        const rect = box.getBoundingClientRect();
        const vh = window.innerHeight;

        const progress = Math.min(
        Math.max((vh - rect.top) / vh, 0),
        1
        );

        const visibleCount = Math.floor(progress * items.length);

        items.forEach((el, i) => {
        el.classList.toggle('is-show', i < visibleCount);
        });
    }, { passive: true });
    })();
    //슬라이더
    $(function () {
        $('.portfolio_slider').slick({
        centerMode: true,
        centerPadding: '40em',
        infinite: true,         
        slidesToShow: 1,
        dots: true,
        arrows: true,
        prevArrow: $('.por_prev'),
        nextArrow: $('.por_next'),
        autoplay: false,
        autoplaySpeed: 4000,
        responsive: [
            { breakpoint: 1920, settings: { centerMode: true, centerPadding: '30em' } },
            { breakpoint: 1500, settings: { centerMode: true, centerPadding: '280px' } },
            { breakpoint: 1200, settings: { centerMode: true, centerPadding: '200px' } },
            { breakpoint: 960,  settings: { centerMode: true, centerPadding: '160px' } },
            { breakpoint: 768,  settings: { centerMode: true, centerPadding: '100px' } },
            { breakpoint: 620,  settings: { centerMode: true, centerPadding: '60px' } },
            { breakpoint: 480,  settings: { centerMode: true, centerPadding: '20px', slidesToShow: 1 } },
            { breakpoint: 360,  settings: { centerMode: true, centerPadding: '0px',  slidesToShow: 1 } }
        ]
        });
    });
    