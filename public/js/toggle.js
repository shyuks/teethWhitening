

$(document).ready(function() {

    $('.question-hover').hover(function(e) {
        e.preventDefault();
        $(this).addClass('pulse');
        $(this).addClass('.question-show');
        $t = $(this);
        $toggle = $t.parent()[0].getElementsByClassName('question-toggle');
        $toggle[0].style.display = 'block';
    }, function() {
        $toggle[0].style.display = 'none';
        $(this).removeClass('pulse');
        // $(this).css('padding-bottom', '0px')
    });

    $('#resources .resource-static').hover(function(e) {
        e.preventDefault();
        $('.t-t-static').css('display', 'none');
        $('.resource-on-hover').css('display', 'block');
    }, function() {
        $('.t-t-static').css('display', 'block');
        $('.resource-on-hover').css('display', 'none');
    });

    $('#resources .col-xs-12').hover(function(e) {
        e.preventDefault();
        $t = $(this);
        $toggle = $t[0].getElementsByClassName('follow-topic');
        $toggle[0].style.display = 'block';
    }, function() {
        $toggle[0].style.display = 'none';
    });

    $('a[href^="#break-point-1"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').animate({
            'scrollTop': $target.offset().top - 48
        }, 500, 'swing');
    });


    $(window).ready(function() {
        $.fn.followTo = function (pos) {
            var $this = this;
            var $window = $(window);
            $window.scroll(function (e) {
                if ($window.scrollTop() > pos) {
                    $this.css({
                        position: 'absolute'
                    });
                } else {
                    $this.css({
                        position: 'fixed'
                    });
                }
            });
        };
        $('#sticky-social').followTo(2100);
    })

});
