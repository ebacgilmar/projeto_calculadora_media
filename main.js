const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./aprovado.png" alt= "Emoji celebrando" />'; 
const imgreprovado = '<img src="./reprovado.png" alt= "decepcionado" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resulado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resulado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("digite a nota minima:"));

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionalinha();
    atualizaTabela();
    atualizaMediafinal();

});

function adicionalinha() {
    const inputNomeatividade = document.getElementById('nome-atividade');
    const inputNotaatividade = document.getElementById('nota-atividade');  

    if(atividades.includes(inputNomeatividade.value)) {
        alert (`A atividade: ${inputNomeatividade.value} ja foi inserida`);
    } else{
        atividades.push(inputNomeatividade.value);
        notas.push(parseFloat(inputNotaatividade.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeatividade.value}</td>`;
        linha += `<td>${inputNotaatividade.value}</td>`;
        linha += `<td>${inputNotaatividade.value >= notaMinima ? imgAprovado: imgreprovado}</td>`;
        linha += '</tr>';

        linhas += linha;
    }
    
    inputNomeatividade.value = '';
    inputNotaatividade.value = '';
}    

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;  
}

function atualizaMediafinal() {
    const mediafinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediafinal;
    document.getElementById('media-final-resultado').innerHTML = mediafinal >= notaMinima ? spanAprovado : spanReprovado;   
}

function calculaMediaFinal() {
    let somadaNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somadaNotas += notas[i];
    }

    return somadaNotas / notas.length

}




