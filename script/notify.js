function createNotification(){
if (!('Notification' in window)) {
    alert('このブラウザはプッシュ通知に対応してません。。。');
    return;
  }

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
function checkNotificationCondition(data){
  const now = new Date();

  const dayCheck = now.getDay();
  const hourCheck = now.getHours();
  const minuteCheck = now.getMinutes();

  let alarmData = getNextAlarm(data);

  let day = (parseInt(alarmData[0]) - parseInt(dayCheck) + 7) % 7;
  let hour = (parseInt(alarmData[1]) - parseInt(hourCheck) + 24) % 24;
  let minute = (parseInt(alarmData[2]) - parseInt(minuteCheck) + 60) % 60;

  if(parseInt(alarmData[0]) == parseInt(dayCheck) && parseInt(alarmData[1] + alarmData[2]) < parseInt(hourCheck + minuteCheck)){
    day += 6;
  }
  let sleepTime = day * 24 *  60 * 60 * 1000 + hour * 60 * 60 * 1000 + minute * 60 * 1000;
  setTimeout(createNotification,sleepTime);
}
let data = [['0','8','50'],
            ['1','7','30'],
            ['2','9','30'],
            ['3','8','50'],
            ['4','7','30'],
            ['5','9','30'],
            ['6','9','30'],
          ];

function getNextAlarm(data){
  const now = new Date();

  const dayCheck = now.getDay();
  const hourCheck = now.getHours();
  const minuteCheck = now.getMinutes();
  let count = 0;
  let nextAlarmDay;
  let nextAlarmHour;
  let nextAlarmMinute;
  let i = dayCheck;
  for(;count < 7;(i++)%=7,count++){
    if(data[i][1]!= -1){
      if(data[i][0] == i){
        if(parseInt(data[i][1] + data[i][2]) > parseInt(hourCheck + minuteCheck)){
          break;
        }
      }else{
        break;
      }
    }
  }
  nextAlarmDay = data[i][0];
  nextAlarmHour = data[i][1];
  nextAlarmMinute = data[i][2];
  let alarmData = [nextAlarmDay,nextAlarmHour,nextAlarmMinute];
  return alarmData;
}

function getSettingData(){
  let data = [[]];
}