import { Image, Text, Button, TouchableOpacity, View, StyleSheet } from "react-native";
import { FontAwesome, FontAwesome5, Feather, AntDesign } from "@expo/vector-icons";
import {styles} from "./css/style";

export default function Home({navigation}){
    return(
        <View style={styles.PaginaInicial}>
            <Image source={require('./img/senaclogo.png')} style={styles.imgLogo}/>
            <View style={styles.PainelDeNavegacao}>
                {/* Touchable é uma área tocável */}
                <TouchableOpacity onPress={()=>navigation.navigate("Administracao")}
                style={styles.AreaBotao}>
                <FontAwesome5 name="briefcase" size={24} color="#F5BA45"/>
                <Text style={{color:"#F5BA45"}}>Administração</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate("BemEstar")}
                style={styles.AreaBotao}>
                <FontAwesome name="heart" size={24} color="#F5BA45" />
                <Text style={{color:"#F5BA45"}}>Bem Estar</Text>   
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate("Fotografia")}
                style={styles.AreaBotao}>
                <AntDesign name="camera" size={24} color="#F5BA45" />
                <Text style={{color:"#F5BA45"}}>Fotografia</Text>   
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Informatica")}
                        style={styles.AreaBotao}>
                        <FontAwesome name="laptop" size={24} color="#F5BA45" />
                        <Text style={{color: "#F5BA45", fontSize:15 }}>Informática</Text>
                </TouchableOpacity>
            </View>
        
        </View>
    )
}