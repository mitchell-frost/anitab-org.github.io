import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View, Button, Text, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Header from './Components/Header';
import Content from './Components/Content';

function App() {
  const [selected, setSelected] = useState(0);
  const titles = [
    'HOME',
    'ABOUT US',
    'PROGRAMS',
    'PROJECTS',
    'EVENTS',
    'CONTRIBUTE',
  ];
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Header selected={selected} setSelected={setSelected} titles={titles} />
      <Content selected={selected} titles={titles} />
    </View>
  );
}

export default App;