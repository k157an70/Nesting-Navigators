import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const MyCustomTab = ({ children }) => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'md-wifi';
          
          if(route.name === 'Messages'){
            iconName = focused ? 'md-mail' : 'md-mail-unread'
          }

          return <Ionicons name={iconName} size={size} color={color}/>
        }
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'grey'
    }}
  >
    {children}
  </Tab.Navigator>
)

const Home = () => (
  <MyCustomTab>
    <Tab.Screen name="Feed" component={Feed} />
    <Tab.Screen name="Messages" component={Messages} />
  </MyCustomTab>
);

const Feed = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Feed</Text>
    <Button
      title="Go To Profile"
      onPress={() => navigation.navigate('Profile')}
    />
  </View>
);
const Messages = () => (
  <View style={styles.container}>
    <Text>Messages</Text>
  </View>
);

const Profile = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Profile</Text>
    <Button
      title="Go To Settings"
      onPress={() => navigation.navigate('Settings')}
    />
  </View>
);
const Settings = () => (
  <View style={styles.container}>
    <Text>Settings</Text>
  </View>
);

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;