const dropdown = document.querySelector(".dropdown");
const checkout = document.querySelector(".checkout");

checkout.addEventListener("click", () => {
    if(dropdown.classList.contains("hidden")) {
        dropdown.classList.remove("hidden")
    } else {
        dropdown.classList.add("hidden")
    }
})