$(document).ready(function() {
    $('#add_work').click(function() {
        $('.window').fadeIn("slow");
    });
    $('#cancel_w').click(function() {
        $('.window').fadeOut("slow");
    });
    $('#submit_w').click(function() {
        var name = $('#add_name_w').val();
        var datetime = $('#add_datetime_w').val();
        $.ajax({
            type: "POST",
            url: 'php/add_work.php',
            data: {"name":name,"datetime":datetime},
            success: function() {
                $('.window').fadeOut("slow");
            }
        });
    });
});