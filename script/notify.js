// 引数notifyMessageを受け取って通知を出すように変更しました
function notify(notifyMessage){
    if (!('Notification' in window)) {
        alert('このブラウザはプッシュ通知に対応してません。。。');
        return;
      }

      const permission = Notification.permission;
      if (permission === 'granted') {
        navigator.serviceWorker.ready.then(registration => {
          registration.active.postMessage(notifyMessage);
        });
      } else {
        alert('通知の許可がもらえませんよ');
      }
}
