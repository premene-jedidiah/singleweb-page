
 function getDateTime() {
    const now = new Date();
    const utcString = now.toUTCString();
    console.log(utcString);
 }

 getDateTime();
 setInterval(getDateTime, 1000)

 document.getElementById("ddate").innerHTML = getDateTime();