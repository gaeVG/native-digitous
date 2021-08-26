
import React from 'react';
import { useEffect, useState } from "react"
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import Login from './screens/Login';
import Navigation from './components/Navigation';

const App = () => {

	const [isLogged, login] = useState(false)
	
	return (
		<SafeAreaProvider>
			{
				!isLogged
				?
					<Navigation />
				:
					<Login />
			}
        <StatusBar />
      </SafeAreaProvider>
	);
}

const styles = StyleSheet.create(
	{
		container: {
			flex: 1,
			backgroundColor: '#fff',
			alignItems: 'center',
			justifyContent: 'center',
		},
	}
);

export default App