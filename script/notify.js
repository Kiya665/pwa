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
  function getNextAlarm(){
    const now = new Date();

    const minuteCheck = now.getMinutes();
    const hourCheck = now.getHours();
    const dayCheck = now.getDay();
    for(let i = 0;i < 7;i++){
      
    }
  }
}

