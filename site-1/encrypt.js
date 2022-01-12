
function get_password() {

  orig_pass = prompt("Please enter password","");

  if (orig_pass!=null && orig_pass!="")

  password = new Array(orig_pass.length);

  for(i=0; i<orig_pass.length; i++) {

    password[i] = orig_pass.charCodeAt(i);

  }

  return password;

}



password = get_password();

orig = unescape("%3Cp%3Eloser%3C/p%3E");

orig = orig.split("");



passnum = orig.length % password.length;

for(i=orig.length-1; i>=0; i--) {



  passnum--;

  if (passnum == -1) passnum = password.length - 1;



  pos1 = i;

  pos2 = i + password[passnum];



  if (pos2 >= orig.length) continue;



  char1 = orig[pos1];

  char2 = orig[pos2];



  orig[pos2] = char1;

  orig[pos1] = char2;



}



orig1 = "";

for(i=0;i<orig.length;i++) {

  orig1 = orig1 + orig[i];

}

orig1 = orig1.replace(/mmm/g,"\r\n");



document.write(orig1);
