window.addEventListener("load",a);

function a(){
    
    document.getElementById('button').innerHTML='<button type="button" onclick="buttonclick()">編集</button>';
    if(localStorage.getItem('login') === '1'){
        console.log('二回目以降');
    }else{
        console.log('初めてのログイン');
        setDefaultValue('sun');
        setDefaultValue('mon');
        setDefaultValue('tue');
        setDefaultValue('wed');
        setDefaultValue('thu');
        setDefaultValue('fri');
        setDefaultValue('sat');
    }
    
    displayElementText('sun');
    displayElementText('mon');
    displayElementText('tue');
    displayElementText('wed');
    displayElementText('thu');
    displayElementText('fri');
    displayElementText('sat');
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
    localStorage.setItem(day + '_start_minute',"00");
    localStorage.setItem(day + '_range',"5");
    localStorage.setItem(day + '_time',"07:30");
}
function check(day){
    var checkbox = document.getElementById(day + 'Box');
    if(localStorage.getItem(day + '_check') === '1'){
        checkbox.checked = true;
    }
}
function displayElementText(day){
    var elementTime = document.getElementById(day + 'Time');
    var elementTimeText = document.getElementById(day + 'TimeText');
    var elementRange = document.getElementById(day + 'RangeSelect');
    var elementRangeText = document.getElementById(day + 'RangeText');
    var checkbox = document.getElementById(day + 'Box');
    elementTime.style.display = "none";
    elementTimeText.style.display = 'inline';
    elementRange.style.display = "none";
    elementRangeText.style.display = "inline";
    elementTimeText.style.visibility = "visible";
    elementRangeText.style.visibility = "visible";
    if(localStorage.getItem(day + '_check') === '1'){//チェックボックスがON
        elementTimeText.innerText = localStorage.getItem(day + '_time');
        elementRangeText.innerText = localStorage.getItem(day + '_range');
    }else{
        elementTimeText.innerText = "--:--";
        elementRangeText.innerText = "--";
    }

    if(localStorage.getItem(day + '_check') === '1'){
        checkbox.checked = true;
    }
    checkbox.style.visibility = "hidden";
}

function buttonclick(){

    displayElementInput('sun');
    displayElementInput('mon');
    displayElementInput('tue');
    displayElementInput('wed');
    displayElementInput('thu');
    displayElementInput('fri');
    displayElementInput('sat');

    document.getElementById('button').innerHTML='<button type="button" onclick="buttonclick2();sleepMode()">確定</button>';
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
function displayElementInput(day){
    var elementTime = document.getElementById(day + 'Time');
    var elementTimeText = document.getElementById(day + 'TimeText');
    var elementRange = document.getElementById(day + 'RangeSelect');
    var elementRangeText = document.getElementById(day + 'RangeText');
    var checkbox = document.getElementById(day + 'Box');
    if(checkbox.checked){
        elementTime.style.display = "inline";
        elementRange.style.display = "inline";
        elementTimeText.style.display = "none";
        elementRangeText.style.display = "none";
    }else{
        // elementTimeText.style.visibility = "hidden";
        // elementRangeText.style.visibility = "hidden";
    }
    checkbox.style.visibility = "visible";
}
function buttonclick2(){
    sleepMode();
    localStorage.setItem('login','1');

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
    setData('thu',tueHour,tueMinute);
    setData('wed',wedHour,wedMinute);
    setData('tue',thuHour,thuMinute);
    setData('fri',friHour,friMinute);
    setData('sat',satHour,satMinute);
        
    document.getElementById('button').innerHTML='<button type="button" onclick="buttonclick()">編集</button>';

    start();
}


function setData(day,Hour,Minute){
    var elementTime = document.getElementById(day + 'Time');
    var elementRange = document.getElementById(day + 'RangeSelect');
    var checkbox = document.getElementById(day + 'Box');
    if (checkbox.checked) {//チェックボックスがON
        localStorage.setItem(day + '_range',elementRange.value);
        localStorage.setItem(day + '_start_hour',Hour);
        localStorage.setItem(day + '_start_minute',Minute);
        localStorage.setItem(day + '_time',elementTime.value);
        localStorage.setItem(day + '_check','1');
    }else{//チェックボックスがOFF
        localStorage.setItem(day + '_range',elementRange.value);
        localStorage.setItem(day + '_start_hour',Hour);
        localStorage.setItem(day + '_start_minute',Minute);
        localStorage.setItem(day + '_time',elementTime.value);
        localStorage.setItem(day + '_check','0');
    }
    displayElementText(day);
}

function toggleText(day){
    elementBox = document.getElementById(day + 'Box');
    if(elementBox.checked){
        displayElementInput(day);
    }else{
        var elementTime = document.getElementById(day + 'Time');
        var elementTimeText = document.getElementById(day + 'TimeText');
        var elementRange = document.getElementById(day + 'RangeSelect');
        var elementRangeText = document.getElementById(day + 'RangeText');
        var checkbox = document.getElementById(day + 'Box');
        elementTime.style.display = "none";
        elementTimeText.style.display = 'inline';
        elementRange.style.display = "none";
        elementRangeText.style.display = "inline";
        elementTimeText.style.visibility = "visible";
        elementRangeText.style.visibility = "visible";
        elementTimeText.innerText = "--:--";
        elementRangeText.innerText = "--";
        

    }
}