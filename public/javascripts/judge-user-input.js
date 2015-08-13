function judgeUserInput() {
    var allComplete = true;

    $('.student_info').each(function () {
        if ($(this).val() === '') {
            allComplete = false;
            $(this).css("border", "1px solid red");
        } else {
            $(this).css("border", "1px solid #ccc");
        }
    });

    return allComplete;
}