import { Pressable,View, Text, Image, TextInput, KeyboardAvoidingView, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import Authfunc from '../Firebase/Auth'
import { useState } from 'react'

const SignIn = ({navigation}) => {
    function SignIn(mail, password){
        console.log( "mail : " + mail + " password : " + password)
        new Authfunc().Login(mail,password)
        .then((message) => {
          setMessage(message)
        })
        .catch((error) => {
          setMessage(error)
        });
        console.log(message)
        if(message === "Login successful"){
            navigation.getParent().navigate("BottomScreens")
        }
    }
    let  [message, setMessage] = useState("")
    let [mail, setMail] = useState("")
    let [password, setPassword] = useState("")
    
  return (
    <SafeAreaView className="bg-[#163767]">
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={50} className="h-full flex-col justify-between"> 
            <View></View>
            <View className="space-y-12">
                <View className="">
                    <Image className="mx-auto"  source={require("../assets/logo_20-20.png")}/>
                </View>
                <View className="space-y-8">
                    <TextInput placeholder="Email Efrei" placeholderTextColor="#377FBC" className="bg-white mx-6 py-5 rounded-2xl pl-3 border-[5px] border-[#377FBC] text-[#377FBC] font-bold" onChangeText={(valueMail)=> setMail(valueMail)} keyboardType="email-address"/>
                    <TextInput placeholder="Mot de passe" placeholderTextColor="#377FBC" className="bg-white mx-6 py-5 rounded-2xl pl-3 border-[5px] border-[#377FBC] text-[#377FBC] font-bold" onChangeText={(valuepassword)=> setPassword(valuepassword)} />
                </View>
            </View>
            <View className="">
                <Pressable className="bg-[#DD5555] mx-10 py-3 rounded-full" onPress={()=> {SignIn(mail,password)}}>
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