<?php
include('config/config.php');
if (!empty($_POST['name']) && !empty($_POST['datetime'])) {
    $name = mysql_real_escape_string($_POST['name']);
    $datetime = mysql_real_escape_string($_POST['datetime']);
    mysql_query("insert into work set `name`='{$name}', `datetime`='{$datetime}'");
} else {
    die('Empty values');
}