window.addEventListener("load",a);

function a(){
    
    document.getElementById('button').innerHTML='<button type="button" onclick="buttonclick()">編集</button>';
    if(localStorage.getItem('login') === '1'){
        console.log('二回目以降');
        document.getElementById('suntext').innerText = localStorage.getItem('sun_time');
        document.getElementById('montext').innerText = localStorage.getItem('mon_time');
        document.getElementById('tuetext').innerText = localStorage.getItem('tue_time');
        document.getElementById('wedtext').innerText = localStorage.getItem('wed_time');
        document.getElementById('thutext').innerText = localStorage.getItem('thu_time');
        document.getElementById('fritext').innerText = localStorage.getItem('fri_time');
        document.getElementById('sattext').innerText = localStorage.getItem('sat_time');  
    }else{
        console.log('初めてのログイン');
    }
    check('sun');
    check('mon');
    check('tue');
    check('wed');
    check('thu');
    check('fri');
    check('sat');
}
function check(day){
    var checkbox = document.getElementById(day + 'box');
    if(localStorage.getItem(day+'box') === '1'){
        checkbox.checked = true;
    }
}

function buttonclick(){
    toggletext('sun');
    toggletext('mon');
    toggletext('tue');
    toggletext('wed');
    toggletext('thu');
    toggletext('fri');
    toggletext('sat');

    var checkboxes = document.getElementsByName('box')
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].style.visibility = "visible";
    }
    displayElement('sun');
    displayElement('mon');
    displayElement('tue');
    displayElement('wed');
    displayElement('thu');
    displayElement('fri');
    displayElement('sat');

    //document.getElementById('button').innerHTML='<button type="button" onclick="buttonclick2();noSleep()">確定</button>';
    document.getElementById('button').innerHTML='<button type="button" onclick="buttonclick2()" "noSleep()">確定</button>';

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
function test(){
    console.log(
        localStorage.getItem('sun_start_hour'),
        localStorage.getItem('sun_start_minute'),
        localStorage.getItem('mon_start_hour'),
        localStorage.getItem('mon_start_minute'),
        localStorage.getItem('tue_start_hour'),
        localStorage.getItem('tue_start_minute'),
        localStorage.getItem('wed_start_hour'),
        localStorage.getItem('wed_start_minute'),
        localStorage.getItem('thu_start_hour'),
        localStorage.getItem('thu_start_minute'),
        localStorage.getItem('fri_start_hour'),
        localStorage.getItem('fri_start_minute'),
        localStorage.getItem('sat_start_hour'),
        localStorage.getItem('sat_start_minute'),
    );
}
function displayElement(day){
    var element = document.getElementById(day);
    var elementText = document.getElementById(day + 'text');
    elementText.style.display = "none";
    element.value = localStorage.getItem(day + '_time');
}
function buttonclick2(){
    var range = document.getElementsByName('range');
    var checkbox = document.getElementsByName('box');
    var time = document.getElementsByName('time');
    let n = 0;
    
    for(var i = 0;i < range.length;i++){
        console.log(checkbox[i].checked);
        if(checkbox[i].checked){
            if(time[i].value == ''){
                if(n == 0){
                    n++;
                }else if(n == 2){
                    alert("時間と範囲を設定してください");
                    return;
                }
            }

            if(range[i].value == ''){
                if(n == 1){
                    alert("時間と範囲を設定してください");
                    return;
                }else{
                    if(n == 0){
                        n = n + 2;
                    }
                }
            }
        } 
    }
    if(n == 1){
        alert("時間を設定してください");
        return;
    }else if(n == 2){
        alert("範囲を設定してください");
        return;
    }
    confData('sun');
    confData('mon');
    confData('thu');
    confData('wed');
    confData('tue');
    confData('fri');
    confData('sat');
    localStorage.setItem('login','1');
    var checkboxes = document.getElementsByName('box')
    toggletext('sun');
    toggletext('mon');
    toggletext('tue');
    toggletext('wed');
    toggletext('thu');
    toggletext('fri');
    toggletext('sat');
    
    var checkboxes = document.getElementsByName('box')
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].style.visibility = 'hidden';
    }

    var range = document.getElementsByName('range');
    for(var i = 0;i < range.length;i++){
        range[i].style.visibility = 'hidden';
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
            document.getElementById('suntext').innerText = document.getElementById('sun').value + "   " + document.getElementById('sun1').value;
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
        localStorage.setItem('moncheck',1);
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
    // 00:00
//     012345
    var sunHour = (document.getElementById('sun').value).slice(0, 2);
    var monHour = (document.getElementById('mon').value).slice(0, 2);
    var tueHour = (document.getElementById('tue').value).slice(0, 2);
    var wedHour = (document.getElementById('wed').value).slice(0, 2);
    var thuHour = (document.getElementById('thu').value).slice(0, 2);
    var friHour = (document.getElementById('fri').value).slice(0, 2);
    var satHour = (document.getElementById('sat').value).slice(0, 2);
    var sunMinute = (document.getElementById('sun').value).slice(3, 5);
    var monMinute = (document.getElementById('mon').value).slice(3, 5);
    var tueMinute = (document.getElementById('tue').value).slice(3, 5);
    var wedMinute = (document.getElementById('wed').value).slice(3, 5);
    var thuMinute = (document.getElementById('thu').value).slice(3, 5);
    var friMinute = (document.getElementById('fri').value).slice(3, 5);
    var satMinute = (document.getElementById('sat').value).slice(3, 5);

    // localStorage.setItem('wed_time',document.getElementById('wed').value);
    // localStorage.setItem('tue_time',document.getElementById('tue').value);
    // localStorage.setItem('wed_time',document.getElementById('wed').value);
    // localStorage.setItem('thu_time',document.getElementById('thu').value);
    // localStorage.setItem('fri_time',document.getElementById('fri').value);
    // localStorage.setItem('sat_time',document.getElementById('sat').value);

    // localStorage.setItem('sun_start_hour',checkHyphen(sunHour));
    // localStorage.setItem('mon_start_hour',checkHyphen(monHour));
    // localStorage.setItem('tue_start_hour',checkHyphen(tueHour));
    // localStorage.setItem('wed_start_hour',checkHyphen(wedHour));
    // localStorage.setItem('thu_start_hour',checkHyphen(thuHour));
    // localStorage.setItem('fri_start_hour',checkHyphen(friHour));
    // localStorage.setItem('sat_start_hour',checkHyphen(satHour));
    // localStorage.setItem('sun_start_minute',checkHyphen(sunMinute));
    // localStorage.setItem('mon_start_minute',checkHyphen(monMinute));
    // localStorage.setItem('tue_start_minute',checkHyphen(tueMinute));
    // localStorage.setItem('wed_start_minute',checkHyphen(wedMinute));
    // localStorage.setItem('thu_start_minute',checkHyphen(thuMinute));
    // localStorage.setItem('fri_start_minute',checkHyphen(friMinute));
    // localStorage.setItem('sat_start_minute',checkHyphen(satMinute));
    // localStorage.setItem('sun_range',document.getElementById('sun1').value);
    // localStorage.setItem('wed_range',document.getElementById('wed1').value);
    // localStorage.setItem('tue_range',document.getElementById('tue1').value);
    // localStorage.setItem('wed_range',document.getElementById('wed1').value);
    // localStorage.setItem('thu_range',document.getElementById('thu1').value);
    // localStorage.setItem('fri_range',document.getElementById('fri1').value);
    // localStorage.setItem('sat_range',document.getElementById('sat1').value);
    // checkbox_checked('sun');
    // checkbox_checked('mon');
    // checkbox_checked('thu');
    // checkbox_checked('wed');
    // checkbox_checked('tue');
    // checkbox_checked('fri');
    // checkbox_checked('sat');

    
    setTime(sunHour,sunMinute,'sun');
    setTime(monHour,monMinute,'mon');
    setTime(tueHour,tueMinute,'tue');
    setTime(wedHour,wedMinute,'wed');
    setTime(thuHour,thuMinute,'thu');
    setTime(friHour,friMinute,'fri');
    setTime(satHour,satMinute,'sat');
        
    document.getElementById('button').innerHTML='<button type="button" onclick="buttonclick()">編集</button>';

    start();
}
function setTime(Hour,Minute,day){
    if(Hour !== '' && localStorage.getItem(day + 'check') === '1'){//Hourが設定済み、かつ、チェックボックスがON　
        localStorage.setItem(day + '_start_hour',Hour);
        localStorage.setItem(day + '_start_minute',Minute);
        console.log('setTimeTest = ' + localStorage.getItem(day + '_start_hour'));
        console.log('setTimeTest = ' + localStorage.getItem(day + '_start_minute'));
    }else{
        localStorage.setItem(day + '_start_hour','--');
        localStorage.setItem(day + '_start_minute','--');
    }
}
function confData(day){
    var element = document.getElementById(day);
    var elementText = document.getElementById(day + 'text');
    var range = document.getElementById(day + '1');
    var rangetext = document.getElementById(day + 'range');
    elementText.style.display = "inline";
    var checkbox = document.getElementById(day + 'box');
    if (checkbox.checked) {
        localStorage.setItem(day + 'check','1');
        // if(element.value === ''){
        //     elementText.innerText = '--';
        // }else{
            elementText.innerText = element.value;
            localStorage.setItem(day + '_time',element.value);
            console.log("cheaked");
            rangetext.innerText = range;  
            console.log(range);
        //}
    } else {
        localStorage.setItem(day + 'check','0');
        elementText.innerText = '--';
        //element.value = '--:--';
        localStorage.setItem(element + '_time','--');
        console.log("nocheaked");
        localStorage.setItem(element + 'check','0');
    }
    element.style.visibility = "hidden";
}
function toggletext(day) {
    var checkbox = document.getElementById(day + 'box');
            var timeInput = document.getElementById(day);
            var a = document.getElementById(day + '1');
            if (checkbox && timeInput) {
                if (checkbox.checked) {
                    console.log(document.getElementById(day + '1'));
                    timeInput.style.visibility = "visible";
                    a.style.visibility = "visible";

                } else {
                    console.log(document.getElementById(day + '1'));
                    timeInput.style.visibility = "hidden";
                    a.style.visibility = "hidden";
                }
            } else {
                console.error('Element not found for day:', day);
            }
}

// function checkbox_checked(day){
//     var checkbox = document.getElementById(day+'box');
//     if(checkbox.checked){
//         localStorage.setItem(day + 'box','1');
//     }else{
//         localStorage.setItem(day + 'box','0');
//     }
// }



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