import { ScrollView, Image, Text, Button, TouchableOpacity, View, StyleSheet, Linking } from "react-native";
import { FontAwesome, FontAwesome5, Feather, AntDesign } from "@expo/vector-icons";
import {styles} from "./css/style";

export default function Informatica({navigation}){
    return(
        <View style={styles.Cursos}>
           <Text style={styles.TextoCurso}>
               Cursos disponíveis: 
           </Text>

           <ScrollView horizontal={false}>
                <View style={styles.DesCurso}>
                    <Text style={styles.TextoDoCurso} onPress={() => {Linking.openURL('https://www.sp.senac.br/cursos-livres/curso-de-logica-de-programacao')}}>Lógica de Programação</Text>
                    <Image source={require('./imgInformatica/lp.jpg')} style={styles.imagemCurso}/>     
                </View>    
            
                <View style={styles.DesCurso}>
                    <Text style={styles.TextoDoCurso} onPress={() => {Linking.openURL('https://www.sp.senac.br/cursos-livres/curso-de-excel-2019-avancado')}}>Curso de Excel 2019 - Avançado</Text>
                    <Image source={require('./imgInformatica/Excel.jpg')} style={styles.imagemCurso}/>     
                    
                </View>
           
                <View style={styles.DesCurso}>
                    <Text style={styles.TextoDoCurso} onPress={() => {Linking.openURL('https://www.sp.senac.br/cursos-livres/curso-de-autocad-projetos-em-2d')}}>AutoCAD - projetos em 2D</Text>
                    <Image source={require('./imgInformatica/autocad.jpg')} style={styles.imagemCurso}/>     
                </View>

                <View><Text style={{height:100}}></Text></View>
                </ScrollView>
        </View>
        
    )
}