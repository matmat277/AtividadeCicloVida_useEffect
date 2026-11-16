import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import { useState, useEffect } from "react";

export default function SensorEstacionamento() {
  const [distancia, setDistancia] = useState(100);
  useEffect(() => {
    console.log("Sistema de Sensores Iniciado");
    console.log("Distância atual:", distancia);

    if (distancia < 20) {
      Alert.alert("⚠️ PERIGO: Muito Próximo!");
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
    <Text style={styles.title}>Sensor de Estacionamento</Text>

    <Text style={styles.distance}>
      {distancia} cm
    </Text>

   <Text
  style={[
    styles.status,
    distancia < 20 ? styles.danger : styles.safe
  ]}
>
  {distancia < 20 ? '⚠ Muito próximo!' : '✓ Distância segura'}
</Text>

    <View style={styles.buttons}>
      <Pressable
        style={styles.button}
        onPress={() => setDistancia(distancia + 5)}
      >
        <Text style={styles.buttonText}>Aumentar</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => setDistancia(distancia - 5)}
      >
        <Text style={styles.buttonText}>Diminuir</Text>
      </Pressable>
    </View>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    alignItems: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2563EB',
    marginTop: 30,
    marginBottom: 40,
  },

  distance: {
    fontSize: 56,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 10,
  },

  status: {
    fontSize: 18,
    color: '#16A34A',
    marginBottom: 40,
  },

  buttons: {
    flexDirection: 'row',
    gap: 12,
  },

  button: {
    backgroundColor: '#2563EB',
    padding: 15,
    borderRadius: 8,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  safe: {
  color: '#16A34A',
},

danger: {
  color: '#DC2626',
},
});
