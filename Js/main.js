const pantalla=document.querySelector(".pantalla");
const botones=document.querySelectorAll(".btn");

botones.forEach(boton=>{
    boton.addEventListener("click",()=>{
        if(boton.id==="c"){
            pantalla.textContent="0";
            return;
        }
        if(boton.id==="borrar")  {
            if(pantalla.textContent.length===1 || pantalla.textContent==="¡Caracteres Invalidos!"){
                pantalla.textContent="0";
            }else{

                pantalla.textContent=pantalla.textContent.slice(0,-1)
            }
            return
        }                                                                                                                                                                                                                                                                                                                                                                 
        if(boton.id==="igual"){
           try{
               pantalla.textContent=eval(pantalla.textContent);
           }catch{
             pantalla.textContent="¡Caracteres Invalidos!"
           }
            return; 
        }
       const botonApretado=boton.textContent;
       if(pantalla.textContent==="0"|| pantalla.textContent==="¡Caracteres Invalidos!"){
        pantalla.textContent=botonApretado;
       }else{
        pantalla.textContent+=botonApretado;
       }
       
    })

})