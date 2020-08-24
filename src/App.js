import React , { useRef } from "react";
import { StyleSheet,Image,Alert, Text, View, Animated, Button  } from 'react-native';
import "./styles.css";


export default function App() {

  
  return (
    <view className="App">

       <Image
  source={{
    uri: 'https://static.vecteezy.com/system/resources/previews/000/585/433/non_2x/vector-people-leaf-green-nature-health-logo-and-symbols.jpg',
    method: 'POST',
    headers: {
      Pragma: 'no-cache'
    },
    body: 'Your Body goes here'
  }}
  style={{ width: 510, height: 100 }}
        />

      
      <h2>Your health matters !</h2>
      <text >Clinics in Tunisia</text>
      <Button
        title="Search"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <h3> About us  </h3>
    </view>
    
    
  );
}
