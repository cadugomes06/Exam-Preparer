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
    fontSize: 14,
    fontWeight: 'ultrabold',
    marginBottom: 10,
    width: 150,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 10,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  sectionTwo: {
    marginLeft: 10,
    marginBottom: 20,
    marginTop: 10,
},
  badyExam: {
  fontSize: 10,
  marginBottom: 6,
  marginLeft: 10,
 },
  specialArea: {
  },
  titleExam: {
    fontWeight: 'bold',
    fontSize: 11,
    marginLeft: 10,
    marginBottom: 4,
  },

  });
    

 const ExamsPDF = (allExams) => {

  const newArrayExams = allExams.allExams
  const isJejum = newArrayExams.filter((exam) => {
    return exam.jejum >= 8 
  })

  const isDiet = newArrayExams.filter((exam) => {
    return exam.diet != ''
  })
  console.log(...isDiet)
  const specialExams = newArrayExams.filter((exam) => {
    return exam.type === 'blood' && exam.instruction != ''
  }) 



   return (
     <Document>
      <Page size='A4' style={styles.page}>
      
         <View style={styles.header}>
            <Image style={styles.image} src={logo} />
         </View>

         <View style={styles.sectionOne}>
            <Text style={styles.title}>Jejum</Text>


            <Text style={styles.subtitle}>
                 {isJejum.length > 0 
                       ? '• Entre 8 a 12 horas de jejum \n • não realizar atividade física \n • Manter hidratação habitual' 
                       : '• Não possui jejum para esses exames.'} 
            </Text>
         </View>

         {isDiet.length > 0 ? (
              <View style={styles.sectionTwo}>
              <Text style={styles.title}>Dieta</Text>
  
  
              <Text style={styles.subtitle}>
                   {isDiet ?
                         isDiet.map((exam, index) => (          
                           <Text key={index}>{exam.diet}</Text>
                         )) : ' Não possui dieta para esses exames.'}    
              </Text>
           </View>
         ) : ''}

          {specialExams.length > 0 ? (
             <View style={styles.sectionTwo}>
              <Text style={styles.title}>Preparo especial</Text>

                <View style={styles.specialArea}>
                 {specialExams.length > 0 ? 
                  specialExams.map((exam, index) => (
                    <View key={index} >                   
                        <Text style={styles.titleExam}>{exam.name}</Text>
                         <Text style={styles.badyExam}>{exam.instruction} </Text>
                    </View>
                     
                     )) : ''}
            </View>
         </View>
                ) : ''}


      </Page>
    </Document>
    )
 }


export default ExamsPDF; 