function createNotification(){//通知送信関数
// if (!('Notification' in window)) {
//     alert('このブラウザはプッシュ通知に対応してません。。。');
//     return;
//   }

  console.log("createNotification実行");
  var now = new Date();
  const permission = Notification.permission;
  if (permission === 'granted') {
    navigator.serviceWorker.ready.then(registration => {
      registration.active.postMessage('hello');
    });
    // const notification = new Notification("test");
    console.log("現在時刻 : ", now.getDay(),now.getHours(),"時",now.getMinutes(),"分,通知送信");
  } else {
   alert('通知の許可がもらえませんよ');
  }
}
let timeoutID;
//let timeoutID2;

function start(){//次のアラーム開始時刻に変更がある際に呼び出さないといけない関数
  clearTimeout(timeoutID);
  sleepMode();
  let sleepTime = getSleepTime();
  if(sleepTime !== false){
    timeoutID = setTimeout(checkNotificationCondition,sleepTime - 1000);
  }else{
    console.log("アラームが未設定です");
  }
}

let intervalID;
function checkNotificationCondition(){//アラーム開始関数。アラーム終了時刻を計算して、checkSleepStateに渡す。
  const alarmData = getNextAlarm();
  const endTime = new Date();
  endTime.setMinutes(endTime.getMinutes() + parseInt(alarmData[2]));
  let hour = endTime.getHours();
  let minute = endTime.getMinutes();
  console.log('checkNotification起動');
  intervalID = setInterval(checkSleepState,30000,hour,minute);
  console.log("通知終了時刻: ",hour,"時",minute,"分");
}

function releaseInterval(){//アラーム終了関数。clearInterval後、次のアラーム時刻までTimeoutする。
  clearInterval(intervalID);

  let sleepTime = getSleepTime();
  timeoutID = setTimeout(checkNotificationCondition,sleepTime);
}

function getSleepTime(){//現在時刻から次のアラーム時刻までをミリ秒で返す関数。
  const now = new Date();

  const dayCheck = now.getDay();
  const hourCheck = now.getHours();
  const minuteCheck = now.getMinutes();

  var nextAlarmData = getNextAlarm();
  if(nextAlarmData === false){
    return false;
  }else{
    let day = (parseInt(nextAlarmData[0]) - parseInt(dayCheck) + 7) % 7;
    // let hour = (parseInt(nextAlarmData[1]) - parseInt(hourCheck) + 24) % 24;
    // let minute = (parseInt(nextAlarmData[2]) - parseInt(minuteCheck) + 60) % 60;
    let nowTime = hourCheck * 60 + minuteCheck;
    let time = parseInt(nextAlarmData[2]) * 60 + parseInt(nextAlarmData[3]);
    let diffTime = (time - nowTime + 1440) % 1440;
    if(parseInt(nextAlarmData[2] + nextAlarmData[3]) < parseInt(hourCheck * 100 + minuteCheck)){
      if(parseInt(nextAlarmData[0]) === parseInt(dayCheck)){
        day += 7;
      }
      day -= 1;
    }
    //console.log(nextAlarmData[0],nextAlarmData[1],nextAlarmData[2],':',day,diffTime);
    let sleepTime = day * 24 *  60 * 60 * 1000 + diffTime * 60 * 1000;
    console.log(sleepTime);
    return sleepTime;
  }
}

function setSleepNotify(){// おやすみ通知を送る時刻を計算しセット
  let sleepTime = getSleepTime();
  if(sleepTime !== false){
    let sleepNotifyTime = parseInt(localStorage.getItem('sleep_notify_time'));
    let SNTMilliSec = sleepNotifyTime * 60 * 60 * 1000; // おやすみ通知を送るまでの時間をミリ秒にしたもの
    console.log('*ST*' + (sleepTime / 60 / 60 / 1000));
    console.log('*SNT*' + (SNTMilliSec / 60 / 60 / 1000));
    console.log('*wait*' + ((sleepTime - SNTMilliSec) / 60 / 60 / 1000));
  
    console.log('*tue_start_time*' + localStorage.getItem('tue_start_hour') + ':' + localStorage.getItem('tue_start_minute'));
  
    if ((sleepTime - SNTMilliSec) >= 0)
    {
      setTimeout(createNotification, sleepTime - SNTMilliSec);
    }
  }
}

window.addEventListener('load',() =>{
  // setSettingData();
  setSleepNotify();
  start();
})


function getNextAlarm(){//次のアラームデータを要素数4で返す。[曜日(0~6),アラーム開始時間,アラーム開始分,アラーム期間]
  const now = new Date();

  const dayCheck = now.getDay();
  const hourCheck = now.getHours();
  const minuteCheck = now.getMinutes();
  let settingData = getSettingData();
  let count = 0;
  let nextAlarmDay;
  let nextAlarmHour;
  let nextAlarmMinute;
  let nextAlarmRange;
  let i = dayCheck;
  for(;count < 7;i = (i+1)%7,count++){
    if(settingData[i][1] === '1'){
      if(dayCheck === i){
        if(parseInt(settingData[i][2] + settingData[i][3]) > parseInt(hourCheck * 100 + minuteCheck)){
          break;
        }
      }else{
        break;
      }
    }
  }
  if(count === 7){
    return false;
  }else{
  nextAlarmDay = settingData[i][0];
  nextAlarmFlag = settingData[i][1];
  nextAlarmHour = settingData[i][2];
  nextAlarmMinute = settingData[i][3];
  nextAlarmRange = settingData[i][4]
  let alarmData = [nextAlarmDay,nextAlarmFlag,nextAlarmHour,nextAlarmMinute,nextAlarmRange];
  console.log("次のアラームは : ",nextAlarmDay,nextAlarmHour,nextAlarmMinute);
  return alarmData;
  }
}

function getSettingData(){//localstrageのデータをすべて配列にする。getNextAlarmで必要。
  let data = [['0',localStorage.getItem('sun_check'),localStorage.getItem('sun_start_hour'),localStorage.getItem('sun_start_minute'),localStorage.getItem('range')],
              ['1',localStorage.getItem('mon_check'),localStorage.getItem('mon_start_hour'),localStorage.getItem('mon_start_minute'),localStorage.getItem('range')],
              ['2',localStorage.getItem('tue_check'),localStorage.getItem('tue_start_hour'),localStorage.getItem('tue_start_minute'),localStorage.getItem('range')],
              ['3',localStorage.getItem('wed_check'),localStorage.getItem('wed_start_hour'),localStorage.getItem('wed_start_minute'),localStorage.getItem('range')],
              ['4',localStorage.getItem('thu_check'),localStorage.getItem('thu_start_hour'),localStorage.getItem('thu_start_minute'),localStorage.getItem('range')],
              ['5',localStorage.getItem('fri_check'),localStorage.getItem('fri_start_hour'),localStorage.getItem('fri_start_minute'),localStorage.getItem('range')],
              ['6',localStorage.getItem('sat_check'),localStorage.getItem('sat_start_hour'),localStorage.getItem('sat_start_minute'),localStorage.getItem('range')],
            ];
  return data;
}



function checkSleepState(hour,minute){//python呼び出す関数。checkNotificationConditionから渡されたhour,minuteになると終わる。
  createNotification();
  const now = new Date();

  const hourCheck = now.getHours();
  const minuteCheck = now.getMinutes();

  let matched = parseInt(hour) === hourCheck;
  matched &&= parseInt(minute) === minuteCheck;
  if(matched){
    releaseInterval();
    console.log('通知終了');
  }
  let settingDistnce = localStorage.getItem('measured_distance');
  fetch('./script/sleepState.py')
    .then(response => response.json())
    .then(data => {
        if(settingDistnce * 0.9 > data){
          createNotification();
        }else{
          console.log("起床済み");
        }
    })
    .catch(error => {
        console.log(error);
    });
}
//1000 500
//1000 999