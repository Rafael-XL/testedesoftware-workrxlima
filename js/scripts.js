


var pontuacao = 0;
var contador_testes = 1;
var dificultade = 1;
var template;
var tempo = 400;


//tela de cadastro de usuario
var teste_login_branco = false;
var teste_login_arroba = false;
var teste_senha_branco = false;



//tela de cadastro de usuario
var teste_nome_branco = false;
var teste_nome_digito = false;
var teste_cpf_branco = false;
var teste_cpf_letra = false;
var teste_cpf_quantidade = false;
var teste_rg_branco = false;
var teste_rg_letra = false;
var teste_rg_quantidade = false;
var teste_endereco_branco = false;
var teste_bairro_branco = false;
var teste_cidade_branco = false;
var teste_email_branco = false;
var teste_email_arroba = false;
var teste_telefone_letra = false;
var teste_telefone_quantidade = false;
var teste_celular_branco = false;
var teste_celular_letra = false;
var teste_celular_quantidade = false;
var teste_password_branco = false;
var teste_password_sete = false;
var teste_password_oito = false;
var teste_password_nove = false;
var teste_password_quatorze = false;
var teste_password_quinze = false;
var teste_password_dezesseis = false;
var teste_password_invalido = false;

var teste_confsenha_branco = false;
var teste_erro_conf = false;

var teste_titulo_vazio = false;
var teste_autor_vazio = false;
var teste_autor_digito = false;
var teste_ano_branco = false;
var teste_ano_letra = false;
var teste_ano_1515 = false;
var teste_ano_1516 = false;
var teste_ano_1517 = false;
var teste_ano_invalido = false;

var teste_volume_branco = false;
var teste_volume_zero = false;
var teste_volume_um = false;
var teste_volume_dois = false;
var teste_volume_letra = false;
var teste_volume_invalido = false;
var teste_editora_branco = false;


//tela de esqueceu senha
var teste_equeceu_senha = false;
var teste_usuario_valido = false;
var teste_usuario_invalido = false;
var teste_cadastro_usuario_valido = false;
var teste_cadastro_livro_valido = false;


var rodando_tester = false;
var rodando_nolimit = false;


function inicio_jogo(){
    document.getElementById("id_select_dificultade").disabled = true;
    document.getElementById("idbtn_start").disabled = true;
    document.getElementById("btn_entrar").disabled = false;
    document.getElementById("btn_cad_usuario").disabled = false;
    document.getElementById("btn_cad_livro").disabled = false;
    rodando_tester = true;
    getTime();
    setInterval(ContarSegundos, 1000);
}






function verficarCamposLogin(){

//campo login - vazio - sem arroba
if(document.getElementById("userLogin").value == ""  && teste_login_branco == false){
    
    template = addTabela("Deixar campo LOGIN vazio", "Exibir mensagem para preencher todos os campos");
    document.getElementById('tabelas').innerHTML += template;
    printPontuacao();
    teste_login_branco = true;
    alert("Caso de Teste: Campo login vazio - OK");
}else if(document.getElementById("userLogin").value == ""  && teste_login_branco == true){

    alert("Campo login vazio: Você já fez esse teste!");

}else if(verificar_email(document.getElementById("userLogin").value)  && teste_login_arroba == false){
    
    template = addTabela("Preencher LOGIN sem arroba", "Exibir mensagem de login inválido.");
    document.getElementById('tabelas').innerHTML += template;
    printPontuacao();
    teste_login_arroba = true;
    alert("Caso de Teste: Campo login sem arroba no email - OK");
}else if(verificar_email(document.getElementById("userLogin").value)  && teste_login_arroba == true){
    

    alert("Campo login sem arroba no email: Você já fez esse teste!");
    
}


//campo senha - vazio - digito ou simbolo
else if(document.getElementById("userSenha").value == ""  && teste_senha_branco == false){
    
    template = addTabela("Deixar campo SENHA vazio", "Exibir mensagem para preencher todos os campos.");
    document.getElementById('tabelas').innerHTML += template;
    printPontuacao();
    teste_senha_branco = true;
    alert("Caso de Teste: Campo senha vazio - OK");
}else if(document.getElementById("userSenha").value == ""  && teste_senha_branco == true){
    
    alert("Campo senha vazio: Você já fez esse teste!");
}

else if((document.getElementById("userLogin").value == "tester@gmail.com"  
      && document.getElementById("userSenha").value == "teste123")
      && teste_usuario_valido == false){
    
    template = addTabela("Preencher campos com usuário válido", "Ir para a tela de Perfil do Usuário.");
    document.getElementById('tabelas').innerHTML += template;
    pontuacao += 15;
    printPontuacao();
    teste_usuario_valido = true;
    alert("Caso de Teste: Testar usuário válido");
}else if((document.getElementById("userLogin").value == "tester@gmail.com"  
&& document.getElementById("userSenha").value == "teste123"  )
&& teste_usuario_valido == true){

alert("Testar Usuário Válido: Você já fez esse teste!");

}

else if((document.getElementById("userLogin").value != "tester@gmail.com"  
      || document.getElementById("userSenha").value != "teste123")
      && teste_usuario_invalido == false){
    
    template = addTabela("Preencher campos com usuário inválido", "Exibir mensagem Usuário Inválido");
    document.getElementById('tabelas').innerHTML += template;
    pontuacao += 15;
    printPontuacao();
    teste_usuario_invalido = true;
    alert("Caso de Teste: Testar usuário inválido");
}else if((document.getElementById("userLogin").value != "tester@gmail.com"  
|| document.getElementById("userSenha").value != "teste123"  )
&& teste_usuario_invalido == true){

alert("Testar Usuário Inválido: Você já fez esse teste!");

}



}

function verifcarEsueceu(){

                  if(teste_equeceu_senha == false && rodando_tester == true){
                        template = addTabela("Clicar no link ESQUECEU SENHA", "Ir para o formulário de Recuperar Senha.");
                        document.getElementById('tabelas').innerHTML += template;
                        pontuacao += 5;
                        printPontuacao();
                        teste_equeceu_senha = true;
                        alert("Caso de Teste: Esqueceu Senha");
            }else if(teste_equeceu_senha == true && rodando_tester == true){

                        alert("Esqueceu Senha: Você já fez esse teste!");

            }
}

function verficarCamposUsuario(){
    
    //campo nome - vazio - digito ou simbolo
    if(document.getElementById("userNome").value == ""  && teste_nome_branco == false){
    
        template = addTabela("Deixar campo NOME vazio", "Exibir mensagem para preencher todos os campos.");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_nome_branco = true;
        alert("Caso de Teste: Campo nome vazio - OK");
    }else if(document.getElementById("userNome").value == ""  && teste_nome_branco == true){

        alert("Campo nome vazio: Você já fez esse teste!");

    }else if(verifica_digito(document.getElementById("userNome").value)  && teste_nome_digito == false){
    
        template = addTabela("Preencher campo NOME com caracters invalidos", "Exibir mensagem de campo inválido.");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_nome_digito = true;
        alert("Caso de Teste: Campo nome com simbolos e digitos - OK");
    }else if(verifica_digito(document.getElementById("userNome").value)  && teste_nome_digito == true){
    
        alert("Campo campo NOME com caracters invalidos: Você já fez esse teste!");
    }
    



    //campo cpf - vazio - tem letra - quantidade de digitos
    else if(document.getElementById("userCPF").value == ""  && teste_cpf_branco == false){
    
        template = addTabela("Deixar campo CPF vazio", "Exibir mensagem para preencher todos os campos");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_cpf_branco = true;
        alert("Caso de Teste: Campo CPF vazio - OK");
    }else if(document.getElementById("userCPF").value == ""  && teste_cpf_branco == true){
    
        alert("Campo CPF vazio: Você já fez esse teste!");


    }else if(verifica_letra(document.getElementById("userCPF").value) && teste_cpf_letra == false){
    
        template = addTabela("Preencher campo CPF com caracters invalidos", "Exibir mensagem de campo inválido.");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_cpf_letra = true;
        alert("Caso de Teste: Campo CPF com letra ou símbolos - OK");
    }else if(verifica_letra(document.getElementById("userCPF").value) && teste_cpf_letra == true){
    
        alert("Campo CPF com letra ou símbolos: Você já fez esse teste!");

    }else if(((document.getElementById("userCPF").value).length != 11) && teste_cpf_quantidade == false){
    
        template = addTabela("Preencher campo CPF com menos ou mais digitos que ONZE", "Exibir mensagem de campo CPF inválido");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_cpf_quantidade = true;
        alert("Caso de Teste: Campo CPF com menos ou mais que 11 digitos - OK");
    }else if(((document.getElementById("userCPF").value).length != 11) && teste_cpf_quantidade == false){
    
        alert("Campo CPF com menos ou mais que 11 digitos: Você já fez esse teste!");

    }


    //campo RG - vazio - tem letra - quantidade de digitos
    else if(document.getElementById("userRG").value == ""  && teste_rg_branco == false){
    
        template = addTabela("Deixar campo RG vazio", "Exibir mensagem para preencher todos os campos.");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_rg_branco = true;
        alert("Caso de Teste: Campo RG vazio - OK");
    }else if(document.getElementById("userRG").value == ""  && teste_rg_branco == true){
    
        alert("Campo RG vazio: Você já fez esse teste!");

    }else if(verifica_letra(document.getElementById("userRG").value) && teste_rg_letra == false){
    
        template = addTabela("Preencher campo RG com caracters invalidos", "Exibir mensagem de campo inválido.");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_rg_letra = true;
        alert("Caso de Teste: Campo RG com letra ou símbolos - OK");
    }else if(verifica_letra(document.getElementById("userRG").value) && teste_rg_letra == true){
    
        alert("Campo RG com letra ou símbolos: Você já fez esse teste!");

    }else if(((document.getElementById("userRG").value).length != 7) && teste_rg_quantidade == false){
    
        template = addTabela("Preencher campo RG com menos ou mais digitos que SETE", "Exibir mensagem de campo CPF inválido.");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_rg_quantidade = true;
        alert("Caso de Teste: Campo CPF com menos ou mais que 7 digitos - OK");
    }else if(((document.getElementById("userRG").value).length != 7) && teste_rg_quantidade == true){
    
        alert("Campo CPF com menos ou mais que 7 digitos: Você já fez esse teste!");

    }

    //campo endereco - vazio
    else if(document.getElementById("userEnd").value == ""  && teste_endereco_branco == false){
    
        template = addTabela("Deixar campo ENDEREÇO vazio", "Exibir mensagem para preencher todos os campos.");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_endereco_branco = true;
        alert("Caso de Teste: Campo endereço vazio - OK");
    }else if(document.getElementById("userEnd").value == ""  && teste_endereco_branco == true){
    
        alert("Campo endereço vazio: Você já fez esse teste!");

    }

    //campo bairro - vazio
    else if(document.getElementById("userBairro").value == ""  && teste_bairro_branco == false){
    
        template = addTabela("Deixar campo BAIRRO vazio", "Exibir mensagem para preencher todos os campos");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_bairro_branco = true;
        alert("Caso de Teste: Campo bairro vazio - OK");
    }else if(document.getElementById("userBairro").value == ""  && teste_bairro_branco == true){
    
        alert("Campo bairro vazio: Você já fez esse teste!");

    }

    //campo cidade - vazio
    else if(document.getElementById("userCidade").value == ""  && teste_cidade_branco == false){
    
        template = addTabela("Deixar campo CIDADE vazio", "Exibir mensagem para preencher todos os campos");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_cidade_branco = true;
        alert("Caso de Teste: Campo cidade vazio - OK");
    }else if(document.getElementById("userCidade").value == ""  && teste_cidade_branco == true){
    
        alert("Campo cidade vazio: Você já fez esse teste!");

    }

    //campo email - campo vazio - sem arroba
    else if(document.getElementById("userEmail").value == ""  && teste_email_branco == false){
    
        template = addTabela("Deixar campo EMAIL vazio", "Exibir mensagem para preencher todos os campos");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_email_branco = true;
        alert("Caso de Teste: Campo email vazio - OK");
    }else if(document.getElementById("userEmail").value == ""  && teste_email_branco == true){
    
        alert("Campo email vazio: Você já fez esse teste!");

    }else if(verificar_email(document.getElementById("userEmail").value)  && teste_email_arroba == false){
    
        template = addTabela("Preencher EMAIL sem arroba", "Exibir mensagem de email inválido");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_email_arroba = true;
        alert("Caso de Teste: Campo email sem arroba no email - OK");
    }else if(verificar_email(document.getElementById("userEmail").value)  && teste_email_arroba == true){
        
    
        alert("Campo email sem arroba no email: Você já fez esse teste!");
        
    }


    //campo telefone - letras e simbolos - mais ou menos que dez digitos
    else if(verifica_letra(document.getElementById("userTelefone").value) && teste_telefone_letra == false){
    
        template = addTabela("Preencher campo TELEFONE com caracters invalidos", "Exibir mensagem de campo inválido");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_telefone_letra = true;
        alert("Caso de Teste: Campo telefone com letra ou símbolos - OK");
    }else if(verifica_letra(document.getElementById("userTelefone").value) && teste_telefone_letra == true){
    
        alert("Campo telefone com letra ou símbolos: Você já fez esse teste!");

    }else if(((document.getElementById("userTelefone").value).length != 10 && !document.getElementById("userTelefone").value == "") && teste_telefone_quantidade == false ){
    
        template = addTabela("Preencher campo TELEFONE com menos ou mais digitos que DEZ", "Exibir mensagem de campo telefone inválido");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_rg_quantidade = true;
        alert("Caso de Teste: Campo telefone com menos ou mais que 10 digitos - OK");
    }else if(((document.getElementById("userTelefone").value).length != 10) && teste_telefone_quantidade == true){
    
        alert("Campo telefone com menos ou mais que 10 digitos: Você já fez esse teste!");

    }


    //campo celular - campo vazio - letras e simbolos - mais ou menos que onze digitos
    else if(document.getElementById("userCelular").value == ""  && teste_celular_branco == false){
    
        template = addTabela("Deixar campo CELULAR vazio", "Exibir mensagem para preencher todos os campos");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_celular_branco = true;
        alert("Caso de Teste: Campo celular vazio - OK");
    }else if(document.getElementById("userCelular").value == ""  && teste_celular_branco == true){
    
        alert("Campo celular vazio: Você já fez esse teste!");

    }else if(verifica_letra(document.getElementById("userCelular").value) && teste_celular_letra == false){
    
        template = addTabela("Preencher campo CELULAR com caracters invalidos", "Exibir mensagem de campo inválido");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_celular_letra = true;
        alert("Caso de Teste: Campo celular com letra ou símbolos - OK");
    }else if(verifica_letra(document.getElementById("userCelular").value) && teste_celular_letra == true){
    
        alert("Campo telefone com letra ou símbolos: Você já fez esse teste!");

    }else if(((document.getElementById("userCelular").value).length != 11) && teste_celular_quantidade == false ){
    
        template = addTabela("Preencher campo CELULAR com menos ou mais digitos que ONZE", "Exibir mensagem de campo telefone inválido");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_celular_quantidade = true;
        alert("Caso de Teste: Campo celular com menos ou mais que 11 digitos - OK");
    }else if(((document.getElementById("userCelular").value).length != 11) && teste_celular_quantidade == true){
    
        alert("Campo celular com menos ou mais que 11 digitos: Você já fez esse teste!");

    }

    //campo senha(cadastro) - vazio
    else if(document.getElementById("userPass").value == ""  && teste_password_branco == false){
    
        template = addTabela("Deixar campo SENHA(CADASTRO) vazio", "Exibir mensagem para preencher todos os campos");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_password_branco = true;
        alert("Caso de Teste: Campo senha(cadastro) vazio - OK");
    }else if(document.getElementById("userPass").value == ""  && teste_password_branco == true){
    
        alert("Campo senha(cadastro) vazio: Você já fez esse teste!");

    }else if(((document.getElementById("userPass").value).length == 7) && teste_password_sete == false){
    
        template = addTabela("Preencher campo SENHA com valor limite = 7", "Exibir mensagem senha inválida");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_password_sete = true;
        alert("Caso de Teste: Preencher campo com valor limite 7 - OK");
    }else if(((document.getElementById("userPass").value).length == 8) && teste_password_oito == false){
    
        template = addTabela("Preencher campo SENHA com valor limite = 8", "Validar senha");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_password_oito = true;
        alert("Caso de Teste: Preencher campo com valor limite 8 - OK");
    }else if(((document.getElementById("userPass").value).length == 9) && teste_password_nove == false){
    
        template = addTabela("Preencher campo SENHA com valor limite = 9", "Validar senha");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_password_nove = true;
        alert("Caso de Teste: Preencher campo com valor limite 9 - OK");
    }else if(((document.getElementById("userPass").value).length == 14) && teste_password_quatorze == false){
    
        template = addTabela("Preencher campo SENHA com valor limite = 14", "Validar senha");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_password_quatorze = true;
        alert("Caso de Teste: Preencher campo com valor limite 14 - OK");
    }else if(((document.getElementById("userPass").value).length == 15) && teste_password_quinze == false){
    
        template = addTabela("Preencher campo SENHA com valor limite = 15", "Validar senha");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_password_quinze = true;
        alert("Caso de Teste: Preencher campo com valor limite 15 - OK");
    }else if(((document.getElementById("userPass").value).length == 16) && teste_password_dezesseis == false){
    
        template = addTabela("Preencher campo SENHA com valor limite = 16", "Exibir mensagem senha inválida");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_password_dezesseis = true;
        alert("Caso de Teste: Preencher campo com valor limite 16 - OK");
    }else if(((document.getElementById("userPass").value).length <= 7 || (document.getElementById("userPass").value).length >= 16) && teste_password_invalido == false){
    
        template = addTabela("Preencher campo SENHA com quantidade inválida sem valores limites", "Exibir mensagem senha inválida");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_password_invalido = true;
        alert("Caso de Teste: Preencher campo SENHA com quantidade inválida sem valores limites");
    }else if(((document.getElementById("userPass").value).length <= 7 || (document.getElementById("userPass").value).length >= 16) && teste_password_invalido == true){
    
        alert("Preencher campo SENHA com quantidade inválida sem valores limites: Você já fez esse teste!");

    }





    //campo confirmacao senha(cadastro) - vazio
    else if(document.getElementById("userConfSenha").value == ""  && teste_confsenha_branco == false){
    
        template = addTabela("Deixar campo CONFIRMACAO SENHA(CADASTRO) vazio", "Exibir mensagem para preencher todos os campos");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_confsenha_branco = true;
        alert("Caso de Teste: Campo conf. senha(cadastro) vazio - OK");
    }else if(document.getElementById("userConfSenha").value == ""  && teste_confsenha_branco == true){
    
        alert("Campo conf. senha(cadastro) vazio: Você já fez esse teste!");

    }else if(document.getElementById("userConfSenha").value != document.getElementById("userPass").value && teste_erro_conf == false){
    
        template = addTabela("Deixar campos de SENHA e CONF. SENHA diferentes", "Exibir mensagem de erro na confirmacao de senha");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_erro_conf = true;
        alert("Caso de Teste: Erro na conf. senha - OK");
    }else if(document.getElementById("userConfSenha").value != document.getElementById("userPass").value && teste_erro_conf == true){
    
        alert("Erro na conf. senha: Você já fez esse teste!");

    }else if(teste_cadastro_usuario_valido == false){
        template = addTabela("Preencher TODOS campos Cadastro(Usuário) corretamente", "Validar Usuário e ir para tela de login");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_cadastro_usuario_valido = true;
        alert("Caso de Teste: Cadastro de Usuário Váildo - OK");
    }else if(teste_cadastro_usuario_valido == true){

        alert("Cadastro de Usuário Váildo: Você já fez esse teste!");
    }





    
    

}


function verificarLivro(){

    //campo titulo - vazio
    if(document.getElementById("livro-titulo").value == ""  && teste_titulo_vazio == false){
    
        template = addTabela("Deixar campo TÍTULO vazio", "Exibir mensagem para preencher todos os campos");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_titulo_vazio = true;
        alert("Caso de Teste: Campo título vazio - OK");
    }else if(document.getElementById("livro-titulo").value == ""  && teste_titulo_vazio == true){
    
        alert("Campo título vazio: Você já fez esse teste!");

    }
    
    
    
    //Campo autor - vazio - digitos ou simbolos
    else if(document.getElementById("livro-autor").value == ""  && teste_autor_vazio == false){
    
        template = addTabela("Deixar campo AUTOR vazio", "Exibir mensagem para preencher todos os campos");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_autor_vazio = true;
        alert("Caso de Teste: Campo autor vazio - OK");
    }else if(document.getElementById("livro-autor").value == ""  && teste_autor_vazio == true){

        alert("Campo autor vazio: Você já fez esse teste!");

    }else if(verifica_digito(document.getElementById("livro-autor").value)  && teste_autor_digito == false){
    
        template = addTabela("Preencher campo AUTOR com caracters invalidos", "Exibir mensagem de campo inválido");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_autor_digito = true;
        alert("Caso de Teste: Campo autor com simbolos e digitos - OK");
    }else if(verifica_digito(document.getElementById("livro-autor").value)  && teste_autor_digito == true){
    
        alert("Campo autor com caracters invalidos: Você já fez esse teste!");
    }


    //campo ano - vazio - valores limite
    else if(document.getElementById("livro-ano").value == ""  && teste_ano_branco == false){
    
        template = addTabela("Deixar campo ANO vazio", "Exibir mensagem para preencher todos os campos");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_ano_branco = true;
        alert("Caso de Teste: Campo ano vazio - OK");
    }else if(document.getElementById("livro-autor").value == ""  && teste_ano_branco == true){

        alert("Campo ano vazio: Você já fez esse teste!");

    }else if(document.getElementById("livro-ano").value == "1515"  && teste_ano_1515 == false){
    
        template = addTabela("Preencher campo ANO com valor limite = 1515", "Exibir mensagem de Erro");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_ano_1515 = true;
        alert("Caso de Teste: Preencher campo ANO com valor limite = 1515 - OK");
    }else if(document.getElementById("livro-ano").value == "1516"  && teste_ano_1516 == false){
    
        template = addTabela("Preencher campo ANO com valor limite = 1516", "Validar Ano");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_ano_1516 = true;
        alert("Caso de Teste: Preencher campo ANO com valor limite = 1516 - OK");
    }else if(document.getElementById("livro-ano").value == "1517"  && teste_ano_1517 == false){
    
        template = addTabela("Preencher campo ANO com valor limite = 1517", "Validar Ano");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_ano_1517 = true;
        alert("Caso de Teste: Preencher campo ANO com valor limite = 1517 - OK");
    }else if(verifica_letra(document.getElementById("livro-ano").value) && teste_ano_letra == false){
    
        template = addTabela("Preencher campo ANO com caracters invalidos", "Exibir mensagem de campo inválido");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_ano_letra = true;
        alert("Caso de Teste: Campo ano com letra ou símbolos - OK");
    }else if(verifica_letra(document.getElementById("livro-ano").value) && teste_ano_letra == true){
    
        alert("Campo ano com letra ou símbolos: Você já fez esse teste!");

    }else if(valorAno(document.getElementById("livro-ano").value) < 1516  && teste_ano_invalido == false){
    
        template = addTabela("Preencher campo ANO abaixo do limite", "Exibir mensagem ano inválido.");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_ano_invalido = true;
        alert("Caso de Teste: Preencher campo ANO abaixo do limite - OK");
    }else if(document.getElementById("livro-autor").value == ""  && teste_ano_invalido == true){

        alert("Preencher campo ANO abaixo do limite: Você já fez esse teste!");

    }


    //Campo volume - vazio - letras
    else if(document.getElementById("livro-volume").value == ""  && teste_volume_branco == false){
    
        template = addTabela("Deixar campo VOLUME vazio", "Exibir mensagem para preencher todos os campos");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_volume_branco = true;
        alert("Caso de Teste: Campo volume vazio - OK");
    }else if(document.getElementById("livro-volume").value == ""  && teste_volume_branco == true){

        alert("Campo volume vazio: Você já fez esse teste!");

    }else if(document.getElementById("livro-volume").value == "0"  && teste_volume_zero == false){
    
        template = addTabela("Preencher campo VOLUME com valor limite = 0", "Exibir mensagem de volume inválido");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_volume_zero = true;
        alert("Preencher campo VOLUME com valor limite = 0: Você já fez esse teste!");
    }else if(document.getElementById("livro-volume").value == "1"  && teste_volume_um == false){
    
        template = addTabela("Preencher campo VOLUME com valor limite = 1", "Validar volume");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_volume_um = true;
        alert("Preencher campo VOLUME com valor limite = 1: Você já fez esse teste!");
    }else if(document.getElementById("livro-volume").value == "2"  && teste_volume_dois == false){
    
        template = addTabela("Preencher campo VOLUME com valor limite = 2", "Validar volume");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_volume_dois = true;
        alert("Preencher campo VOLUME com valor limite = 2: Você já fez esse teste!");
    }else if(verifica_letra(document.getElementById("livro-volume").value) && teste_volume_letra == false){
    
        template = addTabela("Preencher campo VOLUME com caracters invalidos", "Exibir mensagem de campo inválido");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_volume_letra = true;
        alert("Caso de Teste: Campo volume com letra ou símbolos - OK");
    }else if(verifica_letra(document.getElementById("livro-volume").value) && teste_volume_letra == true){
    
        alert("Campo volume com letra ou símbolos: Você já fez esse teste!");

    }else if(valorVolume(document.getElementById("livro-volume").value) < 1 && teste_volume_invalido == false){
    
        template = addTabela("Preencher campo VOLUME abaixo do valor limite", "Exibir mensagem de campo inválido");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_volume_invalido = true;
        alert("Caso de Teste: Preencher campo VOLUME abaixo do valor limite - OK");

    }else if(valorVolume(document.getElementById("livro-volume").value) < 1 && teste_volume_invalido == true){
    
        alert("Preencher campo VOLUME abaixo do valor limite: Você já fez esse teste!");

    }


    //campo editora - vazio
    else if(document.getElementById("livro-editora").value == ""  && teste_editora_branco == false){
    
        template = addTabela("Deixar campo EDITORA vazio", "Exibir mensagem para preencher todos os campos");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_editora_branco = true;
        alert("Caso de Teste: Campo editora vazio - OK");
    }else if(document.getElementById("livro-editora").value == ""  && teste_editora_branco == true){
    
        alert("Campo editora vazio: Você já fez esse teste!");

    }else if(teste_cadastro_livro_valido == false){
        template = addTabela("Preencher TODOS campos Cadastro(livro) corretamente", "Validar cadastro de Livro");
        document.getElementById('tabelas').innerHTML += template;
        printPontuacao();
        teste_cadastro_livro_valido = true;
        alert("Caso de Teste: Cadastro de Livro Váildo - OK");
    }else if(teste_cadastro_livro_valido == true){

        alert("Cadastro de Livro Váildo: Você já fez esse teste!");
    }

}



function addTabela(acao, mensagem){
    let template = `
                    <tr>
                        <td>${contador_testes}</td>
                        <td>${acao}</td>
                        <td>${mensagem}</td>
                    </tr>`;
    return template;
}


function printPontuacao(){
    contador_testes +=1;
    pontuacao += 10;
    document.querySelector('#idspanpontuacao').textContent = pontuacao;
        if(contador_testes >= 48){
            alert("Parabéns! Você ganhou um jogo!!! Sua pontuação foi "+ pontuacao);

            
            setTimeout(() => {
                document.location.reload();
              }, 1000);
        }
}


function verifica_digito(frase){
    let i;
    let resposta = false;
    console.log(frase.length);
    for(i = 0; i < frase.length; i++){
        if(!((frase.charAt(i) >= 'A' && frase.charAt(i) <= 'Z') || 
        (frase.charAt(i) >= 'a' && frase.charAt(i) <= 'z') || frase.charAt(i) == ' ')){
            resposta = true;
        }
    }

return resposta;

}

function verifica_letra(frase){
    let i;
    let resposta = false;
    console.log(frase.length);
    for(i = 0; i < frase.length; i++){
        if(!(frase.charAt(i) >= '0' && frase.charAt(i) <= '9')){
            resposta = true;
        }
    }

return resposta;


}

function valorAno(frase){
    return parseInt(frase);
}

function valorVolume(frase){
    return parseInt(frase);
} 

function verificar_email(frase){
    if (frase.indexOf('@') > -1)
    {
        return false;
    }else{
        return true;
    }
}

function ContarSegundos(){
    
    if(tempo > 0){
    tempo -= 1;
    document.querySelector('#idtempo').textContent = tempo;
    }


    if(tempo <= 0){
        alert("O tempo se esgotou!!! Sua pontuação foi "+ pontuacao);

            
            setTimeout(() => {
                document.location.reload();
              }, 500);
     }
}



function getTime(){
    dificultade = document.getElementById("id_select_dificultade").value;

          if(dificultade == 1){
        tempo = 600;
    }else if(dificultade == 2){
        tempo = 400;
    }else if(dificultade == 3){
        tempo = 200;
    }
}
