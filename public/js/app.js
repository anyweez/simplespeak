window.addEventListener("load",function(){function e(){var e=new XMLHttpRequest;e.open("GET",n),e.onload=function(){for(var t=JSON.parse(e.responseText),n=document.getElementById("messages");n.firstChild;)n.removeChild(n.firstChild);for(var d=0;d<t.length;d++){var s=document.createElement("li");s.textContent="[From "+t[d].user+"] "+t[d].message,n.appendChild(s)}},e.send()}function t(){var e=new XMLHttpRequest;e.open("POST",n),e.send(JSON.stringify({name:document.getElementById("username").value,message:document.getElementById("message").value}))}var n="http://localhost:8000/messages";e(),document.getElementById("update").addEventListener("click",e),document.getElementById("send").addEventListener("click",t)});