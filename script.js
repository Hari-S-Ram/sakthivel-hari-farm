/* CARD TOGGLE */
function toggleCard(card) {
    document.querySelectorAll(".card").forEach(c => {
        if (c !== card) c.classList.remove("active");
    });
    card.classList.toggle("active");
}

/* PRICE CALCULATION */
function calculatePrice() {
    let variety = document.getElementById("variety").value;
    let qty = document.getElementById("qty").value;

    let pricePerUnit = 0;

    if (variety === "Dwarf") pricePerUnit = 150;
    else if (variety === "Tall") pricePerUnit = 120;
    else if (variety === "Hybrid") pricePerUnit = 180;

    let total = pricePerUnit * qty;

    if (variety && qty > 0) {
        document.getElementById("price").value = "₹ " + total;
    } else {
        document.getElementById("price").value = "";
    }
}

/* WHATSAPP SUBMIT WITH FULL PROTECTION */
function sendToWhatsApp(e){
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let variety = document.getElementById("variety").value;
    let phone = document.getElementById("phone").value.trim();
    let qty = document.getElementById("qty").value;
    let price = document.getElementById("price").value;
    let location = document.getElementById("location").value.trim();

    // REMOVE SPACES
    let cleanedPhone = phone.replace(/\s+/g, "");

    // BLOCK OWNER NUMBER
    if (cleanedPhone === "9360421569") {
        alert("Don't enter owner's mobile number");
        return;
    }

    // VALID NUMBER FORMAT (10 digits)
    if (cleanedPhone.length !== 10 || isNaN(cleanedPhone)) {
        alert("Enter valid 10-digit phone number");
        return;
    }

    // STARTING DIGIT CHECK (India rule)
    if (!["9","8","7","6"].includes(cleanedPhone[0])) {
        alert("Enter valid mobile number starting with 9, 8, 7, or 6");
        return;
    }

    // MIN QUANTITY
    if (qty < 5) {
        alert("Minimum order is 5 seedlings");
        return;
    }

    // MAX QUANTITY
    if (qty > 500) {
        alert("Maximum order is 500 seedlings");
        return;
    }

    // CONFIRMATION
    if (!confirm("Are you sure you want to place this order?")) {
        return;
    }

    // EXTRA SAFETY
    if (!price) {
        alert("Please select variety and quantity");
        return;
    }

    // MESSAGE
    let text =
        "🌴 Coconut Seedling Order\n\n" +
        "Name: " + name +
        "\nVariety: " + variety +
        "\nPhone: " + cleanedPhone +
        "\nQuantity: " + qty +
        "\nTotal Price: " + price +
        "\nLocation: " + location;

    window.open("https://wa.me/919360421569?text=" + encodeURIComponent(text));
}
