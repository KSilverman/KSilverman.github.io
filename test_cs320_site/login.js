var message_active = false;
$("#theform").submit(function( event ) {
    event.preventDefault();
    console.log(message_active)
    if(!message_active)
    {
      $("#alertdiv").css("display", "block");
      $("#alertdiv").addClass("alert alert-danger")
      $("#alertdiv").append('<a href="#" id="close_me" class="close" data-dismiss="alert" aria-label="close">&times;</a>')
      $("#alertdiv").append("<strong>Incorrect!</strong> Wrong username or password.")
      $("#submit_btn").empty();
      $("#submit_btn").append('<i class="fa fa-refresh fa-spin"></i> Loading');
      $("#submit_btn").attr("disabled", true);
      message_active = true;
    }
  });

$(document).on("click", "#close_me", function(event) {
  event.preventDefault();
  $("#alertdiv").fadeOut("slow", function(){
    message_active = false;
    $("#alertdiv").removeClass();
    $("#alertdiv").empty();
    console.log(message_active)
  })
});
