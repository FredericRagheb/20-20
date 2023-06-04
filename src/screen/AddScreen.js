import { View, Text, KeyboardAvoidingView, ScrollView ,TextInput, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as DocumentPicker from 'expo-document-picker';
import { UploadFile } from '../Firebase/Storage';

const SearchScreen = ({navigation}) => {
  _pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({})
    if (result != null) {
          const r = await fetch(result.uri);
          const b = await r.blob();
          console.log(b)
          UploadFile(b, result.name)
          //setIsChoosed(true) 
    }
  }
  return (
    <SafeAreaView className="bg-[#163767]">
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={50} className="h-full flex flex-col"> 
          <View className="pb-2">
              <Image className="mx-auto w-[113px] h-[48px]" source={require("../assets/logo_20-20.png")}/>
          </View>
          <View className="grow flex flex-col justify-between bg-[#377FBC]">
            <View className="space-y-5">
              <View className="space-y-2">
                <TextInput placeholder="Matière" placeholderTextColor="#377FBC" className="bg-white mx-5 my-5 py-5 rounded-2xl pl-3 font-bold"/>
                <TextInput placeholder="Code de la matière" placeholderTextColor="#377FBC" className="bg-white mx-5 my-5 py-5 rounded-2xl pl-3 font-bold"/>
                <TextInput placeholder="Chapitre" placeholderTextColor="#377FBC" className="bg-white mx-5 my-5 py-5 rounded-2xl pl-3 font-bold"/>
                <TextInput placeholder="Description" placeholderTextColor="#377FBC" className="bg-white mx-5 my-5 py-5 rounded-2xl pl-3 font-bold"/>
              </View>
              <View>
                <TouchableOpacity onPress={()=> _pickDocument()}>
                  <Text className="text-white text-center font-bold">TELECHARGER</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default SearchScreen