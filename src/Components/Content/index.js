import React from 'react';
import { TouchableHighlight, StyleSheet, View, Button, Text, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Animated } from 'react-native';

function Home({ navigation }, index, selected, setSelected, title) {
  return (
    <View>  
        <TouchableHighlight
          style={styles.buttonContainer}
          underlayColor="transparent"
          onPress={() => navigation.navigate(index)}
          accessible={true}
          accessibilityLabel={title}
        >
          <Text
            style={{
              borderBottomColor: selected === index ? 'powderblue' : 'transparent',
              borderBottomWidth: 2,
              alignSelf: 'center',
            }}
          >
          {title} 
          </Text>
        </TouchableHighlight>
    </View>
  );
}

function AboutUs({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>About Us screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function Programs({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Programs screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function Projects({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function Events({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function Contribute({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const forFade = ({ current, next }) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return {
    leftButtonStyle: { opacity },
    rightButtonStyle: { opacity },
    titleStyle: { opacity },
    backgroundStyle: { opacity },
  };
};

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerStyleInterpolator: forFade }}
      />
      <Stack.Screen
        name="About Us"
        component={AboutUs}
        options={{ headerStyleInterpolator: forFade }}
      />
      <Stack.Screen
        name="Programs"
        component={Programs}
        options={{ headerStyleInterpolator: forFade }}
      />
      <Stack.Screen
        name="Projects"
        component={Projects}
        options={{ headerStyleInterpolator: forFade }}
      />
      <Stack.Screen
        name="Events"
        component={Events}
        options={{ headerStyleInterpolator: forFade }}
      />
      <Stack.Screen
        name="Contribute"
        component={Contribute}
        options={{ headerStyleInterpolator: forFade }}
      />
    </Stack.Navigator>
  );
}

function Content({ selected, titles }) {
  return (
    <NavigationContainer>
       <View
          style={{
            width: 800,
            height: 600,
            alignItems: 'center',
            paddingTop: 40,
          }}
        >
          {renderContent(titles[selected])}
          <Image
            style={{ height: 200, width: 200 }}
            source={require('./../../assets/contribute.png')}
          />
          <Text>UNDER CONSTRUCTION</Text>
        </View>    
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
  },
  buttonContainer: { marginTop: 25, marginLeft: 40 },
});

function renderContent(title) {
  return <Text>{title}</Text>;
}

export default Content;
