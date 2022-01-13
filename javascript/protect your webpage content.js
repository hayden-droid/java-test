
<SCRIPT language="JavaScript">
<!-- Script courtesy of http://www.web-source.net - Your Guide to Professional Web Site Design and Development
var message="Copyright Year by Your Site. WARNING ! All content contained within this site is protected by copyright laws. Unauthorized use of our material is strictly prohibited.";
function click(e) {
if (document.all) {
if (event.button==2||event.button==3) {
alert(message);
return false;
}
}
if (document.layers) {
if (e.which == 3) {
alert(message);
return false;
}
}
}
if (document.layers) {
document.captureEvents(Event.MOUSEDOWN);
}
document.onmousedown=click;
// -->
</SCRIPT>
