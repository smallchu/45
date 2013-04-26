<?php
include('config/config.php');
if (!empty($_POST['name']) && !empty($_POST['date'])) {
    $name = mysql_real_escape_string($_POST['name']);
    $date = mysql_real_escape_string($_POST['date']);
    mysql_query("insert into projects set `name`='{$name}', `date`='{$date}'");
} else {
    die('Empty values');
}