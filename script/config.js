window.addEventListener('DOMContentLoaded', function(){
    // firstOnceSound(最低一回は通知する設定)の保存
    let firstOnceSoundCheck = document.getElementById('firstOnceSound');
    firstOnceSoundCheck.addEventListener('change',function(){
        if(firstOnceSoundCheck.checked){
            localStorage.setItem('first_once_sound','on');
        }
        else
        {
            localStorage.setItem('first_once_sound','off');
        }
    })

    // 保存した設定の反映
    if (localStorage.getItem('first_once_sound') === 'on')
    {
        firstOnceSoundCheck.checked = true;
    }
    else
    {
        firstOnceSoundCheck.checked = false;
    }

    // sleepNotify(おやすみ通知の設定)の保存
    let sleepNotifyCheck = document.getElementById('sleepNotify');
    sleepNotifyCheck.addEventListener('change', function(){
        if (sleepNotifyCheck[0].checked === true)
        {
            localStorage.setItem('sleep_notify', 'send');
        }
        else
        {
            localStorage.setItem('sleep_notify', 'nosend');
        }
    })

    // 保存した設定の反映
    //sleepNotifyCheck[0]は「送る」 [1]は「送らない」設定
    if (localStorage.getItem('sleep_notify') === 'send')
    {
        sleepNotifyCheck[0].checked = true;
    }
    else
    {
        sleepNotifyCheck[1].checked = true;   
    }

    // 「送らない」が保存されている場合何時間前に通知を送るかの選択肢を隠す
    if (localStorage.getItem('sleep_notify') === 'nosend')
    {
        hiddenTime();
    }

    // sleepNotifyTime(おやすみ通知を送る時間の設定)の保存
    let sleepNotifyTimeCheck = document.getElementById('sleepNotifyTime');
    sleepNotifyTimeCheck.addEventListener('change', function(){
        localStorage.setItem('sleep_notify_time', sleepNotifyTimeCheck.value);
    })

    // 保存した設定の反映
    sleepNotifyTimeCheck.value = localStorage.getItem('sleep_notify_time');
});
// おやすみ通知を送らない設定のとき 何時間前に通知を送るかの選択肢を隠す
function displayTime(){
    document.getElementById("selectList").style.display = "block";
}

// おやすみ通知を送る設定のとき 何時間前に通知を送るかの選択肢を表示する
function hiddenTime(){
    document.getElementById("selectList").style.display = "none";
}