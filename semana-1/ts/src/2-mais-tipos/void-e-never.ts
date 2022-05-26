function principal (): void{
    console.log('executando');
}

principal();

//never
//laços de repetição infinitos
//ou funções que disparam erros

function funcaoQueNuncaRetorna(): never {
    throw new Error('ola');
}

const a = funcaoQueNuncaRetorna();