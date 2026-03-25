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

/* WHATSAPP SUBMIT WITH PROTECTION */
function sendToWhatsApp(e){
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let variety = document.getElementById("variety").value;
    let phone = document.getElementById("phone").value.trim();
    let qty = document.getElementById("qty").value;
    let price = document.getElementById("price").value;
    let location = document.getElementById("location").value.trim();

    /* 🔥 1. PHONE VALIDATION */
    if (phone.length !== 10 || isNaN(phone)) {
        alert("Enter valid 10-digit phone number");
        return;
    }

    /* 🔥 2. MINIMUM QUANTITY */
    if (qty < 5) {
        alert("Minimum order is 5 seedlings");
        return;
    }

    /* 🔥 3. CONFIRMATION POPUP */
    if (!confirm("Are you sure you want to place this order?")) {
        return;
    }

    /* EXTRA SAFETY */
    if (!price) {
        alert("Please select variety and quantity");
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
