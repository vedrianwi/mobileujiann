import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//import screen 
import Home from '../screen/home';
import DrawerNav from '../navigation/drawerNav';


const Tab = createBottomTabNavigator();
const tabNav = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="home" component={DrawerNav} />
            <Tab.Screen name="Live" component={Home} />
        </Tab.Navigator>
    )
}

export default tabNav;
