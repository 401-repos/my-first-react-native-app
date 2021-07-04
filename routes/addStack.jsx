import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import AddNew from "../screens/AddNew";

const Stack = createStackNavigator();

function AddStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AddNew" component={AddNew} />
    </Stack.Navigator>
  );
}

export default AddStack;




// const screens = {
//     AddNew:{
//         screen: AddNew
//     }
// }

// const AddStack = createStackNavigator(screens, {
//     defaultNavigationOptions:{
//         headerStyle:{
//             backgroundColor:'#f3bf36',
//             height:60,
//             headerTintColor:'#444'
//         }
//     }
// });
// export default AddStack;