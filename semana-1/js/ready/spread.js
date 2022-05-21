let lista = [1,2,5];

let listaIncluir = [3,4];


console.log(lista);
console.log(listaIncluir);

for (let i = 0; i < listaIncluir.length; i++){
    for( let j = 0; j < lista.length; j++){
        if(lista[j] >= listaIncluir[i]){
            lista.splice(j,0, listaIncluir[i]); // Inserir novos valores em posiçoes estrategicas (posição, remover?, IncluirValor)
            j++; //pular
        }
    }
}

console.log(lista);

/////////
const listResult = [1,2, ...listaIncluir, 5];
console.log(listResult);

///////
const list2 = ['a', 'b', 'c', 'd'];
const list3 = [...list2];

console.log(list2)
console.log(list3)

list2.push('e');
list3.pop();

console.log(list2)
console.log(list3)