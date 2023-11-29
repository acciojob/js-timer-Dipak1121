// write js code here if required
let p = document.getElementById("timer");
setInterval(printDate, 1000);
function printDate(){
	let dateObj = new Date();
	let date = dateObj.getDate();
	let month = dateObj.getMonth();
	let year = dateObj.getFullYear();
	let hour = dateObj.getHours();
	let minute = dateObj.getMinutes();
	let second = dateObj.getSeconds();
	let dateStr = `${date}/${month}/${year}, ${hour}:${minute}:${second}`;
	p.innerText = dateStr;
}