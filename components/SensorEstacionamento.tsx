import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import { useState, useEffect } from "react";

export default function SensorEstacionamento() {
  const [distancia, setDistancia] = useState(100);
  useEffect(() => {
    console.log("Sistema de Sensores Iniciado");
    console.log("Distância atual:", distancia);

    if (distancia < 20) {
      window.alert("⚠️ PERIGO: Muito Próximo!");
    }

    const intervalo = setInterval(() => {
      console.log("📡 Sensores monitorando...");
    }, 2000);

    return () => {
      clearInterval(intervalo);
      console.log("📴 Sistema de Sensores Desligado");
    };
  }, [distancia]);

  return (
    <View style={styles.container}>
      <Text>Sensor de Estacionamento</Text>

      <Text>Distância: {distancia} cm</Text>

      <Pressable onPress={() => setDistancia(distancia + 5)}>
        <Text>Aumentar distância</Text>
      </Pressable>

      <Pressable onPress={() => setDistancia(distancia - 5)}>
        <Text>Diminuir distância</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
