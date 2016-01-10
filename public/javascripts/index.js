(function(){
  console.log("hello world")
  // document.cookie"userId=0003";
  document.cookie="userId=0003";
  var out = new XMLHttpRequest()

  var sportsChannels = [];
  var newsChannels = ["Sky News", "Sky Sports News"];


  var printNews = function(newsChannels, areaId) {
    checkBoxArea = document.getElementById(areaId);

    newsChannels.map(function(channel){
      var divCheckBox = document.createElement('div');
      var channelId = channel.replace(/\s+/g, '');
      var checkbox = document.createElement('input');

      divCheckBox.className = "checkbox";

      checkbox.type = "checkbox";
      checkbox.name = channel;
      checkbox.value = channel;
      checkbox.id = channelId;

      var label = document.createElement('label')
      label.htmlFor = channelId;


      checkBoxArea.appendChild(divCheckBox);
      divCheckBox.appendChild(label);
      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(channel));
    });
  }



  out.onreadystatechange = function() {
    if (out.readyState === 4 && out.status === 200) {
      //handle callback her
      var location = JSON.parse(out.responseText)[0].location;
      console.log(location);
      console.log(newsChannels);
      printNews(newsChannels, "news-area");
      }
  }
  console.log("sending XML");
  out.open('GET', '/users/userlist');
  out.send(document.cookie);

printNews(newsChannels, "newsArea");


})();
