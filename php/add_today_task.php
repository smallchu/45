<?php
include('config/config.php');
if (!empty($_POST['id']) && !empty($_POST['type']) && !empty($_POST['time'])) {
    $id = (int) $_POST['id'];
    $type = mysql_real_escape_string($_POST['type']);
    $time = mysql_real_escape_string($_POST['time']);
    mysql_query("insert into today set `task_id`={$id}, `task_type`='{$type}', `time`='{$time}', `check` = 0");
} else {
    die('Empty values');
}