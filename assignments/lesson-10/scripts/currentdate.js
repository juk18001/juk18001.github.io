var d = new Date();

var weekday =new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var mon = new Array(12);

mon[0] = "January";
mon[1] = "February";
mon[2] = "March";
mon[3] = "April";
mon[4] = "May";
mon[5] = "June";
mon[6] = "July";
mon[7] = "August";
mon[8] = "September";
mon[9] = "October";
mon[10] = "November";
mon[11] = "December";


var response = "&copy; " + weekday[d.getDay()] + ", " + d.getDate() + " " + mon[d.getMonth()] + " " + d.getFullYear()  + " Amy Jukes, TEXAS, <a href=" +'"http://www.byui.edu/online"' + ">BYU-Idaho Online Learning</a>";
document.getElementById("currentDate").innerHTML = response;