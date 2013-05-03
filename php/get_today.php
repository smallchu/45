<?php
include('config/config.php');
$res = mysql_query('select * from time');
$row = mysql_fetch_assoc($res);
$start = $row['time_b'];
$end = $row['time_e'];

$array = array();
foreach (range($start, $end) as $number) {
    $next = $number+1;
    
    $key = "{$number}:00-{$number}:45";
    $res = mysql_query("select * from today where time = '{$key}'");
    if ($res) {
        $task = mysql_fetch_assoc($res);
        if ($task) {
            $res = mysql_query("select * from projects where id = '{$task['task_id']}'");
            $row = mysql_fetch_assoc($res);
        } else {
            $task = null;
            $row = null;
        }
    } else {
        $task = null;
        $row = null;
    }
    $array[] = array('time' => $key, 'object' => $row, 'type' => 'project', 'task' => $task);
    
    $key = "{$number}:45-{$next}:00";
    $res = mysql_query("select * from today where time = '{$key}'");
    if ($res) {
        $task = mysql_fetch_assoc($res);
        if ($task) {
            $res = mysql_query("select * from work where id = '{$task['task_id']}'");
            $row = mysql_fetch_assoc($res);
        } else {
            $task = null;
            $row = null;
        }
    } else {
        $task = null;
        $row = null;
    }
    $array[] = array('time' => $key, 'object' => $row, 'type' => 'work', 'task' => $task);
}

echo json_encode($array);
