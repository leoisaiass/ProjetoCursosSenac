import { ScrollView, Image, Text, Button, TouchableOpacity, View, StyleSheet, Linking } from "react-native";
import { FontAwesome, FontAwesome5, Feather, AntDesign } from "@expo/vector-icons";
import {styles} from "./css/style";

export default function BemEstar({navigation}){
    return(
        <View style={styles.Cursos}>
           <Text style={styles.TextoCurso}>
               Cursos disponíveis: 
           </Text>

           <ScrollView horizontal={false}>
                <View style={styles.DesCurso}>
                    <Text style={styles.TextoDoCurso} onPress={() => {Linking.openURL('https://www.sp.senac.br/cursos-livres/curso-de-tecnicas-de-manicure-e-pedicure')}}>Técnicas de Manicure e Pedicure</Text>
                    <Image source={require('./imgBemEstar/Manicure.jpg')} style={styles.imagemCurso}/>     
                </View>    
            
                <View style={styles.DesCurso}>
                    <Text style={styles.TextoDoCurso} onPress={() => {Linking.openURL('https://www.sp.senac.br/cursos-livres/curso-de-praticas-meditativas')}}>Práticas Meditativas</Text>
                    <Image source={require('./imgBemEstar/Meditacao.jpg')} style={styles.imagemCurso}/>     
                    
                </View>
           

            
                <View style={styles.DesCurso}>
                    <Text style={styles.TextoDoCurso} onPress={() => {Linking.openURL('https://www.sp.senac.br/cursos-livres/curso-de-shiatsu-basico')}}>Assistente de Recursos Humanos</Text>
                    <Image source={require('./imgBemEstar/Shiatsu.jpg')} style={styles.imagemCurso}/>     
                    
                </View>

                <View style={styles.DesCurso}>
                    <Text style={styles.TextoDoCurso} onPress={() => {Linking.openURL('https://www.sp.senac.br/cursos-livres/curso-de-tecnicas-de-depilacao')}}>Técnicas de Depilação</Text>
                    <Image source={require('./imgBemEstar/Depilacao.jpg')} style={styles.imagemCurso}/>     
                    
                </View>

                <View><Text style={{height:100}}></Text></View>
                </ScrollView>
        </View>
        
    )
}