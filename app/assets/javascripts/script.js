$(document).ready(function(){
  
  canvas = document.getElementById("test_canvas");
  ctx = canvas.getContext("2d");
  
  tab_containers = [$("#drawFunc").html(), $("#downFunc").html(), $("#upFunc").html(), $("#moveFunc").html(), $("#leaveFunc").html()]
  
  editor = CodeMirror(document.getElementById("input_text"), {
    lineNumbers: true,
    value: tab_containers[current_tab],
    mode:  "javascript",
  });
  
  $("#submit").click(function(){
    evalTabs();
    draw();
  });
  
  $("#test_canvas").mousedown(function(){
    mouseDown();
  });
  
  $("#test_canvas").mouseup(function(){
    mouseUp();
  });
  
  $("#test_canvas").mousemove(function(){
    mouseMove();
  });
  
  $("#test_canvas").mouseleave(function(){
    mouseLeave();
  });
  
  $(".tab").click(function(){
    $("[tab_link="+current_tab+"]").removeClass("selected");
    evalTabs();
    current_tab = parseInt($(this).attr("tab_link"));
    editor.setValue(tab_containers[current_tab]);
    $(this).addClass("selected");
  });
  
  draw();
});

function evalTabs(){
  tab_containers[current_tab] = editor.getValue();
  $("#drawFunc").html(tab_containers[current_tab]);
  eval(tab_containers[current_tab]);
}

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
/*global canvasWidth*/
canvasWidth = 400;
/*global canvasHeight*/
canvasHeight = 400;
/*global tab_containers*/
tab_containers = null;
/*global current_tab*/
current_tab = 0;
/*global editor*/
editor = null

/*global draw*/
/*global mouseDown*/
/*global mouseUp*/
/*global mouseMove*/
/*global mouseLeave*/
/*global CodeMirror*/