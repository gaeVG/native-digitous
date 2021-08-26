import React from 'react';
import { useEffect, useState } from "react"
import { FlatList, StyleSheet } from 'react-native';

import Country from './components/Country';


const styles = StyleSheet.create({

	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	}
});

const App = () => {

	const [countries, setCountries] = useState([])

	const renderItem = ({ item }) =>  {

		return (
			<Country name={item.name} />
		)
	}

	useEffect( () => {
		
		let fetchData = async () => {
			let result = await fetch("http://restcountries.eu/rest/v2/all")
			result = await result.json()

			setCountries(result)
		}

		fetchData()
	}, []);

	return(
		
		<FlatList

			data ={countries}
			renderItem={renderItem}
			keyExtractor={ (item, i) => i.toString()}
		/>
	)
}

export default App
