import { ScrollView, Image, Text, Button, TouchableOpacity, View, StyleSheet, Linking } from "react-native";
import { FontAwesome, FontAwesome5, Feather, AntDesign } from "@expo/vector-icons";
import {styles} from "./css/style";

export default function Fotografia({navigation}){
    return(
        <View style={styles.Cursos}>
           <Text style={styles.TextoCurso}>
               Cursos disponíveis: 
           </Text>

           <ScrollView horizontal={false}>
                <View style={styles.DesCurso}>
                    <Text style={styles.TextoDoCurso} onPress={() => {Linking.openURL('https://www.sp.senac.br/cursos-livres/curso-de-fotografia-para-gastronomia')}}>Fotografia para Gastronomia </Text>
                    <Image source={require('./imgFotografia/FotografiaParaGastronomia.png')} style={styles.imagemCurso}/>     
                </View>    
            
                <View style={styles.DesCurso}>
                    <Text style={styles.TextoDoCurso} onPress={() => {Linking.openURL('https://www.sp.senac.br/cursos-livres/curso-de-iluminacao-fotografica-com-flash')}}>Iluminação Fotográfica com Flash</Text>
                    <Image source={require('./imgFotografia/Iluminacao.jpg')} style={styles.imagemCurso}/>     
                    
                </View>
           

            
                <View style={styles.DesCurso}>
                    <Text style={styles.TextoDoCurso} onPress={() => {Linking.openURL('https://www.sp.senac.br/cursos-livres/curso-de-manipulacao-de-imagens-para-fotografos')}}>Manipulação de Imagens para Fotógrafos</Text>
                    <Image source={require("./imgFotografia/Manipulacao.jpg")} style={styles.imagemCurso}/>     
                </View>

                <View><Text style={{height:100}}></Text></View>
                </ScrollView>
        </View>
        
    )
}