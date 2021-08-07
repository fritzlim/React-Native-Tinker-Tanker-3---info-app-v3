import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from "react-native-vector-icons/FontAwesome";
// import { FontAwesome5 } from '@expo/vector-icons';
// import HomeScreen from './screens/HomeScreen';
import HomeStack from './screens/HomeStack';
import EventsScreen from './screens/EventsScreen';
import EventsStack from './screens/EventsStack';
// import ContactScreen from './screens/ContactScreen';
import ContactStack from './screens/ContactStack';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
<Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            // size = 20; // Sets the size of the icons in the tab bar.
            // color = 'blue'; // Sets the color of the icons in the tab bar (overriden by activeTintColor and inactiveTintColor).
            
            //Set the icon based on which route it is (name of the tab)
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Events') {
              iconName = 'list';
            } else if (route.name === 'Contact') {
              iconName = focused? 'user' : 'user-o';
            }

            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />

            // To see the values of size and color in the tab bar.
            // return (
            //   <View>
            //   <FontAwesome name={iconName} size={size} color={color} />
            //     <Text>{size},{color}</Text>
            //   </View>
            //   );
            // return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          // Set the text and icon colors of the tab bar (overrides the color prop).
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Events" component={EventsStack} />
        <Tab.Screen name="Contact" component={ContactStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}