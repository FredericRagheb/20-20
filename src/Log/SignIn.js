import { Pressable,View, Text, Image, TextInput, KeyboardAvoidingView, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'

const SignIn = ({navigation}) => {
  return (
    <SafeAreaView className="bg-[#163767]">
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={50} className="h-full flex-col justify-between"> 
            <View></View>
            <View className="space-y-12">
                <View className="">
                    <Image className="mx-auto"  source={require("../assets/logo_20-20.png")}/>
                </View>
                <View className="space-y-8">
                    <TextInput placeholder="Email Efrei" placeholderTextColor="#377FBC" className="bg-white mx-6 py-5 rounded-2xl pl-3 border-[5px] border-[#377FBC] text-[#377FBC] font-bold" keyboardType="email-address"/>
                    <TextInput placeholder="Mot de passe" placeholderTextColor="#377FBC" className="bg-white mx-6 py-5 rounded-2xl pl-3 border-[5px] border-[#377FBC] text-[#377FBC] font-bold"/>
                </View>
            </View>
            <View className="">
                <Pressable className="bg-[#DD5555] mx-10 py-3 rounded-full">
                    <Text className="text-white text-center font-bold">VALIDER</Text>
                </Pressable>
            </View>
        </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
})

export default SignIn