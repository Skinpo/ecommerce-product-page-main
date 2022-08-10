const shoppingIcon = document.querySelector(".shopping-cart");
const cartDetails = document.querySelector(".cart-details");
const count = document.querySelector(".count")
const minus = document.querySelector(".minus")
const plus = document.querySelector(".plus")

shoppingIcon.addEventListener("click", () => {
    if (cartDetails.classList.contains("cart-closed")) {
        cartDetails.classList.remove("cart-closed")
    } else {
        cartDetails.classList.add("cart-closed")
    }
})

plus.addEventListener("click", () => {
    count.innerHTML++;
})

minus.addEventListener("click", () => {
    if (count.innerHTML <= 0) {
        count.innerHTML = 0
    } else {
        count.innerHTML--
    }
})

