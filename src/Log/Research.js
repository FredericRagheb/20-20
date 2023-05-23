import { View, Text, KeyboardAvoidingView, ScrollView ,TextInput, SafeAreaView, Image, Pressable } from 'react-native'
import React from 'react'

const Research = () => {
  return (
    <SafeAreaView className="bg-[#163767]">
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={50} className="h-full flex flex-col"> 
                    <View className="pb-2">
                        <Image className="mx-auto w-[113px] h-[48px]" source={require("../assets/logo_20-20.png")}/>
                    </View>
                    <View className="grow flex flex-col justify-between bg-[#377FBC]">
                        <View className="space-y-4">
                            <View className="space-y-5">
                                <TextInput placeholder="Recherche" placeholderTextColor="#163767" className="bg-white mx-6 py-5 rounded-2xl pl-3 border-[5px] border-[#163767] text-[#163767] font-bold"/>
                            </View>
                        </View>
                        <View className="">
                            <Pressable className="bg-[#DD5555] mx-10 py-3 rounded-full">
                                <Text className="text-white text-center font-bold">VALIDER</Text>
                            </Pressable>
                        </View>
                </View>
        </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Research