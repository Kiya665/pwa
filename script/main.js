window.addEventListener("load",a)

function a(){
    
    document.getElementById('button').innerHTML='<button type="button" onclick="buttonclick()">編集</button>';
    if(localStorage.getItem('sun_start_hour')){
        document.getElementById('suntext').innerText = localStorage.getItem('sun_time');
         document.getElementById('montext').innerText = localStorage.getItem('mon_time');
         document.getElementById('tuetext').innerText = localStorage.getItem('tue_time');
         document.getElementById('wedtext').innerText = localStorage.getItem('wed_time');
         document.getElementById('thutext').innerText = localStorage.getItem('thu_time');
         document.getElementById('fritext').innerText = localStorage.getItem('fri_time');
         document.getElementById('sattext').innerText = localStorage.getItem('sat_time');  
         console.log('atest' + localStorage.getItem('sun_start_hour'));
    }
    if(localStorage.getItem('login') !== 1){
        console.log('localStoragenasi');
    }else{
        console.log('localStorageari');
    }
    check('sun');
    check('mon');
    check('thu');
    check('wed');
    check('tue');
    check('fri');
    check('sat');
}
function check(day){
    var checkbox = document.getElementById(day + 'dox');
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
    selectElement.value = localStorage.getItem('tue_time');

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

    document.getElementById('button').innerHTML='<button type="button" onclick="buttonclick2();noSleep()">確定</button>';

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
function buttonclick2(){
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
    
    document.getElementById('button').innerHTML='<button type="button" onclick="buttonclick()">編集</button>';
    
    confData('sun');
    confData('mon');
    confData('tue');
    confData('wed');
    confData('thu');
    confData('fri');
    confData('sat');
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
    localStorage.setItem('sun_start_hour',sunHour);
    localStorage.setItem('mon_start_hour',monHour);
    localStorage.setItem('tue_start_hour',tueHour);
    localStorage.setItem('wed_start_hour',wedHour);
    localStorage.setItem('thu_start_hour',thuHour);
    localStorage.setItem('fri_start_hour',friHour);
    localStorage.setItem('sat_start_hour',satHour);
    localStorage.setItem('sun_start_minute',sunMinute);
    localStorage.setItem('mon_start_minute',monMinute);
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
    checkbox_checked('sun');
    checkbox_checked('mon');
    checkbox_checked('thu');
    checkbox_checked('wed');
    checkbox_checked('tue');
    checkbox_checked('fri');
    checkbox_checked('sat');

}
function confData(day){
    var element = document.getElementById(day);
    var elementText = document.getElementById(day + 'text');
    elementText.style.display = "inline";
    var checkbox = document.getElementById(day + 'box');
    if (checkbox.checked) {
        localStorage.setItem(day + 'check','1');
        if(!element.value){
            elementText.innerText = '--';
        }else{
            elementText.innerText = element.value;
        }
        localStorage.setItem(day + '_time',element.value);
        console.log("cheaked");
     } else {
        localStorage.setItem(day + 'check','0');
        elementText.innerText = '--';
        element.value = '--:--';
        localStorage.setItem(day + '_time','--');
        console.log("nocheaked");
     }
     element.style.visibility = "hidden";
}
function toggletext(day) {
    var checkbox = document.getElementById(day + 'box');
    var timeInput = document.getElementById(day);
    var a = document.getElementById(day + '1');
    if (checkbox && timeInput) {
        if (checkbox.checked) {
            timeInput.style.visibility = "visible";
            //a.style.visibility = "visible";
            localStorage.setItem(day+'box',1);

        } else {
            timeInput.style.visibility = "hidden";
            //a.style.visibility = "hidden";
            localStorage.setItem(day+'box',0);
        }
    } else {
        console.error('Element not found for day:', day);
    }
}

function checkbox_checked(day){
    console.log(day);
    console.log(document.getElementById(day + 'box').checked);
   var checkbox = document.getElementById(day+'box');
   if(checkbox.checked){
       localStorage.setItem(day+'box','1');
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