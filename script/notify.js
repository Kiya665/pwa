function notify(){
    if (!('Notification' in window)) {
        alert('このブラウザはプッシュ通知に対応してません。。。');
        return;
      }

      const permission = Notification.permission;
      if (permission === 'granted') {
        navigator.serviceWorker.ready.then(registration => {
          registration.active.postMessage('hello!!!');
        });
      } else {
        alert('通知の許可がもらえませんよ');
      }
}
