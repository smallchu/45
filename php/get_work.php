<?php
include('config/config.php');
$res = mysql_query('select * from projects order by `check`, `date` DESC');
$array = array();
while ($row = mysql_fetch_assoc($res)){
    $array[] = $row;
}

echo json_encode($array);