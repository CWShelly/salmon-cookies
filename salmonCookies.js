
var storeName = document.getElementById('storeName');
var hour10a = document.getElementById('hour10a');
var hour11a = document.getElementById('hour11a');
var hour12p = document.getElementById('hour12p');
var hour1p = document.getElementById('hour1p');
var hour2p = document.getElementById('hour2p');
var hour3p = document.getElementById('hour3p');
var hour4p = document.getElementById('hour4p');
var hour5p = document.getElementById('hour5p');


function tc(){
  storeName.textContent = store;
  hour10a.textContent = "At 10 am you had " + hours[0] + " customers. They bought " + Math.round(avg * hours[0]) + " cookies.";
  hour11a.textContent = "At 11 am you had " + hours[1] +  " customers. They bought " + Math.round(avg * hours[1]) + " cookies.";
  hour12p.textContent = "At 12 pm you had  " + hours[2] + " customers. They bought " + Math.round(avg * hours[2]) + " cookies.";
  hour1p.textContent = "At 1 pm you had " + hours[3] + " customers. They bought " + Math.round(avg * hours[3]) + " cookies.";
  hour2p.textContent = "At 2 pm you had " + hours[4] + " customers. They bought " + Math.round(avg * hours[4]) + " cookies.";
  hour3p.textContent = "At 3 pm you had " + hours[5] + " customers. They bought " + Math.round(avg * hours[5]) + " cookies.";
  hour4p.textContent = "At 4 pm you had " + hours[6] + " customers. They bought " + Math.round(avg * hours[6]) + " cookies.";
  hour5p.textContent = "At 5 pm you had" + hours[7] + " customers. They bought " + Math.round(avg * hours[7]) + " cookies.";
  x.textContent = "You had " + (hours[0] + hours[1] + hours[2] + hours[3] + hours[4] + hours[5] + hours[6] + hours[7]) + " customers today and they bought " + Math.round((avg * (hours[0] + hours[1] + hours[2] + hours[3] + hours[4] + hours[5] + hours[6] + hours[7]))) + " cookies";
}

function market(hours) {{
  this.hour10a = hours[0];
  this.hour11a = hours[1];
  this.hour12p = hours[2];
  this.hour1p = hours[3];
  this.hour2p = hours[4];
  this.hour3p = hours[5];
  this.hour4p = hours[6];
  this.hour5p = hours[7];
}
tc();
}

function alkiMMA() {
  max = 24; min = 3; avg = 2.6;
}

function seaTacMMA(){
  max = 44; min = 6; avg = 1.2;
}

function southCenterMMA(){
max = 38; min = 11; avg = 1.9;
}

function pikePlaceMMA(){
max = 88; min = 17; avg = 5.2
}

function bsMMA(){
  max = 48; min = 20; avg = 3.3;
}

function marketHours(){
 hours = [
  Math.floor((Math.random() * (max - min + 1) + min)),
   Math.floor((Math.random() * (max - min + 1) + min)),
    Math.floor((Math.random() * (max - min + 1) + min)),
     Math.floor((Math.random() * (max - min + 1) + min)),
      Math.floor((Math.random() * (max - min + 1) + min)),
       Math.floor((Math.random() * (max - min + 1) + min)),
        Math.floor((Math.random() * (max - min + 1) + min)),
         Math.floor((Math.random() * (max - min + 1) + min))];

  console.log(hours[0], hours[1], hours[2], hours[3], hours[4], hours[5], hours[6], hours[7]);

  console.log(" max " + max +
  " min " + min + " avg " + avg);
//

}
 function alki() {
   console.log("Alki");
   alkiMMA();
   marketHours();
   var alkiMarket = new market(hours);
 console.log(alkiMarket);}

function seaTac(){
  console.log("SeaTac");
  seaTacMMA();
  marketHours();
 var seaTacMarket = new market(hours);
console.log(seaTacMarket);

}

function bs(){
    console.log("Bellevue");
    bsMMA();
  marketHours();
  var bsMarket = new market(hours);

  console.log(bsMarket);
}

function pp(){
  console.log("Pike Place");
  pikePlaceMMA();
  marketHours();
  var pikePlace = new market(hours);
  console.log(pikePlace);
}

function scm(){
  console.log("Southcenter Mall");
  southCenterMMA();
  marketHours();
  var southCenter = new market(hours);
  console.log(southCenter);

}


var store = prompt("What store do you want to see?").toUpperCase();

while (store === "ALKI"|| "SEATAC" || "SOUTHCENTER" || "BELLEVUE SQUARE" || "PIKE PLACE"){
  if (store === "ALKI") {
    alki(); store = prompt("Want to see another store?").toUpperCase();
} if (store === "SEATAC") {
  seaTac(); store = prompt("Want to see another store?").toUpperCase();
} else if (store === "BELLEVUE SQUARE") {
  bs();  store = prompt("Want to see another store?").toUpperCase();
} else if (store === "SOUTHCENTER"){
  scm();  store = prompt("Want to see another store?").toUpperCase();
} else if (store === "PIKE PLACE") {
  pp();  store = prompt("Want to see another store?").toUpperCase();
} else break;
}


//alki();
//seaTac();
//bs();
//scm();
//pp();
