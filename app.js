window.onload = function() {
    document.getElementById("Save").onclick = function fun() {
       var ip = document.forms["myForm"]["ip_address"].value;
       var key = "a487268ab21e4d1c3ff403684e24e00f34955b9c645abc57d8366244b73a45ca";
       var Url = "https://api.ipinfodb.com/v3/ip-city/?key="+key+"&ip="+ip+"&format=json";
       var xhr = new XMLHttpRequest();
       xhr.open('GET', Url, true);
       xhr.send();
       xhr.onreadystatechange = processRequest;
           function processRequest(e) {
               if (xhr.readyState == 4 && xhr.status == 200) {
                   var response1 = JSON.parse(xhr.responseText);
                   document.getElementById("statusCode").innerHTML = response1.name + ", " + response1.statusCode;
                   document.getElementById("statusCode").innerHTML = response1.statusCode;
                   document.getElementById("statusMessage").innerHTML = response1.statusMessage;
                   document.getElementById("ipAddress").innerHTML = response1.ipAddress;
                   document.getElementById("countryCode").innerHTML = response1.countryCode;
                   document.getElementById("countryName").innerHTML = response1.countryName;
                   document.getElementById("regionName").innerHTML = response1.regionName;
                   document.getElementById("cityName").innerHTML = response1.cityName;
                   document.getElementById("zipCode").innerHTML = response1.zipCode;
                   document.getElementById("latitude").innerHTML = response1.latitude;
                   document.getElementById("longitude").innerHTML = response1.longitude;
                   document.getElementById("timeZone").innerHTML = response1.timeZone;
               }
           }
       }
    }