
var x = parseInt(localStorage.getItem('likeCount3')) || 0;
var y = parseInt(localStorage.getItem('bagCount3')) || 0;
function liked() {
  x = x + 1;
  localStorage.setItem('likeCount3', x);
  document.getElementById("like").innerHTML = x;
  document.getElementById("like1").innerHTML = x;
}

function bagged() {
  y = y + 1;
  localStorage.setItem('bagCount3', y);
  document.getElementById("bagg").innerHTML = y;
  document.getElementById("bagg1").innerHTML = y;
}

window.addEventListener('DOMContentLoaded', function() {
  document.getElementById("like").innerHTML = x;
  document.getElementById("like1").innerHTML = x;
  document.getElementById("bagg").innerHTML = y;
  document.getElementById("bagg1").innerHTML = y;
});

 function frock() {
    var elementsToHide = document.querySelectorAll('[id="shoes"]');
    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = "none";
    }
    var elementsToHide = document.querySelectorAll('[id="watch"]');
    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = "none";
    }
    var elementsToHide = document.querySelectorAll('[id="winter"]');
    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = "none";
    }
    var elementsToHide = document.querySelectorAll('[id="jacket"]');
    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = "none";
    }
    var elementsToHide = document.querySelectorAll('[id="shirt"]');
    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = "none";
    }
    var elementsToHide = document.querySelectorAll('[id="frock"]');
    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = "block";
    }
  }
 function shirt() {
    var elementsToHide = document.querySelectorAll('[id="shoes"]');
    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = "none";
    }
    var elementsToHide = document.querySelectorAll('[id="frock"]');
    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = "none";
    }
    var elementsToHide = document.querySelectorAll('[id="watch"]');
    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = "none";
    }
    var elementsToHide = document.querySelectorAll('[id="winter"]');
    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = "none";
    }
    var elementsToHide = document.querySelectorAll('[id="jacket"]');
    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = "none";
    }
    var elementsToHide = document.querySelectorAll('[id="shirt"]');
    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = "block";
    }
  }
 function winter() {
    var elementsToHide = document.querySelectorAll('[id="shoes"]');
    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = "none";
    }
    var elementsToHide = document.querySelectorAll('[id="frock"]');
    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = "none";
    }
    var elementsToHide = document.querySelectorAll('[id="watch"]');
    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = "none";
    }
    var elementsToHide = document.querySelectorAll('[id="winter"]');
    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = "block";
    }
    var elementsToHide = document.querySelectorAll('[id="jacket"]');
    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = "none";
    }
    var elementsToHide = document.querySelectorAll('[id="shirt"]');
    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = "none";
    }
  }
function jacket() {
    var elementsToHide = document.querySelectorAll('[id="shoes"]');
    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = "none";
    }
    var elementsToHide = document.querySelectorAll('[id="frock"]');
    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = "none";
    }
    var elementsToHide = document.querySelectorAll('[id="watch"]');
    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = "none";
    }
    var elementsToHide = document.querySelectorAll('[id="winter"]');
    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = "none";
    }
    var elementsToHide = document.querySelectorAll('[id="jacket"]');
    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = "block";
    }
    var elementsToHide = document.querySelectorAll('[id="shirt"]');
    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = "none";
    }
  }
  function watch() {
    var elementsToHide = document.querySelectorAll('[id="shoes"]');
    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = "none";
    }
    var elementsToHide = document.querySelectorAll('[id="frock"]');
    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = "none";
    }
    var elementsToHide = document.querySelectorAll('[id="watch"]');
    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = "block";
    }
    var elementsToHide = document.querySelectorAll('[id="winter"]');
    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = "none";
    }
    var elementsToHide = document.querySelectorAll('[id="jacket"]');
    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = "none";
    }
    var elementsToHide = document.querySelectorAll('[id="shirt"]');
    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = "none";
    }
  }
  function shoes() {
    var elementsToHide = document.querySelectorAll('[id="shoes"]');
    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = "block";
    }
    var elementsToHide = document.querySelectorAll('[id="frock"]');
    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = "none";
    }
    var elementsToHide = document.querySelectorAll('[id="watch"]');
    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = "none";
    }
    var elementsToHide = document.querySelectorAll('[id="winter"]');
    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = "none";
    }
    var elementsToHide = document.querySelectorAll('[id="jacket"]');
    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = "none";
    }
    var elementsToHide = document.querySelectorAll('[id="shirt"]');
    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = "none";
    }
  }
  function search(){
  var word = document.getElementsByClassName("search-field")[0].value;
  let string = word.toLowerCase();
  
  if(string.search("shirt") !=-1 ){
    shirt();
  }
  if(string.search("frock") !=-1 ){
    frock();
  }
  if(string.search("jacket") !=-1 ){
    jacket();
  }
  if(string.search("shoe") !=-1 ){
    shoes();
  }
  if(string.search("winter") !=-1 ){
    winter();
  }
  if(string.search("watch") !=-1 ){
    watch();
  }
  
 }
 

 var today = new Date();
 var date =today.getDate();
 var hour = today.getHours();
 var min = today.getMinutes();
 var sec = today.getSeconds();
 document.getElementById("days1").value = date;
 var dateTime = date+' '+hour+' '+min+" "+sec;

 document.write(dateTime);

 