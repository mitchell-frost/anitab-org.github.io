  function Home({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home screen</Text>
        <Button
          style={{display: inline-block}}
          title="About Us"
          onPress={() => navigation.navigate('About Us')}
        />
        <Button
          style={{display: inline-block}}
          title="Programs"
          onPress={() => navigation.navigate('Programs')}
        />
        <Button
          style={{display: inline-block}}
          title="Projects"
          onPress={() => navigation.navigate('Projects')}
        />
        <Button
          style={{display: inline-block}}
          title="Events"
          onPress={() => navigation.navigate('Events')}
        />
        <Button
          style={{display: inline-block}}
          title="Contribute"
          onPress={() => navigation.navigate('Contribute')}
        />
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
          options={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'tomato' },
          }}
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
  
  export default function App() {
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
  }
  
  
  