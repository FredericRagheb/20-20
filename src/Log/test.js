import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, ScrollView, TextInput, SafeAreaView, Image, Pressable, StyleSheet, Modal, TouchableOpacity } from 'react-native';

const SignUp = () => {
  const [promotion, setPromotion] = useState('');
  const [programme, setProgramme] = useState('');
  const [promotionModalVisible, setPromotionModalVisible] = useState(false);
  const [programmeModalVisible, setProgrammeModalVisible] = useState(false);
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 6 }, (_, index) => currentYear + index);
  const programmes = ['Classiques', 'Biologie', 'International', 'Renforcé'];

  const handlePromotionSelection = (value) => {
    setPromotion(value);
    setPromotionModalVisible(false);
  };

  const handleProgrammeSelection = (value) => {
    setProgramme(value);
    setProgrammeModalVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={50} style={styles.keyboardAvoidingView}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../assets/logo_20-20.png")} />
          </View>
          <View style={styles.formContainer}>
            <TextInput placeholder="Nom" placeholderTextColor="#377FBC" style={styles.input} />
            <TextInput placeholder="Prénom" placeholderTextColor="#377FBC" style={styles.input} />
            <TextInput placeholder="Email Efrei" placeholderTextColor="#377FBC" style={styles.input} keyboardType="email-address" />

            <TouchableOpacity onPress={() => setPromotionModalVisible(true)} style={styles.input}>
              <Text>{promotion ? promotion : 'Sélectionnez une promotion'}</Text>
            </TouchableOpacity>
            <Modal
              visible={promotionModalVisible}
              animationType="slide"
              transparent={true}
              onRequestClose={() => setPromotionModalVisible(false)}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  {years.map((year) => (
                    <TouchableOpacity
                      key={year}
                      style={styles.modalItem}
                      onPress={() => handlePromotionSelection(year.toString())}
                    >
                      <Text>{year.toString()}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </Modal>

            <TouchableOpacity onPress={() => setProgrammeModalVisible(true)} style={styles.input}>
              <Text>{programme ? programme : 'Sélectionnez un programme'}</Text>
            </TouchableOpacity>
            <Modal
              visible={programmeModalVisible}
              animationType="slide"
              transparent={true}
              onRequestClose={() => setProgrammeModalVisible(false)}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  {programmes.map((program) => (
                    <TouchableOpacity
                      key={program}
                      style={styles.modalItem}
                      onPress={() => handleProgrammeSelection(program)}
                    >
                      <Text>{program}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </Modal>

            <TextInput placeholder="Classe" placeholderTextColor="#377FBC" style={styles.input} />
            <TextInput placeholder="Mot de passe" placeholderTextColor="#377FBC" style={styles.input} />
            <TextInput placeholder="Confirmation du mot de passe" placeholderTextColor="#377FBC" style={styles.input} />
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalItem: {
    paddingVertical: 10,
    marginBottom: 10,
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
});

export default SignUp;
