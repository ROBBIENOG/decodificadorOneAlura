

document.getElementById('input_textarea').addEventListener('input', function() { 
    let entradaTexto = this.value; 
    document.getElementById('texto_espelhado').innerText = entradaTexto; 

    document.getElementById('output_cripto').style.display = 'none';
    document.getElementById('btn3').style.display = 'flex';

    testandoTexto(entradaTexto);
});




function testandoTexto(entradaTexto){
    
    let erro = document.getElementById('icon');

    if (!entradaTexto || entradaTexto.trim().length === 0) { 
        document.getElementById('msg_erro').innerText = 'Nenhuma mensagem encontrada';
        erro.style.color = 'red';
        return;
    }
    
    for(let i= 0; i < entradaTexto.length; i++){
        let caracter = entradaTexto[i];
        if(caracter != caracter.toLowerCase()){
            erro.style.color = 'red';
            return;
        }
        
        
}

}

document.getElementById('texto_espelhado').style.display = 'flex,max-width: 300px, max-height: fit-content ;';


function criptografar (){


    let entradaTexto = document.getElementById('input_textarea').value;
    let criptografia = entradaTexto.replaceAll("e","enter")
                             .replaceAll("i","imes")
                             .replaceAll("a","ai")
                             .replaceAll("o","ober")
                             .replaceAll("u","ufat");
    
    
     document.getElementById('texto_espelhado').innerHTML = criptografia;

     

}


function descriptografar (){
    let saidaTexto = document.getElementById('input_textarea').value;
    let descriptografia = saidaTexto.replaceAll("enter","e")
                             .replaceAll("imes","i")
                             .replaceAll("ai","a")
                             .replaceAll("ober","o")
                             .replaceAll("ufat","u");
    

    document.getElementById('texto_espelhado').innerHTML = descriptografia;                       
    
}

function copyText(){
    criptografar();

    let copy = document.getElementById('texto_espelhado');
    let range = document.createRange();
    range.selectNodeContents(copy);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try{
        let sucess = document.execCommand('copy');
        if(sucess){
            alert('Texto copiado', copy);
        }else{
            alert('Erro ao copiar o texto');
        }
    } catch (err){
        console.log('Erro ao copiar o texto', err) 
    }

    window.getSelection().removeAllRanges();
}
