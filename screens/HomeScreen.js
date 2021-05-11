import React, { useEffect, useState } from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import PokeCard from '../components/PokeCard';
import axios from 'axios';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: "100%",
  },
});

export default function HomeScreen({ name }) {

  const [data, setData] = useState([]);

  useEffect(() => { 
    const getData = async () => {
      const result = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`)
      setData(result.data.results)
    }
    getData();
  }, [])

  return (
    <ScrollView style={styles.container}>
      {
        data.map((el, index) => (
            <PokeCard key={index} name={el.name} id={index + 1} />
        ))
      }
      
    </ScrollView>
  );
}
