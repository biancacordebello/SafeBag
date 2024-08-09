const hamburguer = document.getElementById("burguer-menu");

const navMenu = document.querySelector(".navbar_toggleShow");

hamburguer.addEventListener("click", () => {
    navMenu.classList.toggle('active');
    hamburguer.classList.toggle('active')
});
