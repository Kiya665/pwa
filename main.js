
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

// おやすみ通知を送らない設定のとき 何時間前に通知を送るかの選択肢を隠す
function displayTime(){
    document.getElementById("sleepNotifyTime").style.display = "block";
}

// おやすみ通知を送る設定のとき 何時間前に通知を送るかの選択肢を表示する
function hiddenTime(){
    document.getElementById("sleepNotifyTime").style.display = "none";
}