import { View, Text, KeyboardAvoidingView, ScrollView ,TextInput, SafeAreaView, Image, Pressable } from 'react-native'
import React from 'react'

const SearchScreen = ({navigation}) => {
  return (
    <SafeAreaView className="bg-[#163767]">
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={50} className="h-full flex flex-col"> 
          <View className="pb-2">
              <Image className="mx-auto w-[113px] h-[48px]" source={require("../assets/logo_20-20.png")}/>
          </View>
          <View className="grow flex flex-col justify-between bg-[#377FBC]">
              <View className="space-y-4">
                  <View className="space-y-5">
                      <TextInput placeholder="Recherche" placeholderTextColor="#163767" className="bg-white mx-5 my-5 py-5 rounded-2xl pl-3 border-[5px] border-[#163767] text-[#163767] font-bold"/>
                  </View>
              </View>
          </View>
        </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default SearchScreen