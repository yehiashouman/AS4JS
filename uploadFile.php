<?php
var_dump($_REQUEST);
die();
$uploadPath = basename( $_FILES['Filedata']['name']);
die();
if (move_uploaded_file($_FILES['Filedata']['tmp_name'], $uploadPath))
{
     echo "OK";
}
else
{
     echo "ERROR";
}
?>