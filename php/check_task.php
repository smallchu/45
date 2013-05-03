<?php
include('config/config.php');
/* isset($_POST['check']) потому что ноль не пройдет в isset($_POST['check']) в empty() */
if (isset($_POST['check']) && !empty($_POST['id'])) {
    $check = mysql_real_escape_string($_POST['check']);
    $id = (int)$_POST['id'];
    mysql_query("update today set `check`='{$check}' where `id`={$id}");
} else {
    die('Empty values');
}