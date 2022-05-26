"use strict";
var Permissoes;
(function (Permissoes) {
    Permissoes[Permissoes["admin"] = 0] = "admin";
    Permissoes[Permissoes["editor"] = 1] = "editor";
    Permissoes[Permissoes["comun"] = 2] = "comun";
})(Permissoes || (Permissoes = {}));
var Permissoes2;
(function (Permissoes2) {
    Permissoes2["admin"] = "ADMIN";
    Permissoes2["editor"] = "EDITOR";
    Permissoes2["comun"] = "COMUN";
})(Permissoes2 || (Permissoes2 = {}));
const usuario = {
    nivel: Permissoes.admin
};
console.log(usuario);
const usuario2 = {
    nivel: Permissoes2.admin
};
console.log(usuario2);
