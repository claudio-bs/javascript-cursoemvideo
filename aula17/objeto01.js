let amigo = {nome: 'José', 
sexo: 'M', 
peso:101, 
engordar(p){ // função dentro da variável
    console.log('Engordou') 
    this.peso += p
}}
amigo.engordar(2) // aumentar 2 kg chamando a função
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)