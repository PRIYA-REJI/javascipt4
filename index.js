const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("ayPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
  if(myCheckBox.checked){
    subResult.textContent=`You are Subscribed!`;
  }
  else{
    subResult.textContent=`You are not Subscribed!`;
  }

  if(visaBtn.checked){
    paymentResult.textContent=`You are paying with Visa!`;
  }
  else if(masterCardBtn.checked) {
     paymentResult.textContent=`You are not paying with Visa!`;
  }
   else if(payPalBtn.checked) {
     paymentResult.textContent=`You are not paying with Paypal!`;
  }
  else{
    paymentResult.textContent=`you must select a Payment Type!`;
  }
}
