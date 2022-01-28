function register(e) {
    e.preventDefault();

    var firstname = document.getElementById('firstname').value;
	var lastname = document.getElementById('lastname').value;
	var areacode = document.getElementById('areacode').value;
	var telnum = document.getElementById('telnum').value;
    var emailid = document.getElementById('emailid').value;
    var username = document.getElementById('username').value;
    var password1 = document.getElementById('password1').value;
    var password2 = document.getElementById('password2').value;
	var msg = document.getElementById('msg');

    if(firstname === '' || lastname === '' || areacode === '' || telnum === '' || emailid === '' || username === '' || password1 === '' || password2 === '' ){
		msg.className = "alert alert-danger";
		msg.innerHTML = "Please fill out all feilds!";
	} else {
		var atpos = email.indexOf("@");
		var dotpos = email.lastIndexOf(".");
		if(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length){
			msg.className = "alert alert-danger";
			msg.innerHTML = "Please use a valid email";
		} else{
			if(password1 != password2){
				msg.className = "alert alert-danger";
				msg.innerHTML = "Password doesn't match";
			} else{
				msg.className = "alert alert-success";
				msg.innerHTML = "You have successfully completed the registration";
			}
		
		}
		
	}
}

document.getElementById('myForm').addEventListener('submit', register, false);