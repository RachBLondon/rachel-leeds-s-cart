(function(){
  console.log("hello world")
  // document.cookie"userId=0003";
  document.cookie="userId=0003";
  var out = new XMLHttpRequest()

  var sportsChannels = [];
  var newsChannels = ["Sky News", "Sky Sports News"];

  var getSportChannels = function(location){
      if (location === "London"){
        sportsChannels.push("Arsenal TV","Chelsea TV");
      } else if (location === "Liverpool"){
        sportsChannels.push("Liverpool TV");
      }
      return sportsChannels;
  }



  var printOptions = function(channelArray, areaId) {
    checkBoxArea = document.getElementById(areaId);

    channelArray.map(function(channel){
      var divCheckBox = document.createElement('div');
      var channelId = channel.replace(/\s+/g, '');
      var checkbox = document.createElement('input');
      var label = document.createElement('label');

      divCheckBox.className = "checkbox";
      checkbox.type = "checkbox";
      checkbox.name = channel;
      checkbox.value = channel;
      checkbox.id = channelId;
      checkbox.className = "checkboxSelection";


      label.htmlFor = channelId;

      checkBoxArea.appendChild(divCheckBox);
      divCheckBox.appendChild(label);
      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(channel));
    });
  }

  var printShoppingCart = function(channelArray, areaId) {
    checkBoxArea = document.getElementById(areaId);
    channelArray.map(function(channel){
      var channelIdSelected = channel.replace(/\s+/g, '') + "selected";
      var divCheckBox = document.createElement('div');
      var p = document.createElement('p');

      divCheckBox.className = "shoppingCartList";
      p.id = channelIdSelected;
      checkBoxArea.appendChild(divCheckBox);
      divCheckBox.appendChild(p);
      p.appendChild(document.createTextNode(channel));
      p.style.display = 'none';
    });
  }


  out.onreadystatechange = function() {
    if (out.readyState === 4 && out.status === 200) {
      //handle callback her
      var location = JSON.parse(out.responseText)[0].location;
      console.log(location);
      printOptions(getSportChannels(location),"sportsArea");

      //get list of all shopping channels
      var allChannels = newsChannels.concat(sportsChannels);

      //printout all items hidden in shopping Cart
      printShoppingCart(allChannels, "shoppingCart");

      // $( ".checkboxSelection" ).on( "click", function() {
      //   if ($('input.checkbox_check').prop('checked')) {
      // //
      //    console.log("already checked",this.name);
      //  } else {
      //    console.log(this.name);
      //    document.getElementById(this.name).removeAttribute("class")
      //  }
      // });
      // $(function(){
      //     $('.checkboxSelection').toggle(function(){
      //       var selected = this.name.toString();
      //       console.log(selected)
      //       // $(selected).text('chicked');
      //     }, function(){
      //       var selected = this.name.toString();
      //       console.log(selected);
      //       // $(selected).text('');
      //     });
      //   });


      $('.checkboxSelection').click(function() {
        var selected = this.id.toString();
        var selectedString = selected + "selected";

          if($(this).hasClass("checked")){
            document.getElementById(this.id).removeAttribute("class", "checked");
            document.getElementById(selectedString).style.display = 'none';

          }else{
            document.getElementById(this.id).setAttribute("class", "checked");
            document.getElementById(selectedString).style.display = 'block';
          }
    });

    }
  }
  console.log("sending XML");
  out.open('GET', '/users/userlist');
  out.send(document.cookie);

printOptions(newsChannels, "newsArea");




})();
