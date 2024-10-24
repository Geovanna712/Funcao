let opcao=0
let confirme=true
let n1,n2


function adicao(n1,n2){
    let soma = n1+n2
    return soma
}

function subtracao(n1,n2){
    let menos = n1-n2
    return menos
}

function multiplicacao(n1,n2){
    let multiplicar = n1*n2
    return multiplicar
}

function divisao(n1,n2){
    let divisao = n1/n2
    return dividir
}

while(confirme){

    opcao= Number(prompt("Digite 1 soma/n 2 subtracao/n 3 multiplicacao/n 4 divisao"))
    
    n1= Number(prompt("Digite um numero"))
    n2= Number(prompt("Digite um numero"))

    if (opcao==1){
        console.log(adicao(n1,n2))
    }

    else if (opcao==2){
        console.log(subtracao(n1,n2))
    }

    else if (opcao==3){
        console.log(multiplicacao(n1,n2))
    }

    else if (opcao==4){
        console.log(divisao(n1,n2))
    }

    confirme=confirm("Deseja continuar?")
}