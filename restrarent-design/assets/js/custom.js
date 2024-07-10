
        var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    effect: 'fade',
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination"
    },
    loop: true,
    autoplay: {
        delay: 2000,
     },
    speed: 3000
});

   