

$(document).ready(function() {
// HOVER OVER QUESTION FOR ANSWER
    var answerClicked = 0;

    $('.question-hover').on('click', function(e) {
        e.preventDefault();

        if (answerClicked === 0) {
            $(this).addClass('pulse');
            $(this).addClass('.question-show');
            $t = $(this);
            $toggle = $t.parent()[0].getElementsByClassName('question-toggle');
            $toggle[0].style.display = 'block';
            answerClicked = 1;
            return;
        } else {
            $t = $(this);
            $toggle = $t.parent()[0].getElementsByClassName('question-toggle');
            $toggle[0].style.display = 'none';
            answerClicked = 0;
            return;
        }
    });


// TOGGLE ON HIDE/SHOW
    $('#resources .resource-static').hover(function(e) {
        e.preventDefault();
        $('.t-t-static').css('display', 'none');
        $('.resource-on-hover').css('display', 'block');
    }, function() {
        $('.t-t-static').css('display', 'block');
        $('.resource-on-hover').css('display', 'none');
    });

// TOGGLE FOLLOW FOR 12 NODES
    // $('#resources .col-xs-12').hover(function(e) {
    //     e.preventDefault();
    //     $t = $(this);
    //     $toggle = $t[0].getElementsByClassName('follow-topic');
    //     $toggle[0].style.display = 'block';
    // }, function() {
    //     $toggle[0].style.display = 'none';
    // });

// LOOK FOR THIS A HREF BREAK AND BRINGS TO
    $('a[href^="#break-point-1"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').animate({
            'scrollTop': $target.offset().top - 48
        }, 500, 'swing');
    });

// STICKY SOCIAL
    // $(window).ready(function() {
    //     $.fn.followTo = function (pos) {
    //         var $this = this;
    //         var $window = $(window);
    //         $window.scroll(function (e) {
    //             if ($window.scrollTop() > pos) {
    //                 $this.css({
    //                     position: 'absolute'
    //                 });
    //             } else {
    //                 $this.css({
    //                     position: 'fixed'
    //                 });
    //             }
    //         });
    //     };
    //     $('#sticky-social').followTo(2100);
    // })

});
