import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts';

function examsPDF(exams) {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    
}


export default examsPDF;