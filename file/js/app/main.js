//! ----- MOBILE MENU ----- //!
var menuLinks = document.querySelectorAll(".menuLink");
var navigationCheckbox = document.querySelector(".nav-mobile__checkbox");
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}
menuLinks.forEach(
    function (menuLink) {
        menuLink.addEventListener("click", function () {
            document.querySelector(".nav-mobile__nav").style.cssText = "transform: translateX(-50%); visibility: hidden; opacity: 0;"

            document.querySelector(".nav-mobile__background").style.cssText = "transform: scale(0);"

            // document.querySelector("body").style.cssText = "overflow-y: inherit;"

            document.querySelector(".nav-mobile__checkbox").checked = false;
        })

        navigationCheckbox.addEventListener("click", function (e) {
            document.querySelector(".nav-mobile__nav").style.cssText = "transform: translateX(-50%); visibility: hiden; opacity: 0;"

            document.querySelector(".nav-mobile__background").style.cssText = "transform: scale(0);"

            // document.querySelector("body").style.cssText = "overflow-y: inherit;"

            var target = e.target;

            if (document.querySelector(".nav-mobile__checkbox").checked) {

                document.querySelector(".nav-mobile__nav").style.cssText = "transform: translateX(0); visibility: initial; opacity: 1;"

                document.querySelector(".nav-mobile__background").style.cssText = "transform: scale(100);"

                // document.querySelector("body").style.cssText = "overflow-y: hidden;"
            }
        })
    }
)
//! ----- MOBILE MENU ----- //!



//! ----- SCROLL ANIMATION ----- //
// function smootScroll(target, duration) {
//     var target = document.querySelector(target);
//     var targetPsition = target.getBoundingClientRect().top;
//     var startPosition = window.pageYOffset;
//     var distance = targetPsition - startPosition;
//     var startTime = null;

//     function animation(currentTime) {
//         if (startTime === null) startTime = currentTime;
//         var timeElapsed = currentTime - startTime;
//         var run = easeOutCubic(timeElapsed, startPosition, distance, duration);
//         window.scrollTo(0, run);
//         if (timeElapsed < duration) requestAnimationFrame(animation);
//     }


//     function easeOutCubic(t, b, c, d) {
//         t /= d;
//         t--;
//         return c * (t * t * t + 1) + b;
//     };

//     requestAnimationFrame(animation);
// }

// var sessionLink = document.querySelector('#sessions-link');
// var overviewLink = document.querySelector('#overview-link');
// var scheduleLink = document.querySelector('#schedule-link');
// var teaserLink = document.querySelector('#teaser-link');
// var upcomingEventsLink = document.querySelector("#upcoming-link");


// sessionLink.addEventListener('click', function () {
//     smootScroll('#time-by-city', 1000);
// });

// overviewLink.addEventListener('click', function () {
//     smootScroll('#webinar-info', 1000);
// });

// scheduleLink.addEventListener('click', function () {
//     smootScroll('#schedule', 1000);
// });

// teaserLink.addEventListener('click', function () {
//     smootScroll('#video', 1000);
// });

// upcomingEventsLink.addEventListener('click', function () {
//     smootScroll('#upcoming-events', 1000);
// });
//! ----- SCROLL ANIMATION ----- //


// window.addEventListener('scroll', scrollFunction);

// function scrollFunction() {
//     if (document.body.scrollBottom > 100 || document.documentElement.scrollBottom > 100) {
//         document.querySelector('#header').classList.add('p-fixed');
//         console.log('fixed')
//     } else {
//         // document.getElementsByClassName("header").classList.remove('p-fixed');
//     }
// }

//! ----- HEADER POSITION FIXED ----- //!

if (window.matchMedia("(min-width:991px)")) {
    var prevScrollpos = window.pageYOffset;
    let headerLink = document.querySelectorAll('.nav-desktop__list__link');

    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        // document.addEventListener("click", menuClick);

        // function menuClick() {
        //     headerLink.forEach(element => {
        //         element.addEventListener('click', e => {
        //             console.log("tıklandı")
        //             document.getElementById("header").style.top = "-100px";
        //         });
        //     });
        // }


        if (prevScrollpos > currentScrollPos) {
            document.getElementById("header").style.top = "0";
        } else {
            document.getElementById("header").style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;
    }

}


//! ----- HEADER POSITION FIXED ----- //!

//! ----- BANNER-INFO SHOW/HIDE ----- //!
let btnBanner1 = document.querySelector('#banner_btn1');
let btnBanner2 = document.querySelector('#banner_btn2');
let btnBanner3 = document.querySelector('#banner_btn3');

btnBanner1.addEventListener('click', function () {
    // Button session class

    banner_btn3.classList.remove('banner__date-btn--active');
    banner_btn2.classList.remove('banner__date-btn--active');
    banner_btn1.classList.add('banner__date-btn--active');

    // Table scheuld class
    document.querySelector('#date3-info').classList.remove('show');
    document.querySelector('#date3-info').classList.add('schedule__table-hide');

    document.querySelector('#date2-info').classList.remove('show');
    document.querySelector('#date2-info').classList.add('schedule__table-hide');

    document.querySelector('#date1-info').classList.remove('schedule__table-hide');
    document.querySelector('#date1-info').classList.add('show');
});

btnBanner2.addEventListener('click', function () {
    // Button session class

    banner_btn3.classList.remove('banner__date-btn--active');
    banner_btn1.classList.remove('banner__date-btn--active');
    banner_btn2.classList.add('banner__date-btn--active');

    // Table scheuld class
    document.querySelector('#date3-info').classList.remove('show');
    document.querySelector('#date3-info').classList.add('schedule__table-hide');

    document.querySelector('#date1-info').classList.remove('show');
    document.querySelector('#date1-info').classList.add('schedule__table-hide');

    document.querySelector('#date2-info').classList.remove('schedule__table-hide');
    document.querySelector('#date2-info').classList.add('show');
});

btnBanner3.addEventListener('click', function () {
    // Button session class

    banner_btn1.classList.remove('banner__date-btn--active');
    banner_btn2.classList.remove('banner__date-btn--active');
    banner_btn3.classList.add('banner__date-btn--active');

    // Table scheuld class
    document.querySelector('#date1-info').classList.remove('show');
    document.querySelector('#date1-info').classList.add('schedule__table-hide');

    document.querySelector('#date2-info').classList.remove('show');
    document.querySelector('#date2-info').classList.add('schedule__table-hide');

    document.querySelector('#date3-info').classList.remove('schedule__table-hide');
    document.querySelector('#date3-info').classList.add('show');
});

//! ----- BANNER-INFO SHOW/HIDE ----- //!


//! ----- TABLE SHOW/HIDE ----- //!
let btnSession1 = document.querySelector('#btn-session-1');
let btnSession2 = document.querySelector('#btn-session-2');
let btnSession3 = document.querySelector('#btn-session-3');

btnSession1.addEventListener('click', function () {
    // Button session class

    btnSession3.classList.remove('btn-speaker-date--active');
    btnSession2.classList.remove('btn-speaker-date--active');
    btnSession1.classList.add('btn-speaker-date--active');

    // Table scheuld class
    document.querySelector('#schedule-table-3').classList.remove('show');
    document.querySelector('#schedule-table-3').classList.add('schedule__table-hide');

    document.querySelector('#schedule-table-2').classList.remove('show');
    document.querySelector('#schedule-table-2').classList.add('schedule__table-hide');

    document.querySelector('#schedule-table-1').classList.remove('schedule__table-hide');
    document.querySelector('#schedule-table-1').classList.add('show');
});

btnSession2.addEventListener('click', function () {
    // Button session class
    btnSession3.classList.remove('btn-speaker-date--active');
    btnSession1.classList.remove('btn-speaker-date--active');
    btnSession2.classList.add('btn-speaker-date--active');

    // Table scheuld class
    document.querySelector('#schedule-table-3').classList.remove('show');
    document.querySelector('#schedule-table-3').classList.add('schedule__table-hide');

    document.querySelector('#schedule-table-1').classList.remove('show');
    document.querySelector('#schedule-table-1').classList.add('schedule__table-hide');

    document.querySelector('#schedule-table-2').classList.remove('schedule__table-hide');
    document.querySelector('#schedule-table-2').classList.add('show');
});

btnSession3.addEventListener('click', function () {
    // Button session class
    btnSession2.classList.remove('btn-speaker-date--active');
    btnSession1.classList.remove('btn-speaker-date--active');
    btnSession3.classList.add('btn-speaker-date--active');

    // Table scheuld class
    document.querySelector('#schedule-table-2').classList.remove('show');
    document.querySelector('#schedule-table-2').classList.add('schedule__table-hide');

    document.querySelector('#schedule-table-1').classList.remove('show');
    document.querySelector('#schedule-table-1').classList.add('schedule__table-hide');

    document.querySelector('#schedule-table-3').classList.remove('schedule__table-hide');
    document.querySelector('#schedule-table-3').classList.add('show');
});


//! ----- TABLE SHOW/HIDE ----- //!

//! ----- SPEAKERS SHOW/HIDE ----- //!
let btnSpeakersList1 = document.querySelector('#btn-speakers-list-1');
let btnSpeakersList2 = document.querySelector('#btn-speakers-list-2');
let btnSpeakersList3 = document.querySelector('#btn-speakers-list-3');
let speakersGroup1 = document.querySelector('#speakers-group-1');
let speakersGroup2 = document.querySelector('#speakers-group-2');
let speakersGroup3 = document.querySelector('#speakers-group-3');

btnSpeakersList1.addEventListener('click', function () {
    // Button class
    btnSpeakersList3.classList.add('bg-white', 'color-navy-blue', 'border-btn-navyblue');
    btnSpeakersList3.classList.remove('btn-speaker-date--active');

    btnSpeakersList2.classList.add('bg-white', 'color-navy-blue', 'border-btn-navyblue');
    btnSpeakersList2.classList.remove('btn-speaker-date--active');

    btnSpeakersList1.classList.remove('bg-white', 'color-navy-blue', 'border-btn-navyblue');
    btnSpeakersList1.classList.add('btn-speaker-date--active');

    // Speaker group
    speakersGroup3.classList.add('speakers__hide');
    speakersGroup3.classList.remove('speakers__show');

    speakersGroup2.classList.add('speakers__hide');
    speakersGroup2.classList.remove('speakers__show');

    setTimeout(function () {
        speakersGroup2.classList.add('d-none');
    }, 500);

    setTimeout(function () {
        speakersGroup3.classList.add('d-none');
    }, 500);

    speakersGroup1.classList.remove('speakers__hide');
    speakersGroup1.classList.add('speakers__show');

    setTimeout(function () {
        speakersGroup1.classList.remove('d-none');
    }, 500);
});

btnSpeakersList2.addEventListener('click', function () {
    // Button class
    btnSpeakersList1.classList.add('bg-white', 'color-navy-blue', 'border-btn-navyblue');
    btnSpeakersList1.classList.remove('btn-speaker-date--active');

    btnSpeakersList3.classList.add('bg-white', 'color-navy-blue', 'border-btn-navyblue');
    btnSpeakersList3.classList.remove('btn-speaker-date--active');

    btnSpeakersList2.classList.remove('bg-white', 'color-navy-blue', 'border-btn-navyblue');
    btnSpeakersList2.classList.add('btn-speaker-date--active');

    // Speaker group
    speakersGroup1.classList.remove('speakers__show');
    speakersGroup1.classList.add('speakers__hide');

    speakersGroup3.classList.remove('speakers__show');
    speakersGroup3.classList.add('speakers__hide');

    setTimeout(function () {
        speakersGroup1.classList.add('d-none');
    }, 500);

    setTimeout(function () {
        speakersGroup3.classList.add('d-none');
    }, 500);

    speakersGroup2.classList.remove('speakers__hide');
    speakersGroup2.classList.add('speakers__show');

    setTimeout(function () {
        speakersGroup2.classList.remove('d-none');
    }, 500);
});

btnSpeakersList3.addEventListener('click', function () {
    // Button class
    btnSpeakersList1.classList.add('bg-white', 'color-navy-blue', 'border-btn-navyblue');
    btnSpeakersList1.classList.remove('btn-speaker-date--active');

    btnSpeakersList2.classList.add('bg-white', 'color-navy-blue', 'border-btn-navyblue');
    btnSpeakersList2.classList.remove('btn-speaker-date--active');

    btnSpeakersList3.classList.remove('bg-white', 'color-navy-blue', 'border-btn-navyblue');
    btnSpeakersList3.classList.add('btn-speaker-date--active');

    // Speaker group
    speakersGroup1.classList.remove('speakers__show');
    speakersGroup1.classList.add('speakers__hide');

    speakersGroup2.classList.remove('speakers__show');
    speakersGroup2.classList.add('speakers__hide');

    setTimeout(function () {
        speakersGroup1.classList.add('d-none');
    }, 500);

    setTimeout(function () {
        speakersGroup2.classList.add('d-none');
    }, 500);

    speakersGroup3.classList.remove('speakers__hide');
    speakersGroup3.classList.add('speakers__show');

    setTimeout(function () {
        speakersGroup3.classList.remove('d-none');
    }, 500);
});

//! ----- SPEAKERS SHOW/HIDE ----- //!


//! ----- TEASER SHOW-HİDE ----- //!
// $('#btn-video-list-1').click(function(){
//     $('#teaser-video-2').hide('slow')
//     $('#teaser-video-1').show('slow');
//     $('#btn-video-list-2').removeClass('btn-speaker-date--active');
//     $('#btn-video-list-1').addClass('btn-speaker-date--active');
// });
// $('#btn-video-list-2').click(function(){
//     $('#teaser-video-1').hide('slow')
//     $('#teaser-video-2').show('slow');
//     $('#btn-video-list-1').removeClass('btn-speaker-date--active');
//     $('#btn-video-list-2').addClass('btn-speaker-date--active');
// });

//! ----- TEASER SHOW-HİDE ----- //!


//! BROWSER CHECK //!
window.onload = function () {

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer, return version number
    {
        document.querySelector(".footer").classList.remove("flex-row-center");
    }
}
//! BROWSER CHECK //!