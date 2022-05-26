"use strict";
const gatos = [
    'lora',
    'logan',
    'Ju'
];
gatos.push('Luna');
function exibeGatos(gatos) {
    return `Os gatos são: ${gatos.join(', ')}`;
}
console.log(exibeGatos(gatos));
