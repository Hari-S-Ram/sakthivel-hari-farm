let otpVerified = false;
let confirmationResult;
let timerInterval;

// PRICE
function calculatePrice() {
let v = document.getElementById("variety").value;
let q = document.getElementById("qty").value;
let p = v === "Dwarf" ? 150 : v === "Tall" ? 120 : 180;
document.getElementById("price").value = q ? "₹ " + (p*q) : "";
}

// SEND OTP
function sendOTP() {

let phone = document.getElementById("phone").value;

if (phone.length !== 10) {
alert("Invalid phone");
return;
}

phone = "+91" + phone;

const auth = firebase.auth();
const verifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

document.getElementById("sendOtpBtn").disabled = true;

auth.signInWithPhoneNumber(phone, verifier)
.then((result)=>{
confirmationResult = result;
alert("OTP Sent (123456)");
document.getElementById("otpSection").style.display="block";
startTimer(300);
})
.catch(e=>{
alert(e.message);
});
}

// VERIFY OTP
function verifyOTP(){
let code = document.getElementById("otp").value;

confirmationResult.confirm(code)
.then(()=>{
otpVerified=true;
clearInterval(timerInterval);
document.getElementById("placeOrderBtn").disabled=false;
document.getElementById("phone").readOnly=true;
alert("Verified");
})
.catch(()=>alert("Wrong OTP"));
}

// TIMER
function startTimer(s){
let t=s;
timerInterval=setInterval(()=>{
let m=Math.floor(t/60);
let sec=t%60;
document.getElementById("timer").innerText=`${m}:${sec<10?"0"+sec:sec}`;
t--;
if(t<0){
clearInterval(timerInterval);
alert("OTP expired");
}
},1000);
}

// WHATSAPP
function sendToWhatsApp(e){
e.preventDefault();

if(!otpVerified){
alert("Verify OTP first");
return;
}

// YOUR ORIGINAL VALIDATION KEPT
let name = document.getElementById("name").value.trim();
let phone = document.getElementById("phone").value;
let qty = document.getElementById("qty").value;
let price = document.getElementById("price").value;

let confirmOrder = confirm("Place order?");
if (!confirmOrder) return;

window.open("https://wa.me/919360421569");
}
