const overLay= document.getElementById('overlay');
const modalSection= document.getElementById('modal-section');
const clickModal= document.getElementById('click-modal');
const closemodal= document.getElementById('close-modal');
const closeButton= document.getElementById('close-button');

clickModal.addEventListener('click',()=>{
    overLay.classList.remove('hidden');
    modalSection.classList.add('hidden');
 
   
})

const hideDialog = () =>{
    overLay.classList.add('hidden');
    modalSection.classList.remove('hidden');

}

overLay.addEventListener('click',hideDialog)
closemodal.addEventListener('click',hideDialog)
closeButton.addEventListener('click',hideDialog)




// closemodal.addEventListener('click',()=>{

//     overLay.classList.toggle('hidden');
//     modalSection.classList.toggle('hidden');
 
   
// })

// closeButton.addEventListener('click',()=>{

//     overLay.classList.toggle('hidden');
//     modalSection.classList.toggle('hidden');
 
   
// })
