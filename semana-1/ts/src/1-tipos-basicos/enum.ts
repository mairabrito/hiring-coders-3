//Enum é uma representação numerica de um valor legível

enum Permissoes {
    admin,
    editor,
    comun
}

enum Permissoes2 {
    admin = 'ADMIN',
    editor = 'EDITOR',
    comun = 'COMUN'
}

const usuario = {
    nivel: Permissoes.admin
};

console.log(usuario);

const usuario2 = {
    nivel: Permissoes2.admin
};

console.log(usuario2);