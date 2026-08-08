window.oncontextmenu = function () { return false; }
document.addEventListener("keydown", e => {  
  if (e.keyCode === 123  || (e.ctrlKey && e.shiftKey && e.keyCode === 73) || (e.ctrlKey && e.shiftKey && e.keyCode === 67) || (e.ctrlKey && e.keyCode === 85)) { 
    e.preventDefault();  
  }  
});  
