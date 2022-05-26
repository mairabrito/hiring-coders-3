"use strict";
let estaAtivo;
estaAtivo = true;
function mapearStatusDeUsuario(status) {
    if (status) {
        return `Usuário está ativo`;
    }
    else {
        return `Usuário não está ativo`;
    }
}
mapearStatusDeUsuario(true);
mapearStatusDeUsuario(false);
