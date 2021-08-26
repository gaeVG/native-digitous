import React from 'react';
import { useEffect, useState } from "react"
import { FlatList, StyleSheet, Text, View } from 'react-native';

import Post from "../components/Post"

const styles = StyleSheet.create({

	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	}
});

const App = () => {

	const [posts, setPosts] = useState([])

	const renderPosts = ({ item }) =>  {

		return (
			<Post user={item.userId} title={item.title} body={item.body} />
		)
	}

	useEffect( () => {
		
		let fetchPosts = async () => {
			let result = await fetch("https://jsonplaceholder.typicode.com/posts")
			result = await result.json()

			setPosts(result)
		}

		fetchPosts()
	}, []);

	return(
		
		<FlatList

			data ={posts}
			renderItem={renderPosts}
			keyExtractor={ (item, i) => item.id }
		/>
	)
}

export default App
