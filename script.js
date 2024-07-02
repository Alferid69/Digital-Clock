var day = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
setInterval(clock, 1000)
function clock (){
  var date = new Date();
  var pmOrAm = "AM";
  var dayName = day[date.getDay()-1];
  var minutes = date.getMinutes();
  var hours = date.getHours();
  var seconds = date.getSeconds();
  if(date.getHours >= 12)
    pmOrAm = "AM"
  if(seconds < 10){
    seconds = "0" + seconds;
  }
  if(minutes < 10){
    minutes = "0" + minutes;
  }
  if(hours < 10){
    hours = "0" + hours;
  }
  console.log()
  document.getElementsByTagName("h1")[0].innerHTML = `${dayName} : ${hours} : ${minutes} : ${seconds}  ${pmOrAm}`;
}
