$(document).ready(function() {
    $("#submit_btn").on('click', function() {
        if(judgeUserInput()){
            $("form").submit();
        }else{
            alert('user input is not complete!');
        }
    });
});