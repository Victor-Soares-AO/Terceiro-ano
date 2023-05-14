function mostrarProgresso() {
    var progresso = document.querySelector('.div-progress');
    progresso.style.display = 'block';
}

function esconderProgresso() {
    var progresso = document.querySelector('.div-progress');
    progresso.style.display = 'none';
}

var botaoMostrar = document.querySelector('#adicionar');
botaoMostrar.addEventListener('click', mostrarProgresso);

function mostrarProgresso() {
    var progresso = document.querySelector('.div-progress');
    progresso.style.display = 'block';
    
    var valor = 0;
    var intervalo = setInterval(function() {
        if (valor >= 100) {
            clearInterval(intervalo);
            adicionarDados()
            esconderProgresso();
        } else {
            valor += 10;
            progresso.setAttribute('aria-valuenow', valor);
            progresso.style.width = valor + '%';
            progresso.querySelector('.progress-bar').innerHTML = valor + '%';
        }
    }, 100);
}


function adicionarDados() {
    var nome = document.getElementById('idNome').value;
    var numero = document.getElementById('idNumero').value;
    var turma = document.getElementById('idTurma').value;

    var tabela = document.getElementById('tabela-dados');
    var novaLinha = tabela.insertRow(-1);
    var indice = tabela.rows.length - 1;

    var colunaIndice = novaLinha.insertCell(0);
    colunaIndice.innerHTML = indice;

    var colunaNome = novaLinha.insertCell(1);
    colunaNome.innerHTML = nome;

    var colunaNumero = novaLinha.insertCell(2);
    colunaNumero.innerHTML = numero;

    var colunaTurma = novaLinha.insertCell(3);
    colunaTurma.innerHTML = turma;
}
