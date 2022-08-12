const shoppingIcon = document.querySelector(".shopping-cart");
const cartDetails = document.querySelector(".cart-details");
const count = document.querySelector(".count")
const minus = document.querySelector(".minus")
const plus = document.querySelector(".plus")
const addToCart = document.querySelector(".add-cart")
const notify = document.querySelector(".notify")
const input = document.querySelector(".shopping-content")
const clear = document.querySelector(".checkout")
const price = document.querySelector(".slash")
const checkOut = document.querySelector(".bottom-button")
const placeHolder = document.querySelector(".placeholder")

shoppingIcon.addEventListener("click", () => {
    if (cartDetails.classList.contains("cart-closed")) {
        cartDetails.classList.remove("cart-closed")
    } else {
        // placeHolder.classList.remove("placeholder-hide")   
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

const addItems = () => {
    const newLi = document.createElement("li");
    const delBtn = document.createElement("button");
    

    delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';

    newLi.innerHTML = `
                        <img src="images/image-product-1-thumbnail.jpg" alt="cart-thumbnail"/>
                        <p>Fall Limited Edition Sneakers $125.00 x ${count.innerHTML} <b> $ ${count.innerHTML * 125}.00</b></p>
                        `;

    if (count.innerHTML <= 0) {
        notify.classList.remove("show")
        alert("Please add a shopping item")
    }else {
        // // input.value = newLi;
        newLi.appendChild(delBtn);
        input.appendChild(newLi);
        if(notify.classList.contains("show")) {
            notify.classList.remove("show")
            }
            notify.innerHTML++
            count.innerHTML = 0
            placeHolder.innerHTML = ""
        }



     // delete button on li list
    delBtn.addEventListener("click", function () {
        const del = confirm("You are about to delete this item!!!");
        if (del == true) {
          const parent = this.parentNode;
          parent.remove();
          notify.innerHTML--
        }
        
      });

};
    

addToCart.addEventListener("click", addItems)

clear.addEventListener("click", () => {
    input.innerHTML = "";
    notify.innerHTML = 0;
    placeHolder.innerHTML = "Your Cart is Empty"
  });
