import { View, Text, KeyboardAvoidingView, ScrollView ,TextInput, SafeAreaView, Image, Pressable } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView className="bg-[#163767]">
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={50} className="h-full flex flex-col"> 
          <View className="pb-2">
              <Image className="mx-auto w-[113px] h-[48px]" source={require("../assets/logo_20-20.png")}/>
          </View>
          <View></View>
          <View className="grow flex flex-col justify-between bg-[#377FBC]">
          </View>
        </KeyboardAvoidingView>
    </SafeAreaView>
  )
}


export default HomeScreen