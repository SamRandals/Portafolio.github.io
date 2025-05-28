"use strict";



let bi_github = document.querySelectorAll(".bi-github");
let bi_whatsapp = document.querySelectorAll(".bi-whatsapp");
let bi_envelope = document.querySelectorAll(".bi-envelope");


bi_github.forEach(part=>{
    part.addEventListener("click",()=>{
        window.open("https://github.com/SamRandals", "_blank");
    })
})


bi_whatsapp.forEach(part=>{
    part.addEventListener("click",()=>{

        let numero ="573113559317"
        let mensaje="Hola, mucho gusto, vi tu portafolio y queria saber mas acerca de ti."
        let enlaceWhattsapp=`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

        window.open(enlaceWhattsapp,"_blank")

    })
})





bi_envelope.forEach(parte => {
  parte.addEventListener('click', () => {

    
const correo = 'samnanezedu@gmail.com';
const asunto = 'Consulta desde el sitio web';
const mensaje = 'Hola, estoy interesado en sus servicios. ¿Me podrían dar más información?';

const enlaceGmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(correo)}&su=${encodeURIComponent(asunto)}&body=${encodeURIComponent(mensaje)}`;

    window.open(enlaceGmail, '_blank');
  });
});