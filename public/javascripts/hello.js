var wsUri = "ws://localhost:9000/ws?name=test";
var websocket;
var output;

function init() {
  output = document.getElementById("output");
  testWebSocket();
}

function testWebSocket() {
  websocket = new WebSocket(wsUri);
  websocket.onopen = function(evt) { onOpen(evt) };
  websocket.onclose = function(evt) { onClose(evt) };
  websocket.onmessage = function(evt) { onMessage(evt) };
  websocket.onerror = function(evt) { onError(evt) };
}

function onOpen(evt) {
  writeToScreen("CONNECTED");
  doSend("WebSocket rocks");
}

function closeWS() {
  websocket.close();
}

function onClose(evt) {
  writeToScreen("DISCONNECTED");
}

function onMessage(evt) {
  writeToScreen('<span style="color: blue;">RESPONSE: ' + evt.data+'</span>');
}

function onError(evt) {
  writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
}

function doSend(message) {
  writeToScreen("SENT: " + message);
  websocket.send("{ \"client\":{\"name\":\"test\", \"id\": 0}, \"actionType\":\"group-message\", \"data\":{\"message\":\"" + message + "\"}}");
}

function writeToScreen(message) {
  var pre = document.createElement("p");
  pre.style.wordWrap = "break-word";
  pre.innerHTML = message;
  output.appendChild(pre);
}

window.addEventListener("load", init, false);