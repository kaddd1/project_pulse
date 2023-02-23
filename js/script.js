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

    // $('.catalog-item__link').each(function(i) {
    //     $(this).on('click', function(e) {
    //         e.preventDefault();
            // $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active')
            // $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
    //     })
    // })

    // $('.catalog-item__back').each(function(i) {
    //     $(this).on('click', function(e) {
    //         e.preventDefault();
    //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active')
    //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
    //     })
    // })

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
});
