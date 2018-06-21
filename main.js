var ul = document.createElement("ul");
var li = document.createElement("li");
var display = document.getElementById("display");
var nome = document.getElementById("nome");
var email = document.getElementById("email");
var assunto = document.getElementById("assunto");
var mensagem = document.getElementById("mensagem");
// var displayNome = document.getElementById("displayNome");
// var displayEmail = document.getElementById("displayEmail");
// var displayAssunto = document.getElementById("displayAssunto");
// var displayMensagem = document.getElementById("displayMensagem");


function getData() {
    if (nome.value.length <= 0) {
        nome.nextElementSibling.classList.add("show");
    } else {
        nome.nextElementSibling.classList.remove("show");
    }

    if (email.value.length <= 0) {
        email.nextElementSibling.classList.add("show");
    } else {
        email.nextElementSibling.classList.remove("show");
    }

    if (assunto.value.length <= 0) {
        assunto.nextElementSibling.classList.add("show");
    } else {
        assunto.nextElementSibling.classList.remove("show");
    }

    if (mensagem.value.length <= 0) {
        mensagem.nextElementSibling.classList.add("show");
    } else {
        mensagem.nextElementSibling.classList.remove("show");
    }

    if (nome.value.length > 0 && email.value.length > 0 && assunto.value.length > 0 && mensagem.value.length > 0) {
        display.appendChild(ul);
        
        ul.appendChild(li).innerHTML += "<strong>Nome:</strong> " + nome.value;
        ul.appendChild(li).innerHTML += "<br />";
        ul.appendChild(li).innerHTML += "<strong>E-mail:</strong> " + email.value;
        ul.appendChild(li).innerHTML += "<br />";
        ul.appendChild(li).innerHTML += "<strong>Assunto:</strong> " + assunto.value;
        ul.appendChild(li).innerHTML += "<br />";
        ul.appendChild(li).innerHTML += "<strong>Mensagem:</strong> " + mensagem.value;
    }
}

// function limparDisplay() {
//     displayNome.innerHTML = "";
//     displayEmail.innerHTML = "";
//     displayAssunto.innerHTML = "";
//     displayMensagem.innerHTML = "";
// }