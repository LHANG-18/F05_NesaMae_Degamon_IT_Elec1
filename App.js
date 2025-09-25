import CounterApp from './CounterApp';
import React from 'react';
import { SafeAreaView } from 'react-native';
import ColorChangerApp from './ColorChangerApp'

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      
      <CounterApp />
      <ColorChangerApp />
 
    </SafeAreaView>
  );
}
