import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 40,
    },
    pokemonImage: {
        width: 130,
        height: 130,
        marginTop: -50
    },
    pokeCard: {
        marginTop: 30,
        width: 334,
        height: 115,
        backgroundColor: '#8BBE8A',
        borderRadius: 10,
        padding: 20,
        fontSize: 12,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    pokeId: {        
        fontWeight: 'bold',
        color: 'rgba(23, 23, 27, 0.6)'
    },
    pokeName: {
        fontSize: 26,
        color: 'white',
        fontWeight: 700
    }
});

{/* <Image
                        style={styles.pokemonImage}
                        source={require('../assets/grass.svg')}
                    /> */}

export default function HomeScreen({ name }) {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.pokeCard}>
                <View>
                    <Text style={styles.pokeId}>#001</Text>
                    <Text style={styles.pokeName}>{name}</Text>
                </View>
                <View>
                    <Image
                        style={styles.pokemonImage}
                        source={{
                            uri: 'https://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png',
                        }}
                    />
                </View>
            </View>
            <View style={styles.pokeCard}>
                <View>
                    <Text style={styles.pokeId}>#001</Text>
                    <Text style={styles.pokeName}>{name}</Text>
                </View>
                <View>
                    <Image
                        style={styles.pokemonImage}
                        source={{
                            uri: 'https://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png',
                        }}
                    />
                </View>
            </View>
            <View style={styles.pokeCard}>
                <View>
                    <Text style={styles.pokeId}>#001</Text>
                    <Text style={styles.pokeName}>{name}</Text>
                </View>
                <View>
                    <Image
                        style={styles.pokemonImage}
                        source={{
                            uri: 'https://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png',
                        }}
                    />
                </View>
            </View>
            <View style={styles.pokeCard}>
                <View>
                    <Text style={styles.pokeId}>#001</Text>
                    <Text style={styles.pokeName}>{name}</Text>
                </View>
                <View>
                    <Image
                        style={styles.pokemonImage}
                        source={{
                            uri: 'https://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png',
                        }}
                    />
                </View>
            </View>
            <View style={styles.pokeCard}>
                <View>
                    <Text style={styles.pokeId}>#001</Text>
                    <Text style={styles.pokeName}>{name}</Text>
                </View>
                <View>
                    <Image
                        style={styles.pokemonImage}
                        source={{
                            uri: 'https://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png',
                        }}
                    />
                </View>
            </View>
            <View style={styles.pokeCard}>
                <View>
                    <Text style={styles.pokeId}>#001</Text>
                    <Text style={styles.pokeName}>{name}</Text>
                </View>
                <View>
                    <Image
                        style={styles.pokemonImage}
                        source={{
                            uri: 'https://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png',
                        }}
                    />
                </View>
            </View>
            <View style={styles.pokeCard}>
                <View>
                    <Text style={styles.pokeId}>#001</Text>
                    <Text style={styles.pokeName}>{name}</Text>
                </View>
                <View>
                    <Image
                        style={styles.pokemonImage}
                        source={{
                            uri: 'https://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png',
                        }}
                    />
                </View>
            </View>
            <View style={styles.pokeCard}>
                <View>
                    <Text style={styles.pokeId}>#001</Text>
                    <Text style={styles.pokeName}>{name}</Text>
                </View>
                <View>
                    <Image
                        style={styles.pokemonImage}
                        source={{
                            uri: 'https://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png',
                        }}
                    />
                </View>
            </View>
            <View style={styles.pokeCard}>
                <View>
                    <Text style={styles.pokeId}>#001</Text>
                    <Text style={styles.pokeName}>{name}</Text>
                </View>
                <View>
                    <Image
                        style={styles.pokemonImage}
                        source={{
                            uri: 'https://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png',
                        }}
                    />
                </View>
            </View>
        </ScrollView>
    )
}