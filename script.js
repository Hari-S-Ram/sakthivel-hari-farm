// PRICE CALCULATION
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


// 🔥 BAD WORD FILTER FUNCTION
function containsBadWords(name) {

    let badWords = [
        "fuck","shit","bitch","asshole","bastard",
        "sunni","sunniya","punda","pundai","otha",
        "thevidiya","poolu","dick","sex","xxx"
    ];

    let clean = name.toLowerCase();

    for (let i = 0; i < badWords.length; i++) {
        if (clean.includes(badWords[i])) {
            return true;
        }
    }

    return false;
}


// WHATSAPP SUBMIT
function sendToWhatsApp(e){
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let variety = document.getElementById("variety").value;
    let phone = document.getElementById("phone").value.replace(/\s+/g,"");
    let qty = parseInt(document.getElementById("qty").value);
    let price = document.getElementById("price").value;
    let location = document.getElementById("location").value.trim();

    // 🔥 OWNER NAME BLOCK
    if (name.toLowerCase() === "harisivaram") {
        alert("Don't enter owner's name");
        return;
    }

    // 🔥 BAD WORD CHECK
    if (containsBadWords(name)) {
        alert("Abusive or inappropriate words are not allowed");
        return;
    }

    // 🔥 PHONE BLOCK
    if (phone === "9360421569") {
        alert("Don't enter owner's number");
        return;
    }

    // 🔥 PHONE VALIDATION
    if (phone.length !== 10 || isNaN(phone)) {
        alert("Enter valid 10-digit phone number");
        return;
    }

    // 🔥 START DIGIT CHECK
    if (!["9","8","7","6"].includes(phone[0])) {
        alert("Number must start with 9, 8, 7, or 6");
        return;
    }

    // 🔥 QUANTITY CHECK
    if (isNaN(qty) || qty < 5 || qty > 500) {
        alert("Quantity must be between 5 and 500");
        return;
    }

    // 🔥 EMPTY CHECK
    if (!price || !location) {
        alert("Fill all fields properly");
        return;
    }

    // 🔥 CONFIRM
    if (!confirm("Are you sure you want to place this order?")) return;

    // MESSAGE
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
