let x = 0;
let y = 0;
function liked(){
    x=x+1;
    document.getElementById("like").innerHTML = x;
    document.getElementById("like1").innerHTML = x;
    alert("liked");
 }
function bagged(){
    y=y+1;
    document.getElementById("bagg").innerHTML = y;
    document.getElementById("bagg1").innerHTML = y;
    alert("Added to cart");
 }

 var today = new Date();
 var date =today.getDate();
 var hour = today.getHours();
 var min = today.getMinutes();
 var sec = today.getSeconds();
 document.getElementById("days1").value = date;
 var dateTime = date+' '+hour+' '+min+" "+sec;

 document.write(dateTime)