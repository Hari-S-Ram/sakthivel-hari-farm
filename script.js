// 🔥 NORMALIZE TEXT
function normalizeText(text) {
    return text
        .toLowerCase()
        .replace(/[@$!0-9]/g, "")
        .replace(/[^a-z]/g, "")
        .replace(/(.)\1+/g, "$1");
}


// 🔥 ABUSE DETECTION (UPDATED)
function detectAbuse(name) {

    let clean = normalizeText(name);

    // 🔥 DIRECT BAD WORDS
    let badWords = [
        "fuck","bitch","pundai","punda","sunni",
        "koothi","goothi","kuthi","otha"
    ];

    for (let i = 0; i < badWords.length; i++) {
        if (clean.includes(badWords[i])) return true;
    }

    // 🔥 SENTENCE LEVEL (VERY IMPORTANT)
    let sentencePatterns = [
        /oru\s*(venna|punda|loosu)/,
        /dei\s*(venna|punda)/,
        /nee\s*(punda|loosu)/
    ];

    for (let i = 0; i < sentencePatterns.length; i++) {
        if (sentencePatterns[i].test(name.toLowerCase())) {
            return true;
        }
    }

    return false;
}


// 🔥 NORMALIZE PHONE
function normalizePhone(phone) {
    return phone.replace(/\D/g, "").slice(-10);
}


// 🔥 PRICE CALCULATION (SAFE)
function calculatePrice() {
    let v = document.getElementById("variety").value;
    let q = parseInt(document.getElementById("qty").value);

    let p = 0;
    if (v === "Dwarf") p = 150;
    else if (v === "Tall") p = 120;
    else if (v === "Hybrid") p = 180;

    if (!v || isNaN(q) || q <= 0) {
        document.getElementById("price").value = "";
        return;
    }

    document.getElementById("price").value = "₹ " + (p * q);
}


// 🔥 MAIN FUNCTION
function sendToWhatsApp(e){
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let variety = document.getElementById("variety").value;
    let phone = normalizePhone(document.getElementById("phone").value);
    let qty = parseInt(document.getElementById("qty").value);
    let price = document.getElementById("price").value;
    let location = document.getElementById("location").value.trim();

    // 🔥 NAME VALIDATION
    if (name.length < 3) {
        alert("Enter valid name");
        return;
    }

    if (normalizeText(name) === "harisivaram") {
        alert("Don't enter owner's name");
        return;
    }

    if (detectAbuse(name)) {
        alert("Abusive or invalid name not allowed");
        return;
    }

    // 🔥 PHONE VALIDATION
    if (phone === "9360421569") {
        alert("Don't enter owner's number");
        return;
    }

    if (phone.length !== 10 || /^0+$/.test(phone)) {
        alert("Enter valid phone number");
        return;
    }

    if (!["9","8","7","6"].includes(phone[0])) {
        alert("Invalid phone number");
        return;
    }

    // 🔥 QUANTITY (STRICT)
    if (!Number.isInteger(qty) || qty < 5 || qty > 500) {
        alert("Quantity must be between 5 and 500");
        return;
    }

    // 🔥 REQUIRED CHECK
    if (!variety || !price || !location) {
        alert("Fill all fields properly");
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

    let url = "https://wa.me/919360421569?text=" + encodeURIComponent(text);

    window.open(url, "_blank");
}
