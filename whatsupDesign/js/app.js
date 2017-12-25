$(".heading-compose,#profileSelect").click(function() {
  $(".side-two").css({
    "left": "0"
  });
});

$(".newMessage-back").click(function() {
  $(".side-two").css({
    "left": "-100%"
  });
});
