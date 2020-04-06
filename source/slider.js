$(document).ready(function() {
  $(".company__slider").slick({
    slidesToShow: 1,
    dots: true,
    centerMode: true,
    variableWidth: true,
    prevArrow: `<button class="slick-prev slick-arrow" aria-label="Next" type="button" style="">
    <svg width="48" height="88" viewBox="0 0 48 88" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.99939 1.99976L43.9994 43.9998L1.99939 85.9998" stroke="#D0D5D9" stroke-width="5"/>
    </svg></button>`,
    nextArrow: `<button class="slick-next slick-arrow" aria-label="Next" type="button" style="">
    <svg width="48" height="88" viewBox="0 0 48 88" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.99939 1.99976L43.9994 43.9998L1.99939 85.9998" stroke="#D0D5D9" stroke-width="5"/>
    </svg></button>`
  });

  $(".cargo__slider").slick({
    slidesToScroll: 4,
    slidesToShow: 4,
    dots: true,
    centerMode: false,
    variableWidth: true,
    focusOnSelect: true,
    nextArrow: $(".my-arrow-next"),
    prevArrow: $(".my-arrow-prev")
  });
});
