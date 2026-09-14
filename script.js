// Shopping Cart

let cart = [];


// Add product to cart

function addToCart(productName, price) {

    cart.push({
        name: productName,
        price: price
    });

    document.getElementById("cartCount").innerText = cart.length;

    alert(productName + " added to cart!");
}


// Display Cart

function showCart() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;
    }

    let message = "🛒 Your Cart\n\n";

    let total = 0;

    cart.forEach(function(item, index) {

        message +=
            (index + 1) +
            ". " +
            item.name +
            " - ₹" +
            item.price +
            "\n";

        total += item.price;

    });

    message += "\n--------------------\n";

    message += "Total: ₹" + total;

    alert(message);
}


// Search Parts

function searchParts() {

    let searchText =
        document
        .getElementById("searchBox")
        .value
        .toLowerCase();

    let cards =
        document.querySelectorAll(".part-card");

    cards.forEach(function(card) {

        let text =
            card.innerText.toLowerCase();

        if (text.includes(searchText)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });
}


// Filter by Country

function filterCountry() {

    let selectedCountry =
        document
        .getElementById("countryFilter")
        .value;

    let cards =
        document.querySelectorAll(".part-card");

    cards.forEach(function(card) {

        let country =
            card.getAttribute("data-country");

        if (
            selectedCountry === "all" ||
            country === selectedCountry
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });
}


// Scroll to Parts

function scrollToParts() {

    document
        .getElementById("parts")
        .scrollIntoView({
            behavior: "smooth"
        });

}
