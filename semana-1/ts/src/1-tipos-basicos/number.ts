let idade:number; //garantir a tipagem

idade = 22;
//idade = '22'; Erro

function somaIdade(idadeInicial:number, anosPassaram: number){
    return idadeInicial + anosPassaram
}

somaIdade(25,1);
//somaIdade('25',1) // Erro