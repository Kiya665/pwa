function measure(){
    document.getElementById("text").innerHTML="測定中です。<br><br>";
    document.getElementById("startButton").innerHTML="";
    fetch('measure.php')
    .then((response) => response.json())
    .then(res => {
        document.getElementById("dist").innerHTML = res;
    })
    .catch((error) =>{
        console.log(error);
    });
}
