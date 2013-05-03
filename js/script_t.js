$(document).ready(function() {

    init();

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
                init();
            }
        });
    });
});

function init() {
    $.ajax({
        type: "POST",
        url: 'php/get_today.php',
        success: function (data) {
            $('.main-content-t').empty();
            var html = '';
            for(var i=0; i<data.length;i++) {
                html +='<div class="content ' + ((data[i].object && data[i].check == 1) ? 'checked' : '') + '">';
                html += '   <div class="time_box">' + data[i].time + '</div>';
                html += '    <div class="button_t">';
                if (data[i].object) {
                    html += data[i].object.name;
                } else {
                    html += '        <a class="add" href="#" onclick="get_task(\'' + data[i].type + '\', \'' + data[i].time + '\')">Добавить</a>';
                }
                html += '    </div>';
                if (data[i].object && data[i].object.check == 1) {
                    html += '<div class="check_box_t"><a onclick="check_'+data[i].type+'('+data[i].object.id+', 0)" href="#"><img src="images/check_in.png" width="38" height="32" alt="Чек" /></a></div>'
                } else if (data[i].object) {
                    html += '<div class="check_box_t"><a onclick="check_'+data[i].type+'('+data[i].object.id+', 1)" href="#"><img src="images/frame.png" width="37" height="31" alt="Чек" /></a></div>';
                }
                html += '</div>';
                html += '<div class="clear"></div>';
            };
            $('.main-content-t').prepend(html);
        },
        dataType: "json"
    });
};

function get_task(type, time) {
    if (type == 'project') {
        var url = 'php/get_today_projects.php';
    } else {
        var url = 'php/get_today_works.php';
    }
    
    $.ajax({
        type: "POST",
        url: url,
        success: function(data) {
            $('.tasks').empty();
            var html = '<div>Задания</div>';
            for(var i=0; i<data.length;i++) {
                html += '<div>' + data[i].name + '</div><a href="#" onclick="add_task(\'' + data[i].id + '\', \'' + type + '\', \'' + time + '\')">Добавить</a>';
            }
            $('.tasks').prepend(html);
            $('.tasks').show();
        },
        dataType: "json"
    });
}

function add_task(id, type, time) {
    $.ajax({
        type: "POST",
        url: 'php/add_today_task.php',
        data: {"id":id,"type":type,"time":time},
        success: function(data) {
            $('.tasks').hide();
            init();
        }
    });
}

function check_work(id, check) {
    $.ajax({
        type: "POST",
        url: 'php/check_work.php',
        data: {"id":id,"check":check},
        success: function() {
            init();
        }
    });
}

function check_project(id, check) {
    $.ajax({
        type: "POST",
        url: 'php/check_project.php',
        data: {"id":id,"check":check},
        success: function() {
            init();
        }
    });
}