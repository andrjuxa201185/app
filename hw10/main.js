document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('img');

    img.addEventListener('load', () => {
        console.log(`width = ${img.offsetWidth}`);
        console.log(`height = ${img.offsetHeight}`);
    });
});