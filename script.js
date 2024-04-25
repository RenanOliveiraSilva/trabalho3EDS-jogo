let ini = 0;
let fim = 0;
let numeroSecreto = 0;
let palpites = 10;

//Atualizando a página
document.addEventListener('DOMContentLoaded', function() {

    const num = document.querySelector('.pap');
    num.innerHTML = "";
    num.innerHTML = palpites;
    dados();

});

//Entrada de Dados
function dados(){
    ini = parseInt(prompt("Digite o valor mínimo do Intervalo"));
    fim = parseInt(prompt("Digite o valor máximo do Intervalo"));

    numeroSecreto = Math.floor(Math.random() * fim);

}

//Mensagem para PALPITE CORRETO
function openModalC() {

    var modal = document.getElementById("myModalCorrect");
    var span = document.getElementsByClassName("closeC")[0];

    (function() {
        modal.style.display = "block";
    })();

    span.onclick = function() {
        modal.style.display = "none";
        reset();
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            reset();
        }

    }
}

//Mensagem para PALPITE ERRADO
function openModalW() {

    var modal = document.getElementById("myModalWrong");
    var span = document.getElementsByClassName("closeW")[0];

    (function() {
        modal.style.display = "block";
    })();

    span.onclick = function() {
        modal.style.display = "none";
        reset();
    }

    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        reset();
    }
    }

    mostraDica();
}

//Mostrar a dica de acordo com o palpite
function mostraDica(condicao) {
    const dica = document.getElementsByClassName("dicaNum")[0];
    const h2 = document.createElement("h2");
    const svg = document.getElementsByClassName("svgDica")[0];

    if (condicao == "Maior") {
        h2.innerHTML = "O SEU PALPITE FOI MAIOR QUE O NÚMERO SECRETO";

    } else if(condicao == "Menor") {
        h2.innerHTML = "O SEU PALPITE FOI MENOR QUE O NÚMERO SECRETO";

    } else if (condicao = "Resetar") {
        h2.innerHTML = "";
        dica.innerHTML = "";
        return;

    }

    dica.innerHTML = "";
    dica.appendChild(h2);
    svg.style.display = "";

}

//Validar o input do usuário
function validaInput() {
    const input = document.getElementById("input");
    const value = parseInt(input.value);

    if(!typeof value === "number" || value === "" || value === null || value === undefined || isNaN(value)) {
        alert("Digite um número válido!");
        limpaInput();
        return true;
    }

    return false;
}

//Estrututa binária para adivinhar o número
function adivinhaNumero() {
    
    const input = document.getElementById("input");
    const value = parseInt(input.value);

    console.log("Ini:" + ini);
    console.log("Fim:" + fim);

    let meio = Math.floor((ini + fim) / 2);

    if(validaInput()) {
        return;
    };

    console.log("---------------------------------")
    console.log("Num S:" + numeroSecreto);
    console.log("Palpite:" + value);
    console.log("Meio:" + meio);
    console.log("Ini:" + ini);
    console.log("Fim:" + fim);
    console.log("Fim:" + palpites);
    
    if (value === numeroSecreto) {
        limpaInput();
        openModalC();
        return;
        
    } else if (palpites === 0){
        openModalW();
        limpaInput();
        return;

    }else if (meio > value) {
        
        fim = meio - 1;
        palpites--;
        atPalpites(palpites);
        mostraDica("Menor");
        limpaInput();
        return false;

    } else {
        ini = meio + 1;
        palpites--;
        atPalpites(palpites);
        mostraDica("Maior");
        limpaInput();
        return false;
        
    }

}

//Limpar o campo do formulário
function limpaInput() {
    const input = document.getElementById("input");
    input.value = "";
}

//Atualizar a quantidade de palpites
function atPalpites(n){
    const num = document.querySelector('.pap');
    num.innerHTML = "";
    num.innerHTML = n;

}

//Resetando todos os valores
function reset() {
    palpites = 0;
    atPalpites(10);
    dados();
    mostraDica("Resetar");

}