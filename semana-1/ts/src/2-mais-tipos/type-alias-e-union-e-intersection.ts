type User = {
    name: string;
    lastName: string;
    dateOfBirth: string;
    age?: number; // opcional
}

const maira: User = {
    name: 'Maíra',
    lastName: "Brito",
    dateOfBirth: '02/06/1997',
}

//union types
// | (como se o ||)

type LogLevel = 'info' | 'error' | 'debug';

function logMessage (message: string, level: LogLevel){
    console.log(`[${level}] - ${message}`)
}

logMessage('Uma mensagem info', 'error');
logMessage('Uma mensagem info', 'info');
logMessage('Uma mensagem info', 'debug');
//logMessage('Uma mensagem info', 'errosadhkas');


//intersection types serve para combinar os types alias
// são caracterizados pelo pelo &, agrupa varios types alias

type About = {
    bio: string;
    interests: string[];
}

type Profile = User & About;
const userWithProfile: Profile = {
    name: 'maira',
    lastName: 'brito',
    dateOfBirth: '02/06/1997',
    bio: "Ola, meu nome é maira",
    interests: ['gatos', 'musica', 'fotografia']
}


type ComposedProfile = User & {
    log: LogLevel;
}


