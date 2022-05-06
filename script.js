
//CODIFICADOR CIFRA
function cifra() {
    var msgInput = document.querySelector("#mensagem1").value;
    var deslocamento = document.querySelector("#valorDeslo").value;
    var msgRetorno = document.querySelector("#mensagem2");
    var texto = ""
    for (var i = 0; i < msgInput.length; i++) {
        var position = msgInput[i].charCodeAt()// passa a letra para tabela ASCI
        if (position >= 65 && position <= 90) {
            var operacao = (position - 65 + parseInt(deslocamento)) % 26
            texto += String.fromCharCode(operacao + 65)
        }

        msgRetorno.innerText = texto
    }
}
//DECODIFICAR CIFRA
function cifraDecod() {
    var msgInput = document.querySelector("#mensagem1").value;
    var deslocamento = document.querySelector("#valorDeslo").value;
    var msgRetorno = document.querySelector("#mensagem2");
    var texto = ""
    for (var i = 0; i < msgInput.length; i++) {
        var position = msgInput[i].charCodeAt()// passa a letra para tabela ASCI
        var operacao = (position - 65 - parseInt(deslocamento) + 26) % 26// passando de 26 retorna a 0 
        texto += String.fromCharCode(operacao + 65)
    }
    msgRetorno.innerText = texto
}
//CODIFICADOR BASE64
function codificaBase() {
    var textoBase = document.querySelector("#mensagem1").value;
    var retornoTexto = document.querySelector("#mensagem2")


    retornoTexto.innerText = btoa(textoBase)

}
//DECODIFICADOR BASE64
function baseDecodificar() {
    var textoBase = document.querySelector("#mensagem1").value;
    var retornoTexto = document.querySelector("#mensagem2")

    retornoTexto.innerText = atob(textoBase)

}
//verificador
function verificaCod() {
    var select = document.querySelector("#idSelect")
    if (select.value == "base64") {
        return codificaBase()
    } else if (select.value == "cifra") {
        return cifra()
    }
}
function verifiDecod() {
    var select = document.querySelector("#idSelect")
    if (select.value == "base64") {
        return baseDecodificar()
    } else if (select.value == "cifra") {
        return cifraDecod()
    }
}



var btn = document.querySelector("#botao")
btn.addEventListener("click", function (event) {
    event.preventDefault()
})
var btncod = document.querySelector("#cod")
btncod.addEventListener("click", function () {
    btn.innerText = "codificar"
    btn.setAttribute("onclick", "verificaCod()")
})
var btndecod = document.querySelector("#decod")
btndecod.addEventListener("click", function () {
    btn.innerText = "decodificar"
    btn.setAttribute("onclick", "verifiDecod()")
})
