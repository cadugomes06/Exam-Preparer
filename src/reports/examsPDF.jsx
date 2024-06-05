/* eslint-disable react/prop-types */
import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  View,
  Font,
} from "@react-pdf/renderer";
import logo2 from "../assets/logo-hemo2.png";
import imgSUS from '../assets/sus.png'
import warningIcon from '../assets/warning.png'

import icon1 from "../assets/icon1.png";
import icon5 from "../assets/icon5.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";

import MycustomFont from "../documents/fonts/Poppins-SemiBold.ttf";
import MycustomFont2 from "../documents/fonts/Poppins-Regular.ttf";
import MycustomFont3 from "../documents/fonts/Poppins-Medium.ttf";

Font.register({ family: "SemiBold", src: MycustomFont });
Font.register({ family: "Medium", src: MycustomFont3 });
Font.register({ family: "Regular", src: MycustomFont2 });

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    position: 'relative'
  },
  header: {
    width: "100%",
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 140,
  },

  versionSection : {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  versionText : {
    fontSize: 6,
    fontFamily: 'SemiBold',
    fontWeight: 200,
  },

  titleSection : {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#eee',
    textTransform: 'uppercase'
  },
  titleText : {
    fontSize: 12,
    fontFamily: "SemiBold",
    fontWeight: 200,
  },

  icon: {
    width: 12,
    height: 12,
  },
  iconObs: {
    width: 16,
    height: 16,
  },
  sectionOne: {
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 0,
  },
  subtitle: {
    fontSize: 10,
    marginLeft: 10,
    fontWeight: "bold",
    fontFamily: "Regular",
  },
  sectionTitle: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    justifyContent: 'flex-start',
    width: 200,
    height: 30,
    marginBottom: 5,
    paddingLeft: 50,
  },
  title: {
    fontSize: 12,
    display: "flex",
    alignItems: "center",
    fontFamily: "SemiBold",
    fontWeight: 200,
  },
  sectionTwo: {
    marginLeft: 10,
    marginBottom: 5,
    marginTop: 10,
  },
  badyExam: {
    fontSize: 10,
    marginBottom: 6,
    marginLeft: 10,
  },
  titleExam: {
    fontWeight: "bold",
    fontSize: 11,
    marginLeft: 10,
    marginBottom: 2,
    fontFamily: "Medium",
  },
  footerWrapper: {
    width: "100%",
    height: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 10,
    border: 2,
    borderColor: "#e3e3e3",
    marginTop: 15
  },
  wrapperSUS: {
    width: "100%",
    height: 120,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 10,
    border: 1,
    borderColor: '#eee',
    marginBottom: 4
  },
  sectionsSUS: {
    display: 'flex',
    flexDirection: 'column',
  },
  imageSUS: {
    width: 40,
    height: 60
  },
  fontMedium: {
    fontFamily: "Medium",
  },
  fontRegular: {
    fontFamily: "Regular",
  },
  fontSemibold: {
    fontFamily: "SemiBold",
    marginBottom: 10
  },
  sectionTitleMaterialPD: {
    width: '100%',
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    marginLeft: 10,
    marginTop: 15,
    marginBottom: 4
  },
  titleMaterialPD: {
    fontSize: 11,
    fontFamily: 'SemiBold',
    marginLeft: 4,
  }
});

const ExamsPDF = ({allExams, status, sus, observationText}) => {

  const getExams = allExams  
  const isMaterialPD = status
  const isSUS = sus
  
  const isJejum = getExams.filter((exam) => {
    return exam.jejum >= 8;
  });
  const isDiet = getExams.filter((exam) => {
    return exam.diet != '';
  });
  const specialExams = getExams.filter((exam) => {
    return exam.type === "special" && exam.instruction != "" && exam.nick != 'CORT'
    && exam.nick != 'FTVL';
  });
  const isMaterial = getExams.filter((exam) => {
    return exam.type === "material";
  });
  const isCortisol = getExams.filter((exam) => {
    return exam.nick === "CORT" | 'cort'
  })
  
  const userStorage = window.localStorage.getItem('UserUnitData')
  const userData = JSON.parse(userStorage)



  return (
    <Document>
      <Page size="A4" style={styles.page}>

        <View style={styles.header}>
          <Image style={styles.image} src={logo2} />
        </View>

        <View style={styles.versionSection}>
          <Text style={styles.versionText}>versão 2.0 - ultima modificação em 19/03/2024</Text>
        </View>

        <View style={styles.titleSection}>
            <Text style={styles.titleText}>Instruções para coleta</Text>
        </View>

        <View style={styles.sectionOne}>
          <View style={styles.sectionTitle}>
            <Image style={styles.icon} src={icon2} />
            <Text style={styles.title}>Jejum Matinal</Text>
          </View>

          <Text style={styles.badyExam}>
            {isJejum.length > 0
              ? `• Entre 8 a 12 horas de jejum \n • não realizar atividade física \n • Manter hidratação habitual`
              : "• Não possui jejum para esse(s) exame(s)."}
          </Text>
        </View>

        {isDiet.length > 0 ? (
          <View style={styles.sectionTwo}>
            <View style={styles.sectionTitle}>
              <Image style={styles.icon} src={icon3} />
              <Text style={styles.title}>Dieta</Text>
            </View>

            {isDiet 
              ? isDiet.map((exam, index) => (
                  <View key={index}>
                  <Text style={styles.titleExam}>{exam.name}</Text>
                  <Text style={styles.subtitle} key={index}>{exam.diet}</Text>
                  </View>
                ))
              : <Text></Text>}
          </View>
        ) : (
          <Text></Text>
        )}

        {specialExams.length > 0 || isCortisol.length > 0 ? (
          <View style={styles.sectionTwo}>
            <View style={styles.sectionTitle}>
              <Image style={styles.icon} src={icon1} />
              <Text style={styles.title}>Preparos Especiais</Text>
            </View>

            <View style={styles.specialArea}>
              {specialExams.length > 0
                ? specialExams.map((exam, index) => (
                    <View key={index}>
                      <Text style={styles.titleExam}>{exam.name}</Text>
                      <Text style={styles.badyExam}>{exam.instruction} </Text>
                    </View>
                  ))
                : <Text></Text>}
            </View>

             <View style={styles.specialArea}>
              {isCortisol.length > 0 
                   ?  
                    <View>
                      <Text style={styles.titleExam}>{isCortisol[0].name}</Text>
                      <Text style={styles.badyExam} >{!isMaterialPD 
                             ? '• Chegar ao laboratório entre 7h00 às 8h00. \n • Realizar o repouso obrigatório de pelo menos 30 minutos antes do exame. \n • Retirar a senha de Cortisol ao chegar no laboratório (última opção).'  
                              :  '• Chegar ao laboratório no máximo até às 7:20 horas. \n • Realizar o repouso obrigatório antes do exame. '}
                      </Text>
                    </View>                  
                : <Text></Text>}
            </View> 

          </View>
        ) : (
          <text></text>
        )}

        {isMaterial.length > 0 ? (
          <View style={styles.sectionTwo}>
            <View style={styles.sectionTitle}>
              <Image style={styles.icon} src={icon5} />
              <Text style={styles.title}>Materiais</Text>
            </View>

            <View style={styles.specialArea}>
              {isMaterial.length > 0
                ? isMaterial.map((exam, index) => (
                    <View key={index}>
                      <Text style={styles.titleExam}>{exam.name}</Text>
                      <Text style={styles.badyExam}>{exam.instruction} </Text>
                    </View>
                  ))
                : <Text></Text>}
            </View>
          </View>
        ) : (
          <Text></Text>
        )}

          {observationText.length > 0 ? (
              <View style={styles.sectionTwo}>
                     <View style={styles.sectionTitle}>
                       <Image style={styles.iconObs} src={warningIcon} />    
                       <Text style={styles.title}>Observação</Text>
                     </View>

                     <View>
                       <Text style={styles.subtitle}> - {observationText}</Text>
                     </View>                
               : <Text></Text>
             </View>
        ) : (
          <Text></Text>
        )}
         

        {/*Material Pendente  */}
        {isMaterialPD  ? (
          <View>
            <View style={styles.sectionTitleMaterialPD}>
            <Image style={styles.icon} src={warningIcon} />           
             <Text style={styles.titleMaterialPD}>Material Pendente</Text>
            </View>
             <Text style={styles.badyExam}>- Retirar a senha de Material Pendente ao chegar no laboratório para agilizar o seu atendimento.</Text>
             <Text style={styles.badyExam}>- Senha exclusiva para exames já cadastrados anteriormente.</Text>
             {userData ? 
            <Text style={styles.badyExam}>
              {`- Horário de coleta (${userData.unit}): Segunda à Sexta-feira, de ${userData.open}h às ${userData.close}h. Sábado de ${userData.openSaturday}h às ${userData.closeSaturday}h.`}
              </Text>
              : <Text></Text> }
          </View>
        )
        : <Text></Text> }


      {isSUS ? (
        <View style={styles.wrapperSUS}>
          <Image style={styles.imageSUS} src={imgSUS} />

          <View style={styles.sectionsSUS}>
             <Text style={styles.fontSemibold}> Agendamento</Text>
            <Text style={styles.fontRegular}>• De Segunda-feira à Sexta-feira <Text style={styles.fontSemibold}>(7:00h às 17:00h)</Text></Text>
            <Text style={styles.fontRegular}>• O exame será agendado para a semana seguinte, </Text>
            <Text style={styles.fontRegular}>no mesmo dia em que a ligação foi realizada.</Text>
            <Text style={styles.fontRegular}>• Telefones: (22)2762-5213 (22)2772-0050</Text>
            <Text style={styles.fontRegular}> (22)2772-1820 (22)2762-0088</Text>
          </View>
,
          <View style={styles.sectionsSUS}>
             <Text style={styles.fontSemibold}> Unidade com atendimento na hora</Text>
            <Text style={styles.fontRegular}>• De segunda a sexta-feira as 6:30h.</Text>
            <Text style={styles.fontRegular}>• End.: Rua velho campos n°642 - Centro</Text>
            <Text style={styles.fontRegular}>• Vagas limitadas.</Text>
          </View>

        </View>
      ): <Text></Text>}

        {/* Footer */}
        <View style={styles.footerWrapper}>
          <Text style={styles.fontMedium}>Contatos</Text>
          <Text style={styles.fontRegular}>(22)2762-5213</Text>
          <Text style={styles.fontRegular}>(22)2772-0050 </Text>
          <Text style={styles.fontRegular}>(22)98851-7091 </Text>
          <Text style={styles.fontRegular}> www.hemolabes.com</Text>
        </View>
      </Page>
    </Document>
  );
};

export default ExamsPDF;
