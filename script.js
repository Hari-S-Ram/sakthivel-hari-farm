/* 🔥 CARD TOGGLE (SMART) */
function toggleCard(card) {

    // Close other cards (clean UX)
    document.querySelectorAll(".card").forEach(c => {
        if (c !== card) c.classList.remove("active");
    });

    // Toggle clicked card
    card.classList.toggle("active");
}

/* 🔥 PRICE CALCULATION */
function calculatePrice() {

    let variety = document.getElementById("variety").value;
    let qty = document.getElementById("qty").value;

    let pricePerUnit = 0;

    if (variety === "Dwarf") pricePerUnit = 150;
    else if (variety === "Tall") pricePerUnit = 120;
    else if (variety === "Hybrid") pricePerUnit = 180;

    let total = pricePerUnit * qty;

    // Show price only when both are selected
    if (variety && qty > 0) {
        document.getElementById("price").value = "₹ " + total;
    } else {
        document.getElementById("price").value = "";
    }
}

/* 🔥 WHATSAPP SUBMIT */
function sendToWhatsApp(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let variety = document.getElementById("variety").value;
    let phone = document.getElementById("phone").value;
    let qty = document.getElementById("qty").value;
    let price = document.getElementById("price").value;
    let location = document.getElementById("location").value;

    // Basic validation (don’t allow empty price)
    if (!price) {
        alert("Please select variety and quantity to calculate price.");
        return;
    }

    let text =
        "🌴 Coconut Seedling Order\n\n" +
        "Name: " + name +
        "\nVariety: " + variety +
        "\nPhone: " + phone +
        "\nQuantity: " + qty +
        "\nTotal Price: " + price +
        "\nLocation: " + location;

    window.open("https://wa.me/919360421569?text=" + encodeURIComponent(text));
}
