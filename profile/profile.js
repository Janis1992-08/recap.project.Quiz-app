const bodyElement = document.querySelector('[data-js="body"]');
const buttonToggle = document.querySelector('[data-js="toggle-button"]');

buttonToggle.addEventListener("click", () => {
    bodyElement.classList.toggle("dark");
    });

    
