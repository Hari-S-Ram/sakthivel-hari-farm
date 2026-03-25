let selectedVariety = "";

// STORE selection only
function selectVariety(variety) {
    selectedVariety = variety;
}

// WHEN USER CLICKS DROPDOWN → apply selection
document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.getElementById("variety");

    dropdown.addEventListener("focus", function () {
        if (selectedVariety !== "") {
            dropdown.value = selectedVariety;
        }
    });
});

// WHATSAPP
function sendToWhatsApp(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let variety = document.getElementById("variety").value;
    let phone = document.getElementById("phone").value;
    let qty = document.getElementById("qty").value;
    let location = document.getElementById("location").value;

    let text =
        "Hi, I want to order coconut seedlings.\n\n" +
        "Variety: " + variety +
        "\nQuantity: " + qty +
        "\nLocation: " + location +
        "\nName: " + name +
        "\nPhone: " + phone;

    window.open("https://wa.me/919360421569?text=" + encodeURIComponent(text));
}
