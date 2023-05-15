import React from 'react';
import { Page, Text, Image, Document, StyleSheet, View } from '@react-pdf/renderer';
import logo from '../assets/logo-hemo.png';

const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
    },
    header: {
        width: '100%',
        height: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
    },
    sectionOne: {
      marginTop: 20,
      marginLeft: 10,
      marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'ultrabold',
    marginLeft: 40,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 'bold',
  }
  });
    

 const ExamsPDF = (allExams) => {

  const newArrayExams = allExams.allExams
  const isJejum = newArrayExams.filter((exam) => {
    return exam.jejum >= 8 
  })


   return (
     <Document>
      <Page size='A4' style={styles.page} pageNumber={1}>
      
         <View style={styles.header}>
            <Image style={styles.image} src={logo} />
         </View>

         <View style={styles.sectionOne}>
            <Text style={styles.title}>Jejum</Text>


            <Text style={styles.subtitle}>
                 {isJejum.length > 0 
                       ? '- Entre 8 a 12 horas de jejum \n - não realizar atividade física \n - Manter hidratação habitual'
                       : ' Não possui jejum para esses exames.'} 
            </Text>
         </View>


      </Page>
    </Document>
    )
 }


export default ExamsPDF; 