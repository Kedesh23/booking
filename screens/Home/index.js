import { Pressable, ScrollView, StyleSheet, Text, View , Button} from 'react-native'
import React, { useLayoutEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../../components/Header';
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import DatePicker from 'react-native-date-ranges';
import { BottomModal } from "react-native-modals";
import { ModalFooter } from "react-native-modals";
import { ModalButton } from "react-native-modals";
import { ModalTitle } from "react-native-modals";
import { SlideAnimation } from "react-native-modals";
import { ModalContent } from "react-native-modals";

const HomeScreen = () => {
  const navigation = useNavigation();

  const [selectedDates, setSelectedDates] = useState();
  console.log(setSelectedDates);

  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [modalVisible , setModalVisible] = useState(false);


  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Booking.com",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
      headerRight: () => (
        <Ionicons name="notifications-outline" size={24} color="white" style={{ marginRight: 12 }} />
      )
    })
  }, [])
  const customButton = (onConfirm) => {
    return (
      <Button 
        onPress={onConfirm}
        style = {{
          container: {
            width: "80%",
            marginHorizontal: "3%",
          },
          text: {
            fontSize: 20,
          },
        }}
        primary
        title = "Submit"
      />
    )
  }



  return (
    <>
      <View>
        <Header />
        <ScrollView>
          {/* Destination */}
          <View style={styles.container_pressable}>
            <Pressable style={styles.pressable}>
              <Feather name="search" size={25} color="black" />
              <TextInput placeholdertextColor = "black" placeholder='Enter your destination' style={styles.input} />
            </Pressable>

            {/* Selected Dates */}
            <Pressable style={styles.pressable}>
              <Feather name="calendar" size={25} color="black" />
              <DatePicker
                style={{ width: 250,
                  height: 30,
                  borderRadius: 0,
                  borderWidth: 0,
                  borderColor: "transparent"
                  }}
                customStyles={{
                  placeholderText: {
                    fontSize: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                  },
                  headerStyle: {
                    backgroundColor: "#003580",
                  },
                  contentText: {
                    fontSize: 13,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                    marginHorizontal: "auto"
                  }
                }}
                selectedBgColor="#0047AB"
                customButton = {(onConfirm) => customButton(onConfirm)}
                onConfirm = {(startDate, endDate) => setSelectedDates(startDate, endDate)}
                allowFontScalling = {false}
                placeholder={"Choose your date"}
                mode={'range'}
              />
            </Pressable>

            {/* Rooms and Guests */}
            <Pressable style={styles.pressable} onPress = {() => setModalVisible(!modalVisible)}>
              <Ionicons name="person-outline" size={25} color="black"/>
              <TextInput placeholderTextColor = "red" placeholder= {`${rooms} - rooms - ${adults} adults - ${children} children`}  style={styles.input}/>
            </Pressable>

            {/* Search Button */}
            <Pressable style={styles.pressable_button}>
              <Text style = {{color: "white", fontWeight: "bold"}}>Search</Text>
            </Pressable>
          </View>

          <Text style={{marginHorizontal: 20, fontSize: 17, fontWeight: "500"}}>Travel More spend less</Text>
          <ScrollView>
            <Pressable style = {{width: 130, height: 130, backgroundColor: "blue", padding: 20, borderRadius: 20,}}>
              <Text style = {{fontWeight: "bold", color: "white", fontSize: 15}}>Genius</Text>
              <Text style = {{color: "white"}}>You at Genius level 1 in our loyalty program</Text>
            </Pressable>

            <Pressable style = {{width: 130, height: 130, backgroundColor: "white"}}>
              <Text style = {{fontWeight: "bold", color: "black", fontSize: 15}}>15% Discounts</Text>
              <Text style = {{color: "black"}}>Complete 5 days to unlock Genius level 2</Text>
            </Pressable>
          </ScrollView>
        </ScrollView>
      </View>

      <BottomModal swippeThreshold = {200}
        onBackdropPress = {() => setModalVisible(!modalVisible)}
        swipeDirection = {['up', 'down']}
        footer = 
        {
          <ModalFooter>
              <ModalButton text="Apply" style = {{
                marginBottom: 20, 
                color: "white",
                backgroundColor: "#003580",
                }}
                onPress = {() => setModalVisible(!ModalVisible)}
              />
          </ModalFooter>
        }
        modalTitle = {<ModalTitle title = "Select rooms and guests"/>}
        modalAnimation = { 
          new SlideAnimation({
            slideFrom: 'bottom', 
          })
      }
      onHardwareBackPress = {() => setModalVisible(!modalVisible)}
      visible = {modalVisible}
      onTouchOutside = {() => setModalVisible(!modalVisible)}
      >
        <ModalContent style = {{width: "80%", height: 310}}>
          <View style = {styles.view_modal_content}>
            <Text style = {{fontWeight: "bold", fontSize: 15,}}>Rooms</Text>
            <Pressable  style = {{flexDirection: "row", gap: 10, alignItems: "center"}}>

              <Pressable
                onPress = {() => setRooms(Math.max(1, rooms - 1))}
                style = {styles.modal_content_pressable}>
                <Text style = {styles.modal_content_text}>-</Text>
              </Pressable>
              <Pressable>
                <Text>{rooms}</Text>
              </Pressable>
              <Pressable
                onPress = {() => setRooms((c) => c + 1)}
                style = {styles.modal_content_pressable}>
                <Text style = {styles.modal_content_text}>+</Text>
              </Pressable>

            </Pressable>
          </View>

          <View style = {styles.view_modal_content}>
            <Text style = {{fontWeight: "bold", fontSize: 15,}}>Adults</Text>
            <Pressable  style = {{flexDirection: "row", gap: 10, alignItems: "center"}}>

              <Pressable
                onPress = {() => setAdults(Math.max(1, adults - 1))}
                style = {styles.modal_content_pressable}>
                <Text style = {styles.modal_content_text}>-</Text>
              </Pressable>
              <Pressable>
                <Text>{adults}</Text>
              </Pressable>
              <Pressable
                onPress = {() => setAdults((c) => c + 1)}
                style = {styles.modal_content_pressable}>
                <Text style = {styles.modal_content_text}>+</Text>
              </Pressable>

            </Pressable>
          </View>

          <View style = {styles.view_modal_content}>
            <Text style = {{fontWeight: "bold", fontSize: 15,}}>Children</Text>
            <Pressable  style = {{flexDirection: "row", gap: 10, alignItems: "center"}}>

              <Pressable 
                onPress = {() => setChildren(Math.max(1, children -1))}
                style = {styles.modal_content_pressable}>
                <Text style = {styles.modal_content_text}>-</Text>
              </Pressable>
              <Pressable>
                <Text>{children}</Text>
              </Pressable>
              <Pressable
                onPress = {() => setChildren((c) => c + 1)}
                style = {styles.modal_content_pressable}>
                <Text style = {styles.modal_content_text}>+</Text>
              </Pressable>

            </Pressable>
          </View>
        </ModalContent>

      </BottomModal>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container_pressable: {
    margin: 20,
    borderColor: "#FFC72C",
    borderWidth: 3,
    borderRadius: 5,
  },

  pressable: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: "#FFC72C",
    paddingVertical: 15,
  },

  input: {
    backgroundColor: "white",
    fontSize: 15,
    backgroundColor: "transparent",
  },

  pressable_button: {
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: "#FFC72C",
    paddingVertical: 15,
    backgroundColor: "#2A52BE",
  },

  // items of modal content
  view_modal_content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 15,
    marginHorizontal: 0,
  },

  modal_content_pressable: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderColor: "#BEBEBE",
    backgroundColor: "#E0E0E0",
  },

  modal_content_text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 6,
  },

})