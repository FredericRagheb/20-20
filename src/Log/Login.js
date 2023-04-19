import { Pressable,View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'

const Login = ({navigation}) => {

  function navigateTo(name){
    navigation.navigate(name)
  }
  return (
    <SafeAreaView className="bg-[#163767]">
        <View className="bg-[#163767] h-full flex flex-col justify-center space-y-12">
            <View className="">
                <Image className="mx-auto"  source={require("../assets/logo_20-20.png")}/>
            </View>
            <View className="space-y-8">
                <Pressable className="bg-[#DD5555] mx-10 py-3 rounded-full" onPress={()=> {navigateTo("SignIn")}}>
                    <Text className="text-white text-center font-bold">CONNEXION</Text>
                </Pressable>
                <Pressable className="bg-[#377FBC] mx-10 py-3 rounded-full" onPress={()=> {navigateTo("SignUp")}}>
                    <Text className="text-white text-center font-bold">CREER UN COMPTE</Text>
                </Pressable>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Login