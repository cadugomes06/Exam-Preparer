import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

function examsPDF(exames) {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const reportTitle = [
        {
            text: 'Preparo de exames!',
            margin: [15, 20, 0, 45],   //left, top, right, bottom
            bold: true,
            fontSize: 15
        }
    ]

    const dados = exames.map((exam) => {
        return [
            {text: exam.name, style: 'header'},
            {
                ul: [
                   exan.jejum,
                   exam.instruction,
                ],
            },
        ]
    });

    const details = [
        {text: 'Cortisol', style: 'header'},
		{
			ul: [
				'Chegar as 7:20',
				'aguardar em repouso',
				'Coletar as 8:00'
			],
		},
    ];

    function Rodape(currentPage, pageCount) {
        return [
        {
            text: currentPage + ' / ' + pageCount,
            fontSize: 8,
            alignment: 'right',
            margin: [0, 0, 20, 20] //left top right bottom
        },
    ]
    };

    const docDefinition = {
        pageSize: 'A4',
        pageMargins: [15, 50, 15, 40],
        header: [reportTitle],
        content: [details],
        footer: Rodape,
    }
    
    pdfMake.createPdf(docDefinition).open();
}


export default examsPDF;