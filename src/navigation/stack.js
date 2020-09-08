import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {createStackNavigator} from "@react-navigation/stack";

//import screen
import SplashScreen from '../screen/splash';
import LoginScreen from '../screen/login';
import tabNav from './tabNav';
import { keepLogin } from '../action';

const Stack = createStackNavigator();

const StackNav = () => {
    const {username, loading} = useSelector((state)=>{
        return{
            username: state.userReducer.username,
            loading: state.userReducer.authloading
        }
    })

    const dispatch = useDispatch()
    React.useEffect(()=>{
        dispatch(keepLogin())
    },[])

    if(loading){
        return <SplashScreen/>
    }

    return (
        <Stack.Navigator headerMode="none" >
            {username? (
                  <Stack.Screen name="Tab" component={tabNav}/>
            ) :(
                <Stack.Screen name="Login" component={LoginScreen}/>
            )
            }
        </Stack.Navigator>
    );

}

export default StackNav;