const exames = [
    {
        name: "Cortisol",
        nick: "cort",
        jejum: 8,
        diet: '',
        type: 'blood',
        instruction: '• Chegar ao laboratório no máximo até às 7:20 horas. \n • Realizar o repouso obrigatório antes do exame. \n • Realizar a coleta às 8:00 horas.'
    },
    {
        name: "Serotonina",
        nick: "ser",
        jejum: 8,
        diet: "\n • Não é recomendado ingerir 24 horas antes da coleta:\n café, chá, chocolate, mate, refrigerante, abacate, abacaxi, ameixa,\n banana, berinjela, picles, kiwi, manga, nozes, tomate e alimentos\n aromatizados com baunilha.\n",
        type: 'blood',
        instruction: ''
    },
    {
        name: "Ferro",
        nick: "fe",
        jejum: 8,
        diet: '',
        type: 'blood',
        instruction: ''
    },
    {
        name: "Toxicológico",
        nick: "toxicologico",
        jejum: 0,
        diet: '',
        type: 'blood',
        instruction: '• Realizado apenas para renovação de CNH.\n • Pagamento somente no cartão de crédito, podendo dividir em até 3x R$60,00.\n • Obrigatório levar CNH original e cópia.\n • De segunda a sexta-feira, de 13:00 às 15:30.\n • Local: Rua Conde de Araruama 365º (matriz).'
    },
    {
        name: "DNA (teste de paternidade)",
        nick: "dna",
        jejum: 0,
        diet: '',
        type: 'blood',
        instruction: '• RG\n • CNH \n • Certidão de Nascimento(para menores de 18 anos)\n • Declaração de Nascimento (quando não houver Certidão de Nascimento)\n • Termo de Tutela e/ou Termo de Guarda (em casos de outros responsáveis legais)\n • Passaportes \n • C.T.P.S \n • Certidão de óbito (casos de Suporto pai falecido)\n • Carteira de identidade Profissionais (ex.: COREN, CRF, OAB)'
    },
    {
        name: "Espermograma",
        nick: "esp",
        jejum: 0,
        diet: '',
        type: 'material',
        instruction: '• Coleta deve ser realizada com 3 à 5 dias de abstinência sexual/ejaculação.\n • A coleta é de segunda a sexta-feira das 7:00 ás 10:00 horas (coletar o material no laboratório).\n • Local: Rua Conde de Araruama 365º (matriz).'
    },
    {
        name: "Catecolaminas",
        nick: "catec",
        jejum: 8,
        diet: '\n • Não é recomendado ingerir durante 5 dias antes da coleta:\n banana, laranja, abacaxi, queijo, café, chá, chocolate, caramelos, marmeladas, doces, sorvetes, nozes e bebidas alcoólicas.\n',
        type: 'blood',
        instruction: '• Bebida alcoólica: A abstinência é desejável nos 5 dias que antecedem o exame teste.\n - Não fumar nas 4 horas que antecederem a coleta.'
    },
    {
        name: "PSA",
        nick: "psa",
        jejum: 0,
        diet: '',
        type: 'blood',
        instruction: ' • Após toque retal, aguardar 2 dias\n • Após ultrassom transretal, 1 dia.\n • Após exercícios pesados, andar de bicicleta, andar de moto e à cavalo, aguardar 1 dia.\n • Após biópsia ou massagem de próstata,    aguardar 4 semanas \n • Após ejaculção (relação sexual), aguardar 2 dias.'
    },
    {
        name: "Glicose pós prandial",
        nick: "glipp",
        jejum: 0,
        diet: '',
        type: 'blood',
        instruction: '• Manter a alimentação normal.\n • Anotar o horário do início do almoço (1º garfada).\n • Almoçar em até 20 minutos no máximo.\n • Não ingerir nenhum tipo de alimento após o almoço até o horário da coleta, apenas água é permitido.\n • Chegar ao laboratório 15 minutos antes da coleta para que o sangue seja colhido exatamente 2 horas após o início do almoço.\n • O atraso deixa o exame inválido.`'
    },
    {
        name: "Rotina de urina",
        nick: "eas",
        jejum: 0,
        diet: '',
        type: 'material',
        material: 'colher das ultimas 3 horas.',
    },
    {
        name: "Parisotológico (EPF)",
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
        instruction: ''
    },
]

export default exames