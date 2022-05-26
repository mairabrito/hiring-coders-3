"use strict";
class Usuario {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
class Player extends Usuario {
    constructor(nome, idade, jogo) {
        super(nome, idade);
        this.jogo = jogo;
    }
    dizerOJogoAtual() {
        return `Estou jogando o jogo ${this.jogo}`;
    }
    static queHorasSao() {
        return Date();
    }
}
const jogador = new Player('Maira', 24, 'Free Fire');
console.log(jogador.dizerOJogoAtual());
console.log(Player.queHorasSao());
class Jogo {
    constructor(nome) {
        this.nome = nome;
    }
    dizerNome() {
        return `O nome do jogo é ${this.nome}`;
    }
}
class JogoComoDescricao extends Jogo {
    constructor(nome, descricao) {
        super(nome);
        this.descricao = descricao;
    }
    dizerNomeComDescricao() {
        return `O nome do jogo é ${this.nome} e é um ${this.descricao}`;
    }
}
