function toggleCard(card) {
    document.querySelectorAll(".card").forEach(c => {
        if (c !== card) c.classList.remove("active");
    });
    card.classList.toggle("active");
}

function calculatePrice() {
    let variety = document.getElementById("variety").value;
    let qty = document.getElementById("qty").value;

    let price = 0;

    if (variety === "Dwarf") price = 150;
    else if (variety === "Tall") price = 120;
    else if (variety === "Hybrid") price = 180;

    document.getElementById("price").value =
        (variety && qty) ? "₹ " + (price * qty) : "";
}

function sendToWhatsApp(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let variety = document.getElementById("variety").value;
    let phone = document.getElementById("phone").value;
    let qty = document.getElementById("qty").value;
    let price = document.getElementById("price").value;
    let location = document.getElementById("location").value;

    if (phone.length !== 10 || isNaN(phone)) {
        alert("Invalid phone number");
        return;
    }

    if (qty < 5 || qty > 500) {
        alert("Order must be between 5 and 500 seedlings");
        return;
    }

    if (!confirm("Confirm order?")) return;

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
