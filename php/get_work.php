<?php
include('config/config.php');
$res = mysql_query('select * from work order by `check`, `datetime` DESC');
$array = array();
while ($row = mysql_fetch_assoc($res)){
    $array[] = $row;
}
echo json_encode($array);