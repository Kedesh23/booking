import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from './screens/Home';
import SavedScreen from './screens/Saved';
import BookingScreen from './screens/Booking';
import ProfileScreen from './screens/Profile';

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function bottomTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home" component={HomeScreen} options={{
                    tabBarLabel: "Home",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => focused ? (
                        <Entypo name="home" size={24} color="black" />) : (<AntDesign name="home" size={24} color="#003580" />),
                }}
            />

            <Tab.Screen
                name="Saved" component={SavedScreen} options={{
                    tabBarLabel: "Saved",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => focused ? (
                        <AntDesign name="heart" size={24} color="black" />) : (<AntDesign name="hearto" size={24} color="#003580" />),
                }}
            />

            <Tab.Screen
                name="Bookings" component={BookingScreen} options={{
                    tabBarLabel: "Bookings",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => focused ? (
                        <Ionicons name="notifications" size={24} color="black" />) : (<Ionicons name="notifications-outline" size={24} color="#003580" />),
                }}
            />

            <Tab.Screen
                name="Profile" component={ProfileScreen} options={{
                    tabBarLabel: "Profile",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => focused ? (
                        <Ionicons name="person" size={24} color="black" />) : (<Ionicons name="person-outline" size={24} color="#003580" />),
                }}
            />
        </Tab.Navigator>
    )
}

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main" component={bottomTabs} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator;

const styles = StyleSheet.create({})