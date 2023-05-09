import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import logo from '../assets/logoBradesco.png'

function examsPDF(exames) {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const reportTitle = [
        {
            text: 'Exames',
            fontSize: 15,
            bold: true,
            margin: [15, 40, 0, 45] //left top right bottom
        },
    ]

    const details = [
        {
         image: logo,   
        }
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

    const docDefinitions = {
        pageSize: 'A4',
        pageMargins: [15, 50, 15, 40],
        header: [reportTitle],
        content: [details],
        footer: Rodape,
    }
    
    pdfMake.createPdf(docDefinitions).open();
}


export default examsPDF;