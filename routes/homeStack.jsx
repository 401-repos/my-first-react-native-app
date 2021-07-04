import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../screens/Home';
import Definition from '../screens/Definition';
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Definition" component={Definition} />
    </Stack.Navigator>
  );
}

export default HomeStack;




// const screens = {
//     Home: {
//         screen: Home
//     },
//     Definition: {
//         screen: Definition
//     },

// }

// const HomeStack = createStackNavigator(screens, {
//     defaultNavigationOptions:{
//         headerStyle:{
//             backgroundColor:'#f3bf36',
//             height:60,
//             headerTintColor:'#444'
//         }
//     }
// });
// export default HomeStack;