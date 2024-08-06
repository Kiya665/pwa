<?php
$command="python measure.py ";
exec($command,$output);
const json = "{ 'dist':}";
echo json_encode($output[0]);
?>