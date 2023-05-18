import React from "react";
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

import icon1 from "../assets/icon1.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";

import MycustomFont from "../fonts/Poppins-SemiBold.ttf";
import MycustomFont2 from "../fonts/Poppins-Regular.ttf";
import MycustomFont3 from "../fonts/Poppins-Medium.ttf";

Font.register({ family: "SemiBold", src: MycustomFont });
Font.register({ family: "Medium", src: MycustomFont3 });
Font.register({ family: "Regular", src: MycustomFont2 });

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
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
  icon: {
    width: 12,
    height: 12,
  },
  sectionOne: {
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    width: 200,
    height: 40,
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
    justifyContent: "center",
    width: 250,
    height: 30,
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    display: "flex",
    alignItems: "center",
    fontFamily: "SemiBold",
    fontWeight: 200,
  },
  sectionTwo: {
    marginLeft: 10,
    marginBottom: 20,
    marginTop: 10,
  },
  badyExam: {
    fontSize: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  titleExam: {
    fontWeight: "bold",
    fontSize: 11,
    marginLeft: 10,
    marginBottom: 4,
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
  },
  fontMedium: {
    fontFamily: "Medium",
  },
  fontRegular: {
    fontFamily: "Regular",
  },
});

const ExamsPDF = (allExams) => {
  const newArrayExams = allExams.allExams;

  const isJejum = newArrayExams.filter((exam) => {
    return exam.jejum >= 8;
  });
  //console.log(isJejum)
  const isDiet = newArrayExams.filter((exam) => {
    return exam.diet != '';
  });
  //console.log(isDiet)
  const specialExams = newArrayExams.filter((exam) => {
    return exam.type === "special" && exam.instruction != "";
  });
  const isMaterial = newArrayExams.filter((exam) => {
    return exam.type === "material";
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>

        <View style={styles.header}>
          <Image style={styles.image} src={logo2} />
        </View>

        <View style={styles.sectionOne}>
          <view style={styles.sectionTitle}>
            <Image style={styles.icon} src={icon2} />
            <Text style={styles.title}>Jejum</Text>
          </view>

          <Text style={styles.subtitle}>
            {isJejum.length > 0
              ? "• Entre 8 a 12 horas de jejum \n • não realizar atividade física \n • Manter hidratação habitual"
              : "• Não possui jejum para esses exames."}
          </Text>
        </View>

        {isDiet.length > 0 ? (
          <View style={styles.sectionTwo}>
            <view style={styles.sectionTitle}>
              <Image style={styles.icon} src={icon3} />
              <Text style={styles.title}>Dieta</Text>
            </view>

            {isDiet 
              ? isDiet.map((exam, index) => (
                  <Text style={styles.subtitle} key={index}>
                    {exam.diet} {console.log(isDiet)}
                  </Text>
                ))
              : " Não possui dieta para esses exames."}
          </View>
        ) : (
          ""
        )}

        {specialExams.length > 0 ? (
          <View style={styles.sectionTwo}>
            <view style={styles.sectionTitle}>
              <Image style={styles.icon} src={icon1} />
              <Text style={styles.title}>Preparos Especiais</Text>
            </view>

            <View style={styles.specialArea}>
              {specialExams.length > 0
                ? specialExams.map((exam, index) => (
                    <View key={index}>
                      <Text style={styles.titleExam}>{exam.name}</Text>
                      <Text style={styles.badyExam}>{exam.instruction} </Text>
                    </View>
                  ))
                : ""}
            </View>
          </View>
        ) : (
          ""
        )}

        {isMaterial.length > 0 ? (
          <View style={styles.sectionTwo}>
            <view style={styles.sectionTitle}>
              <Image style={styles.icon} src={icon5} />
              <Text style={styles.title}>Materiais</Text>
            </view>

            <View style={styles.specialArea}>
              {isMaterial.length > 0
                ? isMaterial.map((exam, index) => (
                    <View key={index}>
                      <Text style={styles.titleExam}>{exam.name}</Text>
                      <Text style={styles.badyExam}>{exam.instruction} </Text>
                    </View>
                  ))
                : ""}
            </View>
          </View>
        ) : (
          ""
        )}

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
