// hamburger menu script

function openMenu() {
    document.getElementById("burgerMenu").classList.add("show")
}

function closeMenu() {
    document.getElementById("burgerMenu").classList.remove("show")
}

document.getElementById("eventForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    //let something = document.getElementById("something").value;

    document.getElementById("eventMessage").textContent =
        "Thank you for choosing Floretti, " + name + "! An email has been sent to " + email + ".";
});