//Classes e interfaces e herança e modificadores

// classes e funções

class Usuario {

    public nome;
    public idade;

    constructor(nome:string, idade:number){
        this.nome = nome;
        this.idade = idade;
    }
}

class Player extends Usuario {
    public jogo;

    constructor(nome:string, idade:number, jogo:string){
        super (nome, idade);
        this.jogo = jogo;
    }

    dizerOJogoAtual(){
        return `Estou jogando o jogo ${this.jogo}`;
    }

    //static pode ser acessado sem precisar criar um novo objeto
    static queHorasSao(){ 
        return Date();
    }
}

const jogador = new Player('Maira', 24, 'Free Fire');
console.log(jogador.dizerOJogoAtual());
console.log(Player.queHorasSao());
//console.log(Player.dizerOJogoAtual()); Erro, pois nesse caso é preciso criar um object

//private, protected, public
//public: é acessivel de forma geral, dentro e fora da classe
//private: é acessível apenas dentro da classe onde o campo foi criado
//protected: é acessível apenas dentro da classe ( e subclasses(filhas)) onde o campo foi criado

class Jogo {
    protected nome;

    constructor(nome:string){
        this.nome = nome;
    }

    dizerNome(){
        return `O nome do jogo é ${this.nome}`
    }
}

/* class JogoComoDescricao extends Jogo { //subclasse
    private descricao;

    constructor (nome:string, descricao:string){
        super(nome);

        this.descricao = descricao;
    }

    dizerNomeComDescricao (){
        return `O nome do jogo é ${this.nome} e é um ${this.descricao}`
    }
}
 */
/* const ghost = new JogoComoDescricao('FF', 'Jogo de Ação');
console.log(ghost.dizerNomeComDescricao()) */


//interfaces 

interface IJogocomDescricao{
    /* nome: string; */
    descricao: string;
    dizerNomeComDescricao(): string;

}

//Implements
class JogoComoDescricao extends Jogo implements IJogocomDescricao { //subclasse
    public descricao;

    constructor (nome:string, descricao:string){
        super(nome);

        this.descricao = descricao;
    }

    dizerNomeComDescricao (){
        return `O nome do jogo é ${this.nome} e é um ${this.descricao}`
    }
}





