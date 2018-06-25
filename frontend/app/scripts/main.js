var div = document.createElement("div");
var display = document.getElementById("display");
var nome = document.getElementById("nome");
var email = document.getElementById("email");
var assunto = document.getElementById("assunto");
var mensagem = document.getElementById("mensagem");

function formValidate() {
    nome.onblur = function () {
        if (nome.value.length <= 0) {
            nome.nextElementSibling.classList.add("show");
            nome.classList.add("erro");
        } else {
            nome.nextElementSibling.classList.remove("show");
            nome.classList.remove("erro");
        }
    }
    email.onblur = function () {
        if (email.value.length <= 0) {
            email.nextElementSibling.classList.add("show");
            email.classList.add("erro");
        } else {
            email.nextElementSibling.classList.remove("show");
            email.classList.remove("erro");
        }
    }
    assunto.onblur = function () {
        if (assunto.value.length <= 0) {
            assunto.nextElementSibling.classList.add("show");
            assunto.classList.add("erro");
        } else {
            assunto.nextElementSibling.classList.remove("show");
            assunto.classList.remove("erro");
        }
    }
    mensagem.onblur = function () {
        if (mensagem.value.length <= 0) {
            mensagem.nextElementSibling.classList.add("show");
            mensagem.classList.add("erro");
        } else {
            mensagem.nextElementSibling.classList.remove("show");
            mensagem.classList.remove("erro");
        }
    }
}

formValidate();

var printData = function () {
    display.appendChild(div);
    div.classList.add("itens");

    div.innerHTML += "<strong>Nome:</strong> " + nome.value;
    div.innerHTML += "<br />";
    div.innerHTML += "<strong>E-mail:</strong> " + email.value;
    div.innerHTML += "<br />";
    div.innerHTML += "<strong>Assunto:</strong> " + assunto.value;
    div.innerHTML += "<br />";
    div.innerHTML += "<strong>Mensagem:</strong> " + mensagem.value;
    div.innerHTML += "<br />";
    div.innerHTML += "<hr />";
}

function limparDisplay() {
    var itens = display.getElementsByClassName("itens");
    if (itens.length > 0) {
        itens[0].parentNode.removeChild(itens[0]);
        div.innerHTML = "";
    }
}

function getData() {
    if (nome.value.length <= 0) {
        nome.nextElementSibling.classList.add("show");
        nome.classList.add("erro");
    } else {
        nome.nextElementSibling.classList.remove("show");
        nome.classList.remove("erro");
    }
    if (email.value.length <= 0) {
        email.nextElementSibling.classList.add("show");
        email.classList.add("erro");
    } else {
        email.nextElementSibling.classList.remove("show");
        email.classList.remove("erro");
    }
    if (assunto.value.length <= 0) {
        assunto.nextElementSibling.classList.add("show");
        assunto.classList.add("erro");
    } else {
        assunto.nextElementSibling.classList.remove("show");
        assunto.classList.remove("erro");
    }
    if (mensagem.value.length <= 0) {
        mensagem.nextElementSibling.classList.add("show");
        mensagem.classList.add("erro");
    } else {
        mensagem.nextElementSibling.classList.remove("show");
        mensagem.classList.remove("erro");
    }
    if (nome.value.length > 0 && email.value.length > 0 && assunto.value.length > 0 && mensagem.value.length > 0) {
        printData();
    }
}