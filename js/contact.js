// hamburger menu script

function openMenu() {
    document.getElementById("burgerMenu").classList.add("show")
}

function closeMenu() {
    document.getElementById("burgerMenu").classList.remove("show")
}

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    //let something = document.getElementById("something").value;

    document.getElementById("contactMessage").textContent =
        "Thanks for contacting us, " + name + "! We'll get back to you as soon as possible!";
});