import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, TouchableOpacity, ActivityIndicator, Image } from "react-native";
import { getAuth } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const auth = getAuth();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#EC5B2A" />;
  }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/icon.png')} style={styles.icon} />
      <Text style={styles.title}>Hola {user ? user.displayName : "Usuario"}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Glosario")}>
          <Text style={styles.buttonText}>Glosario</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Niveles")}>
          <Text style={styles.buttonText}>Niveles</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Juegos")}>
          <Text style={styles.buttonText}>Juegos</Text>
        </TouchableOpacity>
      </View>
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
  icon: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 32,
  },
  buttonContainer: {
    width: "80%",
    gap: 16,
  },
  button: {
    backgroundColor: "#EC5B2A",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
