window.addEventListener('DOMContentLoaded', function(){
    document.querySelector("input[name=firstOnceSound]").addEventListener('change',function(){
    if(document.querySelector("input[name=firstOnceSound]").checked){
        localStorage.setItem('first_once_sound','on');
        //console.log(localStorage.getItem('first_once_sound'));
    }else{
        localStorage.setItem('first_once_sound','off');
        //console.log(localStorage.getItem('first_once_sound'));
    }
    })
});
// おやすみ通知を送らない設定のとき 何時間前に通知を送るかの選択肢を隠す
function displayTime(){
    document.getElementById("sleepNotifyTime").style.display = "block";
}

// おやすみ通知を送る設定のとき 何時間前に通知を送るかの選択肢を表示する
function hiddenTime(){
    document.getElementById("sleepNotifyTime").style.display = "none";
}