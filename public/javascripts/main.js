$(document).ready(function () {
    $("#submit_btn").on('click', function () {
        var validity = true;
        $('.student_info').each(function () {
            if ($(this).val() === '') {
                validity = false;
                $(this).css("border", "1px solid red");
            } else {
                $(this).css("border", "1px solid #ccc");
            }
        });

        if (validity) {
            $("form").submit();
        } else {
            $("#alert_info").modal("show");
            $("html,body").animate({scrollTop: $("#title").offset().top}, 500);
        }
    });
});