import { View, Text, KeyboardAvoidingView, ScrollView ,TextInput, SafeAreaView, Image, Pressable, Button } from 'react-native'
import React, { useEffect, useMemo } from 'react'
import { ref, getStorage, uploadBytesResumable, updateMetadata, listAll } from "firebase/storage";


const HomeScreen = ({navigation}) => {
  const storage = getStorage();
  const loadElement = async () => {
      const listRef = ref(storage, 'Documents');
      // Find all the prefixes and items.
      try{
        listResult = await listAll(listRef);
        // Récupérer les noms des fichiers
        const fileNames = listResult.items.map((item) => item.name);
        setFileName(fileNames);

      }catch(error){
        console.log(error);
      }
  }
  let [ fileName, setFileName ] = React.useState([]);

  useEffect(() => {
    loadElement();
  });
  return (
    <SafeAreaView className="bg-[#163767]">
      <View className="h-full bg-[#377FBC]">
          <View className="pb-2 bg-[#163767]">
              <Image className="mx-auto w-[113px] h-[48px]" source={require("../assets/logo_20-20.png")}/>
          </View>
          
          <View className="flex flex-col space-y-5 my-auto px-8">
            { 
              fileName.map((item, index) => 
                  <View className=" border-solid border-2 border-[#163767] py-3 bg-[#DD5555] rounded-lg">
                    <Text className="text-center text-white font-bold" key={index}>{item}</Text>
                  </View>
              )
            }
            
          </View>
      </View>
    </SafeAreaView>
  )
}


export default HomeScreen