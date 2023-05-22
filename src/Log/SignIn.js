import React from 'react';
import { Pressable, View, Text, Image, TextInput, ScrollView, StyleSheet } from 'react-native';
import HomeScreen from "../screen/HomeScreen";

const SignIn = ({navigation}) => {

  const handleValidation = () => {
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo_20-20.png")} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Email Efrei" placeholderTextColor="#377FBC" style={styles.input} keyboardType="email-address" />
        <TextInput placeholder="Mot de passe" placeholderTextColor="#377FBC" style={styles.input} />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={handleValidation}>
          <Text style={styles.buttonText}>VALIDER</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#163767',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    paddingVertical: 5,
    borderRadius: 20,
    paddingHorizontal: 15,
    borderWidth: 5,
    borderColor: '#377FBC',
    color: '#377FBC',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#DD5555',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default SignIn;