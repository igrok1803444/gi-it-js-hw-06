const controlOfTextSize = document.getElementById('font-size-control');
const text = document.getElementById('text');

controlOfTextSize.addEventListener('input', (value) => {
    text.style.fontSize = value.currentTarget.value + 'px';
})