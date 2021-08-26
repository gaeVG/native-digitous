import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';


import Home from "../screens/Home";
import AddPost from "../screens/AddPost";
import Profile from "../screens/Profile"


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

const linking = {

	prefixes: [Linking.makeUrl('/')],
	config: {
	  screens: {
		Root: {
			screens: {

				Home: {
					screens: {
						HomeScreen: 'home',
					},
				},
				Post: {
					screens: {
						PostScreen: 'post',
					},
				},
				Profile: {
					screens: {
						ProfileScreen: 'profile',
					},
				},
			},
		},
		Modal: 'modal',
		NotFound: '*',
	  },
	},
};

const Navigation = () => {


	return(
		<NavigationContainer
			linking={linking}
		>
			<NavigationBar />
		</NavigationContainer>
	)
}

const NavigationBar = () => {

	return(

		<Tab.Navigator
			initialRouteName="Home"
		>
			<Tab.Screen
				name        ="Timeline"
				component   ={Home}
				options     ={
					{
						tabBarLabel : "Timeline"
					}
				}
			/>
			<Tab.Screen
				name        ="NewPost"
				component   ={AddPost}
				options     ={
					{
						tabBarLabel : "New post"
					}
				}
			/>
			<Tab.Screen
				name        ="Profile"
				component   ={Profile}
				options     ={
					{
						tabBarLabel : "My profile"
					}
				}
			/>
		</Tab.Navigator>
	)
}


export default Navigation