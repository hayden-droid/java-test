<SCRIPT language="JavaScript">
<!-- Script courtesy of http://www.web-source.net - Your Guide to Professional Web Site Design and Development
var current = 0
var x = 0
var speed = 100
var speed2 = 100
function initArray(n) {
this.length = n;
for (var i =1; i <= n; i++) {
this[i] = ' '
}
}
typ = new initArray(4)
typ[0]="Your First Line of Text Here"
typ[1]="Your Second Line of Text Here"
typ[2]="Your Third Line of Text Here"
typ[3]="Your Fourth Line of Text Here"
function typewrite() {
var m = typ[current]
window.status = m.substring(0, x++) + ""
if (x == m.length + 1) {
x = 0
current++
if (current > typ.length - 1) {
current = 0
}
setTimeout("typewrite()", speed2)
}
else {
setTimeout("typewrite()", speed)
}
}
typewrite()
// -->
</SCRIPT>
