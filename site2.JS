function c(){
    var idade = document.getElementById("1");
    var foto = document.getElementById("foto");
    var res = document.getElementById("res");
    var idadeReal = Number(idade.value);
    var data = new Date()
    var ano = data.getFullYear();
    var resultadoIdade =  (ano - idadeReal);
    

    if (idade.value.length == 0 || idadeReal> ano) {
        window.alert("Verifique as informações e tente novamente");
        
    }  else {
        var fsex = document.getElementsByName("box")
        var genero = ""
        if (fsex[0].checked) {
            genero = "Homem"
           if(resultadoIdade > 0 && resultadoIdade < 10){
            foto.src = 'bbH.jpg'
            res.innerHTML = `DETECTAMOS UM BB HOMENZINHO DE ${resultadoIdade} ANOS.`;


           } else if (resultadoIdade >= 10 && resultadoIdade < 18){
            foto.src = 'jovemH.jpg'
            res.innerHTML = `DETECTAMOS UM  JOVEMZINHO DE ${resultadoIdade} ANOS.`;

           } else if (resultadoIdade >= 18 && resultadoIdade < 60){
            foto.src = 'homem.jpg'
            res.innerHTML = `DETECTAMOS UM  HOMEM DE ${resultadoIdade} ANOS.`;

           } else  {
            foto.src = 'velho.jpg'
            res.innerHTML = `DETECTAMOS UM  SENHOR DE ${resultadoIdade} ANOS.`;

           } }  else if(fsex[1].checked){
            
                   genero = "mulher"
                    if(resultadoIdade > 0 && resultadoIdade < 10){
                foto.src = 'bbM.jpg'
                res.innerHTML = `DETECTAMOS UMA BB MULHERZINHA DE ${resultadoIdade} ANOS.`;
    
    
               } 
               else if (resultadoIdade >= 10 && resultadoIdade < 18){
                foto.src = 'jovemM.jpg'
                res.innerHTML = `DETECTAMOS UMA  JOVEMZINHA DE ${resultadoIdade} ANOS.`;
    
               } else if (resultadoIdade >= 18 && resultadoIdade < 60){
                foto.src = 'mulher.jpg'
                res.innerHTML = `DETECTAMOS UMA MULHER DE ${resultadoIdade} ANOS.`;
    
               } else {
                foto.src = 'velha.jpg'
                res.innerHTML = `DETECTAMOS UMA  SENHORA DE ${resultadoIdade} ANOS.`;}
               

            
        
        }
        


    }






    

    



   

}