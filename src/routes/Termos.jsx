import Header from '../components/Header'
import Menu from '../components/Menu'
import styles from './Termos.module.css'
import { xFragil, sexa, termoEscla, comparecimento, comprometimento, cario,
formAcido, esclaAcido, anuencia, qrcode, marcacaoSus, contatosHemo, fichaCovid} from '../documents/index';

const Termos = () => {
  return (
    <div>
      <Header />
      <Menu />

      <div className={styles.wrapper}>
        <div className={styles.termosContainer}>

          <div className={styles.titleTermos}>
            <h1>Termos e formulários</h1>
          </div>

          <div className={styles.sectionTiss}>
            <ul>
              <li><a href={anuencia} target='_blank' rel='noreferrer'>Termo de Anuência</a></li>
              <li><a href={comparecimento} target='_blank'  rel='noreferrer'>Termo de Comparecimento</a></li>
              <li><a href={comprometimento} target='_blank'  rel='noreferrer'> Comprometimento de pagamento</a></li>
              <li><a href={termoEscla} target='_blank'  rel='noreferrer'>Termo de Esclarecimento (colpo ou biópsia)</a></li>
              <li><a href={sexa} target='_blank'  rel='noreferrer'>Sexagem Fetal</a></li>
              <li><a href={cario} target='_blank'  rel='noreferrer'>Cariótipo </a></li>
              <li><a href={xFragil} target='_blank'  rel='noreferrer'>X-Frágil </a></li>
              <li><a href={formAcido} target='_blank'  rel='noreferrer'>Formulário urina 24h com ácido </a></li>
              <li><a href={esclaAcido} target='_blank'  rel='noreferrer'>Instrução urina 24 horas </a></li>
              <li><a href={qrcode} target='_blank'  rel='noreferrer'>QRcode Unimed </a></li>
              <li><a href={marcacaoSus} target='_blank'  rel='noreferrer'>Cartão de marcação-SUS </a></li>
              <li><a href={contatosHemo} target='_blank'  rel='noreferrer'>Cartão contatos Hemolabes </a></li>
              <li><a href={fichaCovid} target='_blank'  rel='noreferrer'>Formulário para Covid </a></li>
   
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Termos