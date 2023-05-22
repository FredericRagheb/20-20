import { Pressable, View, Text, Image, TextInput} from 'react-native'
import React from 'react'

const Connexion = () => {
  return (
    <View className="bg-[#163767] h-full">
        <Image source={require("../assets/logo_20-20.png")}/>
        <View>
            <TextInput className="bg-white rounded-full py-2 mx-5"> 
                <Text className="text-blue-500 text-[25px]">E-mail Efrei</Text>
            </TextInput>

            <TextInput className="bg-white rounded-full py-2 mx-5">
                <Text className="text-blue-500 text-[25px]">Mot de passe</Text>
            </TextInput>

            <Pressable>
                <Text className="text-blue-500 mx-auto">J'ai oublier mon mot de passe</Text>
            </Pressable>

            <Pressable className="bg-red-500 rounded-full py-2 mx-5">
                <Text className="text-white text-[25px] mx-auto">Valider</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default Connexion