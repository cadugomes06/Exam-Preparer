import React from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import styles from './Termos.module.css'
import { xFragil, sexa, termoEscla, comparecimento, comprometimento, cario, apbio,
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
              <li><a href={anuencia} target='_blank'>Anuência</a></li>
              <li><a href={comparecimento} target='_blank'>Comparecimento</a></li>
              <li><a href={comprometimento} target='_blank'>Comprometimento</a></li>
              <li><a href={sexa} target='_blank'>Sexagem Fetal</a></li>
              <li><a href={cario} target='_blank'>Cariótipo </a></li>
              <li><a href={xFragil} target='_blank'>X-Frágil </a></li>
              <li><a href={apbio} target='_blank'>Biópsia </a></li>
              <li><a href={termoEscla} target='_blank'>Termos de Esclarecimento</a></li>
              <li><a href={formAcido} target='_blank'>Formulário urina 24h com ácido </a></li>
              <li><a href={esclaAcido} target='_blank'>Instrução urina 24 horas </a></li>
              <li><a href={qrcode} target='_blank'>QRcode Unimed </a></li>
              <li><a href={marcacaoSus} target='_blank'>Cartão de marcação-SUS </a></li>
              <li><a href={contatosHemo} target='_blank'>Cartão contatos Hemolabes </a></li>
              <li><a href={fichaCovid} target='_blank'>Formulário para Covid </a></li>
   
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Termos