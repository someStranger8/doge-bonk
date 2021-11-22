$(document).ready(function() {
  lowLag.init({
    'urlPrefix': '../sounds/',
    'debug': 'none'
  })

  lowLag.load(['bonk.mp3','bonk.ogg'], 'bonk')

  let bonking = false

  $("#bonk").on("touchend mouseup mouseleave", function(e) {
    if(bonking) {
      setTimeout(() => bonking = false, 100)
      $("#bonk").removeClass("bonking")
    }
  })

  $("#bonk").on("touchstart mousedown", function(e) {
    if(!bonking) {
      bonking = true
      lowLag.play("bonk")
      
      $("#bonk").addClass("bonking")
      $("#bonks").append('<img class="bonkeffect" src="/images/bonk_3.png" height="50%" width="50%" style="position: absolute; left: 130%; bottom: -10%;">').on("animationend", e => e.target.remove());
    }
  });
});
