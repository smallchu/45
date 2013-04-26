<?php
include('config/config.php');
if (!empty($_POST['time_b']) && !empty($_POST['time_e'])) {
    $time_b = mysql_real_escape_string($_POST['time_b']);
    $time_e = mysql_real_escape_string($_POST['time_e']);
    mysql_query("insert into time set `time_b`='{$time_b}', `time_e`='{$time_e}'");
} else {
    die('Empty values');
}