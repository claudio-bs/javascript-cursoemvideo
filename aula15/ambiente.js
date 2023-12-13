let num = [5, 8, 2, 9, 3]
num.push(1) // add elemento 1
num.sort() // ordenação dos elementos
console.log(num) // elementos do array
console.log(`O vetor tem ${num.length} posições`) // qtd. elementos
console.log(`O primeiro valor do vetor é ${num[0]}`) // índice 0 do array


let pos = num.indexOf(9) // posição do elemento declarado no array
if (pos == -1) { // -1 significa que pesquisou e não encontrou nenhuma ocorrência
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}
