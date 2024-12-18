import React, { useState, useEffect } from "react"; 
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from "react-native"; 
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { useNavigation, useRoute } from '@react-navigation/native'; 

export default function Niveles() { 
  const navigation = useNavigation(); 
  const route = useRoute(); 
  const [completedLevels, setCompletedLevels] = useState([false, false, false, false, false, false, false, false, false, false]);

  // Cargar el progreso al iniciar el componente
  useEffect(() => { 
    loadProgress(); 
  }, []);

  // Escuchar cambios en los parámetros de la ruta
  useEffect(() => { 
    const levels = [
      route.params?.level1Completed,
      route.params?.level2Completed,
      route.params?.level3Completed,
      route.params?.level4Completed,
      route.params?.level5Completed,
      route.params?.level6Completed,
      route.params?.level7Completed,
      route.params?.level8Completed,
      route.params?.level9Completed,
      route.params?.level10Completed
    ];
    levels.forEach((completed, index) => {
      if (completed) updateCompletedLevel(index);
    });
  }, [route.params]);

  // Actualizar el progreso de un nivel
  const updateCompletedLevel = async (index) => { 
    try { 
      const newCompletedLevels = [...completedLevels]; 
      newCompletedLevels[index] = true; 
      setCompletedLevels(newCompletedLevels); 
      await AsyncStorage.setItem('completedLevels', JSON.stringify(newCompletedLevels)); 
    } catch (e) { 
      Alert.alert('Error', 'Hubo un error al guardar el progreso.'); 
    } 
  };

  // Cargar el progreso guardado
  const loadProgress = async () => { 
    try { 
      const savedProgress = await AsyncStorage.getItem('completedLevels'); 
      if (savedProgress) { 
        setCompletedLevels(JSON.parse(savedProgress)); 
      } 
    } catch (e) { 
      Alert.alert('Error', 'Hubo un error al cargar el progreso.'); 
    } 
  };

  // Manejar el evento de presionar un nivel
  const handlePress = (nivel) => { 
    if (nivel === 1 || completedLevels[nivel - 2]) { 
      navigation.navigate(`Nivel${nivel}`); 
    } else { 
      alert('Completa el nivel anterior para desbloquear este.'); 
    } 
  };

  // Renderizar la pantalla
  return ( 
    <ScrollView contentContainerStyle={styles.container}> 
      <View style={styles.grid}> 
        {Array.from({ length: 10 }, (_, i) => i + 1).map((nivel) => ( 
          <TouchableOpacity 
            key={nivel} 
            style={[styles.box, completedLevels[nivel - 1] && styles.completed]} 
            onPress={() => handlePress(nivel)} 
          > 
            <Text style={styles.text}>Nivel {nivel}</Text> 
          </TouchableOpacity> 
        ))} 
      </View> 
    </ScrollView> 
  ); 
}

// Estilos del componente
const styles = StyleSheet.create({ 
  container: { 
    flexGrow: 1, 
    padding: 16, 
    justifyContent: "center", 
    alignItems: "center", 
  }, 
  grid: { 
    flexDirection: "row", 
    flexWrap: "wrap", 
    justifyContent: "center", 
  }, 
  box: { 
    width: 150, 
    height: 150, 
    margin: 10, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#EC5B2A", 
    borderRadius: 10, 
  }, 
  completed: { 
    backgroundColor: "green", 
  }, 
  text: { 
    fontSize: 24, 
    color: "white", 
    fontWeight: "bold", 
  }, 
});
