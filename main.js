window.addEventListener("load",a)

function a(){
    document.getElementById('button').innerHTML='<button type="button" onclick="buttonclick()">編集</button>';
    var selectElement = document.getElementById('sun');
    document.getElementById('suntext').innerText = document.getElementById('sun').value;

    var selectElement = document.getElementById('mon');
    document.getElementById('montext').innerText = document.getElementById('mon').value;

    var selectElement = document.getElementById('tue');
    document.getElementById('tuetext').innerText = document.getElementById('tue').value;

    var selectElement = document.getElementById('wed');
    document.getElementById('wedtext').innerText = document.getElementById('wed').value;

    var selectElement = document.getElementById('thu');
    document.getElementById('thutext').innerText = document.getElementById('thu').value;

    var selectElement = document.getElementById('fry');
    document.getElementById('frytext').innerText = document.getElementById('fry').value;

    var selectElement = document.getElementById('sut');
    document.getElementById('suttext').innerText = document.getElementById('sut').value;
}

function buttonclick(){
    document.getElementById('button').innerHTML='<button type="button" onclick="buttonclick2()">確定</button>';
    var selectElement = document.getElementById('sun');
    var Element = document.getElementById('suntext');
    Element.style.display = "none";
    selectElement.style.display = "inline";

    var selectElement = document.getElementById('mon');
    var Element = document.getElementById('montext');
    Element.style.display = "none";
    selectElement.style.display = "inline";

    var selectElement = document.getElementById('tue');
    var Element = document.getElementById('tuetext');
    Element.style.display = "none";
    selectElement.style.display = "inline";

    var selectElement = document.getElementById('wed');
    var Element = document.getElementById('wedtext');
    Element.style.display = "none";
    selectElement.style.display = "inline";

    var selectElement = document.getElementById('thu');
    var Element = document.getElementById('thutext');
    Element.style.display = "none";
    selectElement.style.display = "inline";

    var selectElement = document.getElementById('fry');
    var Element = document.getElementById('frytext');
    Element.style.display = "none";
    selectElement.style.display = "inline";

    var selectElement = document.getElementById('sut');
    var Element = document.getElementById('suttext');
    Element.style.display = "none";
    selectElement.style.display = "inline";
}

function buttonclick2(){
    document.getElementById('button').innerHTML='<button type="button" onclick="buttonclick()">編集</button>';
    var selectElement = document.getElementById('sun');
    var Element = document.getElementById('suntext');
    Element.style.display = "inline";
    document.getElementById('suntext').innerText = document.getElementById('sun').value;
    selectElement.style.display = "none";

    var selectElement = document.getElementById('mon');
    var Element = document.getElementById('montext');
    Element.style.display = "inline";
    document.getElementById('montext').innerText = document.getElementById('mon').value;
    selectElement.style.display = "none";

    var selectElement = document.getElementById('tue');
    var Element = document.getElementById('tuetext');
    Element.style.display = "inline";
    document.getElementById('tuetext').innerText = document.getElementById('tue').value;
    selectElement.style.display = "none";

    var selectElement = document.getElementById('wed');
    var Element = document.getElementById('wedtext');
    Element.style.display = "inline";
    document.getElementById('wedtext').innerText = document.getElementById('wed').value;
    selectElement.style.display = "none";

    var selectElement = document.getElementById('thu');
    var Element = document.getElementById('thutext');
    Element.style.display = "inline";
    document.getElementById('thutext').innerText = document.getElementById('thu').value;
    selectElement.style.display = "none";

    var selectElement = document.getElementById('fry');
    var Element = document.getElementById('frytext');
    Element.style.display = "inline";
    document.getElementById('frytext').innerText = document.getElementById('fry').value;
    selectElement.style.display = "none";

    var selectElement = document.getElementById('sut');
    var Element = document.getElementById('suttext');
    Element.style.display = "inline";
    document.getElementById('suttext').innerText = document.getElementById('sut').value;
    selectElement.style.display = "none";
}
function measure(){
    document.getElementById("text").innerHTML="測定中です。<br><br>";
    document.getElementById("startButton").innerHTML="";
    fetch('./measure.py')
    .then(response => response.json())
    .then(data => {
        document.getElementById("again").innerHTML = '<button onclick="measure()">もう一度測定する</button><button type="button" onclick="location.href=' + config.html + '">計測を終了する</button>';
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