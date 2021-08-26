import React from "react";
import { useEffect, useState } from "react"
import { StyleSheet, View, Text } from "react-native"


const styles = StyleSheet.create({

	post: {
		margin: 10,
		padding: 10,
		backgroundColor: "blue",
		borderRadius: 20
	},
    postTitle: {
        marginBottom: 5,
        marginLeft: 20,
		fontWeight: "bold"
    },
    postBody: {
    	marginLeft: 30
    },
	postUser: {
		marginTop: 10,
		marginLeft: 20
	}
  });

const Post = post => {

	const [username, setUsername] = useState("")

	useEffect( () => {

		const getUsername = async () => {

			let users =await fetch("https://jsonplaceholder.typicode.com/users")
			users = await users.json()

			users.map(user =>

				post.user === user.id
				?
					setUsername(user.name)
				:
					null
			)
		}

		getUsername()
	}, [])

    return (
		
		<View style={styles.post}>
			<Text style={styles.postTitle}>{post.title}</Text>
			<Text style={styles.postBody}>{post.body}</Text>
			<Text style={styles.postUser}>{username}</Text>
		</View>
    )
}

export default Post