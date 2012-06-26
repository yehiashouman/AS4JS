<?php
$file = $_FILES['file'];
$uploadPath = basename( $file['name']);

if (move_uploaded_file($file['tmp_name'], $uploadPath))
{
     echo "";
}
else
{
     echo "ERROR";
}
?>