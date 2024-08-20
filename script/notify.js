window.onload = () => {
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
  function checkNotificationCondition(){
    const now = new Date();

    const minuteCheck = now.getMinutes();
    const hourCheck = now.getHours();
    const dayCheck = now.getDay();
  }
  let data = ['0'['8','50']];
  function getNextAlarm(data){
    const now = new Date();

    const minuteCheck = now.getMinutes();
    const hourCheck = now.getHours();
    const dayCheck = now.getDay();
    let count = 0;
    for(let i = dayCheck;count < 7;(i++)%7,count++){
      
    }
  }
}
// 0 6
// 1 0
// 2 1
// 3 2
// 4 3
// 5 4
// 6 5

// 6 0
