import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Login from './screens/Login';
import Home from './screens/Home';
import Registro from './screens/Registro';
import Ajustes from './screens/Ajustes';
import Juegos from './screens/inicio/Juegos';
import Perfil from './screens/Perfil';
import Juego1 from './screens/inicio/Juegos/Juego1';
import Ajustes1 from './screens/Ajustes/Ajustes1';
import Ajustes2 from './screens/Ajustes/Ajustes2';
import Glosario from './screens/inicio/Glosario';
import Niveles from './screens/inicio/Niveles';
import GlosarioNahualt from './screens/inicio/Glosario/Glosario_Nahualt';
import Nivel1 from './screens/inicio/Niveles/Nivel1';
import Nivel2 from './screens/inicio/Niveles/Nivel2';
import Nivel3 from './screens/inicio/Niveles/Nivel3';
import Nivel4 from './screens/inicio/Niveles/Nivel4';
import Nivel5 from './screens/inicio/Niveles/Nivel5';
import Nivel6 from './screens/inicio/Niveles/Nivel6';
import Nivel7 from './screens/inicio/Niveles/Nivel7';
import Nivel8 from './screens/inicio/Niveles/Nivel8';
import Nivel9 from './screens/inicio/Niveles/Nivel9';
import Nivel10 from './screens/inicio/Niveles/Nivel10';
import Juego2 from './screens/inicio/Juegos/Juego2';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Inicio') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Configuracion') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#EC5B2A',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Inicio" component={Home} />
      <Tab.Screen name="Configuracion" component={Ajustes} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="CacomixLearn">
      <Stack.Screen
        name="CacomixLearn"
        component={Login}
        options={{
          title: "CacomixLearn",
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: '#EC5B2A' },
        }}
      />
      <Stack.Screen
        name="Home"
        component={MyTabs}
        options={{
          title: "CacomixLearn",
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: '#EC5B2A' },
        }}
      />
      <Stack.Screen
        name="Registro"
        component={Registro}
        options={{
          title: "Registro",
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: '#EC5B2A' },
        }}
      />
      <Stack.Screen
        name="Ajustes"
        component={Ajustes}
        options={{
          title: "Ajustes",
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: '#EC5B2A' },
        }}
      />
      <Stack.Screen
        name="Juegos"
        component={Juegos}
        options={{
          title: "Juegos",
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: '#EC5B2A' },
        }}
      />
      <Stack.Screen
        name="Perfil"
        component={Perfil}
        options={{
          title: "Perfil",
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: '#EC5B2A' },
        }}
      />
      <Stack.Screen
        name="Juego1"
        component={Juego1}
        options={{
          title: "Juego1",
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: '#EC5B2A' },
        }}
      />
      <Stack.Screen
        name="Ajustes1"
        component={Ajustes1}
        options={{
          title: "Ajustes1",
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: '#EC5B2A' },
        }}
      />
      <Stack.Screen
        name="Ajustes2"
        component={Ajustes2}
        options={{
          title: "Ajustes2",
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: '#EC5B2A' },
        }}
      />
      <Stack.Screen
        name="Glosario"
        component={Glosario}
        options={{
          title: "Glosario",
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: '#EC5B2A' },
        }}
      />
      <Stack.Screen
        name="Niveles"
        component={Niveles}
        options={{
          title: "Niveles",
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: '#EC5B2A' },
        }}
      />
      <Stack.Screen
        name="Glosario_Nahualt"
        component={GlosarioNahualt}
        options={{
          title: "Glosario Náhuatl",
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: '#EC5B2A' },
        }}
      />
      <Stack.Screen
        name="Nivel1"
        component={Nivel1}
        options={{
          title: "Nivel 1",
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: '#EC5B2A' },
        }}
      />
      <Stack.Screen
        name="Nivel2"
        component={Nivel2}
        options={{
          title: "Nivel 2",
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: '#EC5B2A' },
        }}
      />
      <Stack.Screen
        name="Nivel3"
        component={Nivel3}
        options={{
          title: "Nivel 3",
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: '#EC5B2A' },
        }}
      />
      <Stack.Screen
        name="Nivel4"
        component={Nivel4}
        options={{
          title: "Nivel 4",
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: '#EC5B2A' },
        }}
      />
      <Stack.Screen
        name="Nivel5"
        component={Nivel5}
        options={{
          title: "Nivel 5",
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: '#EC5B2A' },
        }}
      />
      <Stack.Screen
        name="Nivel6"
        component={Nivel6}
        options={{
          title: "Nivel 6",
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: '#EC5B2A' },
        }}
      />
            <Stack.Screen
        name="Nivel7"
        component={Nivel7}
        options={{
          title: "Nivel 7",
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: '#EC5B2A' },
        }}
      />
      <Stack.Screen
        name="Nivel8"
        component={Nivel8}
        options={{
          title: "Nivel 8",
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: '#EC5B2A' },
        }}
      />
      <Stack.Screen
        name="Nivel9"
        component={Nivel9}
        options={{
          title: "Nivel 9",
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: '#EC5B2A' },
        }}
      />
      <Stack.Screen
        name="Nivel10"
        component={Nivel10}
        options={{
          title: "Nivel 10",
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: '#EC5B2A' },
        }}
      />
      <Stack.Screen
        name="Juego2"
        component={Juego2}
        options={{
          title: "Sopa de Letras 2",
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: '#EC5B2A' },
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5c69f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
