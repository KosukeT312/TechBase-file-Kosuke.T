function omikujishow2(){
    var omikuji= new Array("てるてるぼうず",
    "地球儀","しゃもじ","車のハンドル","鉄球","イワシ"
    );
    
    var number1= Math.random();
    
    var number2=number1*6;
    
    var number=Math.floor(number2);
    
    var message=omikuji[number];
    
    var object = document.getElementById("omikuji2");
    object.innerText = message;
    }