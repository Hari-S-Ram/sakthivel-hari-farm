function toggleCard(card) {
    card.classList.toggle("active");
}

function sendToWhatsApp(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let variety = document.getElementById("variety").value;
    let phone = document.getElementById("phone").value;
    let qty = document.getElementById("qty").value;
    let location = document.getElementById("location").value;

    let text =
        "Name: " + name +
        "\nVariety: " + variety +
        "\nPhone: " + phone +
        "\nQuantity: " + qty +
        "\nLocation: " + location;

    window.open("https://wa.me/919360421569?text=" + encodeURIComponent(text));
}
