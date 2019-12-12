var text = "";
var i;
for (i = 0; i < 30; i++) {
  if (i === 15) { break; }
  text += "The number is " + i + "<br>";
}
document.getElementById("break_loop").innerHTML = text;