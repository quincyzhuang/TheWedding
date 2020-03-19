const day = document.getElementById("day");
const hour = document.getElementById("hour");
const min = document.getElementById("minute");
const sec = document.getElementById("second");
const countdown = document.getElementsByClassName("countdown")[0];

const weddingdatetime = "4/20/2021 00:00:00 UTC"
const weddingts = new Date(weddingdatetime).getTime();


const calculateRemaining = (remaining) => {
	let sremain = Math.floor(remaining/1000); // convert to seconds
	let days = Math.floor(sremain / 86400).toString();
	days = (days.length<2)?"0"+days:days;
	let remainder = sremain % 86400;
	let hours = Math.floor(remainder / 3600).toString();
	hours = (hours.length<2)?"0"+hours:hours;
	remainder = remainder % 3600;
	let minutes = Math.floor(remainder / 60).toString();
	minutes = (minutes.length<2)?"0"+minutes:minutes;
	remainder = remainder % 60;
	let seconds = remainder.toString();
	seconds = (seconds.length<2)?"0"+seconds:seconds;
	day.textContent = days+"D";
	hour.textContent = hours+"H";
	min.textContent = minutes+"M";
	sec.textContent = seconds+"S";
}

const updateCounter = () => {
	let difference = getDifference(weddingts);
	if (difference<0){            // If wedding day is already reached
		countdown.textContent = "Now!";
		return;
	}
	calculateRemaining(difference)
}

const getDifference = (timestamp) => {
	let nowts = Date.now();
	return timestamp-nowts;
}

const initCounter = () => {
	let difference = getDifference(weddingts);
	calculateRemaining(difference);
}

initCounter();
setInterval( () => {
	updateCounter();
},1000);