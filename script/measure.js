window.addEventListener('load',() =>{
    if(localStorage.getItem('measured_distance')){
        dist.innerText = localStorage.getItem('measured_distance') + "cm";
    }
})
function measure(){
    document.getElementById("text").innerHTML="測定中です。<br>";
    document.getElementById("startButton").innerHTML="";
    document.getElementById('dist').innerHTML = "--cm";
    fetch('./script/measure.py')
    .then(response => response.json())
    .then(data => {
        document.getElementById("againOrEnd").innerHTML = '<button onclick="measure()">もう一度測定する</button><button type="button" onclick="setDistance(' + data + ')">計測を終了する</button>';
        document.getElementById("text").innerHTML = "測定が完了しました";
        document.getElementById("dist").innerText = data + "cm";
        console.log(data);
        localStorage.setItem('measured_distance',data);
    })
    .catch(error => {
        console.log(error);
    });
} 

function setDistance(data){
    localStorage.setItem('measured_distance',data);
    window.location.href = "./config.html"
}
