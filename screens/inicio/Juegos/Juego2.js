import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

const crossword = [
  { word: "TLALLI", hint: "Tierra" },
  { word: "ATL", hint: "Agua" },
  { word: "TONATIUH", hint: "Sol" },
  { word: "METZTLI", hint: "Luna" },
  { word: "XIUTL", hint: "Fuego" },
  { word: "EHECATL", hint: "Viento" },
  { word: "CHICHI", hint: "Perro" },
  { word: "TOTOL", hint: "Gato" },
  { word: "TEPETL", hint: "Montaña" },
  { word: "CIHUATL", hint: "Mujer" },
];

const grid = [
  ["T", "L", "A", "L", "L", "I", "A", "T", "L", "N"],
  ["E", "G", "U", "A", "B", "E", "E", "H", "E", "C"],
  ["P", "T", "O", "N", "A", "T", "I", "U", "H", "I"],
  ["E", "O", "N", "D", "S", "F", "G", "J", "A", "I"],
  ["T", "T", "L", "A", "C", "H", "I", "C", "H", "I"],
  ["L", "O", "T", "O", "G", "H", "K", "L", "A", "I"],
  ["L", "L", "T", "Z", "C", "U", "I", "N", "T", "L"],
  ["S", "M", "E", "T", "Z", "T", "L", "I", "A", "T"],
  ["U", "C", "I", "H", "U", "A", "T", "L", "I", "P"],
  ["V", "W", "X", "I", "U", "T", "L", "C", "D", "E"],
  ["A", "G", "U", "E", "H", "E", "C", "A", "T", "L"],
  ["B", "T", "O", "N", "A", "T", "I", "U", "H", "I"],
];

export default function Juego2() {
  const navigation = useNavigation();
  const [selectedCells, setSelectedCells] = useState([]);
  const [foundWords, setFoundWords] = useState([]);
  const [hintsUsed, setHintsUsed] = useState(0);

  const handleCellPress = (row, col) => {
    setSelectedCells([...selectedCells, { row, col }]);
  };

  const checkWord = () => {
    const selectedWord = selectedCells.map(cell => grid[cell.row][cell.col]).join("");

    const matchingWord = crossword.find(word => word.word === selectedWord);

    if (matchingWord) {
      setFoundWords([...foundWords, matchingWord.word]);
      Alert.alert("¡Correcto!", `Encontraste la palabra: ${matchingWord.word}`);

      // Verificar si todas las palabras han sido encontradas
      if (foundWords.length + 1 === crossword.length) {
        Alert.alert("¡Felicidades!", "Has encontrado todas las palabras.");
      }
    } else {
      Alert.alert("Error", "La selección no corresponde a ninguna palabra.");
    }

    setSelectedCells([]);
  };

  const showHint = () => {
    const remainingWords = crossword.filter(word => !foundWords.includes(word.word));
    if (remainingWords.length > 0) {
      const randomWord = remainingWords[Math.floor(Math.random() * remainingWords.length)];
      Alert.alert("Pista", `Una palabra es: ${randomWord.hint}`);
      setHintsUsed(hintsUsed + 1);
    } else {
      Alert.alert("Sin pistas", "¡Ya has encontrado todas las palabras!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sopa de Letras</Text>
      <View>
        {grid.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((letter, colIndex) => (
              <TouchableOpacity
                key={colIndex}
                onPress={() => handleCellPress(rowIndex, colIndex)}
                style={[
                  styles.cell,
                  selectedCells.some(cell => cell.row === rowIndex && cell.col === colIndex) && styles.selectedCell,
                  foundWords.includes(letter) && styles.foundCell,
                ]}
              >
                <Text style={styles.cellText}>{letter}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={checkWord}>
          <Text style={styles.buttonText}>Comprobar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={showHint}>
          <Text style={styles.buttonText}>Pista</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.hintContainer}>
        <View style={styles.half}>
          {crossword.slice(0, 5).map((word, index) => (
            <Text key={index} style={styles.hint}>
              {word.hint}: {foundWords.includes(word.word) ? word.word : "???"}
            </Text>
          ))}
        </View>
        <View style={styles.half}>
          {crossword.slice(5).map((word, index) => (
            <Text key={index} style={styles.hint}>
              {word.hint}: {foundWords.includes(word.word) ? word.word : "???"}
            </Text>
          ))}
        </View>
      </View>
      <Text style={styles.hintsUsed}>Pistas usadas: {hintsUsed}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 32,
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  cellText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  selectedCell: {
    backgroundColor: "#cceeff",
  },
  foundCell: {
    backgroundColor: "#ccffcc",
  },
  buttonRow: {
    flexDirection: "row",
    marginVertical: 16,
  },
  button: {
    backgroundColor: "#EC5B2A",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginHorizontal: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  hintContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  half: {
    width: "50%",
  },
  hint: {
    fontSize: 16,
    marginVertical: 4,
  },
  hintsUsed: {
    fontSize: 16,
    marginVertical: 8,
  },
});
