import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Components/Home";
import Administracao from "./Components/Administracao"
import BemEstar from "./Components/BemEstar"
import Fotografia from "./Components/Fotografia"
import Informatica from "./Components/Informatica"

// Criar o elemento que nós a ajudará a empilhar as telas 
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Administracao" component={Administracao} />
        <Stack.Screen name="BemEstar" component={BemEstar} />
        <Stack.Screen name="Fotografia" component={Fotografia} />
        <Stack.Screen name="Informatica" component={Informatica} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
