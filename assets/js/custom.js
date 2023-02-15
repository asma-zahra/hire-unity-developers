// Header fixed on scroll start 
window.onscroll = function() {
    myFunction()
};
var header = document.getElementById("mainheader");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("fixed-top-menu");

    } else {
        header.classList.remove("fixed-top-menu");
    }
}

function toggleDropdown() {
    $("#dropdown").toggle();
    $('.dropdownoverlay').addClass('active');
}

// Form Popup Close
function formPopupClose() {
    $("#formPopup").fadeOut();
    // document.getElementsByClassName().style.display = 'block';
    $("#overlay").fadeOut();
    $('body').css({
        overflow: 'auto'
    });
}

// Content Form Popup Close
function contentFormPopupClose() {
    $("#contentFormPopup").fadeOut();
    $('.features_append_list').html(' ');
    $("#overlay").fadeOut();
    $('body').css({
        overflow: 'auto'
    });
}

$(document).ready(function() {
    $('.smoothscroll').click(function() {
        var to = $(this).attr('data-target');
        $('html,body').animate({
                scrollTop: $(to).offset().top - 20
            },
            'slow');
        return false;
    });
    $(".maincontainer").height();

    $('.dropdownoverlay').click(function() {
        $(this).removeClass('active');
        $(".dropdown-menu").toggle();
    });

    $(".checkbtn").click(function() {
        var getbtntext = $(this).find('h3').html();
        $('.checkbtnfree, .checkbtn').removeClass('active');
        $(this).addClass('active')
        $('.get_started_form .lp-form-button').html(getbtntext)
    });
    $(".checkbtnfree").click(function() {
        var getbtntext1 = $(this).find('h3').html();
        $('.checkbtnfree, .checkbtn').removeClass('active');
        $(this).addClass('active')
        $('.get_started_form .lp-form-button').html('Get ' + getbtntext1)
    });

    // Resource Popup Open
    $('.resource_profile_popup').on('click', function() {
        var resourceName = $(this).attr('data-content');
        console.log(resourceName);
        $('#formPopup').find('h3').empty();
        $('#formPopup').find('h3').append("You've Selected " + resourceName);
        $("#formPopup").fadeIn();
        $('body').css({
            overflow: 'hidden'
        });
        $("#overlay").fadeIn();
    })

    // Content Popup Open
    $('.open_form_popup').on('click', function() {
        var fetauresList = $(this).find('.popup_content').html();
        // console.log(fetauresList);
        $(fetauresList).appendTo('.features_append_list');
        $("#contentFormPopup").fadeIn();
        $('body').css({
            overflow: 'hidden'
        });
        $('.overlay').fadeIn();
    });



    $('.clients_slider').owlCarousel({
        loop: true,
        center: true,
        // autoplay: true,
        // autoplayTimeout: 8500,
        // smartPlay: 450,
        dots: true,
        nav: false,
        margin: 0,
        items: 1,
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 1
            }
        }

    });
    $(".resource_slider").owlCarousel({
        loop: true,
        items: 2,
        margin: 10,
        nav: true,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },

            1000: {
                items: 1,
            },
        },
    });

    $(".owl-carousel1").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 3,
            },
            600: {
                items: 4,
            },
            1000: {
                items: 6,
            },
        },
    });


});
// $(document).scroll(function() {
//     if ($(this).scrollTop() >= $('#count-1').offset().top - $(window).height() / 2) {
//         $("#count-1 ").addClass('active');
//     } else {
//         $("#count-1").removeClass('active');
//     }
//     if ($(this).scrollTop() >= $('#count-2').offset().top - $(window).height() / 2) {
//         $("#count-2 ").addClass('active');
//     } else {
//         $("#count-2").removeClass('active');
//     }
//     if ($(this).scrollTop() >= $('#count-3').offset().top - $(window).height() / 2) {
//         $("#count-3 ").addClass('active');
//     } else {
//         $("#count-3").removeClass('active');
//     }
//     if ($(this).scrollTop() >= $('#count-4').offset().top - $(window).height() / 2) {
//         $("#count-4 ").addClass('active');
//     } else {
//         $("#count-4").removeClass('active');
//     }
//     if ($(this).scrollTop() >= $('#count-5').offset().top - $(window).height() / 2) {
//         $("#count-5 ").addClass('active');
//     } else {
//         $("#count-5").removeClass('active');
//     }
//     if ($(this).scrollTop() >= $('#count-6').offset().top - $(window).height() / 2) {
//         $("#count-6 ").addClass('active');
//     } else {
//         $("#count-6").removeClass('active');
//     }
// });