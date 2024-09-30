const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generatebtn = document.getElementById('generatebtn');
const downloadbtn = document.getElementById('downloadbtn');

const qrcontainer = document.querySelector('.qr-body');
let size = sizes.value;

generatebtn.addEventListener('click',(e)=>{
    e.preventDefault();
    isEmptyInput();
       
});

sizes.addEventListener('change',(e)=>{
    size = e.target.value;
    isEmptyInput();
});

downloadbtn.addEventListener('click',(e)=>{
    let img = document.querySelector('.qr-body img');
    if(img !==null)
    {
        let imgAtbt = img.getAttribute('src');
        downloadbtn.setAttribute("href",imgAtbt);
    }
    else{
        downloadbtn.setAttribute("href",`${document.querySelector('canvas').toDataURL()}`);
    }
});

function isEmptyInput()
{
    if(qrText.value.length>0){
        generateQRCode();   
    }   
    else{
        alert("Enter the Text");
    } 
   // qrText.value.length>0 ?  generateQRCode() : alert("Enter the Text");; using turnery operator
}

function generateQRCode()
{
    qrcontainer.innerHTML="";
    new QRCode (qrcontainer,{
        text:qrText.value , height:size,
        width:size,
        colorLight:"#fff", 
        colorDark:"#000",

    });
}