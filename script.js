/* CARD */
function toggleCard(card) {
    document.querySelectorAll(".card").forEach(c => {
        if (c !== card) c.classList.remove("active");
    });
    card.classList.toggle("active");
}

/* PRICE */
function calculatePrice() {
    let variety = document.getElementById("variety").value;
    let qty = document.getElementById("qty").value;

    let price = 0;

    if (variety === "Dwarf") price = 150;
    else if (variety === "Tall") price = 120;
    else if (variety === "Hybrid") price = 180;

    document.getElementById("price").value =
        (qty && variety) ? "₹ " + (price * qty) : "";
}

/* ORDER */
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

    if (qty < 5) {
        alert("Minimum order is 5");
        return;
    }

    if (!confirm("Confirm order?")) return;

    let text =
        "🌴 Coconut Order\n\n" +
        "Name: " + name +
        "\nVariety: " + variety +
        "\nPhone: " + phone +
        "\nQuantity: " + qty +
        "\nTotal Price: " + price +
        "\nLocation: " + location;

    window.open("https://wa.me/919360421569?text=" + encodeURIComponent(text));
}

/* HERO CAROUSEL (4 IMAGES ONLY) */
const images = [
    "farm.jpg",
    "farm1.jpg",
    "farm2.jpg",
    "farm3.jpg"
];

let i = 0;

setInterval(() => {
    i = (i + 1) % images.length;

    document.querySelector(".hero").style.background =
        `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
        url('${images[i]}') center/cover`;
}, 4000);
