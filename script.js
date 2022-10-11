var totalSeconds = 0;
var tempo = document.querySelector('#tempo');
var interval;

function start () {
	showAndDec();
	interval = setInterval(showAndDec, 1000);
}

function pause () {
	clearInterval(interval)
}

function stop () {
	pause();
  totalSeconds = 0;
  show();
}

function showAndDec() {
   show();
   if (totalSeconds > 0)
       totalSeconds--;
   else
       stop();
}

function show() {
   var s = totalSeconds;
   var h = Math.floor(s / 3600).toString().padStart(2, '0');
   s %= 3600;
   var m = Math.floor(s / 60).toString().padStart(2, '0');
   s = (s % 60).toString().padStart(2, '0');
   tempo.innerText = `${h}:${m}:${s}`;
}


function moreMinutes(minutes) {
	totalSeconds += minutes * 60;
	show();
}