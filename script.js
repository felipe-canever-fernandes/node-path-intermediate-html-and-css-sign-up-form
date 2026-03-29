const passwordInput = document
	.querySelector("#password");
const passwordConfirmationInput = document
	.querySelector("#password-confirmation");

passwordConfirmationInput.addEventListener("input", (event) => {
	const password = passwordInput.value;
	const passwordConfirmation = passwordConfirmationInput.value;

	let validation = "";

	if (passwordConfirmation !== password) {
		validation = "The passwords don't match.";
	}

	passwordConfirmationInput.setCustomValidity(validation);
});