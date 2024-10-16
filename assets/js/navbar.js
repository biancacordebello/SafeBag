const hamburguer = document.getElementById("burguer-menu");

const navMenu = document.querySelector(".navbar_toggleShow");

hamburguer.addEventListener("click", () => {
    navMenu.classList.toggle('active');
    hamburguer.classList.toggle('active')
});

document.addEventListener("click", (event) => {
    const isClickInsideNav = navMenu.contains(event.target);
    const isClickInsideHamburguer = hamburguer.contains(event.target);
    
    if (!isClickInsideNav && !isClickInsideHamburguer) {
        navMenu.classList.remove('active');
        hamburguer.classList.remove('active');
    }
});


