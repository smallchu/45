<?php
include('config/config.php');
$date = date('Y-m-d');
$res = mysql_query("select * from work where `datetime` = '{$date}' AND `check` = 0");
if ($res) {
    $array = array();
    while ($row = mysql_fetch_assoc($res)){
        $array[] = $row;
    }
    echo json_encode($array);
} else {
    die();
}