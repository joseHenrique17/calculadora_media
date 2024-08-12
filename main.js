const formularioAtividade = document.getElementById('form-atividade')
let linhas = ''

const emojiAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando" />'
const emojiReprovado = '<img src="./images/reprovado.png" alt="Emoji triste" />'

const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'

const atividades = []
const notas = []

const notaMinima = parseFloat(prompt('Digite a nota mínima de sua matéria!'))

formularioAtividade.addEventListener('submit', function(e){
    e.preventDefault()
    
    adicionaLinha()
    atualizarTabela()
    atualizarMediaFinal()
})

function adicionaLinha(){
    const nomeAtividade = document.getElementById('nome-atividade')
    const notaAtividade = document.getElementById('nota-atividade')

    if(atividades.includes(nomeAtividade.value)){
        alert(`A atividade ${nomeAtividade.value} já existe!`)
    }
    else{
        atividades.push(nomeAtividade.value)
        notas.push(parseFloat(notaAtividade.value))
    
        let linha = '<tr>'
        linha += `<td>${nomeAtividade.value}</td>`
        linha += `<td>${notaAtividade.value}</td>`
        linha += `<td>${notaAtividade.value >= 7 ? emojiAprovado : emojiReprovado}</td>`
        linha += '</tr>'
    
        linhas += linha
    }
    

    nomeAtividade.value = ''
    notaAtividade. value = ''
}

function atualizarTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas;
}

function atualizarMediaFinal(){
    const mediaFinal = calculaMediaFinal()
    
    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado
    
} 

function calculaMediaFinal(){   
    let somaDasNotas = 0

    for(let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i] // o i está servindo como o índice que será usado para buscar cada um dos valores dentro da array notas
    }

    return somaDasNotas / notas.length
}

