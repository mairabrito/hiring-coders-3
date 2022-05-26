"use strict";
const maira = {
    name: 'Maíra',
    lastName: "Brito",
    dateOfBirth: '02/06/1997',
};
function logMessage(message, level) {
    console.log(`[${level}] - ${message}`);
}
logMessage('Uma mensagem info', 'error');
logMessage('Uma mensagem info', 'info');
logMessage('Uma mensagem info', 'debug');
const userWithProfile = {
    name: 'maira',
    lastName: 'brito',
    dateOfBirth: '02/06/1997',
    bio: "Ola, meu nome é maira",
    interests: ['gatos', 'musica', 'fotografia']
};
