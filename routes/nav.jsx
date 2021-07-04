import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './homeStack';
import AddStack from './addStack';


const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeStack} />
            <Drawer.Screen name="Add" component={AddStack} />
        </Drawer.Navigator>
    );
}

export default function App() {
    return (<NavigationContainer>
        <MyDrawer />
    </NavigationContainer>);
}

// const Menu = createDrawerNavigator({
//     Home: {
//         screen: HomeStack
//     },
//     AddNew: {
//         screen: AddStack
//     }
// });

// const Nav = NavigationContainer ();
// export default Nav;