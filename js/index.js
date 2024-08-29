$(function () {
    $('.nav>li').mouseenter(function () {
        $('.sub, .sub_bg').stop().slideDown();
    });

    $('.nav>li').mouseleave(function () {
        $('.sub, .sub_bg').stop().slideUp();
    });
});

$(function () {
    var swiper = new Swiper('.gallery .gallery_inner ', {
        slidesPerView: 4,//보여지는 갤러리 수
        spaceBetween: 30,//갤러리 사이 간격
        speed: 1500,//버튼을 슬라이드가 넘어가는 시간
        autoplay: {
            delay: 2500,//자동으로 넘어가기 전 머무르는 시간
            disableOnInteraction: false,
        },
        loop: true,//슬라이드 무한반복
        navigation: {//화살표 버튼
            nextEl: '.gallery .swiper-button-next',
            prevEl: '.gallery .swiper-button-prev',
        },
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
    });
});

$(function () {
    var swiper = new Swiper('.flowslide_inner ', {
        slidesPerView: 1,//보여지는 갤러리 수
        spaceBetween: 30,//갤러리 사이 간격
        speed: 16500,//버튼을 슬라이드가 넘어가는 시간
        autoplay: {
            delay: 0,//자동으로 넘어가기 전 머무르는 시간
            disableOnInteraction: false,
        },
        loop: true,//슬라이드 무한반복
    });

    $('.flowslide .swiper-slide').on('mouseover', function () {
        swiper.autoplay.stop();
    });
    $('.flowslide .swiper-slide').on('mouseout', function () {
        swiper.autoplay.start();
    });
});

// IntersectionObserver 를 등록한다.
const io2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // 관찰 대상이 viewport 안에 들어온 경우 'on2' 클래스를 추가
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('on2');
        }
        // 그 외의 경우 'on2' 클래스 제거
        else {
            entry.target.classList.remove('on2');
        }
    });
});

const boxElList2 = document.querySelectorAll('.highlight2');
boxElList2.forEach((el) => {
    io2.observe(el);
});

AOS.init({
    duration: 1200 //aos 나타나는 속도
});

$(function () {
    $('.itemlink1').click(function () {
        $('.pop1').show(); //.fadeIn();
    });

    $('.itemlink2').click(function () {
        $('.pop2').show(); //.fadeIn();
    });

    $('.itemlink3').click(function () {
        $('.pop3').show(); //.fadeIn();
    });

    $('.itemlink4').click(function () {
        $('.pop4').show(); //.fadeIn();
    });

    $('.itemlink5').click(function () {
        $('.pop5').show(); //.fadeIn();
    });


    $('.itemlink6').click(function () {
        $('.pop6').show(); //.fadeIn();
    });


    $('.itemlink7').click(function () {
        $('.pop7').show(); //.fadeIn();
    });


    $('.itemlink8').click(function () {
        $('.pop8').show(); //.fadeIn();
    });



    $('.popup_con a').click(function () {
        $('.popup_con').hide(); //.fadeOut();
    });
});



$(function () {
    $(".q_a li").click(function () {
        $(this).children("div").slideToggle()
        $(this).siblings().children("div").slideUp();
        $(this).toggleClass("on").siblings().removeClass("on")
    });
});
