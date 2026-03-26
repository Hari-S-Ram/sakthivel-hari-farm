// 🔥 NORMALIZE TEXT (for bad words)
function normalizeText(text) {
    return text
        .toLowerCase()
        .replace(/[^a-z]/g, "")        // remove symbols/numbers/spaces
        .replace(/(.)\1+/g, "$1");     // remove repeated letters (puuunda → punda)
}


// 🔥 ADVANCED BAD WORD FILTER
function containsBadWords(name) {

    let badWords = [
        "fuck","shit","bitch","asshole","bastard",
        "sunni","punda","pundai","otha","thevidiya",
        "poolu","dick","sex","xxx","mavane","mavan","gay"
    ];

    let clean = normalizeText(name);

    for (let i = 0; i < badWords.length; i++) {
        if (clean.includes(badWords[i])) {
            return true;
        }
    }

    return false;
}


// 🔥 NORMALIZE PHONE (handles +91, spaces, etc.)
function normalizePhone(phone) {
    return phone.replace(/\D/g, "").slice(-10);
}


// 🔥 PRICE CALCULATION
function calculatePrice() {
    let variety = document.getElementById("variety").value;
    let qty = parseInt(document.getElementById("qty").value);

    let pricePerUnit = 0;

    if (variety === "Dwarf") pricePerUnit = 150;
    else if (variety === "Tall") pricePerUnit = 120;
    else if (variety === "Hybrid") pricePerUnit = 180;

    if (!variety || isNaN(qty) || qty <= 0) {
        document.getElementById("price").value = "";
        return;
    }

    let total = pricePerUnit * qty;
    document.getElementById("price").value = "₹ " + total;
}


// 🔥 MAIN FUNCTION
function sendToWhatsApp(e){
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let variety = document.getElementById("variety").value;
    let rawPhone = document.getElementById("phone").value;
    let phone = normalizePhone(rawPhone);
    let qty = parseInt(document.getElementById("qty").value);
    let price = document.getElementById("price").value;
    let location = document.getElementById("location").value.trim();

    // 🔥 OWNER NAME BLOCK
    if (name.toLowerCase() === "harisivaram") {
        alert("Don't enter owner's name");
        return;
    }

    // 🔥 BAD WORD BLOCK
    if (containsBadWords(name)) {
        alert("Abusive or inappropriate words are not allowed");
        return;
    }

    // 🔥 OWNER NUMBER BLOCK
    if (phone === "9360421569") {
        alert("Don't enter owner's mobile number");
        return;
    }

    // 🔥 PHONE VALIDATION
    if (phone.length !== 10) {
        alert("Enter valid 10-digit phone number");
        return;
    }

    // 🔥 START DIGIT VALIDATION
    if (!["9","8","7","6"].includes(phone[0])) {
        alert("Number must start with 9, 8, 7, or 6");
        return;
    }

    // 🔥 QUANTITY VALIDATION
    if (isNaN(qty) || qty < 5 || qty > 500) {
        alert("Quantity must be between 5 and 500");
        return;
    }

    // 🔥 REQUIRED FIELDS CHECK
    if (!variety || !price || !location) {
        alert("Please fill all fields properly");
        return;
    }

    // 🔥 CONFIRMATION
    if (!confirm("Are you sure you want to place this order?")) return;

    // 🔥 WHATSAPP MESSAGE
    let text =
        "🌴 Coconut Seedling Order\n\n" +
        "Name: " + name +
        "\nVariety: " + variety +
        "\nPhone: " + phone +
        "\nQuantity: " + qty +
        "\nTotal Price: " + price +
        "\nLocation: " + location;

    let url = "https://wa.me/919360421569?text=" + encodeURIComponent(text);

    window.open(url, "_blank");
}
