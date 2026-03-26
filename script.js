function sendToWhatsApp(e){
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let variety = document.getElementById("variety").value;
    let phone = document.getElementById("phone").value.replace(/\s+/g,"");
    let qty = document.getElementById("qty").value;
    let price = document.getElementById("price").value;
    let location = document.getElementById("location").value.trim();

    // BLOCK OWNER NAME
    if (name.toLowerCase() === "harisivaram") {
        alert("Don't enter owner's name");
        return;
    }

    // BLOCK OWNER NUMBER
    if (phone === "9360421569") {
        alert("Don't enter owner's number");
        return;
    }

    // PHONE VALIDATION
    if (phone.length !== 10 || isNaN(phone)) {
        alert("Invalid phone number");
        return;
    }

    // START DIGIT CHECK
    if (!["9","8","7","6"].includes(phone[0])) {
        alert("Number must start with 9, 8, 7, or 6");
        return;
    }

    // QUANTITY CHECK
    if (qty < 5 || qty > 500) {
        alert("Quantity must be between 5 and 500");
        return;
    }

    // SAFETY
    if (!price) {
        alert("Fill all fields properly");
        return;
    }

    // CONFIRM
    if (!confirm("Are you sure you want to place this order?")) return;

    // ✅ MESSAGE (THIS WAS MISSING)
    let text =
        "🌴 Coconut Seedling Order\n\n" +
        "Name: " + name +
        "\nVariety: " + variety +
        "\nPhone: " + phone +
        "\nQuantity: " + qty +
        "\nTotal Price: " + price +
        "\nLocation: " + location;

    // ✅ FINAL FIX
    window.open("https://wa.me/919360421569?text=" + encodeURIComponent(text));
}
