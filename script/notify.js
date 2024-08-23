function createNotification(){
// if (!('Notification' in window)) {
//     alert('このブラウザはプッシュ通知に対応してません。。。');
//     return;
//   }

  const permission = Notification.permission;
  if (permission === 'granted') {
    // navigator.serviceWorker.ready.then(registration => {
    //   registration.active.postMessage('hello');
    // });
    const notification = new Notification('test',{body:'test'});
  } else {
    alert('通知の許可がもらえませんよ');
  }
}

// function checkNotificationCondition(){
//   let nextAlarmData = getNextAlarm();
//   let endTime = new Date(2024,1,nextAlarmData[1],nextAlarmData[2]);
//   endTime.setMinutes(nextAlarmData[3]);
//   if()

// }

function getSleepTime(){
  const now = new Date();

  const dayCheck = now.getDay();
  const hourCheck = now.getHours();
  const minuteCheck = now.getMinutes();

  let nextAlarmData = getNextAlarm();

  let day = (parseInt(nextAlarmData[0]) - parseInt(dayCheck) + 7) % 7;
  let hour = (parseInt(nextAlarmData[1]) - parseInt(hourCheck) + 24) % 24;
  let minute = (parseInt(nextAlarmData[2]) - parseInt(minuteCheck) + 60) % 60;

  if(parseInt(nextAlarmData[0]) == parseInt(dayCheck) && parseInt(nextAlarmData[1] + nextAlarmData[2]) < parseInt(hourCheck + minuteCheck)){
    day += 6;
  }
  let sleepTime = day * 24 *  60 * 60 * 1000 + hour * 60 * 60 * 1000 + minute * 60 * 1000;
  return sleepTime;
}

let data = [['0','8','50','60'],
            ['1','7','30','60'],
            ['2','9','30','60'],
            ['3','8','50','60'],
            ['4','7','30','60'],
            ['5','9','30','60'],
            ['6','9','30','60'],
          ];

function getNextAlarm(){
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
  for(;count < 7;(i++)%=7,count++){
    if(settingData[i][1]!= -1){
      if(data[i][0] == i){
        if(parseInt(settingData[i][1] + settingData[i][2]) > parseInt(hourCheck + minuteCheck)){
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

function getSettingData(){
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

function checkSleepState(){
  let settingDistnce = localStorage.getItem('settingDistnce');
  fetch('../sleepState.py')
    .then(response => response.json())
    .then(data => {
        if(settingDistnce > data){
          createNotification();
        }
    })
    .catch(error => {
        console.log(error);
    });
}