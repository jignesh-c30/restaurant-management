// let menu = document.querySelector("menu-icon");
// let navbar = document.querySelector(".navbar");

// menu.addEventListener("click", function() {
//     navbar.classList.toggle("active");
// });

// window.onscroll = () => {
//     navbar.classList.remove("active");
// };

function classToggle() {
    const navs = document.querySelectorAll('.navbar')

    navs.forEach(nav => nav.classList.toggle('active'));
}

document.querySelector('.active')
    .addEventListener('click', classToggle);