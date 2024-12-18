import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";

export default function Perfil() {
  const auth = getAuth();
  const user = auth.currentUser;
  const [lastLogin, setLastLogin] = useState(null);
  const [creationTime, setCreationTime] = useState(null);
  const [experienceLevel, setExperienceLevel] = useState("Nivel 1");

  useEffect(() => {
    if (user) {
      setCreationTime(new Date(user.metadata.creationTime).toLocaleDateString());
      setLastLogin(new Date(user.metadata.lastSignInTime).toLocaleDateString());

      // Example of retrieving experience level from a database
      const db = getDatabase();
      const experienceRef = ref(db, `users/${user.uid}/experienceLevel`);
      onValue(experienceRef, (snapshot) => {
        if (snapshot.exists()) {
          setExperienceLevel(snapshot.val());
        }
      });
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{user ? user.displayName : "Usuario"}</Text>
      <Text style={styles.subtitle}>{user ? user.email : "Correo no disponible"}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.info}>Creación de la Cuenta: {creationTime}</Text>
        <Text style={styles.info}>Última Conexión: {lastLogin}</Text>
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
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: "gray",
    marginBottom: 24,
  },
  infoContainer: {
    width: "90%",
    padding: 16,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
  info: {
    fontSize: 16,
    marginBottom: 8,
  },
});
