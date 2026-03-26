function calculatePrice() {
    let v = document.getElementById("variety").value;
    let q = document.getElementById("qty").value;

    let p = v === "Dwarf" ? 150 : v === "Tall" ? 120 : 180;

    document.getElementById("price").value = q ? "₹ " + (p*q) : "";
}

function sendToWhatsApp(e){
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.replace(/\s+/g,"");
    let qty = document.getElementById("qty").value;
    let price = document.getElementById("price").value;

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

    if (qty < 5 || qty > 500) {
        alert("Quantity must be between 5 and 500");
        return;
    }

    if (!price) {
        alert("Fill all fields properly");
        return;
    }

    let confirmOrder = confirm("Are you sure you want to place this order?");
    if (!confirmOrder) return;

    window.open("https://wa.me/919360421569");
}
