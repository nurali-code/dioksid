
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    hideModals();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top, }, 500,)
})
/*---------------------------------------------------end*/

function hideModals() {
    $('.modal').fadeOut();
    $('.modal, body, [data-modal]').removeClass('active');
};
$(function () {
    function showModal(id) {
        if ($(id).hasClass('active')) {
            $(id).fadeOut(300)
            $(id).removeClass('active');
            $('body').removeClass('active');
        } else {
            $(id).addClass('active')
            $('body').addClass('active');
            $(id).fadeIn(300);
        }
    }

    $('[data-modal]').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active')
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
            ($(e.target).hasClass('btn')) ||
            ($(e.target).hasClass('modal-content'))
        )) {
            hideModals();
        }
    });
});
/*---------------------------------------------------end*/

$('input[name="u-phone"]').inputmask({ "mask": "8-999-999-99-99" });

/*---------------------------------------------------end*/

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

function numberWithSpaces(x) { return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") };

$('#cPrice').on('keyup', function () {
    $(this).val(numberWithSpaces($(this).val().replace(/[^0-9.]/g, "")))
})

