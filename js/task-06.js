const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', () => {
    if (textInput.value.length >= textInput.dataset.length) {
        textInput.classList.add('valid');
        textInput.classList.remove('invalid');
    } else if (textInput.value === "") {
        textInput.classList.remove("invalid", "valid");
    } else {
        textInput.classList.add('invalid');
        textInput.classList.remove('valid');
    }
})