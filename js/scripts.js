
$('.btn-menu').on('click', () => { $('header .nav, body, .btn-menu').toggleClass('active') })

/*---------------------------------------------------end*/

$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top, }, 500,)
})
/*---------------------------------------------------end*/

$(function () {
    function showModal(id) {
        $(id).fadeIn(300);
        $('body').addClass('active')
    }

    function hideModals() {
        $('.modal').fadeOut();
        $('body').removeClass('active')
    };

    $('.open-modal').on('click', function (e) {
        e.preventDefault()
        showModal('#' + $(this).attr("data-modal"));
    });

    $('.modal-close').on('click', () => {
        hideModals();
    });
    
    $(document).on('click', function (e) {
        if (!(
            ($(e.target).parents('.modal-content').length) ||
            ($(e.target).parents('.open-modal').length) ||
            ($(e.target).parents('.nav').length) ||
            ($(e.target).parents('.btn-menu').length) ||
            ($(e.target).hasClass('nav')) ||
            ($(e.target).hasClass('btn-menu')) ||
            ($(e.target).hasClass('modal-content')) ||
            ($(e.target).hasClass('open-modal'))
        )) {
            hideModals();
            $('header .nav, body, .btn-menu').removeClass('active')

        }
    });
});
/*---------------------------------------------------end*/

/*---------------------------------------------------end*/

$('input[name="u-phone"]').inputmask({ "mask": "+8-999-999-99-99" });

$(".form").submit(function () {
    $('form .btn').attr('disabled', 'disabled');
    var formItem = $(this); var sender;
    formItem.hasClass('formReview') ? sender = "../smart.php" : sender = "../telegram.php";
    $.ajax({
        type: "POST",
        method: 'POST',
        url: sender,
        data: $(this).serialize()
    }).done(function () {
        $('form .btn').removeAttr('disabled');
        $('form').trigger('reset');
        $('.modal').fadeOut(); alert('Спасибо, за заявку , ожидайте с вами свяжется специалист');

    }); return false;
});

$("#calcResulte").submit(function () {
    $('form .btn').attr('disabled', 'disabled');
    $.ajax({
        type: "POST",
        method: 'POST',
        url: "../telegram_calc.php",
        data: $(this).serialize()
    }).done(function () {
        $('form .btn').removeAttr('disabled');
        $('form').trigger('reset');
        $('#modal-calcForm').fadeOut();
        calculate();
    });
    return false;
});

function numberWithSpaces(x) { return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") };

$('#cPrice').on('keyup', function () {
    $(this).val(numberWithSpaces($(this).val().replace(/[^0-9.]/g, "")))
})

