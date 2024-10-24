function CONVERTEMOEDA(valor,cotacao,nomeOutra){

    console.log(`R$ ${valor} vale ${valor*cotacao} em ${nomeOutra}`)
}

function recebeMoeda(valor,cotacao,nomeOutra){

    CONVERTEMOEDA(valor,cotacao,nomeOutra)
}

let valor = Number(prompt("Digite o valor em reais"))
let cotacao = Number(prompt("Digite a cotacao"))
let nomeOutra = (prompt("Digite o nome da outra moeda"))

recebeMoeda(valor,cotacao,nomeOutra)

