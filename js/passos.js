
var dificuldade2 = 1;
var pontuacao2 = 0;
var tempo2;
var palavra = "";
var contador_palavras = 0;

var palavra_sis = false;
var palavra_exp = false;
var palavra_erro = false;
var palavra_cbranca = false;
var palavra_comp = false;
var palavra_acei = false;
var palavra_fun = false;
var palavra_def = false;
var palavra_perf = false;
var palavra_caso = false;
var palavra_cpreta = false;
var palavra_int = false;
var palavra_ccinza = false;
var palavra_stres = false;
var palavra_vallim = false;
var palavra_fal = false;
var palavra_part = false;
var palavra_naof = false;
var palavra_mud = false;
var palavra_carga = false;





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
    
    
    if((palavra == "SISTEMA" || palavra == "TESTE DE SISTEMA") && palavra_sis == false){
        document.querySelector('#span-list-1').textContent = "OK";
        printPontuacao2();
        printArea("1- (TESTE DE SISTEMA) | ");
        getAnimation();
        palavra_sis = true;
    
    }else if((palavra == "SISTEMA" || palavra == "TESTE DE SISTEMA") && palavra_sis == true){
        getError();
    }
    
    
    else if((palavra == "EXPLORATORIO" || palavra == "EXPLORATÓRIO " || palavra == "TESTE EXPLORATÓRIO" || palavra == "TESTE EXPLORATORIO") && palavra_exp == false){
        document.querySelector('#span-list-2').textContent = "OK";
        printPontuacao2();
        printArea("2- (TESTE EXPLORATÓRIO) | ");
        getAnimation();
        palavra_exp = true;
    
    }else if((palavra == "EXPLORATORIO" || palavra == "EXPLORATÓRIO " || palavra == "TESTE EXPLORATÓRIO" || palavra == "TESTE EXPLORATORIO") && palavra_exp == true){
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


    else if((palavra == "CAIXA-BRANCA" || palavra == "TESTE DE CAIXA-BRANCA") && palavra_cbranca == false){
        document.querySelector('#span-list-4').textContent = "OK";
        printPontuacao2();
        printArea("4- (CAIXA-BRANCA) | ");
        getAnimation();
        palavra_cbranca = true;
    
    }else if((palavra == "CAIXA-BRANCA" || palavra == "TESTE DE CAIXA-BRANCA") && palavra_cbranca == true){
        getError();
    }


    else if((palavra == "COMPONENTE" || palavra == "UNIDADE" || palavra == "UNITÁRIO" || palavra == "TESTE DE COMPOENENTE" || palavra == "TESTE DE UNIDADE" || palavra == "TESTE UNITÁRIO") && palavra_comp == false){
        document.querySelector('#span-list-5').textContent = "OK";
        printPontuacao2();
        printArea("5- (TESTE COMPONENTE/UNIDADE/UNITÁRIO) | ");
        getAnimation();
        palavra_comp = true;
    
    }else if((palavra == "COMPONENTE" || palavra == "UNIDADE" || palavra == "UNITÁRIO" || palavra == "TESTE DE COMPOENENTE" || palavra == "TESTE DE UNIDADE" || palavra == "TESTE UNITÁRIO") && palavra_comp == true){
        getError();
    }

    else if((palavra == "ACEITE" || palavra == "TESTE DE ACEITE" || palavra == "TESTE DE ACEITAÇÃO") && palavra_acei == false){
        document.querySelector('#span-list-6').textContent = "OK";
        printPontuacao2();
        printArea("6- (TESTE DE ACEITE/ACEITAÇÃO) | ");
        getAnimation();
        palavra_acei = true;
    
    }else if((palavra == "SUPOSIÇÃO" || palavra == "SUPOSIÇÃO DE ERRO") && palavra_acei == true){
        getError();
    }


    else if((palavra == "TESTE FUNCIONAL" || palavra == "FUNCIONAL" ) && palavra_fun == false){
        document.querySelector('#span-list-7').textContent = "OK";
        printPontuacao2();
        printArea("7- (TESTE FUNCIONAL) | ");
        getAnimation();
        palavra_fun = true;
    
    }else if((palavra == "TESTE FUNCIONAL" || palavra == "FUNCIONAL" )  && palavra_fun == true){
        getError();
    }

    else if((palavra == "DEFEITO") && palavra_def == false){
        document.querySelector('#span-list-8').textContent = "OK";
        printPontuacao2();
        printArea("8- (DEFEITO) | ");
        getAnimation();
        palavra_def = true;
    
    }else if((palavra == "DEFEITO") && palavra_def == true){
        getError();
    }
    

    else if((palavra == "TESTE DE PERFORMANCE" || palavra == "PERFORMANCE") && palavra_perf == false){
        document.querySelector('#span-list-9').textContent = "OK";
        printPontuacao2();
        printArea("9- (TESTE DE PERFORMANCE) | ");
        getAnimation();
        palavra_perf = true;
    
    }else if((palavra == "TESTE DE PERFORMANCE" || palavra == "PERFORMANCE") && palavra_perf == true){
        getError();
    }

    else if((palavra == "CASO DE TESTE") && palavra_caso == false){
        document.querySelector('#span-list-10').textContent = "OK";
        printPontuacao2();
        printArea("10- (CASO DE TESTE) | ");
        getAnimation();
        palavra_caso = true;
    
    }else if((palavra == "CASO DE TESTE") && palavra_caso == true){
        getError();
    }

    else if((palavra == "TESTE DE CAIXA-PRETA" || palavra == "CAIXA-PRETA") && palavra_cpreta == false){
        document.querySelector('#span-list-11').textContent = "OK";
        printPontuacao2();
        printArea("11- (TESTE DE CAIXA-PRETA) | ");
        getAnimation();
        palavra_cpreta = true;
    
    }else if((palavra == "TESTE DE CAIXA-PRETA" || palavra == "CAIXA-PRETA") && palavra_cpreta == true){
        getAnimation3();
        getError();
    }


    else if((palavra == "TESTE DE INTEGRAÇÃO" || palavra == "INTEGRAÇÃO") && palavra_int == false){
        document.querySelector('#span-list-12').textContent = "OK";
        printPontuacao2();
        printArea("12- (TESTE DE INTEGRAÇÃO/INTEGRIDADE) | ");
        getAnimation();
        palavra_int = true;
    
    }else if((palavra == "TESTE DE INTEGRAÇÃO" || palavra == "INTEGRAÇÃO") && palavra_int == true){
        getAnimation3();
        getError();
    }


    else if((palavra == "TESTE DE CAIXA CINZA" || palavra == "CAIXA CINZA") && palavra_ccinza == false){
        document.querySelector('#span-list-13').textContent = "OK";
        printPontuacao2();
        printArea("13- (TESTE DE CAIXA CINZA) | ");
        getAnimation();
        palavra_ccinza = true;
    
    }else if((palavra == "TESTE DE CAIXA CINZA" || palavra == "CAIXA CINZA")  && palavra_ccinza == true){
        getError();
    }

    else if((palavra == "TESTE DE ESTRESSE" || palavra == "ESTRESSE") && palavra_stres == false){
        document.querySelector('#span-list-14').textContent = "OK";
        printPontuacao2();
        printArea("14- (TESTE DE ESTRESSE) | ");
        getAnimation();
        palavra_stres = true;
    
    }else if((palavra == "TESTE DE ESTRESSE" || palavra == "ESTRESSE") && palavra_stres == true){
        getError();
    }

    else if((palavra == "VALOR LIMITE" || palavra == "ANÁLISE DE VALOR LIMITE" || palavra == "ANALISE DE VALOR LIMITE" || palavra == "ANALISE VALOR LIMITE") && palavra_vallim == false){
        document.querySelector('#span-list-15').textContent = "OK";
        printPontuacao2();
        printArea("15- (VALOR LIMITE) | ");
        getAnimation();
        palavra_vallim = true;
    
    }else if((palavra == "VALOR LIMITE" || palavra == "ANÁLISE DE VALOR LIMITE" || palavra == "ANALISE DE VALOR LIMITE" || palavra == "ANALISE VALOR LIMITE") && palavra_vallim == true){
        getError();
    }

    else if((palavra == "FALHA") && palavra_fal == false){
        document.querySelector('#span-list-16').textContent = "OK";
        printPontuacao2();
        printArea("16- (FALHA) | ");
        getAnimation();
        palavra_fal = true;
    
    }else if((palavra == "FALHA") && palavra_fal == true){
        getError();
    }

    else if((palavra == "PARTICIONAMENTO DE EQUIVALÊNCIA" || palavra == "PARTICIONAMENTO" || palavra == "EQUIVALÊNCIA") && palavra_part == false){
        document.querySelector('#span-list-17').textContent = "OK";
        printPontuacao2();
        printArea("17- (PARTICIONAMENTO DE EQUIVALÊNCIA) | ");
        getAnimation();
        palavra_part = true;
    
    }else if((palavra == "PARTICIONAMENTO DE EQUIVALÊNCIA" || palavra == "PARTICIONAMENTO" || palavra == "EQUIVALÊNCIA") && palavra_part == true){
        getError();
    }

    else if((palavra == "TESTE NÃO FUNCIONAL") && palavra_naof == false){
        document.querySelector('#span-list-18').textContent = "OK";
        printPontuacao2();
        printArea("18- (TESTE NÃO FUNCIONAL) | ");
        getAnimation();
        palavra_naof = true;
    
    }else if((palavra == "TESTE NÃO FUNCIONAL") && palavra_naof == true){
        getError();
    }


    else if((palavra == "TESTE RELACIONADO A MUDANÇA" || palavra == "TESTE MUDANÇA" || palavra == "MUDANÇA") && palavra_mud == false){
        document.querySelector('#span-list-19').textContent = "OK";
        printPontuacao2();
        printArea("19- (TESTE RELACIONADO A MUDANÇA) | ");
        getAnimation();
        palavra_mud = true;
    
    }else if((palavra == "TESTE RELACIONADO A MUDANÇA" || palavra == "TESTE MUDANÇA" || palavra == "MUDANÇA") && palavra_mud == true){
        getError();
    }


    else if((palavra == "TESTE DE CARGA" || palavra == "CARGA") && palavra_carga == false){
        document.querySelector('#span-list-20').textContent = "OK";
        printPontuacao2();
        printArea("20- (TESTE DE CARGA) | ");
        getAnimation();
        palavra_carga = true;
    
    }else if((palavra == "TESTE DE CARGA" || palavra == "CARGA") && palavra_carga == true){
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
        if(contador_palavras >= 20){
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

