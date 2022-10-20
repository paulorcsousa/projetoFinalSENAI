function cadastro(){
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;


    if (nome == "" || email == "" || telefone == ""){
        alert(`Verifique todas as informações devem ser preenchidas!`)  

    } else {
        alert(`Parabens, voce receberá todas as nossas promoções exclusivas!`)
        document.getElementById("nome").value = ""
        document.getElementById("email").value = ""
        document.getElementById("telefone").value = ""
    }  
}

function faleconosco(){
    let nome = document.getElementById("nome-fc").value;
    let email = document.getElementById("email-fc").value;
    let telefone = document.getElementById("telefone-fc").value;
    let mensagem = document.getElementById("textarea-fc").value;

    if(nome == "" || email == "" || telefone == "" || mensagem == ""){
        alert(`preenche tudo ai pra sabermos solucionar seu problema!`)  

    } else {
        alert(`Obrigado por desabafar, logo te ajudaremos no seu problema!`)
        document.getElementById("nome-fc").value = ""
        document.getElementById("email-fc").value = ""
        document.getElementById("telefone-fc").value = ""
        document.getElementById("textarea-fc").value = ""

    }  
}

function falaIrmao() {
    let nome = document.getElementById("vulgo").value;
    let comentario = document.getElementById("choraboy").value;
    let result = document.getElementById("falaram-ai")

    if(nome == "" || comentario == "") {
        alert(`Preenche o nome e o comentário, só um não rola!`)
    } else {
        result.innerHTML += `
        <div class="falaram-ai">
            <h3>${nome}</h3>
            <p>${comentario}</p>
        </div>`

        alert(`Valeu pela interação, espero que tenha achado instigante, atraente e envolvente! `)

        document.getElementById("vulgo").value = ""
        document.getElementById("choraboy").value = ""
    }



}