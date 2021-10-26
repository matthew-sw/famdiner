// Login Validation Function
function login(){
	var password = document.getElementById('login-pass').value;
	var email = document.getElementById('login-email').value;

	var emailLogin = true;
	if(email == ""){
        document.getElementById('login-email-valid').innerHTML="Email must be filled!";
		emailLogin = false;
	}
	else if(CheckEmailFormat(email) == false){
		document.getElementById('login-email-valid').innerHTML="Invalid Email Format!";
		emailLogin = false;
	}
    else{
        document.getElementById('login-email-valid').innerHTML="";
    }

    var passLogin = true;
	if(password == ""){
		document.getElementById('login-pass-valid').innerHTML="Password must be filled!";
		passLogin = false;
	}
    else{
        document.getElementById('login-pass-valid').innerHTML="";
    }

    if(emailLogin && passLogin){
        alert("Login Success");
        location.replace("./index.html");
    }
}

// Register Validation Function
function register(){
	var name = document.getElementById('name').value;
	var email = document.getElementById('register-email').value;
	var gender = "";
	if(document.getElementById('male').checked==true){
		gender = 'male';
	}
	else if(document.getElementById('female').checked==true){
        gender ='female';
	}
    var city = document.getElementById('city');
	var password = document.getElementById('register-pass').value;
	var confpass = document.getElementById('register-conf-pass').value;

	var nameRegister = true;
	if(name == ""){
		document.getElementById('name-valid').innerHTML="Name must filled!";
		nameRegister = false;
	}
	else{
		document.getElementById('name-valid').innerHTML="";
	}
	
	var emailRegister = true;
	if(email == ""){
		document.getElementById('register-email-valid').innerHTML="Email must be filled!";
		emailRegister = false;
	}
	else if(CheckEmailFormat(email) == false){
		document.getElementById('register-email-valid').innerHTML="Invalid Email Format!";
		emailRegister = false;
	}else{
		document.getElementById('register-email-valid').innerHTML="";
	}
   	
	var genderRegister = true;
   	if(gender==""){
   		document.getElementById('gender-valid').innerHTML="Gender must be chosen!";
   		genderRegister = false;
   	}else{
   		document.getElementById('gender-valid').innerHTML="";
   	}

	var cityRegister = true;
    if(city==""){
        document.getElementById('city-valid').innerHTML="City must be choosen!";
        cityRegister = false;
    }else{
        document.getElementById('city-valid').innerHTML="";
    }

	var passRegister = true;
	if(password==""){
		document.getElementById('register-pass-valid').innerHTML="Password must be filled!";
        passRegister = false;
	}
	else if(password.length < 8){
		document.getElementById('register-pass-valid').innerHTML="Password's length minimum 8 characters!";
        passRegister = false;
	}
	else if(CheckPasswordFormat(password) == false){
		document.getElementById('register-pass-valid').innerHTML="Password must contain capital letter and number!";
        passRegister = false;
	}
	else{
		document.getElementById('register-pass-valid').innerHTML="";
	}

	var confpassRegister = true;
	if(confpass==""){
		document.getElementById('register-conf-pass-valid').innerHTML="Confirm Password must be filled!";
        confpassRegister = false;
	}
	else if(password!=confpass){
		document.getElementById('register-conf-pass-valid').innerHTML="Password and Confirm Password doesn't match!";
        confpassRegister = false;
	}
	else{
		document.getElementById('register-conf-pass-valid').innerHTML="";
	}

    if(nameRegister && emailRegister && genderRegister && cityRegister && passRegister && confpassRegister){
        alert("Registration Success");
        location.replace("./login.html");
    }
}

// Format Email Validation Function
function CheckEmailFormat(email){
	if(email.startsWith("@") || email.startsWith(".")){
		return false;
	}
	else if(email.endsWith("@") || email.endsWith("."))	{
		return false;
	}
	else if(email.indexOf("@.") > -1 || email.indexOf(".@") > -1 )
	{
		return false;
	}
	else if(email.indexOf("@") < 0 || email.indexOf(".") < 0)
	{
		return false;
	}
		else
	{
		return true;
	}
}

// Format Password Validation Function
function CheckPasswordFormat(password){
	var hasCapital = false;
	var hasNumber = false;

	for(var i=0;i<password.length; i++){
		var charCode = password.charCodeAt(i);
		if(charCode > 47 && charCode < 58){
			hasNumber = true;
		}
		if(charCode > 64 && charCode < 91){
			hasCapital = true;
		}
	}
	if(hasNumber && hasCapital){
		return true;
	}
	else{
		return false;
	}
}