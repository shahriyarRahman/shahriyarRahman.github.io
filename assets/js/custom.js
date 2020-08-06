/*jslint browser: true*/
/*global $, console, window*/

$(document).ready(function () {
    'use strict';

    var win = $(window),
        navbar = $('.navbar'),
        scrollUp = $(".scroll-up");




    /*========== Start Navbar Auto Change  ==========*/
    win.on('scroll', function () {
        if (win.scrollTop() > 50) {
            navbar.addClass('nav-fixed').removeClass('fixed-top');
        } else {
            navbar.addClass('fixed-top').removeClass('nav-fixed');
        }
    });

    /*========== Start Scroll For Navigation Menu ==========*/
    $('.navbar-nav').on('click', 'a', function (e) {
        e.preventDefault();
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 82
        }, 1000);
    });

    /*========== Start Scroll For Link To Go Section  ==========*/
    $('.down').on('click', function (e) {
        e.preventDefault();
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 82
        }, 1000);
    });


    // Sync Navbar Links With Section
    $('body').scrollspy({
        target: '#navtoggler',
        offset: 82
    });
    //// COLLAPSED MENU CLOSE ON CLICK
    navbar.on('click', '.navbar-collapse', function (e) {
        if ($(e.target).is('a')) {
            $(this).collapse('hide');
        }
    });

    /*========== Start Counter To Js Statistics   ==========*/
    win.on('scroll.statistics', function () {
        var stat = $('.statistics');
        if ($(this).scrollTop() >= stat.offset().top - win.height() + 220) {
            $('.count').countTo();
            win.off('scroll.statistics');
        }
    });


    /*========== Start Portfolio Trigger Filterizr Js ==========*/
    $("#control li").on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    // The Filterizr
    $('#filtr-container').filterizr({
        animationDuration: 0.4
    });

    /*========== Start Magnigic Popup Js ==========*/
    $('.my-work').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });





    /*========== Start OWL Carousel Js testimonial   ==========*/
    $('.testimonial').owlCarousel({
        loop: true,
        items: 2,
        margin: 50,
        nav: true,
        navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            700: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });

    /*========== Start OWL Carousel Js sponsor   ==========*/
    $('.sponsor').owlCarousel({
        loop: true,
        margin: 30,
        smartSpeed: 1000,
        autoplay: 2000,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 3
            },
            1200: {
                items: 5
            }
        }
    });



    function animateProgressBar() {
        $('.skill-box .progress-line > span').each(function () {
            var percent = $(this).data('percent');
            $(this).css({
                width: percent + '%',
                transition: 'width 1.5s linear'
            });
        });
    }

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > $('.about').offset().top + 200) {
            animateProgressBar();
        }
    });
    if ($(window).scrollTop() > $('.about').offset().top + 200) {
        animateProgressBar();
    }





    /*========== Start Scroll Up    ==========*/
    // Show And Hide Buttom Back To Top
    win.on('scroll', function () {
        if ($(this).scrollTop() >= 600) {
            scrollUp.show(300);
        } else {
            scrollUp.hide(300);
        }
    });
    // Back To 0 Scroll Top body
    scrollUp.on('click', function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
    });



});