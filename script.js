let ini = 0;
let fim = 100;
let numeroSecreto = Math.floor(Math.random() * fim);
let palpites = 0;


//Mensagem para PALPITE CORRETO
function openModalC() {

    alert("Parabéns! Você acertou o número secreto!");

    var modal = document.getElementById("myModalCorrect");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("closeC")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }
}

//Mensagem para PALPITE ERRADO
function openModalW() {

    var modal = document.getElementById("myModalWrong");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("closeW")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }

    mostraDica();
}

//Mostrar a dica de acordo com o palpite
function mostraDica(condicao) {
    const dica = document.getElementsByClassName("dicaNum")[0];
    const h2 = document.createElement("h2");
    const svg = document.getElementsByClassName("svgDica")[0];

    if (condicao) {
        h2.innerHTML = "O SEU PALPITE FOI MAIOR QUE O NÚMERO SECRETO";
    } else {
        h2.innerHTML = "O SEU PALPITE FOI MENOR QUE O NÚMERO SECRETO";
    }

    dica.innerHTML = "";
    dica.appendChild(h2);
    svg.style.display = "";

}

//Validar o input do usuário
function validaInput() {
    const input = document.getElementById("inputNum");
    const value = parseInt(input.value);
    console.log(value);

    if(isNaN(value) || !typeof value === "number" || value === "" || value === null || value === undefined) {
        alert("Digite um número válido!");
        limpaInput();
        return false;
    }
    limpaInput();
    return true;
}

//Estrututa binária para adivinhar o número
function adivinhaNumero() {
    
    const input = document.getElementById("inputNum");
    const value = parseInt(input.value);
    let meio = Math.floor((ini + fim) / 2);

    console.log(value);

    if(validaTentativas(palpites) || !validaInput() ) {
        return;

    };



    console.log("---------------------------------")
    console.log("Num S:" + numeroSecreto);
    console.log("Palpite:" + value);
    console.log("Meio:" + meio);
    console.log("Ini:" + ini);
    console.log("Fim:" + fim);
    
    if (value === meio && value === numeroSecreto) {
        openModalC();
        return;
        
    } else if (numeroSecreto > value) {
        ini = meio + 1;
        palpites++;
        mostraDica(false);

    } else {
        fim = meio - 1;
        palpites++;
        mostraDica(true);
        
    }

    limpaInput();

}

//Validar as tentativas do usuário
function validaTentativas(palpites) {
    if (palpites === 9) {
        openModalW();
        return true;

    }

    return false;
}

function limpaInput() {
    const input = document.getElementById("inputNum");
    input.value = "";
}