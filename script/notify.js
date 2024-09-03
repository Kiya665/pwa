function createNotification(message){//通知送信関数
// if (!('Notification' in window)) {
//     alert('このブラウザはプッシュ通知に対応してません。。。');
//     return;
//   }

  const permission = Notification.permission;
  if (permission === 'granted') {
    // navigator.serviceWorker.ready.then(registration => {
    //   registration.active.postMessage('hello');
    // });
    const notification = new Notification(message,{body:'test'});
  } else {
    alert('通知の許可がもらえませんよ');
  }
}
let timeoutID;
//let timeoutID2;

function start(){//次のアラーム開始時刻に変更がある際に呼び出さないといけない関数
  clearTimeout(timeoutID);
  let sleepTime = getSleepTime();
  console.log('sleepTime',sleepTime);

  timeoutID = setTimeout(checkNotificationCondition,sleepTime);
}

let intervalID;
function checkNotificationCondition(){//アラーム開始関数。アラーム終了時刻を計算して、checkSleepStateに渡す。
  const alarmData = getNextAlarm();
  const endTime = new Date();
  console.log(endTime.getHours(),endTime.getMinutes());
  endTime.setMinutes(endTime.getMinutes() + parseInt(alarmData[3]));
  let hour = endTime.getHours();
  let minute = endTime.getMinutes();
  console.log('checkNotification起動');
  intervalID = setInterval(checkSleepState,10000,hour,minute);
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

  let nextAlarmData = getNextAlarm();

  let day = (parseInt(nextAlarmData[0]) - parseInt(dayCheck) + 7) % 7;
  // let hour = (parseInt(nextAlarmData[1]) - parseInt(hourCheck) + 24) % 24;
  // let minute = (parseInt(nextAlarmData[2]) - parseInt(minuteCheck) + 60) % 60;
  let nowTime = hourCheck * 60 + minuteCheck;
  let time = parseInt(nextAlarmData[1]) * 60 + parseInt(nextAlarmData[2]);
  let diffTime = (time - nowTime + 1440) % 1440;
  if(parseInt(nextAlarmData[1] + nextAlarmData[2]) < parseInt(hourCheck * 100 + minuteCheck)){
    if(parseInt(nextAlarmData[0]) === parseInt(dayCheck)){
      day += 7;
    }
    day -= 1;
  }
  console.log(nextAlarmData[0],nextAlarmData[1],nextAlarmData[2],':',day,diffTime);
  let sleepTime = day * 24 *  60 * 60 * 1000 + diffTime * 60 * 1000;
  return sleepTime;
}

function setSleepNotify(){// おやすみ通知を送る時刻を計算しセット
  let sleepTime = getSleepTime();
  let sleepNotifyTime = parseInt(localStorage.getItem('sleep_notify_time'));
  let SNTMilliSec = sleepNotifyTime * 60 * 60 * 1000; // おやすみ通知を送るまでの時間をミリ秒にしたもの
  console.log('*ST*' + (sleepTime / 60 / 60 / 1000));
  console.log('*SNT*' + (SNTMilliSec / 60 / 60 / 1000));
  console.log('*wait*' + ((sleepTime - SNTMilliSec) / 60 / 60 / 1000));

  console.log('*tue_start_time*' + localStorage.getItem('tue_start_hour') + ':' + localStorage.getItem('tue_start_minute'));

  if ((sleepTime - SNTMilliSec) >= 0)
  {
    setTimeout(createNotification, sleepTime - SNTMilliSec, '就寝時刻になりました');
  }
}

window.addEventListener('load',() =>{
  // setSettingData();
  setSleepNotify();
  console.log(timeoutID);
  console.log(getSleepTime());
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
    if(settingData[i][1] !== '--'){
      if(dayCheck === i){
        if(parseInt(settingData[i][1] + settingData[i][2]) > (hourCheck * 100 + minuteCheck)){
          break;
        }
      }else{
        break;
      }
    }
  }
  nextAlarmDay = settingData[i][0];
  nextAlarmHour = settingData[i][1];
  nextAlarmMinute = settingData[i][2];
  nextAlarmRange = settingData[i][3]
  let alarmData = [nextAlarmDay,nextAlarmHour,nextAlarmMinute,nextAlarmRange];
  return alarmData;
}

function getSettingData(){//localstrageのデータをすべて配列にする。getNextAlarmで必要。
  let data = [['0',localStorage.getItem('sun_start_hour'),localStorage.getItem('sun_start_minute'),localStorage.getItem('sun_range')],
              ['1',localStorage.getItem('mon_start_hour'),localStorage.getItem('mon_start_minute'),localStorage.getItem('mon_range')],
              ['2',localStorage.getItem('tue_start_hour'),localStorage.getItem('tue_start_minute'),localStorage.getItem('tue_range')],
              ['3',localStorage.getItem('wed_start_hour'),localStorage.getItem('wed_start_minute'),localStorage.getItem('wed_range')],
              ['4',localStorage.getItem('thu_start_hour'),localStorage.getItem('thu_start_minute'),localStorage.getItem('thu_range')],
              ['5',localStorage.getItem('fri_start_hour'),localStorage.getItem('fri_start_minute'),localStorage.getItem('fri_range')],
              ['6',localStorage.getItem('sat_start_hour'),localStorage.getItem('sat_start_minute'),localStorage.getItem('sat_range')],
            ];
  return data;
}

function setSettingData(){//テスト用データ。後で消す。
  localStorage.setItem('sun_start_hour','--');
  localStorage.setItem('sun_start_minute','00');
  localStorage.setItem('sun_range','60');
  localStorage.setItem('mon_start_hour','--');
  localStorage.setItem('mon_start_minute','00');
  localStorage.setItem('mon_range','60');
  localStorage.setItem('tue_start_hour','15');
  localStorage.setItem('tue_start_minute','17');
  localStorage.setItem('tue_range','1');
  localStorage.setItem('wed_start_hour','--');
  localStorage.setItem('wed_start_minute','55');
  localStorage.setItem('wed_range','60');
  localStorage.setItem('thu_start_hour','--');
  localStorage.setItem('thu_start_minute','30');
  localStorage.setItem('thu_range','60');
  localStorage.setItem('fri_start_hour','--');
  localStorage.setItem('fri_start_minute','30');
  localStorage.setItem('fri_range','60');
  localStorage.setItem('sat_start_hour','--');
  localStorage.setItem('sat_start_minute','30');
  localStorage.setItem('sat_range','60');
}

function checkSleepState(hour,minute){//python呼び出す関数。checkNotificationConditionから渡されたhour,minuteになると終わる。
  console.log('通知送信');
  createNotification('test');
  const now = new Date();

  const hourCheck = now.getHours();
  const minuteCheck = now.getMinutes();

  let matched = parseInt(hour) === hourCheck;
  matched &&= parseInt(minute) === minuteCheck;
  if(matched){
    releaseInterval();
    console.log('通知終了');
  }
  // let settingDistnce = localStorage.getItem('measured_distance');
  // fetch('../sleepState.py')
  //   .then(response => response.json())
  //   .then(data => {
  //       if(settingDistnce > data){
  //         createNotification();
  //       }
  //   })
  //   .catch(error => {
  //       console.log(error);
  //   });
}