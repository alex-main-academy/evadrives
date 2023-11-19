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

// work with swiper
var swiper = new Swiper(".mySwiper", {
    speed: 0,
    slidesPerView: 4,
    draggble: false,
    allowTouchMove: false,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    speed: 0,
    simulateTouch: false,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});
var swiper4 = new Swiper(".mySwiper4", {
    speed: 200,
    slidesPerView: 4,
    freeMode: true,
    allowTouchMove: false,
    watchSlidesProgress: true,
    simulateTouch: true,
});
var swiper3 = new Swiper(".mySwiper3", {
    speed: 200,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper4,
    },
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

// work with change colors
const selectColors = document.querySelector(".js-select-color");
const selectBorder = document.querySelector(".js-select-border");

selectColors.addEventListener("change", (event) => {
    const mainSliderImage = document.querySelector(".swiper-slide-active img");
    const currentColor = event.target.value;
    const currentBorder = selectBorder.value;

    if (currentColor === "haki" || currentColor === "purple") {
        mainSliderImage.setAttribute(
            "src",
            `img/product_1/${currentColor}_black.jpg`
        );
    } else {
        mainSliderImage.setAttribute(
            "src",
            `img/product_1/${currentColor}_${currentBorder}.jpg`
        );
    }
});

selectBorder.addEventListener("change", (event) => {
    const mainSliderImage = document.querySelector(".swiper-slide-active img");
    const currentBorder = event.target.value;
    const currentColor = selectColors.value;

    if (currentColor === "haki" || currentColor === "purple") {
        mainSliderImage.setAttribute(
            "src",
            `img/product_1/${currentColor}_black.jpg`
        );
    } else {
        mainSliderImage.setAttribute(
            "src",
            `img/product_1/${currentColor}_${currentBorder}.jpg`
        );
    }
});

// work with gallery
const galleryElement = document.querySelector(".js-gallery");
const openGalleryBtn = document.querySelector(".js-gallery-open");
const closeGalleryBtn = document.querySelector(".js-gallery-close");

const handleOpenGallery = () => {
    document.body.classList.add("is-menu-open");
    galleryElement.classList.add("is-gallery-open");
};

const handleCloseGallery = () => {
    document.body.classList.remove("is-menu-open");
    galleryElement.classList.remove("is-gallery-open");
};

openGalleryBtn.addEventListener("click", handleOpenGallery);
closeGalleryBtn.addEventListener("click", handleCloseGallery);

// work with modal form
const overlay = document.querySelector(".js-overlay");
const formCloseBtn = document.querySelector(".js-form-close");
const formOpenBtn = document.querySelector(".js-form-open");

const handleFormOpen = () => {
    document.body.classList.add("is-menu-open");
    overlay.classList.add("is-form-open");
};

const handleFormClose = () => {
    document.body.classList.remove("is-menu-open");
    overlay.classList.remove("is-form-open");
};

formOpenBtn.addEventListener("click", handleFormOpen);
formCloseBtn.addEventListener("click", handleFormClose);
