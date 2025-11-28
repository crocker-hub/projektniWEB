document.addEventListener("DOMContentLoaded", function () {

    // -----------------------------
    //  INIT KOŠARICE
    // -----------------------------
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function updateCartCount() {
        const cartCount = document.getElementById("cartCount");
        if (cartCount) {
            cartCount.textContent = cart.length;
        }
    }

    updateCartCount();


    // -----------------------------
    //  DODAVANJE U KOŠARICU
    // -----------------------------
    const buyButtons = document.querySelectorAll(".buy-btn");

    buyButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const name = btn.dataset.name;
            const price = parseFloat(btn.dataset.price);

            cart.push({ name, price });

            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartCount();

            alert("Proizvod dodan u košaricu!");
        });
    });


    // -----------------------------
    //  GUMB ZA OTVARANJE KOŠARICE
    // -----------------------------
    const cartBtn = document.getElementById("cartBtn");

    if (cartBtn) {
        cartBtn.addEventListener("click", () => {
            window.location.href = "cart.html";
        });
    }
});