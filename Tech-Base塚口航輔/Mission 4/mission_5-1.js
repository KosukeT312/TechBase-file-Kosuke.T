let canvas = document.querySelector('#canvas');
let context = canvas.getContext('2d');

context.beginPath();
context.rect( 20, 20, 80, 80);
context.strokeStyle = 'deepskyblue';
context.lineWidth = 4;
context.stroke();