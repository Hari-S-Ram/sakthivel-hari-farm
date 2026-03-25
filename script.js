function toggleCard(card) {
    document.querySelectorAll(".card").forEach(c => {
        if (c !== card) c.classList.remove("active");
    });
    card.classList.toggle("active");
}

function calculatePrice() {
    let v = document.getElementById("variety").value;
    let q = document.getElementById("qty").value;

    let p = 0;

    if (v === "Dwarf") p = 150;
    else if (v === "Tall") p = 120;
    else if (v === "Hybrid") p = 180;

    document.getElementById("price").value =
        (v && q) ? "₹ " + (p * q) : "";
}

function sendToWhatsApp(e){
    e.preventDefault();

    let phone = document.getElementById("phone").value;
    let qty = document.getElementById("qty").value;

    if (phone.length !== 10 || isNaN(phone)) {
        alert("Invalid phone");
        return;
    }

    if (qty < 5 || qty > 500) {
        alert("Order must be between 5 and 500");
        return;
    }

    if (!confirm("Confirm order?")) return;

    window.open("https://wa.me/919360421569");
}
