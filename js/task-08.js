const form = document.querySelector('.login-form');
const submitButton = document.querySelector('button[type="submit"]');

const formValues = {};

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const { elements: { password, email } } = event.currentTarget;
    if (password.value.trim() === "" || email.value.trim() === "") {
        alert("Please fill all fields")
    } else {
        formValues.email = email.value;
        formValues.password = password.value;

        console.log(formValues);
        form.reset();
    }
})