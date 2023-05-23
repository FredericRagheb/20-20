import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, ScrollView, TextInput, SafeAreaView, Image, Pressable, StyleSheet, Modal, TouchableOpacity } from 'react-native';

const SignUp = ({navigation}) => {

  function navigateTo(){
    navigation.getParent().navigate("BottomScreens")
  }

  const [promotion, setPromotion] = useState('');
  const [programme, setProgramme] = useState('');
  const [classe, setClasse] = useState('');
  const [promotionModalVisible, setPromotionModalVisible] = useState(false);
  const [programmeModalVisible, setProgrammeModalVisible] = useState(false);
  const [classeModalVisible, setClasseModalVisible] = useState(false);
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, index) => currentYear + index);
  const programmes = ['Classique', 'Biologie', 'International', 'Renforcé'];
  const classes = ['A', 'B', 'C', 'D', 'E', 'BN', 'R', 'INT1', 'INT2', 'INT3', 'INT4', 'BX'];

  const handlePromotionSelection = (value) => {
    setPromotion(value);
    setPromotionModalVisible(false);
  };

  const handleProgrammeSelection = (value) => {
    setProgramme(value);
    setProgrammeModalVisible(false);
  };

  const handleClasseSelection = (value) => {
    setClasse(value);
    setClasseModalVisible(false);
  };

  return (
    <ScrollView className="bg-[#163767]" >
      <SafeAreaView className="bg-[#163767]">
        <View behavior="padding" keyboardVerticalOffset={50} className="h-full flex-col justify-between">
          <View className="pb-6">
            <Image className="mx-auto w-[113px] h-[48px]" source={require("../assets/logo_20-20.png")} />
          </View>
          <View className="space-y-5 pb-12">
            <TextInput placeholder="Nom" placeholderTextColor="#377FBC" className="bg-white mx-6 py-5 rounded-2xl pl-3 border-[5px] border-[#377FBC] text-[#377FBC] font-bold" />
            <TextInput placeholder="Prénom" placeholderTextColor="#377FBC"  className="bg-white mx-6 py-5 rounded-2xl pl-3 border-[5px] border-[#377FBC] text-[#377FBC] font-bold" />
            <TextInput placeholder="Email Efrei" placeholderTextColor="#377FBC"  keyboardType="email-address" className="bg-white mx-6 py-5 rounded-2xl pl-3 border-[5px] border-[#377FBC] text-[#377FBC] font-bold" />

            <TouchableOpacity onPress={() => setPromotionModalVisible(true)} className="bg-white mx-6 py-5 rounded-2xl pl-3 border-[5px] border-[#377FBC] " >
              <Text className="text-[#377FBC] font-bold" >{promotion ? promotion : 'Sélectionnez une promotion'}</Text>
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

            <TouchableOpacity onPress={() => setProgrammeModalVisible(true)} className="bg-white mx-6 py-5 rounded-2xl pl-3 border-[5px] border-[#377FBC] " >
              <Text className="text-[#377FBC] font-bold" >{programme ? programme : 'Sélectionnez un programme'}</Text>
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

            <TouchableOpacity onPress={() => setClasseModalVisible(true)} className="bg-white mx-6 py-5 rounded-2xl pl-3 border-[5px] border-[#377FBC] "  >
              <Text  className="text-[#377FBC] font-bold">{classe ? classe : 'Sélectionnez une classe'}</Text>
            </TouchableOpacity>
            <Modal
              visible={classeModalVisible}
              animationType="slide"
              transparent={true}
              onRequestClose={() => setClasseModalVisible(false)}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  {classes.map((classe) => (
                    <TouchableOpacity
                      key={classe}
                      style={styles.modalItem}
                      onPress={() => handleClasseSelection(classe)}
                    >
                      <Text>{classe}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </Modal>

            <TextInput placeholder="Mot de passe" placeholderTextColor="#377FBC" className="bg-white mx-6 py-5 rounded-2xl pl-3 border-[5px] border-[#377FBC] text-[#377FBC] font-bold" />
            <TextInput placeholder="Confirmation du mot de passe" placeholderTextColor="#377FBC" className="bg-white mx-6 py-5 rounded-2xl pl-3 border-[5px] border-[#377FBC] text-[#377FBC] font-bold" />
          </View>
          <View >
            <Pressable className="bg-[#DD5555] mx-10 py-3 rounded-full" onPress={()=>navigateTo()}>
              <Text className="text-white text-center font-bold" >VALIDER</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
  
});

export default SignUp;