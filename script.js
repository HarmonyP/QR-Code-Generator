const wrapper = document.querySelector('.wrapper')
const btn = document.querySelector('button')
const qrData= document.querySelector('.form_class input')
const qrGenerator= document.querySelector('.qr-code img')

btn.addEventListener('click', ()=>{
  
    let qrCode = qrData.value;
    if(!qrCode) return
    btn.innerHTML="Generating QR Code..."
    qrGenerator.src=`https://api.qrserver.com/v1/create-qr-code/?size=170*170&data=${qrCode}`

    qrGenerator.addEventListener('load',() => {
        wrapper.classList.add('active')
        btn.innerHTML="Generate QR Code"
    })

   qrData.addEventListener('keyup',()=>{
    if(! qrData.value){
        wrapper.classList.remove('active')
    }
   })
})