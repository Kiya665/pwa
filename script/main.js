window.addEventListener("load",a)

function a(){
    document.getElementById('button').innerHTML='<button type="button" onclick="buttonclick()">編集</button>';

    if(!localStorage.getItem('sun')){

        document.getElementById('suntext').innerText = document.getElementById('sun').value;

        document.getElementById('montext').innerText = document.getElementById('mon').value;

        document.getElementById('tuetext').innerText = document.getElementById('tue').value;

        document.getElementById('wedtext').innerText = document.getElementById('wed').value;

        document.getElementById('thutext').innerText = document.getElementById('thu').value;

        document.getElementById('fritext').innerText = document.getElementById('fri').value;

        document.getElementById('sattext').innerText = document.getElementById('sat').value;

        document.getElementById('sun1text').innerText = document.getElementById('sun1').value;

        document.getElementById('mon1text').innerText = document.getElementById('mon1').value;

        document.getElementById('tue1text').innerText = document.getElementById('tue1').value;

        document.getElementById('wed1text').innerText = document.getElementById('wed1').value;

        document.getElementById('thu1text').innerText = document.getElementById('thu1').value;

        document.getElementById('fri1text').innerText = document.getElementById('fri1').value;

        document.getElementById('sat1text').innerText = document.getElementById('sat1').value;
    }else{

        document.getElementById('suntext').innerText = localStorage.getItem('sun_start_hour');

        document.getElementById('montext').innerText = localStorage.getItem('mon_start_hour');

        document.getElementById('tuetext').innerText = localStorage.getItem('thu_start_hour');

        document.getElementById('wedtext').innerText = localStorage.getItem('wed_start_hour');

        document.getElementById('thutext').innerText = localStorage.getItem('thu_start_hour');

        document.getElementById('fritext').innerText = localStorage.getItem('fri_start_hour');

        document.getElementById('sattext').innerText = localStorage.getItem('sat_start_hour');

        document.getElementById('sun1text').innerText = localStorage.getItem('sun_start_minute');

        document.getElementById('mon1text').innerText = localStorage.getItem('mon_start_minute');

        document.getElementById('tue1text').innerText = localStorage.getItem('tue_start_minute');

        document.getElementById('wed1text').innerText = localStorage.getItem('wed_start_minute');

        document.getElementById('thu1text').innerText = localStorage.getItem('thu_start_minute');

        document.getElementById('fri1text').innerText = localStorage.getItem('fri_start_minute');

        document.getElementById('sat1text').innerText = localStorage.getItem('sat_start_minute');
    }
    
}

function buttonclick(){
    document.getElementById('button').innerHTML='<button type="button" onclick="buttonclick2()">確定</button>';
    var selectElement = document.getElementById('sun');
    var Element = document.getElementById('suntext');
    Element.style.display = "none";
    selectElement.style.display = "inline";

    var selectElement = document.getElementById('mon');
    var Element = document.getElementById('montext');
    Element.style.display = "none";
    selectElement.style.display = "inline";

    var selectElement = document.getElementById('tue');
    var Element = document.getElementById('tuetext');
    Element.style.display = "none";
    selectElement.style.display = "inline";

    var selectElement = document.getElementById('wed');
    var Element = document.getElementById('wedtext');
    Element.style.display = "none";
    selectElement.style.display = "inline";

    var selectElement = document.getElementById('thu');
    var Element = document.getElementById('thutext');
    Element.style.display = "none";
    selectElement.style.display = "inline";

    var selectElement = document.getElementById('fri');
    var Element = document.getElementById('fritext');
    Element.style.display = "none";
    selectElement.style.display = "inline";

    var selectElement = document.getElementById('sat');
    var Element = document.getElementById('sattext');
    Element.style.display = "none";
    selectElement.style.display = "inline";

    document.getElementById('button').innerHTML='<button type="button" onclick="buttonclick2()">確定</button>';
    var selectElement = document.getElementById('sun1');
    var Element = document.getElementById('sun1text');
    Element.style.display = "none";
    selectElement.style.display = "inline";

    var selectElement = document.getElementById('mon1');
    var Element = document.getElementById('mon1text');
    Element.style.display = "none";
    selectElement.style.display = "inline";

    var selectElement = document.getElementById('tue1');
    var Element = document.getElementById('tue1text');
    Element.style.display = "none";
    selectElement.style.display = "inline";

    var selectElement = document.getElementById('wed1');
    var Element = document.getElementById('wed1text');
    Element.style.display = "none";
    selectElement.style.display = "inline";

    var selectElement = document.getElementById('thu1');
    var Element = document.getElementById('thu1text');
    Element.style.display = "none";
    selectElement.style.display = "inline";

    var selectElement = document.getElementById('fri1');
    var Element = document.getElementById('fri1text');
    Element.style.display = "none";
    selectElement.style.display = "inline";

    var selectElement = document.getElementById('sat1');
    var Element = document.getElementById('sat1text');
    Element.style.display = "none";
    selectElement.style.display = "inline";
}

function buttonclick2(){
    document.getElementById('button').innerHTML='<button type="button" onclick="buttonclick()">編集</button>';
    var selectElement = document.getElementById('sun');
    var Element = document.getElementById('suntext');
    Element.style.display = "inline";
    document.getElementById('suntext').innerText = document.getElementById('sun').value;
    selectElement.style.display = "none";

    var selectElement = document.getElementById('mon');
    var Element = document.getElementById('montext');
    Element.style.display = "inline";
    document.getElementById('montext').innerText = document.getElementById('mon').value;
    selectElement.style.display = "none";

    var selectElement = document.getElementById('tue');
    var Element = document.getElementById('tuetext');
    Element.style.display = "inline";
    document.getElementById('tuetext').innerText = document.getElementById('tue').value;
    selectElement.style.display = "none";

    var selectElement = document.getElementById('wed');
    var Element = document.getElementById('wedtext');
    Element.style.display = "inline";
    document.getElementById('wedtext').innerText = document.getElementById('wed').value;
    selectElement.style.display = "none";

    var selectElement = document.getElementById('thu');
    var Element = document.getElementById('thutext');
    Element.style.display = "inline";
    document.getElementById('thutext').innerText = document.getElementById('thu').value;
    selectElement.style.display = "none";

    var selectElement = document.getElementById('fri');
    var Element = document.getElementById('fritext');
    Element.style.display = "inline";
    document.getElementById('fritext').innerText = document.getElementById('fri').value;
    selectElement.style.display = "none";

    var selectElement = document.getElementById('sat');
    var Element = document.getElementById('sattext');
    Element.style.display = "inline";
    document.getElementById('sattext').innerText = document.getElementById('sat').value;

    selectElement.style.display = "none";var selectElement = document.getElementById('sun1');
    var Element = document.getElementById('sun1text');
    Element.style.display = "inline";
    document.getElementById('sun1text').innerText = document.getElementById('sun1').value;
    selectElement.style.display = "none";

    var selectElement = document.getElementById('mon1');
    var Element = document.getElementById('mon1text');
    Element.style.display = "inline";
    document.getElementById('mon1text').innerText = document.getElementById('mon1').value;
    selectElement.style.display = "none";

    var selectElement = document.getElementById('tue1');
    var Element = document.getElementById('tue1text');
    Element.style.display = "inline";
    document.getElementById('tue1text').innerText = document.getElementById('tue1').value;
    selectElement.style.display = "none";

    var selectElement = document.getElementById('wed1');
    var Element = document.getElementById('wed1text');
    Element.style.display = "inline";
    document.getElementById('wed1text').innerText = document.getElementById('wed1').value;
    selectElement.style.display = "none";

    var selectElement = document.getElementById('thu1');
    var Element = document.getElementById('thu1text');
    Element.style.display = "inline";
    document.getElementById('thu1text').innerText = document.getElementById('thu1').value;
    selectElement.style.display = "none";

    var selectElement = document.getElementById('fri1');
    var Element = document.getElementById('fri1text');
    Element.style.display = "inline";
    document.getElementById('fri1text').innerText = document.getElementById('fri1').value;
    selectElement.style.display = "none";

    var selectElement = document.getElementById('sat1');
    var Element = document.getElementById('sat1text');
    Element.style.display = "inline";
    document.getElementById('sat1text').innerText = document.getElementById('sat1').value;
    selectElement.style.display = "none";

    localStorage.setItem('sun_start_hour',document.getElementById('sun').value);
    localStorage.setItem('mon_start_hour',document.getElementById('mon').value);
    localStorage.setItem('tue_start_hour',document.getElementById('tue').value);
    localStorage.setItem('wed_start_hour',document.getElementById('wed').value);
    localStorage.setItem('thu_start_hour',document.getElementById('thu').value);
    localStorage.setItem('fri_start_hour',document.getElementById('fri').value);
    localStorage.setItem('sat_start_hour',document.getElementById('sat').value);
    localStorage.setItem('sun_start_minute',document.getElementById('sun1').value);
    localStorage.setItem('mon_start_minute',document.getElementById('mon1').value);
    localStorage.setItem('tue_start_minute',document.getElementById('tue1').value);
    localStorage.setItem('wed_start_minute',document.getElementById('wed1').value);
    localStorage.setItem('thu_start_minute',document.getElementById('thu1').value);
    localStorage.setItem('fri_start_minute',document.getElementById('fri1').value);
    localStorage.setItem('sat_start_minute',document.getElementById('sat1').value);

    console.log(localStorage.getItem('sun_start_hour'));

}


// import { createNotification } from './notify.js';
window.onload = () =>{
    //console.error('test');
    //setInterval(createNotification,10000);
};
