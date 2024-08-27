window.addEventListener("load",a)

function a(){
    
    document.getElementById('button').innerHTML='<button type="button" onclick="buttonclick()">編集</button>';
         document.getElementById('suntext').innerText = localStorage.getItem('sun_time');
         document.getElementById('montext').innerText = localStorage.getItem('mon_time');
         document.getElementById('tuetext').innerText = localStorage.getItem('thu_time');
         document.getElementById('wedtext').innerText = localStorage.getItem('wed_time');
         document.getElementById('thutext').innerText = localStorage.getItem('thu_time');
         document.getElementById('fritext').innerText = localStorage.getItem('fri_time');
         document.getElementById('sattext').innerText = localStorage.getItem('sat_time');         
}

function buttonclick(){
    toggletext('sun');
    toggletext('mon');
    toggletext('tue');
    toggletext('wed');
    toggletext('thu');
    toggletext('fri');
    toggletext('sat');
    
    document.getElementById('button').innerHTML='<button type="button" onclick="buttonclick2()">確定</button>';

    var checkboxes = document.getElementsByName('box')
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].style.visibility = "visible";
    }
    var selectElement = document.getElementById('sun');
    var Element = document.getElementById('suntext');
    Element.style.display = "none";
    selectElement.value = localStorage.getItem('sun_time');

    var selectElement = document.getElementById('mon');
    var Element = document.getElementById('montext');
    Element.style.display = "none";
    selectElement.value = localStorage.getItem('mon_time');

    var selectElement = document.getElementById('tue');
    var Element = document.getElementById('tuetext');
    Element.style.display = "none";
    selectElement.value = localStorage.getItem('thu_time');

    var selectElement = document.getElementById('wed');
    var Element = document.getElementById('wedtext');
    Element.style.display = "none";
    selectElement.value = localStorage.getItem('wed_time');

    var selectElement = document.getElementById('thu');
    var Element = document.getElementById('thutext');
    Element.style.display = "none";
    selectElement.value = localStorage.getItem('thu_time');

    var selectElement = document.getElementById('fri');
    var Element = document.getElementById('fritext');
    Element.style.display = "none";
    selectElement.value = localStorage.getItem('fri_time');

    var selectElement = document.getElementById('sat');
    var Element = document.getElementById('sattext');
    Element.style.display = "none";
    selectElement.value = localStorage.getItem('sat_time');

    document.getElementById('button').innerHTML='<button type="button" onclick="buttonclick2()">確定</button>';

    // var selectElement = document.getElementById('wed1');
    // var Element = document.getElementById('wed1text');
    // Element.style.display = "none";
    // selectElement.style.display = "inline";

    // var selectElement = document.getElementById('tue1');
    // var Element = document.getElementById('tue1text');
    // Element.style.display = "none";
    // selectElement.style.display = "inline";

    // var selectElement = document.getElementById('wed1');
    // var Element = document.getElementById('wed1text');
    // Element.style.display = "none";
    // selectElement.style.display = "inline";

    // var selectElement = document.getElementById('thu1');
    // var Element = document.getElementById('thu1text');
    // Element.style.display = "none";
    // selectElement.style.display = "inline";

    // var selectElement = document.getElementById('fri1');
    // var Element = document.getElementById('fri1text');
    // Element.style.display = "none";
    // selectElement.style.display = "inline";

    // var selectElement = document.getElementById('sat1');
    // var Element = document.getElementById('sat1text');
    // Element.style.display = "none";
    // selectElement.style.display = "inline";
}

function buttonclick2(){
    var checkboxes = document.getElementsByName('box')
    toggletext('sun');
    toggletext('wed');
    toggletext('tue');
    toggletext('wed');
    toggletext('thu');
    toggletext('fri');
    toggletext('sat');
    
    var checkboxes = document.getElementsByName('box')
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].style.visibility = 'hidden';
    }
    
    document.getElementById('button').innerHTML='<button type="button" onclick="buttonclick()">編集</button>';
    
    var selectElement = document.getElementById('sun');
    var Element = document.getElementById('suntext');
    Element.style.display = "inline";
    var checkbox = document.getElementById('sunbox');
       if (checkbox.checked) {
        localStorage.setItem('suncheck',1)
        if(!document.getElementById('sun').value){
            document.getElementById('suntext').innerText = '--';
            
        }else{
            document.getElementById('suntext').innerText = document.getElementById('sun').value;
            localStorage.setItem('sun_time',document.getElementById('sun').value);
            console.log("cheaked");
        }
            
        } else {
            document.getElementById('suntext').innerText = '--';
            document.getElementById('sun').value = '--:--';
            localStorage.setItem('sun_time','--');
            console.log("nocheaked");
            localStorage.setItem('suncheck',0)
        }
    selectElement.style.visibility = "hidden";
    
    var selectElement = document.getElementById('mon');
    var Element = document.getElementById('montext');
    Element.style.display = "inline";
    var checkbox = document.getElementById('monbox');
       if (checkbox.checked) {
        if(!document.getElementById('mon').value){
            document.getElementById('montext').innerText = '--';
        }
            document.getElementById('montext').innerText = document.getElementById('mon').value;
            localStorage.setItem('mon_time',document.getElementById('mon').value);
            console.log("cheaked");
        } else {
            localStorage.setItem('mon_time','--');
            document.getElementById('montext').innerText = localStorage.getItem('mon_time');
            document.getElementById('mon').value = '--:--';
            console.log("nocheaked");
        }
    selectElement.style.visibility = "hidden";

    var selectElement = document.getElementById('wed');
    var Element = document.getElementById('wedtext');
    Element.style.display = "inline";
    var checkbox = document.getElementById('wedbox');
    if (checkbox.checked) {
        if(!document.getElementById('wed').value){
            document.getElementById('wedtext').innerText = '--';
        }
         document.getElementById('wedtext').innerText = document.getElementById('wed').value;
         localStorage.setItem('wed_time',document.getElementById('wed').value);
         console.log("cheaked");
     } else {
         document.getElementById('wedtext').innerText = '--';
         document.getElementById('wed').value = '--:--';
         localStorage.setItem('wed_time','--');
         console.log("nocheaked");
     }    selectElement.style.visibility = "hidden";

    var selectElement = document.getElementById('tue');
    var Element = document.getElementById('tuetext');
    Element.style.display = "inline";
    var selectElement = document.getElementById('tue');
    var Element = document.getElementById('tuetext');
    Element.style.display = "inline";
    var checkbox = document.getElementById('tuebox');
    if (checkbox.checked) {
        if(!document.getElementById('tue').value){
            document.getElementById('tuetext').innerText = '--';
        }
         document.getElementById('tuetext').innerText = document.getElementById('tue').value;
         localStorage.setItem('tue_time',document.getElementById('tue').value);
         console.log("cheaked");
     } else {
         document.getElementById('tuetext').innerText = '--';
         document.getElementById('tue').value = '--:--';
         localStorage.setItem('tue_time','--');
         console.log("nocheaked");
     }    selectElement.style.visibility = "hidden";

    var selectElement = document.getElementById('thu');
    var Element = document.getElementById('thutext');
    Element.style.display = "inline";
    var selectElement = document.getElementById('thu');
    var Element = document.getElementById('thutext');
    Element.style.display = "inline";
    var checkbox = document.getElementById('thubox');
    if (checkbox.checked) {
         document.getElementById('thutext').innerText = document.getElementById('thu').value;
         localStorage.setItem('thu_time',document.getElementById('thu').value);
         console.log("cheaked");
     } else {
         document.getElementById('thutext').innerText = '--';
         document.getElementById('thu').value = '--:--';
         localStorage.setItem('thu_time','--');
         console.log("nocheaked");
     }    selectElement.style.visibility = "hidden";

    var selectElement = document.getElementById('fri');
    var Element = document.getElementById('fritext');
    Element.style.display = "inline";
    var selectElement = document.getElementById('fri');
    var Element = document.getElementById('fritext');
    Element.style.display = "inline";
    var checkbox = document.getElementById('fribox');
    if (checkbox.checked) {
        if(!document.getElementById('fri').value){
            document.getElementById('fritext').innerText = '--';
        }
         document.getElementById('fritext').innerText = document.getElementById('fri').value;
         localStorage.setItem('fri_time',document.getElementById('fri').value);
         console.log("cheaked");
     } else {
         document.getElementById('fritext').innerText = '--';
         document.getElementById('fri').value = '--:--';
         localStorage.setItem('fri_time','--');
         console.log("nocheaked");
     }    selectElement.style.visibility = "hidden";

    var selectElement = document.getElementById('sat');
    var Element = document.getElementById('sattext');
    Element.style.display = "inline";
    var selectElement = document.getElementById('sat');
    var Element = document.getElementById('sattext');
    Element.style.display = "inline";
    var checkbox = document.getElementById('satbox');
    if (checkbox.checked) {
        if(!document.getElementById('sat').value){
            document.getElementById('sattext').innerText = '--';
        }
         document.getElementById('sattext').innerText = document.getElementById('sat').value;
         localStorage.setItem('sat_time',document.getElementById('sat').value);
         console.log("cheaked");
     } else {
         document.getElementById('sattext').innerText = '--';
         document.getElementById('sat').value = '--:--';
         localStorage.setItem('sat_time','--');
         console.log("nocheaked");
     }
     selectElement.style.visibility = "hidden";
    // 

    var sunHour = parseInt((document.getElementById('sun').value).slice(0, 2));
    var wedHour = parseInt((document.getElementById('wed').value).slice(0, 2));
    var tueHour = parseInt((document.getElementById('tue').value).slice(0, 2));
    var wedHour = parseInt((document.getElementById('wed').value).slice(0, 2));
    var thuHour = parseInt((document.getElementById('thu').value).slice(0, 2));
    var friHour = parseInt((document.getElementById('fri').value).slice(0, 2));
    var satHour = parseInt((document.getElementById('sat').value).slice(0, 2));
    var sunMinute = parseInt((document.getElementById('sun').value).slice(3, 5));
    var wedMinute = parseInt((document.getElementById('wed').value).slice(3, 5));
    var tueMinute = parseInt((document.getElementById('tue').value).slice(3, 5));
    var wedMinute = parseInt((document.getElementById('wed').value).slice(3, 5));
    var thuMinute = parseInt((document.getElementById('thu').value).slice(3, 5));
    var friMinute = parseInt((document.getElementById('fri').value).slice(3, 5));
    var satMinute = parseInt((document.getElementById('sat').value).slice(3, 5));

    // localStorage.setItem('wed_time',document.getElementById('wed').value);
    // localStorage.setItem('tue_time',document.getElementById('tue').value);
    // localStorage.setItem('wed_time',document.getElementById('wed').value);
    // localStorage.setItem('thu_time',document.getElementById('thu').value);
    // localStorage.setItem('fri_time',document.getElementById('fri').value);
    // localStorage.setItem('sat_time',document.getElementById('sat').value);
    localStorage.setItem('sun_start_hour',sunHour);
    localStorage.setItem('mon_start_hour',wedHour);
    localStorage.setItem('tue_start_hour',tueHour);
    localStorage.setItem('wed_start_hour',wedHour);
    localStorage.setItem('thu_start_hour',thuHour);
    localStorage.setItem('fri_start_hour',friHour);
    localStorage.setItem('sat_start_hour',satHour);
    localStorage.setItem('sun_start_minute',sunMinute);
    localStorage.setItem('mon_start_minute',wedMinute);
    localStorage.setItem('tue_start_minute',tueMinute);
    localStorage.setItem('wed_start_minute',wedMinute);
    localStorage.setItem('thu_start_minute',thuMinute);
    localStorage.setItem('fri_start_minute',friMinute);
    localStorage.setItem('sat_start_minute',satMinute);
    // localStorage.setItem('sun_range',document.getElementById('sun1').value);
    // localStorage.setItem('wed_range',document.getElementById('wed1').value);
    // localStorage.setItem('tue_range',document.getElementById('tue1').value);
    // localStorage.setItem('wed_range',document.getElementById('wed1').value);
    // localStorage.setItem('thu_range',document.getElementById('thu1').value);
    // localStorage.setItem('fri_range',document.getElementById('fri1').value);
    // localStorage.setItem('sat_range',document.getElementById('sat1').value);

}

function toggletext(day) {
    var checkbox = document.getElementById(day + 'box');
            var timeInput = document.getElementById(day);
            if (checkbox && timeInput) {
                if (checkbox.checked) {
                    timeInput.style.visibility = "visible";
                } else {
                    timeInput.style.visibility = "hidden";
                }
            } else {
                console.error('Element not found for day:', day);
            }
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