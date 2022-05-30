const overLay= document.querySelector('#overlay');
const modalSection= document.querySelector('#modal-section');
const clickModal= document.querySelector('#click-modal');
const closemodal= document.querySelector('#close-modal');
const closeButton= document.querySelector('#close-button');

clickModal.addEventListener('click',()=>{

    overLay.classList.toggle('hidden');
    modalSection.classList.toggle('hidden');
 
   
})

const toggleModal = () =>{
    overLay.classList.toggle('hidden');
    modalSection.classList.toggle('hidden');

}
closemodal.addEventListener('click',toggleModal)
closeButton.addEventListener('click',toggleModal)




// closemodal.addEventListener('click',()=>{

//     overLay.classList.toggle('hidden');
//     modalSection.classList.toggle('hidden');
 
   
// })

// closeButton.addEventListener('click',()=>{

//     overLay.classList.toggle('hidden');
//     modalSection.classList.toggle('hidden');
 
   
// })
