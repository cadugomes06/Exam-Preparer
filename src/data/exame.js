const exames = [
    {
        name: "Cortisol",
        nick: "cort",
        jejum: 8,
        diet: '',
        type: 'special',
        instruction: '• Chegar ao laboratório no máximo até às 7:20 horas. \n • Realizar o repouso obrigatório antes do exame. \n • Realizar a coleta às 8:00 horas.'
    },
    {
        name: "Serotonina",
        nick: "ser",
        jejum: 8,
        diet: " -- Não é recomendado ingerir 24 horas antes da coleta -- \n • Café, chá, chocolate, mate, refrigerante, abacate, abacaxi\n • Ameixa, banana, berinjela, picles, kiwi, manga, nozes, tomate\n • Alimentos aromatizados com baunilha.",
        type: 'special',
        instruction: ''
    },
    {
        name: "Ferro",
        nick: "fe",
        jejum: 8,
        diet: '',
        type: 'special',
        instruction: ''
    },
    {
        name: "Hepatograma",
        nick: "hep",
        jejum: 8,
        diet: '',
        type: 'special',
        instruction: ''
    },
    {
        name: "Glicose",
        nick: "gli",
        jejum: 8,
        diet: '',
        type: 'special',
        instruction: ''
    },
    {
        name: "Insulina",
        nick: "ins",
        jejum: 8,
        diet: '',
        type: 'special',
        instruction: ''
    },
    {
        name: "Rotina de urina",
        nick: "eas",
        jejum: 0,
        diet: '',
        type: 'material',
        instruction: '• Coletar uma amostra de urina recente.\n • Usar sempre o recipiente estéril fornecido pelo laboratório e abrir apenas na hora da coleta.\n • Lavar as mãos e região genital com água e sabão.\n • Iniciar a micção, desprezando o primeiro jato de urina.\n • Entregar ao laboratório em até 3 horas após a coleta.\n • Período menstrual - Colher a urina 4 dias após o término\n  Aguardar 7 dias após o uso de antibióticos.',
    },
    {
        name: "Urina (Coletor infantil)",
        nick: "eas",
        jejum: 0,
        diet: '',
        type: 'material',
        instruction:  '• Retirar o produto da embalagem somente na hora do uso e em condições assépticas.\n • Higienizar a genitália com auxílio de luvas.\n • Segurar uma extremidade do adesivo e retirar o protetor do mesmo.\n • Posicionar a abertura do coletor sobre o períneo e ao longo dos lábios genitais.\n • Pressione delicadamente para fixá-lo.\n • Aguardar a micção da criança, inspecionando em intervalos de 30 a 60 minutos.\n • Após a criança urinar, com luvas, descolar e retirar o dispositivo cuidadosamente.\n • Se necessário, transferir o material coletado para outro recipiente.'
    },
    {
        name: "Toxicológico",
        nick: "toxicologico",
        jejum: 0,
        diet: '',
        type: 'special',
        instruction: '• Realizado apenas para renovação de CNH.\n • Pagamento somente no cartão de crédito, podendo dividir em até 3x R$60,00.\n • Obrigatório levar CNH original e cópia.\n • De segunda a sexta-feira, de 13:00 às 15:30.\n • Local: Rua Conde de Araruama 365º (matriz).'
    },
    {
        name: "DNA (teste de paternidade)",
        nick: "dna",
        jejum: 0,
        diet: '',
        type: 'special',
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
        diet: ' -- Não é recomendado ingerir durante 5 dias antes da coleta --\n \nbanana, laranja, abacaxi, queijo, café, chá, chocolate, caramelos, marmeladas, doces, sorvetes e nozes',
        type: 'special',
        instruction: ' • Bebida alcoólica: A abstinência é desejável nos 5 dias que antecedem o exame teste.\n • Não fumar nas 4 horas que antecederem a coleta.'
    },
    {
        name: "PSA",
        nick: "psa",
        jejum: 0,
        diet: '',
        type: 'special',
        instruction: ' • Após toque retal, aguardar 2 dias\n • Após ultrassom transretal, 1 dia.\n • Após exercícios pesados, andar de bicicleta, andar de moto e à cavalo, aguardar 1 dia.\n • Após biópsia ou massagem de próstata, guardar 4 semanas \n • Após ejaculção (relação sexual), aguardar 2 dias.'
    },
    {
        name: "Glicose pós prandial",
        nick: "glipp",
        jejum: 0,
        diet: '',
        type: 'special',
        instruction: '• Manter a alimentação normal.\n • Anotar o horário do início do almoço (1º garfada).\n • Almoçar em até 20 minutos no máximo.\n • Não ingerir nenhum tipo de alimento após o almoço até o horário da coleta, apenas água é permitido.\n • Chegar ao laboratório 15 minutos antes da coleta para que o sangue seja colhido exatamente 2 horas após o início do almoço.\n • O atraso deixa o exame inválido.`'
    },
    {
        name: "Cultura de urina",
        nick: "culur",
        jejum: 0,
        diet: '',
        type: 'material',
        instruction: '• Colher a primeira urina da manhã\n • Usar sempre o recipiente estéril fornecido pelo laboratório e abrir apenas na hora da coleta.\n • Lavar as mãos e região genital com água e sabão.\n • Iniciar a micção, desprezando o primeiro jato de urina.\n • Entregar ao laboratório em até 3 horas após a coleta.\n Obs: Período menstrual - Colher a urina 4 dias após o término\n • Aguardar 7 dias após o uso de antibióticos.',
    },
    {
        name: "Urina de 24h",
        nick: "uri24",
        jejum: 0,
        diet: '',
        type: 'material',
        instruction: '• Desprezara a primeira urina da manhã ao se levantar e marcar a hora. Colher todas as urinas dai por diante, durante o dia e a noite, se houver.\n • Colher a primeira urina do dia seguinte na mesma hora em que desprezou a urina do dia anterior.\n • Colher todo o volume de cada micção, armazenando em um frasco de água mineral sem gás. \n • Não perder nenhuma micção, isto acarreta erro no resultado dos exames.\n • Entregar todo o volume no laboratório num prazo máximo de 3 horas após a última coleta.\n • OBS: Refrigerar durante a coleta.',
    },
    {
        name: "Urina de 24h (c/ácido) ",
        nick: "acido",
        jejum: 0,
        diet: '',
        type: 'material',
        instruction: '• Desprezara a primeira urina da manhã ao se levantar e marcar a hora. Colher todas as urinas dai por diante, durante o dia e a noite, se houver.\n • Colher a primeira urina do dia seguinte na mesma hora em que desprezou a urina do dia anterior.\n • Colher todo o volume de cada micção, armazenando em um frasco de água mineral sem gás. \n • Não perder nenhuma micção, isto acarreta erro no resultado dos exames.\n • Entregar todo o volume no laboratório num prazo máximo de 3 horas após a última coleta.\n • OBS: Refrigerar durante a coleta.',
    },
    {
        name: "Parisotológico (EPF)",
        nick: "epf",
        jejum: 0,
        diet: '',
        type: 'material',
        instruction: '• Coletar uma pequena quantidade de fezes.\n • Entregar ao laboratório em até 3 horas em temperatura ambiente ou manter refrigerada e entregar em até 24 horas.'
    },
    {
        name: "Parisotológico (MIF)",
        nick: "mif",
        jejum: 0,
        diet: '',
        type: 'material',
        instruction: '• Pegar recipiente próprio no laboratório.\n • Colher 3 amostrar de fezes em dias alternados, no prazo máximo de 10 dias.\n • Coletar uma pequena quantidade a cada dias, colocando as 3 amostras juntas num mesmo recipiente.\n • Não coletar em dias seguidos.\n • Não é necessário refrigerar.'
    },
    {
        name: "Oxiúrus",
        nick: "poxi",
        jejum: 0,
        diet: '',
        type: 'material',
        instruction: '• Fazer coleta pela manhã antes do cliente defecar ou tomar banho (não fazer assepsia). Não usar nenhum medicamento no local.\n • Apoiar a tira de fita adesiva no fundo de um tubo de ensaio de vidro, com a parte adesiva para fora.\n • Encostar delicadamente na região anal, realizando um movimento lateral com o tubo, de modo a atingir toda a região do ânus.\n • Colher 2 (duas) amostragens. Colar as fitas adesivas em lâminas e colocá-las em tubetes de transporte devidamente identificados.\n • Enviar rapidamente ao laboratório.'
    },
    {
        name: "Escarro",
        nick: "baar",
        jejum: 0,
        diet: '',
        type: 'material',
        instruction: '• Pela manhã, imediatamente após acordar eliminar o material de drenagem nasal que estiver presente\n • Escovar os dentes e lavar a boca com bastante água (não utilizar creme dental).\n • Respirar fundo umas 8 a 10 vezes e  tossir profundamente. Colher o escarro assim obtido no recipiente de boca larga entregue pelo laboratório.\n • Entregar imediatamente ao laboratório. \n • Não se deve misturar o escarro com a saliva pois este ficará impróprio para a realização do exame.\n • Obs: No caso de haver dificuldade de obter o escarro por falta de secreção, recomendamos fazer inalação com vapor de água quente ou vaporização com soro fisiológico para estimular a secreção.'
    },
    {
        name: "Cortisol salivar",
        nick: "corts",
        jejum: 0,
        diet: '',
        type: 'material',
        instruction: '• A coleta deve ser feita até duas horas após o horário habitual do paciente acordar ou conforme solicitação médica.\n • Não há necessidade de jejum após dieta leve.\n • Não pode fazer tratamento dentário nas 24 horas que antecedem ao exame.\n • Antes da coleta, é necessário ficar três horas sem escovar os dentes.\n • É necessário informar todos os medicamentos em uso.\n • Obs: Coletar na Matriz - Rua Conde de Araruama n°365 - Centro.'
    },
    {
        name: "Testosterona salivar",
        nick: "testl",
        jejum: 0,
        diet: '',
        type: 'material',
        instruction: '• Suspender medicamentos de uso oral, transdérmico ou injetável a critério clínico.\n • Realizar a coleta antes de escovar os dentes, comer ou beber;.\n • Obs: Coletar na Matriz - Rua Conde de Araruama n°365 - Centro.'
    },
    {
        name: "IGA salivar",
        nick: "igal",
        jejum: 0,
        diet: '',
        type: 'material',
        instruction: '• Suspender medicamentos de uso oral, transdérmico ou injetável a critério clínico.\n • Realizar a coleta antes de escovar os dentes, comer ou beber;.\n • Obs: Coletar na Matriz - Rua Conde de Araruama n°365 - Centro.'
    },
    {
        name: "Cortisol salivar (tarde)",
        nick: "cors2",
        jejum: 0,
        diet: '',
        type: 'special',
        instruction: '• Jejum aconselhável de 4 horas.\n • Bebida alcoólica: A abstinência é desejável nas 72 horas que antecedem o teste. \n• Local: Rua Conde de Araruma n°365 - Centro (Matriz).'
    },
    {
        name: "Cotisol da tarde",
        nick: "cor16",
        jejum: 0,
        diet: '',
        type: 'special',
        instruction: '• Jejum de 4 horas.\n • Colher as 16:00 horas\n • Local: Rua Conde de Araruma n°365 - Centro (Matriz).'
    },
]

export default exames