const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener('input', (name) => {
    if (name.currentTarget.value !== '') {
   
        outputName.textContent = name.currentTarget.value;
    } else {
        outputName.textContent = 'Anonymous';
    }
})