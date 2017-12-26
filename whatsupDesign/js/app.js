$(".heading-compose").click(function() {
  $(".side-two").css({
    "left": "0"
  });
});


$(".newMessage-back").click(function() {
  $(".side-two").css({
    "left": "-100%"
  });
});
//appending msg to text textarea
$(document).on("keypress", "#comment", function(e) {
    if (e.which == 13) {
      if($("#comment").val() !== ""){
      $("#conversation").append('<div class="row message-body">'+
                       '<div class="col-sm-12 message-main-sender">'+
                       '<div class="sender">'+'<div class="message-text">'
                       +$("#comment").val()+'</div>'+'<span class="message-time pull-right">'
                       + DisplayCurrentTime()+'</div>'+'</div>'+'</div>');
        //alert("Enter pressed");
        $("#comment").val("");
    }
  }

});




function DisplayCurrentTime() {
  var time = new Date();
  var hours = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
  var am_pm = time.getHours() >= 12 ? "PM" : "AM";
  hours = hours < 10 ? "0" + hours : hours;
  var minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  //var seconds = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
  time = hours + ":" + minutes + " " + am_pm;
  return time;
    }
