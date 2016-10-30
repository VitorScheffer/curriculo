(function($) {
    "use strict";

    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });


    $('#form-contato').submit(function(event) {
        event.preventDefault();
        $('#success').append('<i class="fa fa-spinner fa-pulse fa-3x fa-fw">')
        $.ajax({
            url: 'https://contato-twsatc.rhcloud.com/contato-api/email',
            type: 'post',
            dataType: 'json',
            data: $('#form-contato').serialize(),
            success: function(data) {
                $('#form-contato input').val("");
                $('#form-contato textarea').val("");

                $('#success i').remove();

                if (data) {
                    $('#texto-retorno').append('p').text("Informações enviadas com sucesso...");
                } else {
                    $('#texto-retorno').append('p').text("Erro ao enviar...");
                }

                $("#modal-retorno").modal('show');
            }
        });
    });



})(jQuery);
