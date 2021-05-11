import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default function PokeCard({ name, id }) {

  const styles = StyleSheet.create({
    pokeCard: {
      backgroundColor: id < 3 ? "#8BBE8A" : '#FFA756',
      borderRadius: 10,
      marginTop: 20,
      width: "100%",
      height: 115,
    },
    pokeId: {
      fontWeight: "bold",
      color: "rgba(23, 23, 27, 0.6)",
    },
    pokeName: {
      fontSize: 26,
      color: "white",
      fontWeight: 700,
    },
    bgBalls: {
      width: 74,
      height: 32,
      marginLeft: 70,
      marginTop: 5,
    },
    backgrounds: {
      position: "absolute",
      width: "100%",
      height: "100%",
    },
    pokeCardContent: {
      padding: 20,
      fontSize: 12,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    bgPokeBall: {
      width: 145,
      height: 125,
      position: "absolute",
      marginLeft: 180,
    },
    pokemon: {
      width: 130,
      height: 130,
      marginTop: -50,
    },
  });

  return (
    <View style={styles.pokeCard}>
      <View style={styles.backgrounds}>
        <Image
          style={styles.bgBalls}
          source={require("../assets/bg-balls.svg")}
        />
        <Image
          style={styles.bgPokeBall}
          source={require("../assets/pokeball-bg.svg")}
        />
      </View>
      <View style={styles.pokeCardContent}>
        <View>
          <Text style={styles.pokeId}>#{id.toString().padStart(3, "0")}</Text>
          <Text style={styles.pokeName}>{name}</Text>
        </View>
        <View>
        <Image
          style={styles.pokemon}
          source={{
            uri:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
          }}
        />
        </View>
      </View>
    </View>
  );
}
