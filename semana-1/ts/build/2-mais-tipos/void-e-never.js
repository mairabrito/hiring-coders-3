"use strict";
function principal() {
    console.log('executando');
}
principal();
function funcaoQueNuncaRetorna() {
    throw new Error('ola');
}
const a = funcaoQueNuncaRetorna();
