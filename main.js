
function measure(){
    document.getElementById("text").innerHTML="測定中です。<br><br>";
    document.getElementById("startButton").innerHTML="";
    fetch('./measure.py')
    .then(response => response.json())
    .then(data => {
        document.getElementById("again").innerHTML = '<button onclick="measure()">もう一度測定する</button>';
        document.getElementById("text").innerHTML = "測定が完了しました";
        document.getElementById("dist").innerText = data + "cm";
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
}
