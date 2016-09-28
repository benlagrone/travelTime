console.log("How long to get to work");

function reqListener () {
  console.log(this.responseText);
  var respondArea = document.getElementById("response");
  //respondArea.innerHTML = this.responseText.data;
  respondArea.innerHTML = this.responseText;
}


//var apiKey = 'd33a54a2-9971-4119-8286-42f5566d8bea';
//var point1 = '29.66885,-95.4563095';
//var point2 = '29.7008786,-95.3985539';
//var vehicle = 'bike';
//var dataType = 'json'
//var calc_points = false;
//var instructions = false;
//var debug = true;
//var url = 'https://graphhopper.com/api/1/route?point=' + point1 + '&point=' + point2 + '&vehicle=' + vehicle + '&debug=' + debug + '&key=' + apiKey + '&type=' + dataType + '&calc_points=' + calc_points + '&instructions=' + instructions;
var url = "/app/data.txt";
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", url);
oReq.send();
