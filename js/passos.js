
var dificuldade2 = 1;
var pontuacao2 = 0;
var tempo2;
var palavra = "";
var contador_palavras = 0;

var palavra_erro = false;
var palavra_def = false;
var palavra_fal = false;
var palavra_cpreta = false;
var palavra_cbranca = false;
var palavra_sup = false;
var palavra_exp = false;
var plavra_check = false;
var palavra_comp = false;

var palavra_sis = false;
var palavra_acei = false;
var palavra_fun = false;

var erros = 0;


function inicio_jogo2(){
    document.getElementById("id_select_dificultade2").disabled = true;
    document.getElementById("idbtn_start2").disabled = true;
    document.getElementById("btn_pesquisar").disabled = false;
    document.getElementById("userPesquisa").value = "";



    rodando_tester = true;
    getTime2();
    setInterval(ContarSegundos2, 1000);
}


function getPalavras(){
    palavra = document.getElementById("userPesquisa").value;
    palavra = palavra.toLocaleUpperCase();
    console.log(palavra);
    
    
    if(palavra == "FALHA" && palavra_fal == false){
        document.querySelector('#span-list-1').textContent = "OK";
        printPontuacao2();
        printArea("1- (FALHA) | ");
        getAnimation();
        palavra_fal = true;
    
    }else if(palavra == "FALHA" && palavra_fal == true){
        getError();
    }
    
    
    else if(palavra == "DEFEITO" && palavra_def == false){
        document.querySelector('#span-list-2').textContent = "OK";
        printPontuacao2();
        printArea("2- (DEFEITO) | ");
        getAnimation();
        palavra_def = true;
    
    }else if(palavra == "DEFEITO" && palavra_def == true){
        getError();
    }




    else if(palavra == "ERRO" && palavra_erro == false){
        document.querySelector('#span-list-3').textContent = "OK";
        printPontuacao2();
        printArea("3- (ERRO) | ");
        getAnimation();
        palavra_erro = true;
    
    }else if(palavra == "ERRO" && palavra_erro == true){
        getError();
    }


    else if(palavra == "CAIXA-PRETA" && palavra_cpreta == false){
        document.querySelector('#span-list-4').textContent = "OK";
        printPontuacao2();
        printArea("4- (CAIXA-PRETA) | ");
        getAnimation();
        palavra_cpreta = true;
    
    }else if(palavra == "CAIXA-PRETA" && palavra_cpreta == true){
        getError();
    }


    else if(palavra == "CAIXA-BRANCA" && palavra_cbranca == false){
        document.querySelector('#span-list-5').textContent = "OK";
        printPontuacao2();
        printArea("5- (CAIXA-BRANCA) | ");
        getAnimation();
        palavra_cbranca = true;
    
    }else if(palavra == "CAIXA-BRANCA" && palavra_cbranca == true){
        getError();
    }

    else if((palavra == "SUPOSIÇÃO" || palavra == "SUPOSIÇÃO DE ERRO") && palavra_sup == false){
        document.querySelector('#span-list-6').textContent = "OK";
        printPontuacao2();
        printArea("6- (SUPOSIÇÃO DE ERRO) | ");
        getAnimation();
        palavra_sup = true;
    
    }else if((palavra == "SUPOSIÇÃO" || palavra == "SUPOSIÇÃO DE ERRO") && palavra_sup == true){
        getError();
    }


    else if((palavra == "EXPLORATÓRIO" || palavra == "EXPLORATORIO") && palavra_exp == false){
        document.querySelector('#span-list-7').textContent = "OK";
        printPontuacao2();
        printArea("7- (TESTE EXPLORATÓRIO) | ");
        getAnimation();
        palavra_exp = true;
    
    }else if((palavra == "EXPLORATÓRIO" || palavra == "EXPLORATORIO") && palavra_exp == true){
        getError();
    }

    else if((palavra == "CHECKLIST" || palavra == "BASEADO EM CHECKLIST" ) && plavra_check == false){
        document.querySelector('#span-list-8').textContent = "OK";
        printPontuacao2();
        printArea("8- (TESTE CHECKLIST) | ");
        getAnimation();
        plavra_check = true;
    
    }else if((palavra == "CHECKLIST" || palavra == "BASEADO EM CHECKLIST" ) && plavra_check == true){
        getError();
    }
    

    else if((palavra == "COMPONENTE" || palavra == "TESTE DE COMPONENTE") && palavra_comp == false){
        document.querySelector('#span-list-9').textContent = "OK";
        printPontuacao2();
        printArea("9- (TESTE DE COMPONENTE) | ");
        getAnimation();
        palavra_comp = true;
    
    }else if((palavra == "COMPONENTE" || palavra == "TESTE DE COMPONENTE") && palavra_comp == true){
        getError();
    }

    else if((palavra == "SISTEMA" || palavra == "TESTE DE SISTEMA") && palavra_sis == false){
        document.querySelector('#span-list-10').textContent = "OK";
        printPontuacao2();
        printArea("10- (TESTE DE SISTEMA) | ");
        getAnimation();
        palavra_sis = true;
    
    }else if((palavra == "SISTEMA" || palavra == "TESTE DE SISTEMA") && palavra_sis == true){
        getError();
    }

    else if((palavra == "ACEITE" || palavra == "TESTE DE ACEITE") && palavra_acei == false){
        document.querySelector('#span-list-11').textContent = "OK";
        printPontuacao2();
        printArea("11- (TESTE DE ACEITE) | ");
        getAnimation();
        palavra_acei = true;
    
    }else if((palavra == "ACEITE" || palavra == "TESTE DE ACEITE") && palavra_acei == true){
        getAnimation3();
        getError();
    }


    else if((palavra == "FUNCIONAL" || palavra == "TESTE FUNCIONAL") && palavra_fun == false){
        document.querySelector('#span-list-12').textContent = "OK";
        printPontuacao2();
        printArea("12- (TESTE FUNCIONAL) | ");
        getAnimation();
        palavra_fun = true;
    
    }else if((palavra == "FUNCIONAL" || palavra == "TESTE FUNCIONAL") && palavra_fun == true){
        getAnimation3();
        getError();
    }



    else{
        getAnimation3();
        getError();
    }







}



function getTime2(){
    dificuldade2 = document.getElementById("id_select_dificultade2").value;

          if(dificuldade2 == 1){
        tempo2 = 600;
    }else if(dificuldade2 == 2){
        tempo2 = 400;
    }else if(dificuldade2 == 3){
        tempo2 = 200;
    }
}


function ContarSegundos2(){
    
    if(tempo2 > 0){
    tempo2 -= 1;
    document.querySelector('#idtempo2').textContent = tempo2;
    }


    if(tempo2 <= 0){
        alert("O tempo se esgotou!!! Sua pontuação foi "+ pontuacao2);

            
            setTimeout(() => {
                document.location.reload();
              }, 500);
     }
}


function printArea(str){
    document.querySelector('#span-area-palavras').textContent += str;
}




function printPontuacao2(){
    contador_palavras +=1;
    pontuacao2 += 10;
    document.querySelector('#idspanpontuacao2').textContent = pontuacao2;
    document.getElementById("userPesquisa").value = "";
        if(contador_palavras >= 12){
            alert("Parabéns! Você ganhou um jogo!!! Sua pontuação foi "+ pontuacao2);

            
            setTimeout(() => {
                document.location.reload();
              }, 1000);
        }
}

function getError(){
    erros +=1;
    document.getElementById("userPesquisa").value = "";
    document.querySelector('#span-erro2').textContent = erros;


    if(dificuldade2 == 3){
        if(erros >= 4){
            alert("Acabou suas chances!!! Sua pontuação foi "+ pontuacao2);
    
                
                setTimeout(() => {
                    document.location.reload();
                  }, 100);
         }
    }else if(dificuldade2 == 2){
        if(erros >= 7){
            alert("Acabou suas chances!!! Sua pontuação foi "+ pontuacao2);
    
                
                setTimeout(() => {
                    document.location.reload();
                  }, 100);
         }
    }

}



function getAnimation(){
    document.querySelector('#span-acerto').textContent = "OK";
    setTimeout(() => {
        getAnimation2();
      }, 1000);
}


function getAnimation2(){
    document.querySelector('#span-acerto').textContent = "";
}


function getAnimation3(){
    document.querySelector('#span-acerto').textContent = "INVÁLIDO";
    setTimeout(() => {
        getAnimation2();
      }, 1000);
}

