window.addEventListener("load",a);

function a(){
    console.log(localStorage.getItem('mon_range'));
    
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
        rangetext.innerText = "";
    }
    element.style.visibility = "hidden";
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