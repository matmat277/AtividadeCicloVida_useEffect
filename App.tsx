import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useEffect, useState } from "react";
import SensorEstacionamento from "./components/SensorEstacionamento";

export default function App() {
  const [sensorVisivel, setSensorVisivel] = useState(true);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setSensorVisivel(!sensorVisivel)}>
        <Text>{sensorVisivel ? "Desligar Sensor" : "Ligar Sensor"}</Text>
      </Pressable>
      <StatusBar style="auto" />
      {sensorVisivel && <SensorEstacionamento />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
