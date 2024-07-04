function updateTime() {
   const now = new Date();
   const utcTime = now.toUTCString();
   document.getElementById("utcTime").innerText = utcTime;
 }
 setInterval(updateTime, 1000);
 updateTime(); // Initial call to display time immediately
 
 const daysOfWeek = [
   "Sunday",
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday",
 ];
 document.getElementById("currentDay").innerText =
   daysOfWeek[new Date().getDay()];
 