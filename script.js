function toggleCard(card){
    card.classList.toggle("active");
}

function calculatePrice(){
    let v=variety.value;
    let q=qty.value;

    let p=0;

    if(v==="Dwarf") p=150;
    else if(v==="Tall") p=120;
    else if(v==="Hybrid") p=180;

    price.value=(v&&q)? "₹ "+(p*q):"";
}

function sendToWhatsApp(e){
    e.preventDefault();

    if(phone.value.length!=10){ alert("Invalid phone"); return; }
    if(qty.value<5){ alert("Min 5"); return; }
    if(!confirm("Confirm?")) return;

    window.open("https://wa.me/919360421569");
}

/* CAROUSEL */
const imgs=["farm.jpg","farm1.jpg","farm2.jpg","farm3.jpg"];
let i=0;

setInterval(()=>{
    i=(i+1)%imgs.length;
    document.querySelector(".hero").style.background=
    `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('${imgs[i]}') center/cover`;
},4000);
