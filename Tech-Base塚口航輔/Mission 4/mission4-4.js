
function omikujishow(){
var omikuji= new Array("大吉、最高の一日間違いなし！"
,"中吉、いつもより良い日になるかも！"
,"末吉、可もなく不可もない日となるでしょう",
"小吉、あまり頑張りすぎないで、いつも通りにいきましょう",
"凶、悪いことが起こっても慌てずに！",
"大凶、部屋の中で一日大人しくしてましょう");

var number1= Math.random();

var number2=number1*6;

var number=Math.floor(number2);

var message=omikuji[number];

var object = document.getElementById("omikuji2");
object.innerText = message;
}
