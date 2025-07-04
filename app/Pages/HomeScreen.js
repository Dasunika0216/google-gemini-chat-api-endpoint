import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
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
    </View>
  )
}