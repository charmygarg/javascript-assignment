function validateForm() {
  var userArray = ["charmygarg","simar"];
  var passArray = ["knoldus","simar"];

  var userValue = document.forms["myForm"]["user"].value;
  var passValue = document.forms["myForm"]["pass"].value;
  if(userValue == "" || passValue == "") {
    alert("Name or Password must not be blank");
  }
  else {
    for(var i=0; i<=userArray.length; i++) {
      if(userValue == userArray[i] && passValue == passArray[i]) {
        alert("Login Succesfully");
        var message = document.getElementById("login");
        if(message) {
          message.innerHTML= "Welcome! Charmy";
        }
      }
    }
  }
}

var myVar = setInterval(myTimer, 1000);
function myTimer() {
    var date = new Date();
    document.getElementById("time").innerHTML = date.toLocaleTimeString();
}
