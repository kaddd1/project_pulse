$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:false,
        items: 1,
        nav: true,
        dots: false,
        navText: ['<img src="img/prevArrow.png">', '<img src="img/nextArrow.png">'],
        responsive:{
            0:{
                nav:false,
            },
            750:{
                nav: true,
            },

            1000:{
                nav: true
            },
        }
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('fast');
    });

    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('fast');
    });

    $('.button_mini').on('click', function() {
        $('.overlay, #order').fadeIn('fast');  
    })

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__text').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('fast');  
        });
    });

    //validate:3

    function validateForm(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 6
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символов!")
                },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                    required: "Пожалуйста, введите свою почту",
                    email: "Неправильно введен адрес почты"
                }
            }
        });
    };
    
    validateForm('.order-form');
    validateForm('.consultation-form');
    validateForm('.consultate-form');

    $("input[name=phone]").inputmask({
        mask: "(999) 999-99-99",
        showMaskOnHover: false
    });
    
    $('form').submit(function(e) {
        e.preventDefault();

        if (!$(this).valid()) {
            return;
        }

        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');
            $('form').trigger('reset')
        });
        return false;
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.scroll-up').fadeIn();
        } else {
            $('.scroll-up').fadeOut();
        }
    });

    $('a[href^="#up"]').click(function() {
        $('html, body').animate({
            scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
        }, 500);
        return false;
    });

    //wow plugin
    new WOW().init();
});
