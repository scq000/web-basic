$(document).ready(function () {
    $("#submit_btn").on('click', function () {
        if (judgeUserInput()) {
            $("form").submit();
        } else {
            $("#alert_info").modal("show");
            $("html,body").animate({scrollTop: $("#title").offset().top}, 500);
        }
    });
});