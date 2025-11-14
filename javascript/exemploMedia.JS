//Entrada - Variaveis
//Média aritimetica de 3 notas, e menor 3 horriveis
//menor que 7 da pra melhorar,maior 7 Gênio
const nota1 = Number(prompt("Digite a 1° nota"))
const nota2 = Number(prompt("Digite a 2° nota"))
const nota3 = Number(prompt("Digite a 3° nota"))

//Processamento
const soma = nota1+ nota2 + nota3
const media = soma/3

//media menor que 3
//media menor que 7
//media maior que 7
if(media < 3) {
    alert("media é insuficiente: " + media + " - Horrivel")

} else if (media <  7) {
    alert("media é insuficiente: " + media + " - Da pra melhorar")

} else {
    alert("media é suficiente: " + media + " - PARABENS")

}




