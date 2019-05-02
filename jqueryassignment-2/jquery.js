$(document).ready(function() {
  $("#submit").click(function() {
    var a = document.getElementById("email").value;
    var password1 = document.getElementById("password").value;
    var password2 = document.getElementById("confirmpassword").value;
    var checkemail = new RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);
    var matchedmail = a.search(checkemail);
    if(matchedmail<0){
        window.alert("Invalid mail");
    }
    console.log(typeof password1);
    if((password1=="")||(password2=="")){
        window.alert("Please Enter password");
    }
    if((password1!=password2)){
        window.alert("Password should be same");
    }
   if(document.getElementById("checkbox").checked==false){
    window.alert("Please check the box");
   }
   if((password1==password2)&&(matchedmail>=0)&&(document.getElementById("checkbox").checked==true)){
    window.alert("Successfully submitted!");
}
  });
});
