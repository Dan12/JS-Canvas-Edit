$(document).ready(function(){
  
  canvas = document.getElementById("test_canvas");
  ctx = canvas.getContext("2d");
  
  var editor = CodeMirror(document.getElementById("input_text"), {
    lineNumbers: true,
    value: $("#writeable").html(),
    mode:  "javascript",
  });
  
  $("#submit").click(function(){
    eval(editor.getValue());
    draw();
  });
  
  draw();
});

window.onerror = function(message, url, lineNumber) {  
  addMessage(message+" (line "+lineNumber+")");
  return true;
};  

window.console.log = function(message, url, lineNumber) {  
  addMessage(message);
  return true;
};

function addMessage(message){
  $("#message_area").append("<p class='message'>"+message+"</p>");
  $("#message_area").scrollTop(0);
  $("#message_area").scrollTop($(".message:last").offset().top - $("#message_area").offset().top);
}

/*global canvas*/
canvas = null;
/*global ctx*/
ctx = null;
/*global draw*/
/*global CodeMirror*/
/*global canvasWidth*/
canvasWidth = 400;
/*global canvasHeight*/
canvasHeight = 400;