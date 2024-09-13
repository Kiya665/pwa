window.addEventListener('load',() =>{
    if(localStorage.getItem('measured_distance')){
        dist.innerText = localStorage.getItem('measured_distance') + "cm";
    }
})
function measure(){
    document.getElementById("text").innerHTML="測定中です。<br><br>";
    document.getElementById("startButton").innerHTML="";
    fetch('../measure.py')
    .then(response => response.json())
    .then(data => {
        document.getElementById("again").innerHTML = '<button onclick="measure()">もう一度測定する</button><button type="button" onclick="setDistance()">計測を終了する</button>';
        document.getElementById("text").innerHTML = "測定が完了しました";
        document.getElementById("dist").innerText = data + "cm";
        console.log(data);
        localStorage.setItem('measured_distance',data);
    })
    .catch(error => {
        console.log(error);
    });
} 
