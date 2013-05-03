<?php
include('config/config.php');
if (isset($_POST['check']) && !empty($_POST['id'])) {
    $check = mysql_real_escape_string($_POST['check']);
    $id = (int)$_POST['id'];
    mysql_query("update work set `check`='{$check}' where `id`={$id}");
} else {
    die('Empty values');
}