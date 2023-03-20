function check(){
	
	// Name validation
	const name = document.getElementById("name").value;
	if (name.length < 8) {
		document.getElementById("nameError").innerHTML = "Name must be 8 characters long";
	} else {
		document.getElementById("nameError").innerHTML = "";
	}
	
	// Email validation
	const email = document.getElementById("email").value;
	const emailRegex = /^([a-zA-Z0-9._-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,5})$/;
	if (!emailRegex.test(email)) {
		document.getElementById("emailError").innerHTML = "Invalid email address";
	} else {
		document.getElementById("emailError").innerHTML = "";
	}
	
	// Phone validation
	const phone = document.getElementById("phone").value;
	const phoneRegex = /^[0-9]{10}$/;
	if (!phoneRegex.test(phone)) {
		document.getElementById("phoneError").innerHTML = "Invalid phone number";
	} else {
		document.getElementById("phoneError").innerHTML = "";
	}
	
	// Message validation
	const message = document.getElementById("message").value;
	if (message.length === 0) {
		document.getElementById("messageError").innerHTML = "Message cannot be empty";
	} else {
		document.getElementById("messageError").innerHTML = "";
	}
	
	// Form submission if all fields are valid
	if (name.length === 8 && emailRegex.test(email) && phoneRegex.test(phone) && message.length !== 0) {
		form.submit();
	}
};
