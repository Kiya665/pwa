<?php
$command="sudo -u a /usr/local/bin/python3 test2.py";
$return_var = null;
$output = null;
exec($command,$output,$return_var);
$measuredValue = [];
$measuredValue = [
    "distance" => $output[0],
];
//echo $measuredValue["distance"];
//echo json_encode($output[0]);
//print($output[0] . "\n");
//var_dump($output);
echo $output[0];
?>