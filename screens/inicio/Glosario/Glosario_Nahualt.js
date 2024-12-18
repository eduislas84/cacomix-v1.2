import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, TextInput } from "react-native";

const glosario = [
  { "id": "1", "nahuatl": "Ahuizotl", "espanol": "Ahuizote", "pronunciacion": "a.wiː.zo.tɬ", "significado": "Criatura mitológica acuática" },
  { "id": "2", "nahuatl": "Ātl", "espanol": "Agua", "pronunciacion": "aː.tɬ", "significado": "Líquido vital para los seres vivos" },
  { "id": "3", "nahuatl": "Chīchīltik", "espanol": "Perro", "pronunciacion": "t͡ʃiː.t͡ʃiːl.tik", "significado": "Animal doméstico común" },
  { "id": "4", "nahuatl": "Cihuātl", "espanol": "Mujer", "pronunciacion": "siː.waːtɬ", "significado": "Persona de género femenino" },
  { "id": "5", "nahuatl": "Cōatl", "espanol": "Serpiente", "pronunciacion": "koː.a.tɬ", "significado": "Reptil alargado" },
  { "id": "6", "nahuatl": "Cualli", "espanol": "Bueno", "pronunciacion": "kwal-li", "significado": "Algo que es favorable o bueno" },
  { "id": "7", "nahuatl": "Cuetlaxochitl", "espanol": "Flor de nochebuena", "pronunciacion": "kwet͡ɬa.ʃo.t͡ʃiːtɬ", "significado": "Planta ornamental" },
  { "id": "8", "nahuatl": "Cātl", "espanol": "Gato", "pronunciacion": "kaːtɬ", "significado": "Animal doméstico felino" },
  { "id": "9", "nahuatl": "Iztac", "espanol": "Blanco", "pronunciacion": "is.tak", "significado": "Color claro" },
  { "id": "10", "nahuatl": "Mācuīlli", "espanol": "Cinco", "pronunciacion": "maː.kwiː.li", "significado": "Número que representa cinco unidades" },
  { "id": "11", "nahuatl": "Mazātl", "espanol": "Venado", "pronunciacion": "maː.saːtɬ", "significado": "Animal mamífero de la familia de los cérvidos" },
  { "id": "12", "nahuatl": "Metztli", "espanol": "Luna", "pronunciacion": "meːts.tɬi", "significado": "Astro que ilumina la noche" },
  { "id": "13", "nahuatl": "Mictlān", "espanol": "Inframundo", "pronunciacion": "miːk.tɬaːn", "significado": "Lugar de los muertos" },
  { "id": "14", "nahuatl": "Ometeotl", "espanol": "Dios dual", "pronunciacion": "o.meː.teː.o.tɬ", "significado": "Deidad que representa la dualidad" },
  { "id": "15", "nahuatl": "Pilli", "espanol": "Príncipe", "pronunciacion": "piː.li", "significado": "Hijo de un rey" },
  { "id": "16", "nahuatl": "Quiahuitl", "espanol": "Lluvia", "pronunciacion": "kiːaʔ.witɬ", "significado": "Precipitación de agua desde las nubes" },
  { "id": "17", "nahuatl": "Tlāloc", "espanol": "Dios de la lluvia", "pronunciacion": "tɬaː.lok", "significado": "Deidad que controla las lluvias" },
  { "id": "18", "nahuatl": "Tlāltik", "espanol": "Tierra", "pronunciacion": "tɬaːl.tik", "significado": "Suelo o terreno" },
  { "id": "19", "nahuatl": "Tlazolteotl", "espanol": "Diosa de la purificación", "pronunciacion": "tɬa.zoɬ.te.o.tɬ", "significado": "Deidad asociada a la fertilidad" },
  { "id": "20", "nahuatl": "Tōnatiuh", "espanol": "Sol", "pronunciacion": "toː.na.tiʔ.ʍ", "significado": "Estrella central del sistema solar" },
  { "id": "21", "nahuatl": "Xochitl", "espanol": "Flor", "pronunciacion": "ʃoː.t͡ʃiːtɬ", "significado": "Parte de la planta que contiene las semillas" },
  { "id": "22", "nahuatl": "Yollotl", "espanol": "Corazón", "pronunciacion": "joː.lotɬ", "significado": "Órgano vital del ser humano" },
  { "id": "23", "nahuatl": "Zanahoria", "espanol": "Zanahoria", "pronunciacion": "za.na.o.ri.a", "significado": "Planta raíz comestible" },
  { "id": "24", "nahuatl": "Cētl", "espanol": "Cebolla", "pronunciacion": "seː.tɬ", "significado": "Planta comestible bulbosa" },
  { "id": "25", "nahuatl": "Cipactli", "espanol": "Cocodrilo", "pronunciacion": "si.paːk.tɬi", "significado": "Reptil de gran tamaño" },
  { "id": "26", "nahuatl": "Cuetzpalin", "espanol": "Lagarto", "pronunciacion": "kwet͡s.pa.lin", "significado": "Reptil de piel escamosa" },
  { "id": "27", "nahuatl": "Tochtli", "espanol": "Conejo", "pronunciacion": "toːktɬi", "significado": "Mamífero pequeño y herbívoro" },
  { "id": "28", "nahuatl": "Cihuacōatl", "espanol": "Diosa madre", "pronunciacion": "si.wa.ˈkoːa.tɬ", "significado": "Deidad asociada a la maternidad" },
  { "id": "29", "nahuatl": "Tetl", "espanol": "Piedra", "pronunciacion": "te.tɬ", "significado": "Material sólido de la corteza terrestre" },
  { "id": "30", "nahuatl": "Yohualli", "espanol": "Noche", "pronunciacion": "jo.waːl.li", "significado": "Periodo de oscuridad" },
  { "id": "31", "nahuatl": "Cipactli", "espanol": "Cocodrilo", "pronunciacion": "si.paːk.tɬi", "significado": "Reptil de gran tamaño" },
  { "id": "32", "nahuatl": "Tlāzohkamati", "espanol": "Agradecimiento", "pronunciacion": "tɬaː.zoʔ.kamati", "significado": "Sentimiento de gratitud" },
  { "id": "33", "nahuatl": "Cuetlachcoatl", "espanol": "Serpiente emplumada", "pronunciacion": "kwet͡ɬaʧ.koː.a.tɬ", "significado": "Deidad azteca" },
  { "id": "34", "nahuatl": "Tlācatl", "espanol": "Hombre", "pronunciacion": "tɬaː.ka.tɬ", "significado": "Persona de género masculino" },
  { "id": "35", "nahuatl": "Miztli", "espanol": "Gato montés", "pronunciacion": "mis.tli", "significado": "Felino salvaje" },
  { "id": "36", "nahuatl": "Chīchīltik", "espanol": "Perro", "pronunciacion": "t͡ʃiː.t͡ʃiːl.tik", "significado": "Animal doméstico común" },
  { "id": "37", "nahuatl": "Tlazohcamati", "espanol": "Gracias", "pronunciacion": "tɬaː.zoʔ.kamati", "significado": "Expresión de gratitud" },
  { "id": "38", "nahuatl": "Tlāzohkamati", "espanol": "Agradecimiento", "pronunciacion": "tɬaː.zoʔ.kamati", "significado": "Sentimiento de gratitud" },
  { "id": "39", "nahuatl": "Tonatiuh", "espanol": "Sol", "pronunciacion": "toː.na.tiʔ", "significado": "Estrella central del sistema solar" },
  { "id": "40", "nahuatl": "Cōlōtl", "espanol": "Pájaro", "pronunciacion": "koː.loːtɬ", "significado": "Animal volador" },
  { "id": "41", "nahuatl": "Tlāltik", "espanol": "Tierra", "pronunciacion": "tɬaːl.tik", "significado": "Suelo o terreno" },
  { "id": "42", "nahuatl": "Tlīltik", "espanol": "Negro", "pronunciacion": "tɬiːl.tik", "significado": "Color oscuro" },
  { "id": "43", "nahuatl": "Tlālōc", "espanol": "Dios de la tierra", "pronunciacion": "tɬaː.lok", "significado": "Deidad relacionada con la agricultura" },
  { "id": "44", "nahuatl": "Cihuatl", "espanol": "Mujer", "pronunciacion": "si.wa.tɬ", "significado": "Persona de género femenino" },
  { "id": "45", "nahuatl": "Chīchīltik", "espanol": "Perro", "pronunciacion": "t͡ʃiː.t͡ʃiːl.tik", "significado": "Animal doméstico común" },
  { "id": "46", "nahuatl": "Tlāzohkamati", "espanol": "Gracias", "pronunciacion": "tɬaː.zoʔ.kamati", "significado": "Expresión de gratitud" },
  { "id": "47", "nahuatl": "Teōtl", "espanol": "Dios", "pronunciacion": "te.o.tɬ", "significado": "Ser supremo" },
  { "id": "48", "nahuatl": "Tlazōl", "espanol": "Espejo", "pronunciacion": "tɬa.zoːl", "significado": "Superficie reflectante" },
  { "id": "49", "nahuatl": "Cuetlachcoatl", "espanol": "Serpiente emplumada", "pronunciacion": "kwet͡ɬaʧ.koː.a.tɬ", "significado": "Deidad azteca" },
  { "id": "50", "nahuatl": "Xochitl", "espanol": "Flor", "pronunciacion": "ʃoː.t͡ʃiːtɬ", "significado": "Parte de la planta que contiene las semillas" }
];

export default function GlosarioNahualt() {
  const [search, setSearch] = useState('');
  const [filteredWords, setFilteredWords] = useState(glosario);

  useEffect(() => {
    setFilteredWords(
      glosario.filter(word =>
        word.nahuatl.toLowerCase().includes(search.toLowerCase()) ||
        word.espanol.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Glosario Náhuatl - Español</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Buscar palabra"
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredWords}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.word}>{item.nahuatl}</Text>
            <Text style={styles.translation}>Español: {item.espanol}</Text>
            <Text style={styles.pronunciation}>Pronunciación: {item.pronunciacion}</Text>
            <Text style={styles.meaning}>Significado: {item.significado}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  word: {
    fontSize: 18,
    fontWeight: "bold",
  },
  translation: {
    fontSize: 16,
    color: "#555",
  },
  pronunciation: {
    fontSize: 16,
    color: "#555",
  },
  meaning: {
    fontSize: 16,
    color: "#555",
  },
});
