var onBackgroundColor = '#87ceeb';
var offBackgroundColor = '#d3d3d3';

function a(){
    displayElement('sun');
    displayElement('mon');
    displayElement('tue');
    displayElement('wed');
    displayElement('thu');
    displayElement('fri');
    displayElement('sat');
    if(localStorage.getItem('measured_distance')){
        //console.log('二回目以降');
    }else{
        //console.log('初めてのログイン');
        setDefaultValue('sun');
        setDefaultValue('mon');
        setDefaultValue('tue');
        setDefaultValue('wed');
        setDefaultValue('thu');
        setDefaultValue('fri');
        setDefaultValue('sat');
        if (!('Notification' in window)) {
            alert('このブラウザはプッシュ通知に対応してません。。。');
        }else{
            Notification.requestPermission().then(permission => {
            if (permission === 'granted') alert('通知の許可がもらえました');
            if (permission === 'denied') alert('通知の許可がもらえませんでした');
            });
        }
        alert("距離を設定してください");
        window.location.href="measure.html";
    }
    if(!localStorage.getItem('measured_distance')){
        document.getElementById('alert').innerHTML = "距離が設定されていません。";
    }
    
    displayElement('sun');
    displayElement('mon');
    displayElement('tue');
    displayElement('wed');
    displayElement('thu');
    displayElement('fri');
    displayElement('sat');
    // console.log('現在のチェックボックス状況:\n' +
    //     localStorage.getItem('suncheck')+ '\n' +
    //     localStorage.getItem('moncheck')+ '\n' +
    //     localStorage.getItem('tuecheck')+ '\n' +
    //     localStorage.getItem('wedcheck')+ '\n' +
    //     localStorage.getItem('thucheck')+ '\n' +
    //     localStorage.getItem('fricheck')+ '\n' +
    //     localStorage.getItem('satcheck')+ '\n'   
    // );
}
function setDefaultValue(day){
    localStorage.setItem(day + '_start_hour',"07");
    localStorage.setItem(day + '_start_minute',"30");
    localStorage.setItem('range',"60");
    localStorage.setItem(day + '_time',"07:30");
    localStorage.setItem(day + 'check',"0");

    localStorage.setItem('measured_distance',"1000");//test用。後で消す
}
function check(day){
    var checkbox = document.getElementById(day + 'Box');
    if(localStorage.getItem(day + '_check') === '1'){
        checkbox.checked = true;
    }
}
function displayElement(day){
    var elementTime = document.getElementById(day + 'Time');
    var elementDom = document.getElementById(day + 'Dom');
    var elementTimeText = document.getElementById(day + 'TimeText');
    var checkbox = document.getElementById(day + 'Box');
    elementTime.value = localStorage.getItem(day + "_time");
    elementTime.style.display = "none";
    elementTimeText.style.display = 'inline';
    if(localStorage.getItem(day + '_check') === '1'){//チェックボックスがON
        elementDom.style.backgroundColor = onBackgroundColor;
        checkbox.checked = true;
    }else{
        elementDom.style.backgroundColor = offBackgroundColor;
        checkbox.checked = false;
    }
    elementTimeText.innerText = localStorage.getItem(day + '_time');
}


function test(){
    console.log(
        localStorage.getItem('sun_time'),
        localStorage.getItem('sun_start_hour'),
        localStorage.getItem('sun_start_minute'),"\n",

        localStorage.getItem('mon_time'),
        localStorage.getItem('mon_start_hour'),
        localStorage.getItem('mon_start_minute'),"\n",

        localStorage.getItem('tue_time'),
        localStorage.getItem('tue_start_hour'),
        localStorage.getItem('tue_start_minute'),"\n",

        localStorage.getItem('wed_time'),
        localStorage.getItem('wed_start_hour'),
        localStorage.getItem('wed_start_minute'),"\n",

        localStorage.getItem('thu_time'),
        localStorage.getItem('thu_start_hour'),
        localStorage.getItem('thu_start_minute'),"\n",

        localStorage.getItem('fri_time'),
        localStorage.getItem('fri_start_hour'),
        localStorage.getItem('fri_start_minute'),"\n",

        localStorage.getItem('sat_time'),
        localStorage.getItem('sat_start_hour'),
        localStorage.getItem('sat_start_minute'),"\n"
    );
}

function settingSave(){
    localStorage.setItem('login','1');

    let message = document.getElementById('message');
    message.classList.add('msg');
    message.style.opacity = 0;
    message.innerText = '設定を保存しました';

    console.log(document.getElementById('tueTime').value);
    var sunHour = (document.getElementById('sunTime').value).slice(0, 2);
    var monHour = (document.getElementById('monTime').value).slice(0, 2);
    var tueHour = (document.getElementById('tueTime').value).slice(0, 2);
    var wedHour = (document.getElementById('wedTime').value).slice(0, 2);
    var thuHour = (document.getElementById('thuTime').value).slice(0, 2);
    var friHour = (document.getElementById('friTime').value).slice(0, 2);
    var satHour = (document.getElementById('satTime').value).slice(0, 2);
    var sunMinute = (document.getElementById('sunTime').value).slice(3, 5);
    var monMinute = (document.getElementById('monTime').value).slice(3, 5);
    var tueMinute = (document.getElementById('tueTime').value).slice(3, 5);
    var wedMinute = (document.getElementById('wedTime').value).slice(3, 5);
    var thuMinute = (document.getElementById('thuTime').value).slice(3, 5);
    var friMinute = (document.getElementById('friTime').value).slice(3, 5);
    var satMinute = (document.getElementById('satTime').value).slice(3, 5);
    setData('sun',sunHour,sunMinute);
    setData('mon',monHour,monMinute);
    setData('tue',tueHour,tueMinute);
    setData('wed',wedHour,wedMinute);
    setData('thu',thuHour,thuMinute);
    setData('fri',friHour,friMinute);
    setData('sat',satHour,satMinute);
    displayElement('sun');
    displayElement('mon');
    displayElement('tue');
    displayElement('wed');
    displayElement('thu');
    displayElement('fri');
    displayElement('sat');
    document.getElementById('settingButton').innerHTML = '';

    start();
}


function setData(day,Hour,Minute){
    console.log("Hour : " + Hour + "minute" + Minute);
    var elementTime = document.getElementById(day + 'Time');
    var checkbox = document.getElementById(day + 'Box');
    if (checkbox.checked) {//チェックボックスがON
        localStorage.setItem(day + '_start_hour',Hour);
        localStorage.setItem(day + '_start_minute',Minute);
        localStorage.setItem(day + '_time',elementTime.value);
        localStorage.setItem(day + '_check','1');
    }else{//チェックボックスがOFF
        localStorage.setItem(day + '_start_hour',Hour);
        localStorage.setItem(day + '_start_minute',Minute);
        localStorage.setItem(day + '_time',elementTime.value);
        localStorage.setItem(day + '_check','0');
    }
}

function toggleText(day){
    var elementBox = document.getElementById(day + 'Box');
    var elementDom = document.getElementById(day + 'Dom');        
    var elementTime = document.getElementById(day + 'Time');
    var elementTimeText = document.getElementById(day + 'TimeText');
    if(elementBox.checked){
        elementDom.style.backgroundColor = onBackgroundColor;
    }else{
        elementDom.style.backgroundColor = offBackgroundColor;
    }
    elementTimeText.innerText = localStorage.getItem(day + '_time');
}

function settingDiscarding(){

    let message = document.getElementById('message');
    message.classList.add('msg');
    message.style.opacity = 0;
    message.innerText = '設定を破棄しました';

    displayElement('sun');
    displayElement('mon');
    displayElement('tue');
    displayElement('wed');
    displayElement('thu');
    displayElement('fri');
    displayElement('sat');
    document.getElementById('settingButton').innerHTML = '';
}

window.addEventListener('load',()=>{
    a();
    displayElementTime('sun');
    displayElementTime('mon');
    displayElementTime('tue');
    displayElementTime('wed');
    displayElementTime('thu');
    displayElementTime('fri');
    displayElementTime('sat');
    document.getElementById('message').innerHTML = "&nbsp";
});

function displayElementTime(day){
    document.getElementById(day + 'TimeText').addEventListener('click',() =>{
        var elementTime = document.getElementById(day + 'Time');
        var elementTimeText = document.getElementById(day + 'TimeText');
        elementTime.value = localStorage.getItem(day + '_time');
        var elementBox = document.getElementById(day + 'Box');
        elementTimeText.style.display = "none";
        elementTime.style.display = "inline";
        elementBox.click();
    });
    document.getElementById('timeDom').addEventListener('click',() =>{
        let message = document.getElementById('message');
        message.innerHTML = "&nbsp";
        message.classList.remove('msg');
        message.style.opacity = 1;
        
        document.getElementById('settingButton').innerHTML = '<button type="button" id="settingDiscardingButton" onclick="settingDiscarding()">設定を破棄</button><span class="space"></span><button type="button" id="settingSaveButton" onclick="settingSave()">設定を保存</button>';
    })
}