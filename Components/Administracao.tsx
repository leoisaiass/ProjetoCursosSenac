import { ScrollView, Image, Text, Button, TouchableOpacity, View, StyleSheet, Linking } from "react-native";
import { FontAwesome, FontAwesome5, Feather, AntDesign } from "@expo/vector-icons";
import {styles} from "./css/style";

export default function Administracao({navigation}){
    return(
        <View style={styles.Cursos}>
           <Text style={styles.TextoCurso}>
               Cursos disponíveis: 
           </Text>

           <ScrollView horizontal={false}>
                <View style={styles.DesCurso}>
                    <Text style={styles.TextoDoCurso} onPress={() => {Linking.openURL('https://www.sp.senac.br/cursos-livres/curso-de-administracao-e-planejamento-de-negocios')}}>Administração e Planejamento de Negócio</Text>
                    <Image source={require('./imgAdmin/PlanejamentoDeNegocios.jpg')} style={styles.imagemCurso}/>     
                </View>    
            
                <View style={styles.DesCurso}>
                    <Text style={styles.TextoDoCurso} onPress={() => {Linking.openURL('https://www.sp.senac.br/cursos-livres/curso-de-analista-de-marketing-em-midias-sociais')}}>Analista De Marketing</Text>
                    <Image source={require('./imgAdmin/AnalistaDeMarketing.webp')} style={styles.imagemCurso}/>     
                    
                </View>
           

            
                <View style={styles.DesCurso}>
                    <Text style={styles.TextoDoCurso} onPress={() => {Linking.openURL('https://www.sp.senac.br/cursos-livres/curso-de-assistente-de-recursos-humanos')}}>Assistente de Recursos Humanos</Text>
                    <Image source={require('./imgAdmin/AssistenteDeRecursosHumanos.jpeg')} style={styles.imagemCurso}/>     
                    
                </View>

                <View style={styles.DesCurso}>
                    <Text style={styles.TextoDoCurso} onPress={() => {Linking.openURL('https://www.sp.senac.br/cursos-livres/curso-de-assistente-administrativo')}}>Assistente Administrativo</Text>
                    <Image source={require('./imgAdmin/AssistenteAdministrativo.webp')} style={styles.imagemCurso}/>     
                    
                </View>

                <View><Text style={{height:100}}></Text></View>
                </ScrollView>
        </View>
        
    )
}

{/* <View style={styles.recomendacoesDoDia1}>
                    <View style={styles.descricao}>
                        <Image source={require('./img/Ariana.jpg')} style={styles.albunsDoDia}/>
                        <Text style={styles.nomeAlbum}>Thank U, Next</Text>
                        {/* <Text style={styles.nomeArtista}>Ariana Grande</Text> */}
                    // </View> */}

                    {/* Cursos Disponíveis: {'\n'}{'\n'}{'\n'}
           - Administracao e Planejamento de Negócios;  {'\n'}
               {'\n'}
               - Analista de Marketing e Mídias Sociais;  {'\n'}
               {'\n'}
               - Assistente Administrativo;  {'\n'}
               {'\n'}
               - Assistente Pessoal;  {'\n'}
               {'\n'}
               - Assistente de Recursos Humanos;  {'\n'}
               {'\n'}
               - Assistente Financeiro;  {'\n'} */}