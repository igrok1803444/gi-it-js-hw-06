const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener('input', (name) => {
    const comparedValue = name.currentTarget.value.trim();
    if ( comparedValue !== '') {
   
        outputName.textContent = comparedValue;
    } else {
        outputName.textContent = 'Anonymous';
    }
})