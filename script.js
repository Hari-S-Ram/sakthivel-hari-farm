// 🔥 NORMALIZE TEXT
function normalizeText(text) {
    return text
        .toLowerCase()
        .replace(/[@$!0-9]/g, "")
        .replace(/[^a-z]/g, "")
        .replace(/(.)\1+/g, "$1");
}


// 🔥 SMART AI-LIKE FILTER
function detectAbuse(name) {

    let clean = normalizeText(name);
    let score = 0;

    // 🔥 STRONG WORDS (high score)
    let strongWords = [
        "fuck","bitch","pundai","punda","sunni","koothi","goothi","kuthi"
    ];

    // 🔥 MEDIUM WORDS
    let mediumWords = [
        "shit","asshole","bastard","otha","poolu","dick"
    ];

    // 🔥 MILD / SUSPICIOUS
    let mildWords = [
        "sex","xxx","mavan","gay"
    ];

    // 🔥 SCORING
    for (let i = 0; i < strongWords.length; i++) {
        if (clean.includes(strongWords[i])) score += 5;
    }

    for (let i = 0; i < mediumWords.length; i++) {
        if (clean.includes(mediumWords[i])) score += 3;
    }

    for (let i = 0; i < mildWords.length; i++) {
        if (clean.includes(mildWords[i])) score += 1;
    }

    // 🔥 PHONETIC PATTERNS
    let patterns = [
        /t+h*e*v+u+d+i+y+a+/,
        /p+u+n+d+a+i+/,
        /k+o+o*t+h+i+/,
        /k+u+t+h+i+/,
        /s+u+n+n+i+/,
        /o+t+h+a+/
    ];

    for (let i = 0; i < patterns.length; i++) {
        if (patterns[i].test(clean)) score += 4;
    }

    // 🔥 REPETITIVE / SPAMMY TEXT
    if (clean.length > 15) score += 1;

    // 🔥 DECISION
    return score >= 4;   // threshold
}


// 🔥 NORMALIZE PHONE
function normalizePhone(phone) {
    return phone.replace(/\D/g, "").slice(-10);
}


// 🔥 PRICE CALCULATION
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

    let cleanName = normalizeText(name);

    // 🔥 OWNER NAME BLOCK
    if (cleanName === "harisivaram") {
        alert("Don't enter owner's name");
        return;
    }

    // 🔥 SMART ABUSE DETECTION
    if (detectAbuse(name)) {
        alert("Inappropriate or abusive content detected");
        return;
    }

    // 🔥 OWNER NUMBER BLOCK
    if (phone === "9360421569") {
        alert("Don't enter owner's number");
        return;
    }

    // 🔥 PHONE VALIDATION
    if (phone.length !== 10 || /^0+$/.test(phone)) {
        alert("Enter valid phone number");
        return;
    }

    if (!["9","8","7","6"].includes(phone[0])) {
        alert("Invalid number start");
        return;
    }

    // 🔥 QUANTITY
    if (isNaN(qty) || qty < 5 || qty > 500) {
        alert("Quantity must be 5–500");
        return;
    }

    if (!price || !location) {
        alert("Fill all fields");
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
