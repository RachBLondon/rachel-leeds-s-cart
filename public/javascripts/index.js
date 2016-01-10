(function(){
  console.log("hello world")
  // document.cookie"userId=0003";
  document.cookie="userId=0003";
  var out = new XMLHttpRequest()

  var sportsChannels = {};
  var newsChanels = {
    newsOptionOne : "Sky News",
    newsOptionTwo : "Sky Sports News"
  };

  var findLocationSports = function(location){
    if (location === "London"){
      sportsChannels.sportsOptionOne = "Arsenal TV";
      sportsChannels.sportsOptionTwo = "Chelsea TV"
    } else if ( location = "Liverpool"){
      sportsChannels.sportsOptionOne = "Liverpool TV"
    }
    return sportsChannels;
  }

  out.onreadystatechange = function() {
    if (out.readyState === 4 && out.status === 200) {
      //handle callback her
      var location = JSON.parse(out.responseText)[0].location;
      console.log(location);
      console.log(findLocationSports(location));
      console.log(newsChanels);
      }
  }
  console.log("sending XML");
  out.open('GET', '/users/userlist');
  out.send(document.cookie);

})();
