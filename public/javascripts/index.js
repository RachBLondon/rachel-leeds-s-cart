(function(){
  console.log("hello world")
  // document.cookie"userId=0003";
  var userId = document.cookie="0003";

  console.log(userId);


  var out = new XMLHttpRequest()

  out.onreadystatechange = function() {
    if (out.readyState === 4 && out.status === 200) {
      //handle callback here
      }
  }
  console.log("sending XML");
  out.open('GET', '/users/userlist');
  out.send(userId);

})();
