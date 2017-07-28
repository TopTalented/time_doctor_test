var canvas;
var context;
var percent;

// id=keyboard_chart1 chart
canvas = document.getElementById('keyboard_chart1');
context = canvas.getContext('2d');

context.beginPath();
context.moveTo(10, canvas.height / 2.0);
context.lineTo(canvas.width - 10, canvas.height / 2.0);
context.lineWidth = 20;
context.strokeStyle = '#d8dde6';
context.lineCap = 'round';
context.stroke();

percent = 98.0;
context.beginPath();
context.moveTo(10, canvas.height / 2.0);
context.lineTo(10 + (canvas.width - 20.0) / 100.0 * percent, canvas.height / 2.0);
context.lineWidth = 20;
context.strokeStyle = '#61be6e';
context.lineCap = 'round';
context.stroke();

// id=keyboard_chart2 chart
canvas = document.getElementById('keyboard_chart2');
context = canvas.getContext('2d');

context.beginPath();
context.moveTo(10, canvas.height / 2.0);
context.lineTo(canvas.width - 10, canvas.height / 2.0);
context.lineWidth = 20;
context.strokeStyle = '#d8dde6';
context.lineCap = 'round';
context.stroke();

percent = 88.0;
context.beginPath();
context.moveTo(10, canvas.height / 2.0);
context.lineTo(10 + (canvas.width - 20.0) / 100.0 * percent, canvas.height / 2.0);
context.lineWidth = 20;
context.strokeStyle = '#61be6e';
context.lineCap = 'round';
context.stroke();

// id=keyboard_chart3 chart
canvas = document.getElementById('keyboard_chart3');
context = canvas.getContext('2d');

context.beginPath();
context.moveTo(10, canvas.height / 2.0);
context.lineTo(canvas.width - 10, canvas.height / 2.0);
context.lineWidth = 20;
context.strokeStyle = '#d8dde6';
context.lineCap = 'round';
context.stroke();

percent = 81.0;
context.beginPath();
context.moveTo(10, canvas.height / 2.0);
context.lineTo(10 + (canvas.width - 20.0) / 100.0 * percent, canvas.height / 2.0);
context.lineWidth = 20;
context.strokeStyle = '#61be6e';
context.lineCap = 'round';
context.stroke();

// id=keyboard_chart4 chart
canvas = document.getElementById('keyboard_chart4');
context = canvas.getContext('2d');

context.beginPath();
context.moveTo(10, canvas.height / 2.0);
context.lineTo(canvas.width - 10, canvas.height / 2.0);
context.lineWidth = 20;
context.strokeStyle = '#d8dde6';
context.lineCap = 'round';
context.stroke();

percent = 78.0;
context.beginPath();
context.moveTo(10, canvas.height / 2.0);
context.lineTo(10 + (canvas.width - 20.0) / 100.0 * percent, canvas.height / 2.0);
context.lineWidth = 20;
context.strokeStyle = '#61be6e';
context.lineCap = 'round';
context.stroke();

// id=keyboard_chart5 chart
canvas = document.getElementById('keyboard_chart5');
context = canvas.getContext('2d');

context.beginPath();
context.moveTo(10, canvas.height / 2.0);
context.lineTo(canvas.width - 10, canvas.height / 2.0);
context.lineWidth = 20;
context.strokeStyle = '#d8dde6';
context.lineCap = 'round';
context.stroke();

percent = 71.0;
context.beginPath();
context.moveTo(10, canvas.height / 2.0);
context.lineTo(10 + (canvas.width - 20.0) / 100.0 * percent, canvas.height / 2.0);
context.lineWidth = 20;
context.strokeStyle = '#61be6e';
context.lineCap = 'round';
context.stroke();

var centerX;
var centerY;
var radius;

// id=mobile_mark1 circle
canvas = document.getElementById('mobile_mark1');
context = canvas.getContext('2d');
centerX = canvas.width / 2;
centerY = canvas.height / 2;
radius = 7;

context.beginPath();
context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
context.fillStyle = '#fbd205';
context.strokeStyle = '#fbd205';
context.fill();
context.stroke();

// id=mobile_mark2 circle
canvas = document.getElementById('mobile_mark2');
context = canvas.getContext('2d');
centerX = canvas.width / 2;
centerY = canvas.height / 2;
radius = 7;

context.beginPath();
context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
context.fillStyle = '#ec505f';
context.strokeStyle = '#ec505f';
context.fill();
context.stroke();

// id=mobile_mark3 circle
canvas = document.getElementById('mobile_mark3');
context = canvas.getContext('2d');
centerX = canvas.width / 2;
centerY = canvas.height / 2;
radius = 7;

context.beginPath();
context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
context.fillStyle = '#48d2ef';
context.strokeStyle = '#48d2ef';
context.fill();
context.stroke();

// id=mobile_mark4 circle
canvas = document.getElementById('mobile_mark4');
context = canvas.getContext('2d');
centerX = canvas.width / 2;
centerY = canvas.height / 2;
radius = 7;

context.beginPath();
context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
context.fillStyle = '#606cc2';
context.strokeStyle = '#606cc2';
context.fill();
context.stroke();

// id=mobile_mark5 circle
canvas = document.getElementById('mobile_mark5');
context = canvas.getContext('2d');
centerX = canvas.width / 2;
centerY = canvas.height / 2;
radius = 7;

context.beginPath();
context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
context.fillStyle = '#51c397';
context.strokeStyle = '#51c397';
context.fill();
context.stroke();

var startAngle;
var endAngle;

canvas = document.getElementById('chart_detail');
context = canvas.getContext('2d');
var x = canvas.width / 2.0;
var y = canvas.height / 2.0;
var counterClockwise = false;
radius = x - 7;

// First Circle
context.beginPath();
context.arc(x, y, radius, 0, 2 * Math.PI, false);
context.lineWidth = 12;

context.strokeStyle = '#d8dde6';
context.stroke();

startAngle = 1.5 * Math.PI;
endAngle = 3.25 * Math.PI;
context.beginPath();
context.arc(x, y, radius, startAngle, endAngle, false);
context.lineWidth = 12;
context.lineCap = 'round';
context.strokeStyle = '#fbd205';
context.stroke();

// Second Circle
radius = radius - 16;
context.beginPath();
context.arc(x, y, radius, 0, 2 * Math.PI, false);
context.lineWidth = 12;

context.strokeStyle = '#d8dde6';
context.stroke();

startAngle = 1.5 * Math.PI;
endAngle = 3.15 * Math.PI;
context.beginPath();
context.arc(x, y, radius, startAngle, endAngle, false);
context.lineWidth = 12;
context.lineCap = 'round';
context.strokeStyle = '#ec505f';
context.stroke();

// Third Circle
radius = radius - 16;
context.beginPath();
context.arc(x, y, radius, 0, 2 * Math.PI, false);
context.lineWidth = 12;

context.strokeStyle = '#d8dde6';
context.stroke();

startAngle = 1.5 * Math.PI;
endAngle = 3.0 * Math.PI;
context.beginPath();
context.arc(x, y, radius, startAngle, endAngle, false);
context.lineWidth = 12;
context.lineCap = 'round';
context.strokeStyle = '#48d2ef';
context.stroke();

// Fourth Circle
radius = radius - 16;
context.beginPath();
context.arc(x, y, radius, 0, 2 * Math.PI, false);
context.lineWidth = 12;

context.strokeStyle = '#d8dde6';
context.stroke();

startAngle = 1.5 * Math.PI;
endAngle = 2.8 * Math.PI;
context.beginPath();
context.arc(x, y, radius, startAngle, endAngle, false);
context.lineWidth = 12;
context.lineCap = 'round';
context.strokeStyle = '#606cc2';
context.stroke();

// Fifth Circle
radius = radius - 16;
context.beginPath();
context.arc(x, y, radius, 0, 2 * Math.PI, false);
context.lineWidth = 12;

context.strokeStyle = '#d8dde6';
context.stroke();

startAngle = 1.5 * Math.PI;
endAngle = 2.1 * Math.PI;
context.beginPath();
context.arc(x, y, radius, startAngle, endAngle, false);
context.lineWidth = 12;
context.lineCap = 'round';
context.strokeStyle = '#51c397';
context.stroke();
