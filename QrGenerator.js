
let generateBtn = document.querySelector('.container .generate-btn');
let qr = document.querySelector('.container .qr-box img');
let qrBox = document.querySelector('.container .qr-box');
let userInput = document.querySelector('.container .userInput');
let container = document.querySelector('.container');

generateBtn.addEventListener('click',()=>{
 if(userInput.value != ''){
   container.style.height = '460px';
   generateQrCode();
   setTimeout(()=>{
       qrBox.style.visibility = 'visible';
   },200)
 }     
})

let generateQrCode =()=>{
 let url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userInput.value}`;
 qr.src = url;
}

//In summary, this code sets up event handling for a button click, 
//generates a QR code based on user input, and updates the visibility and styling of elements on the web page accordingly.