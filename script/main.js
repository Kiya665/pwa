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

    var selectElement = document.getElementById('fri');
    document.getElementById('fritext').innerText = document.getElementById('fri').value;

    var selectElement = document.getElementById('sat');
    document.getElementById('sattext').innerText = document.getElementById('sat').value;
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

    var selectElement = document.getElementById('fri');
    var Element = document.getElementById('fritext');
    Element.style.display = "none";
    selectElement.style.display = "inline";

    var selectElement = document.getElementById('sat');
    var Element = document.getElementById('sattext');
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

    var selectElement = document.getElementById('fri');
    var Element = document.getElementById('fritext');
    Element.style.display = "inline";
    document.getElementById('fritext').innerText = document.getElementById('fri').value;
    selectElement.style.display = "none";

    var selectElement = document.getElementById('sat');
    var Element = document.getElementById('sattext');
    Element.style.display = "inline";
    document.getElementById('sattext').innerText = document.getElementById('sat').value;
    selectElement.style.display = "none";
}



// window.addEventListener('load',notify2);
// function notify2(){
//     if (!('Notification' in window)) {
//         alert('このブラウザはプッシュ通知に対応してません。。。');
//         return;
//       }

//       const permission = Notification.permission;
//       if (permission === 'granted') {
//         navigator.serviceWorker.ready.then(registration => {
//           registration.active.postMessage('hello!!!');
//         });
//       } else {
//         alert('通知の許可がもらえませんよ');
//       }
//     setInterval(notify2,30000);
// }