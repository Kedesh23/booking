import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.container}>
      <Pressable style = {styles.pressable}>
        <Ionicons name="bed-outline" size={26} color="white" />
        <Text style = {styles.text}>Says</Text>
      </Pressable>

      <Pressable style = {styles.pressable_text}>
      <Ionicons name="airplane-outline" size={26} color="white" />
        <Text style = {styles.text}>Flights</Text>
      </Pressable>

      <Pressable style = {styles.pressable_text}>
      <Ionicons name="car-outline" size={26} color="white" />
        <Text style = {styles.text}>Car Rental</Text>
      </Pressable>

      <Pressable style = {styles.pressable_text}>
      <FontAwesome5 name="uber" size={26} color="white" />
        <Text style = {styles.text}>Taxi</Text>
      </Pressable>
    </View >
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#003580",
    height: 65,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  text: {
    marginLeft: 8,
    fontWeight: "bold",
    color: "white",
    fontSize: 15,
  },

  pressable: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 25,
    padding: 10,
  },

  pressable_text: {
    flexDirection: "row",
    alignItems: "center",
  }
})