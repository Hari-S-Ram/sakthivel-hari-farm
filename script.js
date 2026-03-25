function toggleCard(card) {
    card.classList.toggle("active");
}

function sendToWhatsApp(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let qty = document.getElementById("qty").value;
    let msg = document.getElementById("msg").value;

    // SAFE improvement: encoding message properly
    let text = "Name: " + name + "\nPhone: " + phone + "\nQuantity: " + qty + "\nMessage: " + msg;

    let url = "https://wa.me/919360421569?text=" + encodeURIComponent(text);

    window.open(url, "_blank");
}
