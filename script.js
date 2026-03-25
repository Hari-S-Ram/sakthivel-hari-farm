function toggleCard(card) {
    card.classList.toggle("active");
}

function sendToWhatsApp(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let qty = document.getElementById("qty").value;
    let msg = document.getElementById("msg").value;

    let text = `Name:${name}%0APhone:${phone}%0AQty:${qty}%0AMessage:${msg}`;

    window.open("https://wa.me/919360421569?text="+text);
} 