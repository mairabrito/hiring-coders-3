const textoNaoEstruturado= "meu cpf é 123.456.798-45";

const regex = new RegExp('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}');

console.log(textoNaoEstruturado.match(regex));
console.log(textoNaoEstruturado.match(regex)[0]);