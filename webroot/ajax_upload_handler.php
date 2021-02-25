<?php
move_uploaded_file($_FILES['zip']['tmp_name'], $_FILES['zip']['name']);
echo 'OK';