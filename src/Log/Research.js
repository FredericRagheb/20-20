import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, ScrollView, TextInput, SafeAreaView, Image, Pressable, StyleSheet } from 'react-native';

const SignUp = ({navigation}) => {
  const [subject, setSubject] = useState('');
  const [subjectCode, setSubjectCode] = useState('');
  const [chapter, setChapter] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={50} style={styles.keyboardAvoidingView}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../assets/logo_20-20.png")} />
          </View>
          <View style={styles.formContainer}>
            <TextInput placeholder="Matière" placeholderTextColor="#377FBC" style={styles.input} onChangeText={text => setSubject(text)} />
            <TextInput placeholder="Code de la matière" placeholderTextColor="#377FBC" style={styles.input} onChangeText={text => setSubjectCode(text)} />
            <TextInput placeholder="Chapitre" placeholderTextColor="#377FBC" style={styles.input} onChangeText={text => setChapter(text)} />
            <TextInput placeholder="Description" placeholderTextColor="#377FBC" style={styles.input} multiline={true} />

          <View className="space-y-8">
                  <TextInput placeholder="Email Efrei" placeholderTextColor="#377FBC" className="bg-white mx-6 py-5 rounded-2xl pl-3 border-[5px] border-[#377FBC] text-[#377FBC] font-bold" onChangeText={(valueMail)=> setMail(valueMail)} keyboardType="email-address"/>
                  <TextInput placeholder="Mot de passe" placeholderTextColor="#377FBC" className="bg-white mx-6 py-5 rounded-2xl pl-3 border-[5px] border-[#377FBC] text-[#377FBC] font-bold" onChangeText={(valuepassword)=> setPassword(valuepassword)} />
          </View>

            <Text style={styles.documentsText}>Espace pour déposer des documents</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>VALIDER</Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#163767',
  },
  safeArea: {
    flex: 1,
  },
  keyboardAvoidingView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  logo: {
    width: 113,
    height: 48,
  },
  formContainer: {
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
    justifyContent: 'center',
    alignItems: 'center',
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
  documentsText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignUp;