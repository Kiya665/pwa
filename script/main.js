window.addEventListener("load",a);

function a(){
    console.log(localStorage.getItem('mon_range'));
    
    document.getElementById('button').innerHTML='<button type="button" onclick="buttonclick()">編集</button>';
    if(localStorage.getItem('login') === '1'){
        console.log('二回目以降');
        displayElementText('sun');
        displayElementText('mon');
        displayElementText('tue');
        displayElementText('wed');
        displayElementText('thu');
        displayElementText('fri');
        displayElementText('sat');
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
    console.log('現在のチェックボックス状況:\n' +
        localStorage.getItem('suncheck')+ '\n' +
        localStorage.getItem('moncheck')+ '\n' +
        localStorage.getItem('tuecheck')+ '\n' +
        localStorage.getItem('wedcheck')+ '\n' +
        localStorage.getItem('thucheck')+ '\n' +
        localStorage.getItem('fricheck')+ '\n' +
        localStorage.getItem('satcheck')+ '\n'   
    );
}
function check(day){
    var checkbox = document.getElementById(day + 'box');
    if(localStorage.getItem(day + '_check') === '1'){
        checkbox.checked = true;
    }
}
function displayElementText(day){
    var element = document.getElementById(day);
    var elementText = document.getElementById(day + 'text');
    var rangetext = document.getElementById(day + 'range');
    var b = document.getElementById(day + '1');
    if(localStorage.getItem(day + '_check') === '1' && localStorage.getItem(day + '_time') !== ''){
        elementText.innerText = localStorage.getItem(day + '_time');
        rangetext.innerText = localStorage.getItem(day + '_range');
        b.value = localStorage.getItem(day + '_range');
    }else{
        elementText.innerText = '--';
    }

    //console.log('test = ' + localStorage.getItem(day + '_check') + '' + localStorage.getItem(day + '_time'));
}

function buttonclick(){
    toggletext('sun');
    toggletext('mon');
    toggletext('tue');
    toggletext('wed');
    toggletext('thu');
    toggletext('fri');
    toggletext('sat');

    var checkboxes = document.getElementsByName('box');
    
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].style.visibility = "visible";
    }
    displayElementTime('sun');
    displayElementTime('mon');
    displayElementTime('tue');
    displayElementTime('wed');
    displayElementTime('thu');
    displayElementTime('fri');
    displayElementTime('sat');

    document.getElementById('button').innerHTML='<button type="button" onclick="buttonclick2();sleepMode()">確定</button>';
    var rangetext = document.getElementsByName('range');
    for(var i = 0;i < range.length;i++){
        rangetext[i].style.display = "none";
    }

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
        localStorage.getItem('sat_start_minute')
    );
}
function displayElementTime(day){
    var element = document.getElementById(day);
    var elementText = document.getElementById(day + 'text');
    var rangetext = document.getElementById(day + 'range');
    elementText.style.display = "none";
    rangetext.style.display = "none";
    element.value = localStorage.getItem(day + '_time');
   // document.getElementById(day + '1').value = localStorage.getItem(day + '_time');
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
    sleepMode();
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
    localStorage.setItem('sun_range',document.getElementById('sun1').value);
    localStorage.setItem('mon_range',document.getElementById('mon1').value);
    localStorage.setItem('wed_range',document.getElementById('wed1').value);
    localStorage.setItem('tue_range',document.getElementById('tue1').value);
    localStorage.setItem('wed_range',document.getElementById('wed1').value);
    localStorage.setItem('thu_range',document.getElementById('thu1').value);
    localStorage.setItem('fri_range',document.getElementById('fri1').value);
    localStorage.setItem('sat_range',document.getElementById('sat1').value);
    // checkbox_checked('sun');
    // checkbox_checked('mon');
    // checkbox_checked('thu');
    // checkbox_checked('wed');
    // checkbox_checked('tue');
    // checkbox_checked('fri');
    // checkbox_checked('sat');

    confData('sun',sunHour,sunMinute);
    confData('mon',monHour,monMinute);
    confData('thu',tueHour,tueMinute);
    confData('wed',wedHour,wedMinute);
    confData('tue',thuHour,thuMinute);
    confData('fri',friHour,friMinute);
    confData('sat',satHour,satMinute);
        
    document.getElementById('button').innerHTML='<button type="button" onclick="buttonclick()">編集</button>';

    start();
}


function confData(day,Hour,Minute){
    var element = document.getElementById(day);
    var elementText = document.getElementById(day + 'text');
    var range = document.getElementById(day + '1');
    var rangetext = document.getElementById(day + 'range');
    elementText.style.display = "inline";
    var checkbox = document.getElementById(day + 'box');
    if (checkbox.checked && element.value !== '') {//チェックボックスがON　かつ　時間が設定済み
        localStorage.setItem(day + '_start_hour',Hour);
        localStorage.setItem(day + '_start_minute',Minute);
        elementText.innerText = element.value;
        localStorage.setItem(day + '_time',element.value);
        localStorage.setItem(day + '_check','1');
        rangetext.innerHTML = range.value;
    }else if(element.value !== ''){//チェックボックスがOFF　かつ　時間が設定済み
        localStorage.setItem(day + '_start_hour',Hour);
        localStorage.setItem(day + '_start_minute',Minute);
        elementText.innerText = '--';
        localStorage.setItem(day + '_time',element.value);
        localStorage.setItem(day + '_check','0');
        rangetext.innerText = "";
    }else{//チェックボックスがOFF　かつ　時間が未設定
        localStorage.setItem(day + '_start_hour','--');
        localStorage.setItem(day + '_start_minute','--');
        elementText.innerText = '--';
        localStorage.setItem(day + '_time','--');
        localStorage.setItem(day + '_check','0');
        rangetext.innerText = "";
    }
    element.style.visibility = "hidden";
    rangetext.style.display = "inline";
}
function toggletext(day) {
    var checkbox = document.getElementById(day + 'box');
    var timeInput = document.getElementById(day);
    var a = document.getElementById(day + '1');
    var range = document.getElementById(day+'1');
    var rangetext = document.getElementById(day+'range');
    if (checkbox && timeInput) {
        if (checkbox.checked) {
            timeInput.style.visibility = "visible";
            //a.style.visibility = "visible";
            localStorage.setItem(day+'box',1);
            range.style.visibility = "visible";
        } else {
            //console.log(document.getElementById(day + '1'));
            timeInput.style.visibility = "hidden";
            a.style.visibility = "hidden";
            range.style.visibility = "hidden";
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