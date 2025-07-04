import React, { useEffect, useState } from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import ChatFaceData from '../Services/ChatFaceData';

export default function HomeScreen() {
    const [chatFaceData, setChatFaceData] = useState([]);
    const [selectedChatFaceData, setSelectedChatFaceData] = useState([]);
    
    useEffect(() => {
        setChatFaceData(ChatFaceData);
        setSelectedChatFaceData(ChatFaceData[0]);
        console.log(ChatFaceData[0]);
    },[])

  return (
    <View style={{alignItems:'center', paddingTop:90}}>
      <Text style={[{color:selectedChatFaceData.primary}, {fontSize:30}]}>Hello</Text>
      <Text style={[{color:selectedChatFaceData.primary}, {fontSize:30, fontWeight:'bold'}]}>I am {selectedChatFaceData.name}</Text>
      <Image source={{uri:selectedChatFaceData.image}} style={{width:150, height:150, marginTop:20}}/>
      <Text style={{marginTop:30, fontSize:25}}>How can I help you?</Text>

      <View>
        <FlatList
            data={chatFaceData}
            horizontal={true}
            renderItem={({item}) => selectedChatFaceData.id != item.id && (
                <View style={{margin:15}}>
                    <Image source={{uri:item.image}} style={{width:40, height:40}} />
                </View>
            )}
        />
      </View>
    </View>
  )
}