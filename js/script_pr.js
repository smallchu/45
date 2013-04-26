/* функции должны быть тут, в глобальной области видимости (не в $(document).ready) */
function check_project(id, check) {
    $.ajax({
        type: "POST",
        url: 'php/check_project.php',
        data: {"id":id,"check":check},
        success: function() {
            $('.main-content').empty();
            init();
        }
    });
}

function init() {
    $.ajax({
        type: "POST",
        url: 'php/get_projects.php',
        success: function (data) {
            var html = '';
            for(var i=0; i<data.length;i++) {
                html +='<div class="content">';
                if (data[i].check == 1) {
                    html += '<div class="check_box"><a onclick="check_project('+data[i].id+', 0)" href="#"><img src="images/check_in.png" width="38" height="32" alt="Чек" /></a></div>'
                } else {
                    html += '<div class="check_box"><a onclick="check_project('+data[i].id+', 1)" href="#"><img src="images/frame.png" width="37" height="31" alt="Чек" /></a></div>';
                }
                html += '<div class="string">'+data[i].name+'</div>';
                html +='</div>'
            };
            $('.main-content').prepend(html);
        },
        dataType: "json"
    });
};

/* а тут лоика работы с элементами */
$(document).ready(function() {
    init();

    $('#add_project').click(function() {
        $('.window').fadeIn("slow");
    });
    $('#cancel_pr').click(function() {
        $('.window').fadeOut("slow");
    });
    $('#submit_pr').click(function() {
        var name = $('#add_name_pr').val();
        var date = $('#add_date_pr').val();
        $.ajax({
            type: "POST",
            url: 'php/add_project.php',
            data: {"name":name,"date":date},
            success: function() {
                $('.main-content').empty();
                init();
                $('.window').fadeOut("slow");
            }
        });
    });
});