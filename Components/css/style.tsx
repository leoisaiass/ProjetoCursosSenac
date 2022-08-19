import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({   
    // Página inicial
    PaginaInicial: {
        flex:1, 
        justifyContent:"center", 
        alignItems:"center",
    },
    imgLogo: {
        width: "80%",
        height: "30%",
        marginBottom: 100
    },
    PainelDeNavegacao: {
        backgroundColor: "#4B89DA",
        padding: 10,
        position: "absolute",
        bottom: 0,
        width: "100%",
        flexDirection: "row",
        justifyContent: "center"
    },
    AreaBotao: {
        margin: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    AreaTexto: {
        flex:1, 
        justifyContent:"center", 
        alignItems:"center",
        backgroundColor: "#FFAE42"
    },
    // Área do curso
    TextoCurso: {
        color: "#4B89DA",
        fontSize: 35,
        padding: 10,
        fontWeight: "bold",
        backgroundColor: "#FCD277",
    },
    Cursos:{
        // backgroundColor: "#FCD277",
    },
    DesCurso: {
        marginHorizontal: 50,
        marginVertical: 20,
        
        alignItems: "center",
        justifyContent: "center",
    },
    imagemCurso: {
        width: 250,
        height: 150,
    },
    TextoDoCurso: {
        fontSize: 25,
        textAlign: "left",
        margin: 10,
        color: "#4B89DA",
    }
});