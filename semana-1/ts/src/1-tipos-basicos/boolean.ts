let estaAtivo: boolean;

//estaAtivo = 'teste';
//estaAtivo = 45;

estaAtivo = true;

function mapearStatusDeUsuario(status: boolean){
    if(status){
        return `Usuário está ativo`
    } else{
        return `Usuário não está ativo`
    }
}

mapearStatusDeUsuario(true);
mapearStatusDeUsuario(false);