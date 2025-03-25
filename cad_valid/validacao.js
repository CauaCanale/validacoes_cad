
// Validação do Nome
function verificarNome() {
    const nome = document.getElementById("nome").value;
    const nomeError = document.getElementById('mensagem-erro-nome');
    
    if (nome.length < 5) { //se o campo nome tiver menos que 5 caracteres
        nomeError.textContent = "Nome deve ter no mínimo 5 caracteres."; //mensagem de erro do campo
        nomeError.style.color = "red"; //cor da mensagem de erro
        document.getElementById("nome").focus(); // para a pessoa retornar automatico para este campo errado

    } else if (nome.length > 60) { //se o campo nome tiver mais que 60 caracteres
        nomeError.textContent = "Nome deve ter no máximo 60 caracteres."; // mensagem de erro do campo
        nomeError.style.color = "red"; // cor da mensagem de erro
        document.getElementById("nome").focus(); // para a pessoa retornar automatico para este campo errado

    } else if(nome === "") { //se o campo estiver vazio
        nomeError.textContent = "O campo nome não pode estar vazio!"; //mensagem de erro do campo
        nomeError.style.color = "red"; // cor da mensagem de erro
        document.getElementById("nome").focus(); // para a pessoa retornar automatico para este campo errado
       
    } else { //se a pessoa acertou e passou por todas as validações
        nomeError.textContent = "OK"; // vai dar o OK  de tudo certo neste campo
        nomeError.style.color = "green"; // cor da mensagem de erro
    }
  }

  // Validação do E-mail
  
function verificarEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('mensagem-erro-email');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (email === "") {
        emailError.textContent = "E-mail é obrigatório.";
        emailError.style.color = "red";
        document.getElementById("email").focus();
    } else if (email.length > 100) {
        emailError.textContent = "E-mail deve ter no máximo 100 caracteres.";
        emailError.style.color = "red";
        document.getElementById("email").focus();
    } else if (email.length < 5) {
        emailError.textContent = "E-mail deve ter no mínimo 5 caracteres.";
        emailError.style.color = "red";
        document.getElementById("email").focus();
    }
     else if (!emailPattern.test(email)) {
        emailError.textContent = "E-mail inválido.";
        emailError.style.color = "red";
        document.getElementById("email").focus();
    } else {
        emailError.textContent = "OK";
        emailError.style.color = "green";
    }
}

//Validar Senha

function validaSenha() {
    const senha = document.getElementById('senha').value;
    const SenhaError = document.getElementById('erro-senha');
    const regexMaiusculo = /[A-Z]/;
    const regexEspecial = /[!@#$%^&*(),.?":{}|<>]/;
    const regexNumero = /\d/;

    if (senha === "") {
        SenhaError.textContent = "Senha não pode ser vazia";
        SenhaError.style.color = "red";
        document.getElementById("senha").focus();

    }else if (senha.length > 60) {
        SenhaError.textContent = "Senha não pode ser maior que 60 digitos";
        SenhaError.style.color = "red";
        document.getElementById("senha").focus();

    }else if (senha.length < 8) {
        SenhaError.textContent = "Senha não pode ser menor que 8 digitos";
        SenhaError.style.color = "red";
        document.getElementById("senha").focus();

    }else if (!regexMaiusculo.test(senha)) {
        SenhaError.textContent = "Senha tem que ter Letras Maiúsculas";
        SenhaError.style.color = "red";
        document.getElementById("senha").focus();
    
    }else if (!regexEspecial.test(senha)) {
        SenhaError.textContent = "Senha tem que ter Caracter Especial";
        SenhaError.style.color = "red";
        document.getElementById("senha").focus();

    }else if (!regexNumero.test(senha)) {
        SenhaError.textContent = "Senha tem que ter números";
        SenhaError.style.color = "red";
        document.getElementById("senha").focus();

    }else{
        SenhaError.textContent = "OK";
        SenhaError.style.color = "green";
    }


}


// Validação da Confirmação de Senha

function confirmarSenha() {
    const confirmarSenha = document.getElementById('confirmar_senha').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenhaError = document.getElementById('mensagem-erro-confirmar-senha');
    
    if (confirmarSenha !== senha) {
        confirmarSenhaError.textContent = "As senhas não coincidem.";
        confirmarSenhaError.style.color = "red";
        document.getElementById("confirmar_senha").focus();
            
    } else if(confirmarSenha === "") {
        confirmarSenhaError.textContent = "Preencha o campo";
        confirmarSenhaError.style.color = "red";
        document.getElementById("confirmar_senha").focus();
    } else {    
        confirmarSenhaError.textContent = "OK";
        confirmarSenhaError.style.color = "green";
    }
}


// Telefone com Máscara
function aplicarMascaraTelefone(event) {
    let input = event.target;
    let valor = input.value;
    
    // Remove todos os caracteres não numéricos
    valor = valor.replace(/\D/g, '');

    // Aplica a máscara (formato: (XX)XXXXX-XXXX)
    if (valor.length <= 10) {
      valor = valor.replace(/(\d{2})(\d{0,5})(\d{0,4})/, "($1)$2-$3");
    } else {
      valor = valor.replace(/(\d{2})(\d{5})(\d{4})/, "($1)$2-$3");
    }

    input.value = valor;
  }
     

// Validação do Telefone com Máscara
function validatelefone() {
          
    const  telefone = document.getElementById('telefone').value;
    const  mensagemErroTelefone = document.getElementById('mensagem-erro-telefone');
                
    // Valida se o telefone tem 14 dígitos
    if (telefone.length !== 14) {
        mensagemErroTelefone.textContent = 'Telefone inválido!';
        mensagemErroTelefone.style.color = 'red';
        document.getElementById("telefone").focus();
    } else {    
        mensagemErroTelefone.textContent = "OK";
        mensagemErroTelefone.style.color = "green";
    }    
}


    // Validação da Cidade

function validacidade() {
    const cidade = document.getElementById('cidade').value;
    const mensagemCidade = document.getElementById('mensagem-cidade');
    if (cidade.length < 2 || cidade.length > 30) {
        mensagemCidade.textContent = "A cidade deve ter entre 2 e 30 caracteres.";
        mensagemCidade.style.color = "red";
        document.getElementById("cidade").focus();
    } else{
        mensagemCidade.textContent = "OK";
        mensagemCidade.style.color = "green";
        }
}

// Validação do Estado 

function validaestado() {
    const estado = document.getElementById('estado').value;
    const mensagemEstado = document.getElementById('mensagem-estado');
    if (estado.length !== 2) {
        mensagemEstado.textContent = "O estado deve ter exatamente 2 caracteres.";
        mensagemEstado.style.color = "red";
        document.getElementById("estado").focus();
    } else{
        mensagemEstado.textContent = "OK";
        mensagemEstado.style.color = "green";
        }
}

function validacep(){
    const cep = document.getElementById('cep').value;
    const mensagemCep = document.getElementById('mensagem-erro-cep');
    
    if(cep.length !== 8){
        mensagemCep.textContent = "O cep tem que ter exatamente 8 digitos";
        mensagemCep.style.color = "red";
        document.getElementById("cep").focus();
    } else{
        mensagemCep.textContent = "OK";
        mensagemCep.style.color = "green";
    }
}

function aplicarMascaraCep(event) {
    let input = event.target;
    let valor = input.value;
 
    // Remove todos os caracteres não numéricos
    valor = valor.replace(/\D/g, '');
 
    // Limita a quantidade de caracteres a 8
    if (valor.length > 8) {
        valor = valor.substring(0, 8);
    }
 
    input.value = valor;
}


function validanumero(){
    const numero = document.getElementById('numero').value;
    const mensagemNumero = document.getElementById('mensagem-erro-numero');

    if (numero.length < 1 || numero.length > 5) {
        mensagemNumero.textContent = "A cidade deve ter entre 1 e 5 caracteres.";
        mensagemNumero.style.color = "red";
        document.getElementById("cidade").focus();
    }
    else{
        mensagemNumero.textContent = "OK";
        mensagemNumero.style.color = "green";
        }
}
   
function aplicarMascaraNumero(event) {
    let input = event.target;
    let valor = input.value;
 
    // Remove todos os caracteres não numéricos
    valor = valor.replace(/\D/g, '');
 
    // Limita a quantidade de caracteres a 8
    if (valor.length > 5) {
        valor = valor.substring(0, 5);
    }
 
    input.value = valor;
}

function validacpf() {
    const cpf = document.getElementById('cpf').value.replace(/\D/g, ''); 
    const mensagemCpf = document.getElementById('mensagem-erro-cpf');

    // Verifica se o CPF tem exatamente 11 dígitos
    if (cpf.length !== 11) {
        mensagemCpf.textContent = 'CPF deve ter exatamente 11 dígitos!';
        mensagemCpf.style.color = 'red';
        document.getElementById("cpf").focus();
    } 
    else {
        mensagemCpf.textContent = 'CPF válido!';
        mensagemCpf.style.color = 'green';
    }
}

function aplicarMascaraCpf(event) {
    let input = event.target;
    let valor = input.value;
 
    // Remove todos os caracteres não numéricos
    valor = valor.replace(/\D/g, '');
 
    // Limita a quantidade de caracteres a 11
    if (valor.length > 11) {
        valor = valor.substring(0, 11);
    }
 
    // Aplica a máscara (formato: 777.777.777-77)
    if (valor.length <= 3) {
        valor = valor.replace(/(\d{3})(\d{0,3})/, "$1.$2");
    } else if (valor.length <= 6) {
        valor = valor.replace(/(\d{3})(\d{3})(\d{0,2})/, "$1.$2.$3");
    } else {
        valor = valor.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, "$1.$2.$3-$4");
    }
 
    input.value = valor;
}

// Máscara para CNPJ (limite de 14 dígitos)
function aplicarMascaraCnpj(event) {
    let input = event.target;
    let valor = input.value;
 
    // Remove todos os caracteres não numéricos
    valor = valor.replace(/\D/g, '');
 
    // Limita a quantidade de caracteres a 14
    if (valor.length > 14) {
        valor = valor.substring(0, 14);
    }
 
    // Aplica a máscara (formato: 00.000.000/0000-00)
    if (valor.length <= 2) {
        valor = valor.replace(/(\d{2})(\d{0,3})/, "$1.$2");
    } else if (valor.length <= 5) {
        valor = valor.replace(/(\d{2})(\d{3})(\d{0,3})/, "$1.$2.$3");
    } else if (valor.length <= 8) {
        valor = valor.replace(/(\d{2})(\d{3})(\d{3})(\d{0,4})/, "$1.$2.$3/$4");
    } else {
        valor = valor.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{0,2})/, "$1.$2.$3/$4-$5");
    }
 
    input.value = valor;
}
 
// Validação do CNPJ com Máscara
function validacnpj() {
    const cnpj = document.getElementById('cnpj').value;
    const mensagemcnpj = document.getElementById('mensagem-erro-cnpj');
 
    // Remove todos os caracteres não numéricos
    const valor = cnpj.replace(/\D/g, '');
 
    // Valida se o CNPJ tem exatamente 14 números
    if (valor.length !== 14) {
        mensagemcnpj.textContent = 'CNPJ inválido! tenha exatamente 14 números.';
        mensagemcnpj.style.color = 'red';
        document.getElementById("cnpj").focus();
    } else {
        mensagemcnpj.textContent = "OK";
        mensagemcnpj.style.color = "green";
    }
}

function validanascimento(dataNascimento) {
    // Converte a string de data para um objeto Date
    const dataInformada = new Date(dataNascimento);
    const dataAtual = new Date();

    // Verifica se a data informada é válida
    if (isNaN(dataInformada.getTime())) {
        return "Data inválida. Por favor, insira uma data no formato DD/MM/YYYY.";
    }

    // Compara a data informada com a data atual
    if (dataInformada > dataAtual) {
        return "A data de nascimento não pode ser no futuro.";
    }

    return "Data de nascimento válida.";
}



function aplicarMascaraNascimento(event) {
    let input = event.target;
    let valor = input.value;

    // Remove todos os caracteres não numéricos
    valor = valor.replace(/\D/g, '');

    // Limita a quantidade de caracteres para 8
    if (valor.length > 8) {
        valor = valor.substring(0, 8);
    }

    // Aplica a máscara no formato correto (formato: DD/MM/YYYY)
    if (valor.length <= 2) {
        valor = valor.replace(/(\d{2})(\d{0,2})/, "$1/$2");
    } else if (valor.length <= 4) {
        valor = valor.replace(/(\d{2})(\d{2})(\d{0,4})/, "$1/$2/$3");
    } else {
        valor = valor.replace(/(\d{2})(\d{2})(\d{4})(\d{0,0})/, "$1/$2/$3");
    }

    input.value = valor;
}

function validanascimento() {
    const nascimento = document.getElementById('nascimento').value;
    const mensagemnascimento = document.getElementById('mensagem-erro-nascimento');

    // Remove todos os caracteres não numéricos
    const valor = nascimento.replace(/\D/g, '');

    // Verifica se a data tem exatamente 8 números (DDMMYYYY)
    if (valor.length !== 8) {
        mensagemnascimento.textContent = 'Data de nascimento inválida!';
        mensagemnascimento.style.color = 'red';
        document.getElementById("nascimento").focus();
    } else {
        // Verifica se a data é válida
        const dia = parseInt(valor.substring(0, 2));
        const mes = parseInt(valor.substring(2, 4));
        const ano = parseInt(valor.substring(4, 8));

        // Cria um objeto Date para validar a data
        const data = new Date(ano, mes - 1, dia);

        if (data.getDate() !== dia || data.getMonth() !== mes - 1 || data.getFullYear() !== ano) {
            mensagemnascimento.textContent = 'Data de nascimento inválida! Verifique a data inserida.';
            mensagemnascimento.style.color = 'red';
            document.getElementById("nascimento").focus();
        } else if (ano > 2007) {
            mensagemnascimento.textContent = 'VOCÊ DEVE SER MAIOR DE 18 ANOS.';
            mensagemnascimento.style.color = 'red';
            document.getElementById("nascimento").focus();
        } else {
            mensagemnascimento.textContent = "OK";
            mensagemnascimento.style.color = "green";
        }
    }
}