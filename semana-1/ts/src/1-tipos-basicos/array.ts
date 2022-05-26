const gatos: string[] = [
    'lora',
    'logan',
    'Ju'
]

//gatos.push(5); erro
gatos.push('Luna');

function exibeGatos (gatos: string[]){
    return `Os gatos são: ${gatos.join(', ')}`
}

console.log(exibeGatos(gatos));
