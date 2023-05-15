const exames = [
    {
        name: "Cortisol",
        nick: "cort",
        jejum: 8,
        diet: '',
        type: 'blood',
        instruction: 'chegar as 7:20'
    },
    {
        name: "Serotonina",
        nick: "ser",
        jejum: 8,
        diet: "Café, chá, baunilha, etc...",
        type: 'blood',
        instruction: 'realiza a dienta nas últimas 24 horas'
    },
    {
        name: "Ferro",
        nick: "fe",
        jejum: 8,
        diet: '',
        type: 'blood',
        instruction: 'colher no período matinal'
    },
    {
        name: "Ferritina",
        nick: "fer",
        jejum: 0,
        diet: '',
        type: 'blood',
        instruction: 'Coletar cedo'
    },
    {
        name: "rotina de urina",
        nick: "eas",
        jejum: 0,
        diet: '',
        type: 'material',
        material: 'colher das ultimas 3 horas.',
    },
    {
        name: "parisotológico(epf)",
        nick: "epf",
        jejum: 0,
        diet: '',
        type: 'material',
        instruction: 'colher fezes.'
    },
    {
        name: "Glicose",
        nick: "epf",
        jejum: 8,
        diet: false,
        type: 'blood',
        instruction: 'coletar em perído matinal'
    },
]

export default exames