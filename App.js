import ChatScreen from './ChatScreen';
import React from 'react';
import { SafeAreaView } from 'react-native';
import CommentSection from './CommentSection'
import ChatBubble from './ChatSection'

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      
      <CommentSection />
      <ChatScreen />
 
    </SafeAreaView>
  );
}
