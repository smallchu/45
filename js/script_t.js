$(document).ready(function() {
    $('#settings').click(function() {
        $('.window').fadeIn("slow");
    });
    $('#cancel_s').click(function() {
        $('.window').fadeOut("slow");
    });
    $('#submit_s').click(function() {
        var time_b = $('#add_time_b').val();
        var time_e = $('#add_time_e').val();
        $.ajax({
            type: "POST",
            url: 'php/add_time.php',
            data: {"time_b":time_b,"time_e":time_e},
            success: function() {
                $('.window').fadeOut("slow");
            }
        });
    });
});