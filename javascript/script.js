let username=document.getElementById("username");
let password=document.getElementById("password");
let confirmpass=document.getElementById("confrm");
const Name="nikhil tripathi";
const pass="iAmAWEbDeveloper";
function validatorForm() {
    if(username.value === "") {
        document.getElementById("error").innerHTML="*Username Require";
        username.style.border= "red solid";
        return false;
    }
    else if(password.value === "") {
        document.getElementById("error").innerHTML="*Password Require";
        password.style.border= "red solid";
        return false;
    }
    else if(confirmpass.value === "") {
        document.getElementById("error").innerHTML="*Please Confirm your Password";
        confirmpass.style.border= "red solid";
        return false;
    }
    else if(password.value.length<8){
        document.getElementById("error").innerHTML="";
        alert("password must be 8 character long");
        return false ;
    }
    else if(password.value!=confirmpass.value){
        alert("password donot matched!!!  \nplease try again");
        return false ;
    }
    else if(username.value === Name && password.value === pass){
        alert("Successfully logged In");
        return true;

    }
    else {
        alert("no user from this name, please try with valid ID/PASSWORD \nto get one time access, take your cursor to user icon");
    return false;
    }
}
