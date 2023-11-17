// work with lang toggler
const langToggleBtn = document.querySelector(".js-change-lang");
let toggle = false;

langToggleBtn.addEventListener("click", () => {
    toggle = !toggle;

    if (toggle) {
        langToggleBtn.classList.add("active");
    } else {
        langToggleBtn.classList.remove("active");
    }
});

// work with menu
const openMenuBtn = document.querySelector(".js-menu-open");
const closeMenuBtn = document.querySelector(".js-menu-close");
const menuElement = document.querySelector(".js-menu");

const handleMenuOpen = () => {
    document.body.classList.add("is-menu-open");
    menuElement.classList.add("is-open");
};

const handleMenuClose = () => {
    document.body.classList.remove("is-menu-open");
    menuElement.classList.remove("is-open");
};

openMenuBtn.addEventListener("click", handleMenuOpen);
closeMenuBtn.addEventListener("click", handleMenuClose);
