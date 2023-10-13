
    const cartItems = [
      { id: 1, name: "Item 1", price: 10, quantity: 2, liked: false },
      { id: 2, name: "Item 2", price: 20, quantity: 1, liked: true },
      { id: 3, name: "Item 3", price: 15, quantity: 3, liked: false },
    ];

    const cartElement = document.getElementById("cart");
    const totalPriceElement = document.getElementById("total-price");

    
    function updateCart() {
      cartElement.innerHTML = "";

      let totalPrice = 0;

      cartItems.forEach((item) => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("cart-item");

        const itemNameElement = document.createElement("span");
        itemNameElement.textContent = item.name;

        const quantityElement = document.createElement("span");
        quantityElement.textContent = `Quantity: ${item.quantity}`;

        const priceElement = document.createElement("span");
        priceElement.textContent = `$${item.price * item.quantity}`;

        const likeButton = document.createElement("span");
        likeButton.innerHTML = item.liked
          ? "❤️"
          : "♡";
        likeButton.classList.add("like-button");

        likeButton.addEventListener("click", () => {
          item.liked = !item.liked;
          updateCart();
        });

        const increaseQuantityButton = document.createElement("button");
        increaseQuantityButton.textContent = "+";
        increaseQuantityButton.addEventListener("click", () => {
          item.quantity++;
          updateCart();
        });

        const decreaseQuantityButton = document.createElement("button");
        decreaseQuantityButton.textContent = "-";
        decreaseQuantityButton.addEventListener("click", () => {
          if (item.quantity > 1) {
            item.quantity--;
            updateCart(); 
          }
        });

        itemElement.appendChild(itemNameElement);
        itemElement.appendChild(quantityElement);
        itemElement.appendChild(priceElement);
        itemElement.appendChild(likeButton);
        itemElement.appendChild(increaseQuantityButton);
        itemElement.appendChild(decreaseQuantityButton);

        cartElement.appendChild(itemElement);

        totalPrice += item.price * item.quantity;
      });

      totalPriceElement.textContent = totalPrice;
    }

    updateCart();

   
  