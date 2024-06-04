export interface Paciente{
    nome:string;
    grau: number;
}

export interface Hospital{ 
    nomeHospital: string;
    ala: Ala[];
}
export interface Ala{ 
    nome: []
    cg: [];
    ortopedista: [];
    triagem: [];
}