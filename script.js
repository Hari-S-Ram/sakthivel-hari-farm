function calculatePrice() {
    let v = document.getElementById("variety").value;
    let q = parseInt(document.getElementById("qty").value); // FIX

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


function sendToWhatsApp(e){
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let variety = document.getElementById("variety").value;
    let phone = document.getElementById("phone").value.replace(/\s+/g,"");
    let qty = parseInt(document.getElementById("qty").value);
    let price = document.getElementById("price").value;
    let location = document.getElementById("location").value.trim();

    // VALIDATIONS
    if (name.toLowerCase() === "harisivaram") {
        alert("Don't enter owner's name");
        return;
    }

    if (phone === "9360421569") {
        alert("Don't enter owner's number");
        return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
        alert("Invalid phone number");
        return;
    }

    if (!["9","8","7","6"].includes(phone[0])) {
        alert("Number must start with 9, 8, 7, or 6");
        return;
    }

    if (isNaN(qty) || qty < 5 || qty > 500) {
        alert("Quantity must be between 5 and 500");
        return;
    }

    if (!price || !location) {
        alert("Fill all fields properly");
        return;
    }

    // CONFIRM
    if (!confirm("Are you sure you want to place this order?")) return;

    // ✅ CREATE MESSAGE
    let text =
        "🌴 Coconut Seedling Order\n\n" +
        "Name: " + name +
        "\nVariety: " + variety +
        "\nPhone: " + phone +
        "\nQuantity: " + qty +
        "\nTotal Price: " + price +
        "\nLocation: " + location;

    // ✅ SEND TO WHATSAPP
    let url = "https://wa.me/919360421569?text=" + encodeURIComponent(text);

    window.open(url, "_blank");
}
