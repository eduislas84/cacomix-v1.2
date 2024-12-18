import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert, TouchableOpacity, ScrollView } from 'react-native';

const openQuestions = [
  { id: 1, question: '¿Cómo se dice "Dios" en náhuatl?', answer: 'Teotl' },
  { id: 2, question: '¿Cómo se dice "Rey" en náhuatl?', answer: 'Tlatoani' },
  { id: 3, question: '¿Cómo se dice "Casa" en náhuatl?', answer: 'Calli' },
  { id: 4, question: '¿Cómo se dice "Serpiente" en náhuatl?', answer: 'Cōatl' },
  { id: 5, question: '¿Cómo se dice "Venado" en náhuatl?', answer: 'Mazātl' },
];

const multipleChoiceQuestions = [
  {
    question: '¿Cómo se dice "Blanco" en náhuatl?',
    options: ['Iztac', 'Tlāloc', 'Cualli', 'Cōatl'],
    correct: 'Iztac',
  },
  {
    question: '¿Cómo se dice "Negro" en náhuatl?',
    options: ['Yohualli', 'Iztac', 'Tlatoani', 'Mazātl'],
    correct: 'Yohualli',
  },
  {
    question: '¿Cómo se dice "Fuego" en náhuatl?',
    options: ['Atl', 'Tlāloc', 'Tletl', 'Calli'],
    correct: 'Tletl',
  },
  {
    question: '¿Cómo se dice "Tierra" en náhuatl?',
    options: ['Atl', 'Tlāltikpak', 'Mācuīlli', 'Mazātl'],
    correct: 'Tlāltikpak',
  },
  {
    question: '¿Cómo se dice "Montaña" en náhuatl?',
    options: ['Tletl', 'Tlāltikpak', 'Teocalli', 'Tepētl'],
    correct: 'Tepētl',
  },
];

export default function Nivel2({ navigation }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);

  const handleNextQuestion = (userAnswer) => {
    const question = currentQuestionIndex < 5 ? openQuestions[currentQuestionIndex] : multipleChoiceQuestions[currentQuestionIndex - 5];
    const correctAnswer = currentQuestionIndex < 5 ? question.answer.toLowerCase() : question.correct.toLowerCase();

    if (userAnswer.trim().toLowerCase() === correctAnswer) {
      setScore(score + 1);
      if (currentQuestionIndex < openQuestions.length + multipleChoiceQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setAnswer('');
      } else {
        Alert.alert('¡Felicidades!', `Has completado el Nivel 2 con una puntuación de ${score + 1}/${openQuestions.length + multipleChoiceQuestions.length}.`, [
          { text: 'OK', onPress: () => navigation.navigate('Niveles', { level2Completed: true }) },
        ]);
      }
    } else {
      Alert.alert('Respuesta incorrecta', `La respuesta correcta es "${question.answer || question.correct}". Inténtalo de nuevo.`);
    }
  };

  const renderQuestion = () => {
    if (currentQuestionIndex < 5) {
      const question = openQuestions[currentQuestionIndex];
      return (
        <View style={styles.questionContainer}>
          <Text style={styles.question}>{question.question}</Text>
          <TextInput
            style={styles.input}
            value={answer}
            onChangeText={setAnswer}
          />
          <Button title="Siguiente" onPress={() => handleNextQuestion(answer)} />
        </View>
      );
    } else {
      const question = multipleChoiceQuestions[currentQuestionIndex - 5];
      return (
        <View style={styles.questionContainer}>
          <Text style={styles.question}>{question.question}</Text>
          {question.options.map((option, i) => (
            <TouchableOpacity key={i} style={styles.optionButton} onPress={() => handleNextQuestion(option)}>
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Nivel 2</Text>
      {renderQuestion()}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  questionContainer: {
    width: '100%',
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '100%',
  },
  optionButton: {
    backgroundColor: '#EC5B2A',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  optionText: {
    color: 'white',
    fontSize: 18,
  },
});
