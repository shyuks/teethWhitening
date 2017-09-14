

$(document).ready(function() {

    $('#resources .resource-static').hover(function(e) {
        e.preventDefault();
        $('.t-t-static').css('display', 'none');
        $('.resource-on-hover').css('display', 'block');
    }, function() {
        $('.t-t-static').css('display', 'block');
        $('.resource-on-hover').css('display', 'none');
    });

    $('#resources .col-xs-3').hover(function(e) {
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

});
