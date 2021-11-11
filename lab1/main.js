$(document).ready(function() {
    $('.header').height($(window).height());
})
$('#register-btn').click(function (e) { 
    $('#register-modal').modal({
        backdrop: 'static',
    })
});