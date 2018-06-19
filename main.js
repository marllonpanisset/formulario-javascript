var form = document.getElementById("form");
var nome = document.getElementById("nome");
var email = document.getElementById("email");
var assunto = document.getElementById("assunto");
var mensagem = document.getElementById("mensagem");
var enviar = document.getElementById("enviar");
var display = document.getElementById("display");
var displayNome = document.getElementById("displayNome");
var displayEmail = document.getElementById("displayEmail");
var displayAssunto = document.getElementById("displayAssunto");
var displayMensagem = document.getElementById("displayMensagem");

function getData() {
    if (nome.value.length <=0) {
        alert("Nome não pode ser vazio!");
    }
    if (email.value.length <= 0) {
        alert("Email não pode ser vazio!");
    }
    if (assunto.value.length <= 0) {
        alert("Assunto não pode ser vazio!");
    }
    if (mensagem.value.length <= 0) {
        alert("Mensagem não pode ser vazio!");
    }
    else if (nome.value.length > 0 && email.value.length > 0 && assunto.value.length > 0 && mensagem.value.length > 0){
        displayNome.innerHTML += nome.value;
        displayEmail.innerHTML += email.value;
        displayAssunto.innerHTML += assunto.value;
        displayMensagem.innerHTML += mensagem.value;
    }
}

// var limpar = document.getElementById("limpar").onclick = function() {
//     limparDisplay()
// };

function limparDisplay() {
    displayNome.value = "";
    displayEmail.value = "";
    displayAssunto.value = "";
    displayMensagem.value = "";
}