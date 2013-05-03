function check_work(id, check) {
    $.ajax({
        type: "POST",
        url: 'php/check_work.php',
        data: {"id":id,"check":check},
        success: function() {
            $('.main-content-w').empty();
            init();
        }
    });
}

function init() {
    $.ajax({
        type: "POST",
        url: 'php/get_work.php',
        success: function (data) {
            var html = '';
            for(var i=0; i<data.length;i++) {
                html +='<div class="content ' + (data[i].check == 1 ? 'checked' : '') + '">';
                if (data[i].check == 1) {
                    html += '<div class="check_box"><a onclick="check_work('+data[i].id+', 0)" href="#"><img src="images/check_in.png" width="38" height="32" alt="Чек" /></a></div>'
                } else {
                    html += '<div class="check_box"><a onclick="check_work('+data[i].id+', 1)" href="#"><img src="images/frame.png" width="37" height="31" alt="Чек" /></a></div>';
                }
                html += '<div class="string">'+data[i].name+'</div>';
                html +='</div>'
            };
            $('.main-content-w').prepend(html);
        },
        dataType: "json"
    });
};

$(document).ready(function() {
    init();
    
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
                $('.main-content-w').empty();
                init();
                $('.window').fadeOut("slow");
            }
        });
    });
});